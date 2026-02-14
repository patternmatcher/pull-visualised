<script>
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  
  export let data;
  
  let container;
  let renderer, scene, camera;
  let animationId;
  let selectedNode = null;
  let wordNodes = [];
  let metricNodes = [];
  let flowParticles = [];
  let traceLines = [];
  let galaxyPoints;
  let nebulaSprites = [];
  let time = 0;
  let cameraAngle = 0;
  let cameraDistance = 55;
  let targetCameraDistance = 55;
  let raycaster = new THREE.Raycaster();
  let mouseVec = new THREE.Vector2();
  let glowTexture;
  let nebulaTexture;
  let jewelTexture;
  let sparkleLight, sparkleLight2;
  
  // Mobile detection and touch state
  let isMobile = false;
  let touchStartDistance = 0;
  let touchStartCameraDistance = 55;
  let lastTouchTime = 0;
  
  const allFindings = [
    ...data.correspondences.llama70b_baseline.findings.map(f => ({...f, model: 'Llama 70B', condition: 'Baseline'})),
    ...data.correspondences.llama70b_steered.findings.map(f => ({...f, model: 'Llama 70B', condition: 'Steered'})),
    ...data.correspondences.qwen32b_baseline.findings.map(f => ({...f, model: 'Qwen 32B', condition: 'Baseline'}))
  ];
  
  const uniqueVocabs = [...new Set(allFindings.map(f => f.vocab.replace('_delta', '')))];
  const uniqueMetrics = [...new Set(allFindings.map(f => f.metric_name))];
  
  $: zoomDepth = Math.max(0, Math.min(1, 1 - (cameraDistance - 15) / 40));
  
  function makeGlowTexture() {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 256;
    const ctx = c.getContext('2d');
    // Use smaller inner radius to ensure fade completes well before edge
    const g = ctx.createRadialGradient(128,128,0,128,128,100);
    g.addColorStop(0,'rgba(255,255,255,1)');
    g.addColorStop(0.15,'rgba(255,255,255,0.6)');
    g.addColorStop(0.35,'rgba(255,255,255,0.2)');
    g.addColorStop(0.55,'rgba(255,255,255,0.05)');
    g.addColorStop(0.75,'rgba(255,255,255,0.01)');
    g.addColorStop(1,'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0,0,256,256);
    return new THREE.CanvasTexture(c);
  }
  
  function makeNebulaTexture() {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 256;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(128,128,0,128,128,128);
    g.addColorStop(0,'rgba(255,255,255,0.15)');
    g.addColorStop(0.3,'rgba(255,255,255,0.08)');
    g.addColorStop(0.6,'rgba(255,255,255,0.03)');
    g.addColorStop(1,'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0,0,256,256);
    return new THREE.CanvasTexture(c);
  }
  
  function makeJewelTexture() {
    // Sharp-edged gem sprite with inner sparkle
    const c = document.createElement('canvas');
    c.width = 128; c.height = 128;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(64,64,0,64,64,48);
    g.addColorStop(0,'rgba(255,255,255,1)');
    g.addColorStop(0.15,'rgba(255,255,255,0.95)');
    g.addColorStop(0.4,'rgba(255,255,255,0.5)');
    g.addColorStop(0.6,'rgba(255,255,255,0.25)');
    g.addColorStop(0.85,'rgba(255,255,255,0.08)');
    g.addColorStop(1,'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0,0,128,128);
    // Star sparkle cross
    ctx.globalCompositeOperation = 'lighter';
    const sg = ctx.createLinearGradient(0,64,128,64);
    sg.addColorStop(0,'rgba(255,255,255,0)');
    sg.addColorStop(0.4,'rgba(255,255,255,0.15)');
    sg.addColorStop(0.5,'rgba(255,255,255,0.5)');
    sg.addColorStop(0.6,'rgba(255,255,255,0.15)');
    sg.addColorStop(1,'rgba(255,255,255,0)');
    ctx.fillStyle = sg;
    ctx.fillRect(0,58,128,12);
    const sg2 = ctx.createLinearGradient(64,0,64,128);
    sg2.addColorStop(0,'rgba(255,255,255,0)');
    sg2.addColorStop(0.4,'rgba(255,255,255,0.15)');
    sg2.addColorStop(0.5,'rgba(255,255,255,0.5)');
    sg2.addColorStop(0.6,'rgba(255,255,255,0.15)');
    sg2.addColorStop(1,'rgba(255,255,255,0)');
    ctx.fillStyle = sg2;
    ctx.fillRect(58,0,12,128);
    return new THREE.CanvasTexture(c);
  }
  
  onMount(() => {
    // Detect mobile/touch device
    isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    initScene();
    animate();
    window.addEventListener('resize', onResize);
    container.addEventListener('click', onClick);
    container.addEventListener('wheel', onWheel, { passive: false });
    
    // Touch events for mobile
    if (isMobile) {
      container.addEventListener('touchstart', onTouchStart, { passive: false });
      container.addEventListener('touchmove', onTouchMove, { passive: false });
      container.addEventListener('touchend', onTouchEnd, { passive: false });
    }
  });
  
  onDestroy(() => {
    if (animationId) cancelAnimationFrame(animationId);
    if (renderer) renderer.dispose();
    window.removeEventListener('resize', onResize);
    if (isMobile && container) {
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
    }
  });
  
  function getTouchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }
  
  function onTouchStart(e) {
    if (e.touches.length === 2) {
      // Pinch zoom start
      e.preventDefault();
      touchStartDistance = getTouchDistance(e.touches);
      touchStartCameraDistance = targetCameraDistance;
    } else if (e.touches.length === 1) {
      lastTouchTime = Date.now();
    }
  }
  
  function onTouchMove(e) {
    if (e.touches.length === 2) {
      // Pinch zoom
      e.preventDefault();
      const currentDistance = getTouchDistance(e.touches);
      const scale = touchStartDistance / currentDistance;
      targetCameraDistance = Math.max(12, Math.min(70, touchStartCameraDistance * scale));
    }
  }
  
  function onTouchEnd(e) {
    if (e.changedTouches.length === 1 && e.touches.length === 0) {
      // Single tap - treat as click if quick tap
      const tapDuration = Date.now() - lastTouchTime;
      if (tapDuration < 300) {
        const touch = e.changedTouches[0];
        mouseVec.x = (touch.clientX / window.innerWidth) * 2 - 1;
        mouseVec.y = -(touch.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouseVec, camera);
        
        const all = [...wordNodes.map(n => n.mesh), ...metricNodes.map(n => n.mesh)];
        const hits = raycaster.intersectObjects(all);
        
        if (hits.length > 0) {
          const node = wordNodes.find(n => n.mesh === hits[0].object) || metricNodes.find(n => n.mesh === hits[0].object);
          if (node) { selectedNode = selectedNode === node ? null : node; return; }
        }
        selectedNode = null;
      }
    }
  }
  
  function initScene() {
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0618, 0.003); // purple-tinted fog
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 800);
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x06031a);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);
    
    glowTexture = makeGlowTexture();
    nebulaTexture = makeNebulaTexture();
    jewelTexture = makeJewelTexture();
    
    // Lights — strong enough for gem specular highlights
    scene.add(new THREE.AmbientLight(0x443366, 0.6));
    const p1 = new THREE.PointLight(0x9955ff, 5, 120); p1.position.set(15,20,15); scene.add(p1);
    const p2 = new THREE.PointLight(0x11aa77, 4, 100); p2.position.set(-15,-10,-15); scene.add(p2);
    const p3 = new THREE.PointLight(0xff4488, 3, 80); p3.position.set(0,0,25); scene.add(p3);
    const p4 = new THREE.PointLight(0x22cc88, 3, 90); p4.position.set(-10,15,-20); scene.add(p4);
    // Key lights for specular flashes across facets
    const d1 = new THREE.DirectionalLight(0xffffff, 2.0); d1.position.set(10,20,10); scene.add(d1);
    const d2 = new THREE.DirectionalLight(0x8866ff, 1.0); d2.position.set(-10,5,-15); scene.add(d2);
    const d3 = new THREE.DirectionalLight(0xffeedd, 1.2); d3.position.set(-5,15,20); scene.add(d3);
    // Orbiting sparkle light — creates traveling highlights across gem facets
    sparkleLight = new THREE.PointLight(0xffffff, 6, 50);
    sparkleLight.position.set(8, 8, 8);
    scene.add(sparkleLight);
    // Second orbiting light, opposite phase
    sparkleLight2 = new THREE.PointLight(0xaaddff, 4, 40);
    sparkleLight2.position.set(-8, -4, -8);
    scene.add(sparkleLight2);
    
    create3DGalaxy();
    createNebulaClouds();
    envMap = makeEnvMap();
    createVocabNodes();
    createMetricNodes();
    createTraceConnections();
    createEnergyFlows();
  }
  
  function create3DGalaxy() {
    const count = isMobile ? 8000 : 22000;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const isCore = Math.random() < 0.3;
      const r = isCore 
        ? Math.pow(Math.random(), 0.3) * 15
        : 10 + Math.pow(Math.random(), 0.5) * 80;
      const spiralOffset = isCore ? 0 : Math.sin(theta * 2 + r * 0.1) * r * 0.15;
      
      pos[i*3]   = Math.sin(phi)*Math.cos(theta)*r + spiralOffset*Math.cos(theta+1);
      pos[i*3+1] = Math.cos(phi)*r*(isCore?0.6:0.8);
      pos[i*3+2] = Math.sin(phi)*Math.sin(theta)*r + spiralOffset*Math.sin(theta+1);
      
      const rnd = Math.random();
      if (isCore) {
        // Warm purple-white core
        cols[i*3] = 0.8+rnd*0.15; cols[i*3+1] = 0.65+rnd*0.15; cols[i*3+2] = 0.95+rnd*0.05;
      } else if (rnd < 0.25) {
        // Deep purple haze
        cols[i*3] = 0.5+rnd; cols[i*3+1] = 0.25; cols[i*3+2] = 0.85;
      } else if (rnd < 0.45) {
        // Deep emerald
        cols[i*3] = 0.1; cols[i*3+1] = 0.45+rnd*0.4; cols[i*3+2] = 0.3+rnd*0.2;
      } else if (rnd < 0.65) {
        // Teal-emerald
        cols[i*3] = 0.15; cols[i*3+1] = 0.5+rnd*0.3; cols[i*3+2] = 0.55+rnd*0.2;
      } else {
        // Purple-blue
        cols[i*3] = 0.4+rnd*0.3; cols[i*3+1] = 0.3; cols[i*3+2] = 0.75+rnd*0.2;
      }
    }
    
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    
    galaxyPoints = new THREE.Points(geo, new THREE.PointsMaterial({
      size: 0.1, transparent: true, opacity: 0.75,
      vertexColors: true, sizeAttenuation: true,
      blending: THREE.AdditiveBlending, depthWrite: false
    }));
    scene.add(galaxyPoints);
  }
  
  function createNebulaClouds() {
    // Purple + emerald nebula clouds
    const nebulaColors = [
      0x552288, 0x331166, 0x443399, // purples
      0x115533, 0x117744, 0x0a5535, // emeralds
      0x442277, 0x224444, 0x553388, // mixed
    ];
    
    const cloudCount = isMobile ? 15 : 40;
    for (let i = 0; i < cloudCount; i++) {
      const mat = new THREE.SpriteMaterial({
        map: nebulaTexture,
        color: nebulaColors[i % nebulaColors.length],
        transparent: true,
        opacity: 0.12 + Math.random() * 0.18,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const sprite = new THREE.Sprite(mat);
      const r = 5 + Math.random() * 55;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      sprite.position.set(
        Math.cos(theta)*Math.cos(phi)*r,
        Math.sin(phi)*r*0.7,
        Math.sin(theta)*Math.cos(phi)*r
      );
      const s = 12 + Math.random() * 40;
      sprite.scale.set(s, s, 1);
      scene.add(sprite);
      nebulaSprites.push({ sprite, baseOpacity: mat.opacity, phase: Math.random()*Math.PI*2 });
    }
  }
  
  function makeEnvMap() {
    // Procedural cube environment map for gem reflections
    const size = 128;
    const targets = ['px','nx','py','ny','pz','nz'];
    const textures = [];
    
    targets.forEach((_, idx) => {
      const c = document.createElement('canvas');
      c.width = size; c.height = size;
      const ctx = c.getContext('2d');
      
      // Dark space with purple/emerald color spots
      const g = ctx.createRadialGradient(
        size * (0.3 + idx * 0.1), size * 0.4, 0,
        size * 0.5, size * 0.5, size * 0.8
      );
      g.addColorStop(0, idx % 2 === 0 ? 'rgba(100,60,180,0.4)' : 'rgba(30,120,80,0.3)');
      g.addColorStop(0.5, 'rgba(15,8,40,0.8)');
      g.addColorStop(1, 'rgba(6,3,20,1)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, size, size);
      
      // Bright spots for specular reflections
      for (let i = 0; i < 8; i++) {
        const sg = ctx.createRadialGradient(
          Math.random() * size, Math.random() * size, 0,
          Math.random() * size, Math.random() * size, 4 + Math.random() * 12
        );
        sg.addColorStop(0, 'rgba(255,255,255,0.5)');
        sg.addColorStop(0.5, 'rgba(200,180,255,0.15)');
        sg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = sg;
        ctx.fillRect(0, 0, size, size);
      }
    });
    
    // Use a simple cube render target approach — create via canvas textures
    const cubeTexture = new THREE.CubeTexture([
      ...targets.map((_, idx) => {
        const c = document.createElement('canvas');
        c.width = size; c.height = size;
        const ctx = c.getContext('2d');
        const g = ctx.createRadialGradient(
          size*(0.3+idx*0.12), size*0.4, 0,
          size*0.5, size*0.5, size*0.8
        );
        g.addColorStop(0, idx%2===0 ? 'rgba(100,60,180,0.5)' : 'rgba(30,130,80,0.4)');
        g.addColorStop(0.4, 'rgba(20,10,50,0.9)');
        g.addColorStop(1, 'rgba(6,3,20,1)');
        ctx.fillStyle = g;
        ctx.fillRect(0,0,size,size);
        for (let i = 0; i < 10; i++) {
          const x = Math.random()*size, y = Math.random()*size;
          const sg = ctx.createRadialGradient(x,y,0,x,y,3+Math.random()*8);
          sg.addColorStop(0,'rgba(255,255,255,0.6)');
          sg.addColorStop(0.3,'rgba(220,200,255,0.2)');
          sg.addColorStop(1,'rgba(0,0,0,0)');
          ctx.fillStyle = sg;
          ctx.fillRect(0,0,size,size);
        }
        return c;
      })
    ]);
    cubeTexture.needsUpdate = true;
    return cubeTexture;
  }
  
  let envMap;
  
  function createVocabNodes() {
    const gemColors = [
      { base: 0xaa2266, emissive: 0xff3388, glow: 0xff4499 },
      { base: 0x6622aa, emissive: 0x9944ff, glow: 0xbb66ff },
      { base: 0x8833aa, emissive: 0xbb55ff, glow: 0xcc77ff },
      { base: 0xaa3355, emissive: 0xff4477, glow: 0xff5588 },
      { base: 0x7733bb, emissive: 0xaa55ee, glow: 0xcc77ff },
      { base: 0x9922aa, emissive: 0xcc44ff, glow: 0xdd66ff },
      { base: 0xbb2255, emissive: 0xff3377, glow: 0xff5599 },
      { base: 0x5533cc, emissive: 0x7755ff, glow: 0x9977ff },
    ];
    
    uniqueVocabs.forEach((vocab, i) => {
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      const theta = goldenAngle * i;
      const phi = Math.acos(1 - 2*(i+0.5)/(uniqueVocabs.length + uniqueMetrics.length));
      const r = 6 + (i/uniqueVocabs.length) * 10;
      const basePos = new THREE.Vector3(
        Math.sin(phi)*Math.cos(theta)*r,
        Math.cos(phi)*r*0.7,
        Math.sin(phi)*Math.sin(theta)*r
      );
      
      // Gem mesh — dodecahedron for more facets, flat shaded for hard edges
      const geo = new THREE.DodecahedronGeometry(0.5, 0);
      // Force flat shading by NOT computing smooth normals
      geo.deleteAttribute('normal');
      geo.computeVertexNormals(); // gives us per-face normals on non-indexed
      const colorSet = gemColors[i % gemColors.length];
      const mat = new THREE.MeshPhysicalMaterial({
        color: colorSet.base,
        emissive: colorSet.emissive,
        emissiveIntensity: 0.35,
        roughness: 0.0,
        metalness: 0.0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.0,
        reflectivity: 1.0,
        envMap: envMap,
        envMapIntensity: 2.5,
        transparent: true,
        opacity: 0.88,
        transmission: 0.6,
        ior: 2.42, // diamond
        thickness: 1.2,
        specularIntensity: 1.0,
        specularColor: new THREE.Color(0xffffff),
        sheen: 0.3,
        sheenRoughness: 0.2,
        sheenColor: new THREE.Color(colorSet.emissive),
        flatShading: true,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(basePos);
      scene.add(mesh);
      
      // Jewel sparkle sprite
      const sparkMat = new THREE.SpriteMaterial({
        map: jewelTexture,
        color: colorSet.glow,
        transparent: true, opacity: 0.6,
        blending: THREE.AdditiveBlending
      });
      const sparkle = new THREE.Sprite(sparkMat);
      sparkle.scale.set(2.5, 2.5, 1);
      sparkle.position.copy(basePos);
      scene.add(sparkle);
      
      // Outer glow halo
      const glowMat = new THREE.SpriteMaterial({
        map: glowTexture,
        color: colorSet.glow,
        transparent: true, opacity: 0.15,
        blending: THREE.AdditiveBlending
      });
      const glow = new THREE.Sprite(glowMat);
      glow.scale.set(6, 6, 1);
      glow.position.copy(basePos);
      scene.add(glow);
      
      const findings = allFindings.filter(f => f.vocab.replace('_delta','') === vocab);
      
      wordNodes.push({
        mesh, sparkle, glow, vocab, findings,
        basePos: basePos.clone(), color: colorSet, type: 'vocab',
        orbitPhase: Math.random()*Math.PI*2,
        orbitRadius: 0.25 + Math.random()*0.4,
        orbitSpeed: 0.2 + Math.random()*0.25,
        rotSpeed: { x: (Math.random()-0.5)*0.25, y: 0.12+Math.random()*0.15, z: (Math.random()-0.5)*0.1 },
        shimmerPhase: Math.random()*Math.PI*2,
        shimmerSpeed: 2 + Math.random()*3,
      });
    });
  }
  
  function createMetricNodes() {
    const gemColors = [
      { base: 0x116644, emissive: 0x22ff88, glow: 0x33ffaa },
      { base: 0x0d5540, emissive: 0x1ae080, glow: 0x2affa0 },
      { base: 0x226655, emissive: 0x44ffaa, glow: 0x55ffbb },
      { base: 0x115544, emissive: 0x22dd88, glow: 0x33ff99 },
    ];
    
    uniqueMetrics.forEach((metric, i) => {
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      const idx = i + uniqueVocabs.length;
      const theta = goldenAngle * idx + Math.PI;
      const phi = Math.acos(1 - 2*(idx+0.5)/(uniqueVocabs.length + uniqueMetrics.length));
      const r = 8 + (i/uniqueMetrics.length) * 8;
      const basePos = new THREE.Vector3(
        Math.sin(phi)*Math.cos(theta)*r,
        Math.cos(phi)*r*0.7,
        Math.sin(phi)*Math.sin(theta)*r
      );
      
      // Emerald — octahedron with extra detail, flat shaded
      const geo = new THREE.OctahedronGeometry(0.55, 1); // detail=1 for more facets
      geo.deleteAttribute('normal');
      geo.computeVertexNormals();
      const colorSet = gemColors[i % gemColors.length];
      const mat = new THREE.MeshPhysicalMaterial({
        color: colorSet.base,
        emissive: colorSet.emissive,
        emissiveIntensity: 0.35,
        roughness: 0.0,
        metalness: 0.0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.0,
        reflectivity: 1.0,
        envMap: envMap,
        envMapIntensity: 2.5,
        transparent: true,
        opacity: 0.88,
        transmission: 0.55,
        ior: 1.57, // emerald
        thickness: 1.0,
        specularIntensity: 1.0,
        specularColor: new THREE.Color(0xffffff),
        sheen: 0.3,
        sheenRoughness: 0.15,
        sheenColor: new THREE.Color(colorSet.emissive),
        flatShading: true,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(basePos);
      scene.add(mesh);
      
      const sparkMat = new THREE.SpriteMaterial({
        map: jewelTexture,
        color: colorSet.glow,
        transparent: true, opacity: 0.5,
        blending: THREE.AdditiveBlending
      });
      const sparkle = new THREE.Sprite(sparkMat);
      sparkle.scale.set(2.8, 2.8, 1);
      sparkle.position.copy(basePos);
      scene.add(sparkle);
      
      const glowMat = new THREE.SpriteMaterial({
        map: glowTexture,
        color: colorSet.glow,
        transparent: true, opacity: 0.12,
        blending: THREE.AdditiveBlending
      });
      const glow = new THREE.Sprite(glowMat);
      glow.scale.set(6, 6, 1);
      glow.position.copy(basePos);
      scene.add(glow);
      
      const findings = allFindings.filter(f => f.metric_name === metric);
      
      metricNodes.push({
        mesh, sparkle, glow, metric, findings,
        basePos: basePos.clone(), color: colorSet, type: 'metric',
        orbitPhase: Math.random()*Math.PI*2,
        orbitRadius: 0.2 + Math.random()*0.35,
        orbitSpeed: 0.15 + Math.random()*0.2,
        rotSpeed: { x: (Math.random()-0.5)*0.15, y: 0.1+Math.random()*0.12, z: (Math.random()-0.5)*0.08 },
        shimmerPhase: Math.random()*Math.PI*2,
        shimmerSpeed: 1.8 + Math.random()*2.5,
      });
    });
  }
  
  function createTraceConnections() {
    // Much more visible traces — the neural pathways
    const seen = new Set();
    allFindings.forEach(finding => {
      const vocabName = finding.vocab.replace('_delta', '');
      const metricName = finding.metric_name;
      const key = vocabName + '|' + metricName;
      if (seen.has(key)) return; // deduplicate
      seen.add(key);
      
      const vIdx = wordNodes.findIndex(n => n.vocab === vocabName);
      const mIdx = metricNodes.findIndex(n => n.metric === metricName);
      if (vIdx === -1 || mIdx === -1) return;
      
      const strength = Math.abs(finding.r);
      const isStrong = strength > 0.5;
      
      const v = wordNodes[vIdx].basePos;
      const m = metricNodes[mIdx].basePos;
      const mid = new THREE.Vector3().lerpVectors(v, m, 0.5);
      const outward = mid.clone().normalize().multiplyScalar(1.5 + strength * 2);
      mid.add(outward);
      
      const curve = new THREE.QuadraticBezierCurve3(v.clone(), mid, m.clone());
      const points = curve.getPoints(60);
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      
      // Trace line — visible purple/pink
      const traceColor = isStrong ? 0xcc55aa : 0x6644aa;
      const mat = new THREE.LineBasicMaterial({
        color: traceColor,
        transparent: true,
        opacity: isStrong ? 0.4 : 0.18,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const line = new THREE.Line(geo, mat);
      scene.add(line);
      
      // Second thicker glow line on top
      const glowMat = new THREE.LineBasicMaterial({
        color: isStrong ? 0xff88cc : 0x8866cc,
        transparent: true,
        opacity: isStrong ? 0.12 : 0.05,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        linewidth: 1
      });
      const glowLine = new THREE.Line(geo.clone(), glowMat);
      scene.add(glowLine);
      
      traceLines.push({
        line, glowLine, vIdx, mIdx, curve, strength,
        baseOpacity: mat.opacity, baseGlowOpacity: glowMat.opacity,
        traceColor
      });
    });
  }
  
  function createEnergyFlows() {
    // More particles, bigger, brighter — real "current" flowing
    const seen = new Set();
    allFindings.forEach(finding => {
      const vocabName = finding.vocab.replace('_delta', '');
      const metricName = finding.metric_name;
      const key = vocabName + '|' + metricName;
      if (seen.has(key)) return;
      seen.add(key);
      
      const vIdx = wordNodes.findIndex(n => n.vocab === vocabName);
      const mIdx = metricNodes.findIndex(n => n.metric === metricName);
      if (vIdx === -1 || mIdx === -1) return;
      
      const strength = Math.abs(finding.r);
      const numP = Math.ceil(strength * 14) + 4;
      const color = strength > 0.5 ? 0xff88bb : 0x9977ff;
      
      for (let i = 0; i < numP; i++) {
        const spriteMat = new THREE.SpriteMaterial({
          map: glowTexture,
          color,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        });
        const sprite = new THREE.Sprite(spriteMat);
        const size = 0.4 + strength * 0.6;
        sprite.scale.set(size, size, 1);
        scene.add(sprite);
        
        flowParticles.push({
          sprite, vIdx, mIdx,
          t: i / numP,
          speed: 0.15 + Math.random() * 0.2,
          strength,
          color
        });
      }
    });
  }
  
  function animate() {
    animationId = requestAnimationFrame(animate);
    time += 0.016;
    
    cameraDistance += (targetCameraDistance - cameraDistance) * 0.04;
    cameraAngle += 0.0018;
    const heightRatio = (cameraDistance - 15) / 40;
    const camY = 3 + heightRatio * 18;
    camera.position.x = Math.sin(cameraAngle) * cameraDistance;
    camera.position.z = Math.cos(cameraAngle) * cameraDistance;
    camera.position.y = camY + Math.sin(time * 0.15) * 2;
    camera.lookAt(0, 0, 0);
    
    if (galaxyPoints) {
      galaxyPoints.rotation.y += 0.0006;
      galaxyPoints.rotation.x = Math.sin(time * 0.04) * 0.015;
    }
    
    // Orbit sparkle lights for traveling specular flashes
    if (sparkleLight) {
      sparkleLight.position.x = Math.sin(time * 0.4) * 12;
      sparkleLight.position.y = Math.cos(time * 0.3) * 10 + 5;
      sparkleLight.position.z = Math.cos(time * 0.4) * 12;
    }
    if (sparkleLight2) {
      sparkleLight2.position.x = Math.cos(time * 0.35) * 10;
      sparkleLight2.position.y = Math.sin(time * 0.25) * 8 - 3;
      sparkleLight2.position.z = Math.sin(time * 0.35) * 10;
    }
    
    // Nebula breathing
    nebulaSprites.forEach(n => {
      n.sprite.material.opacity = n.baseOpacity + Math.sin(time * 0.25 + n.phase) * 0.06;
    });
    
    // Node orbits + shimmer/pulse
    const allNodes = [...wordNodes, ...metricNodes];
    allNodes.forEach(node => {
      const t = time * node.orbitSpeed + node.orbitPhase;
      node.mesh.position.x = node.basePos.x + Math.sin(t) * node.orbitRadius;
      node.mesh.position.y = node.basePos.y + Math.cos(t*0.7) * node.orbitRadius * 0.5;
      node.mesh.position.z = node.basePos.z + Math.cos(t) * node.orbitRadius;
      
      // Gentle rotation in place
      node.mesh.rotation.x += node.rotSpeed.x * 0.016;
      node.mesh.rotation.y += node.rotSpeed.y * 0.016;
      node.mesh.rotation.z += node.rotSpeed.z * 0.016;
      
      node.sparkle.position.copy(node.mesh.position);
      node.glow.position.copy(node.mesh.position);
      
      // SHIMMER — pulsing emissive intensity + sparkle scale oscillation
      const shimmer = Math.sin(time * node.shimmerSpeed + node.shimmerPhase);
      const shimmer2 = Math.sin(time * node.shimmerSpeed * 1.7 + node.shimmerPhase * 0.6);
      
      // Emissive pulse
      node.mesh.material.emissiveIntensity = 0.5 + shimmer * 0.4;
      
      // Sparkle scale pulse — the "twinkle"
      const sparkScale = 2.2 + shimmer * 0.6 + shimmer2 * 0.3;
      node.sparkle.scale.set(sparkScale, sparkScale, 1);
      node.sparkle.material.opacity = 0.4 + shimmer * 0.25 + shimmer2 * 0.1;
      // Sparkle rotation for glint effect
      node.sparkle.material.rotation = time * 0.5 + node.shimmerPhase;
      
      // Glow pulse - keep scale smaller to avoid texture edge visibility
      node.glow.material.opacity = 0.12 + shimmer * 0.05;
      const glowScale = 4.0 + shimmer * 1.0;
      node.glow.scale.set(glowScale, glowScale, 1);
    });
    
    // Trace lines — pulse with current
    traceLines.forEach(tl => {
      const vPos = wordNodes[tl.vIdx].mesh.position;
      const mPos = metricNodes[tl.mIdx].mesh.position;
      const mid = new THREE.Vector3().lerpVectors(vPos, mPos, 0.5);
      const outward = mid.clone().normalize().multiplyScalar(1.5 + tl.strength * 2);
      mid.add(outward);
      
      const curve = new THREE.QuadraticBezierCurve3(vPos.clone(), mid, mPos.clone());
      const pts = curve.getPoints(60);
      tl.line.geometry.setFromPoints(pts);
      tl.glowLine.geometry.setFromPoints(pts);
      tl.curve = curve;
      
      // Traces pulse — current flowing effect
      const pulse = Math.sin(time * 2 + tl.vIdx * 0.7) * 0.1;
      tl.line.material.opacity = tl.baseOpacity + zoomDepth * 0.25 + pulse;
      tl.glowLine.material.opacity = tl.baseGlowOpacity + zoomDepth * 0.1 + pulse * 0.5;
    });
    
    // Flow particles — the current
    flowParticles.forEach(fp => {
      fp.t = (fp.t + fp.speed * 0.006) % 1;
      const tl = traceLines.find(t => t.vIdx === fp.vIdx && t.mIdx === fp.mIdx);
      if (!tl) return;
      
      const pt = tl.curve.getPoint(fp.t);
      fp.sprite.position.copy(pt);
      
      // Bright pulse at center of travel, fade at ends
      const edgeFade = Math.sin(fp.t * Math.PI);
      // Additional "packet" brightness — clustered energy pulses
      const packet = (Math.sin(fp.t * Math.PI * 6 + time * 3) * 0.5 + 0.5) * 0.3;
      fp.sprite.material.opacity = edgeFade * (0.35 + zoomDepth * 0.35) + packet;
      
      // Size pulse
      const sizeBase = 0.3 + fp.strength * 0.5;
      fp.sprite.scale.setScalar(sizeBase + packet * 0.3);
    });
    
    renderer.render(scene, camera);
  }
  
  function onClick(e) {
    mouseVec.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseVec.y = -(e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouseVec, camera);
    
    // Increase hit radius for easier clicking
    const all = [...wordNodes.map(n => n.mesh), ...metricNodes.map(n => n.mesh)];
    const hits = raycaster.intersectObjects(all);
    
    if (hits.length > 0) {
      const node = wordNodes.find(n => n.mesh === hits[0].object) || metricNodes.find(n => n.mesh === hits[0].object);
      if (node) { selectedNode = selectedNode === node ? null : node; return; }
    }
    selectedNode = null;
  }
  
  function onWheel(e) {
    e.preventDefault();
    targetCameraDistance = Math.max(12, Math.min(70, targetCameraDistance + e.deltaY * 0.06));
  }
  
  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
</script>

<div class="neural-scene" bind:this={container}>
  {#if selectedNode}
    <div class="expand-panel">
      <button class="close-btn" on:click={() => selectedNode = null}>✕</button>
      <span class="expand-type">{selectedNode.type === 'vocab' ? 'VOCABULARY NODE' : 'ACTIVATION METRIC'}</span>
      <h2 class="expand-name">{selectedNode.vocab || selectedNode.metric}</h2>
      
      {#if selectedNode.type === 'vocab'}
        <p class="expand-desc">When the model reaches for this word during self-examination, it maps to measurable activation dynamics</p>
      {:else}
        <p class="expand-desc">A measurable property of the model's internal processing state</p>
      {/if}
      
      <div class="expand-findings">
        {#each selectedNode.findings as finding}
          <div class="finding-card">
            <div class="finding-pair">
              <span class="fv">{finding.vocab.replace('_delta', '')}</span>
              <span class="fsep">↔</span>
              <span class="fm">{finding.metric_name}</span>
            </div>
            <div class="finding-stats">
              <span class="fr">r = {finding.r.toFixed(2)}</span>
              <span class="fp">p = {finding.p}</span>
            </div>
            <p class="fi">{finding.interpretation}</p>
            <div class="ftags">
              <span class="ftag">{finding.model}</span>
              <span class="ftag">{finding.condition}</span>
              {#if finding.survives_outlier}<span class="ftag ok">✓ Robust</span>{/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
  
  <div class="scene-bottom">
    <h1>Inside the <span class="accent">Synthetic</span> Mind</h1>
    <p class="sub">Scroll to travel deeper · Click a node to explore</p>
    <div class="legend">
      <span><i class="dot ruby"></i> Vocabulary</span>
      <span><i class="dot emerald"></i> Metric</span>
      <span><i class="dot trace"></i> Current Flow</span>
    </div>
  </div>
  
  <div class="zoom-ind">
    <div class="zt"><div class="zf" style="height:{zoomDepth*100}%"></div></div>
    <span class="zl">{zoomDepth < 0.3 ? 'GALAXY' : zoomDepth < 0.7 ? 'NETWORK' : 'CORE'}</span>
  </div>
</div>

<style>
  .neural-scene {
    width: 100%; height: 100vh; height: 100dvh;
    position: relative;
    background: #06031a;
    cursor: crosshair;
    overflow: hidden;
    touch-action: none;
  }
  .neural-scene :global(canvas) { position: absolute; top: 0; left: 0; touch-action: none; }
  
  .scene-bottom {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 1.5rem 2rem;
    background: linear-gradient(to top, rgba(6,3,26,0.85), transparent);
    pointer-events: none; z-index: 10;
  }
  .scene-bottom h1 {
    font-size: 1.5rem; font-weight: 200; letter-spacing: 0.5em;
    text-transform: uppercase; margin: 0; color: rgba(210,195,255,0.5);
    text-shadow: 0 0 30px rgba(140,100,255,0.15);
  }
  .accent { color: rgba(140,220,180,0.7); }
  .sub { font-size: 0.7rem; color: rgba(200,190,240,0.35); margin: 0.4rem 0 0; letter-spacing: 0.1em; }
  .legend { display: flex; gap: 1.2rem; margin-top: 0.5rem; }
  .legend span { display: flex; align-items: center; gap: 0.35rem; font-size: 0.6rem; color: rgba(200,190,240,0.3); }
  .dot { width: 5px; height: 5px; border-radius: 50%; display: inline-block; }
  .dot.ruby { background: #ff3388; box-shadow: 0 0 5px #ff3388; }
  .dot.emerald { background: #22ff88; box-shadow: 0 0 5px #22ff88; }
  .dot.trace { background: #cc55aa; box-shadow: 0 0 5px #cc55aa; }
  
  .zoom-ind {
    position: absolute; right: 1.2rem; top: 50%; transform: translateY(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
    z-index: 10; pointer-events: none;
  }
  .zt { width: 2px; height: 60px; background: rgba(180,160,240,0.06); border-radius: 1px; overflow: hidden; display: flex; flex-direction: column-reverse; }
  .zf { width: 100%; background: linear-gradient(to top, #6644cc, #ff6b9d); border-radius: 1px; transition: height 0.3s; }
  .zl { font-size: 0.45rem; letter-spacing: 0.2em; color: rgba(180,160,240,0.18); }
  
  .expand-panel {
    position: fixed; right: 1.5rem; top: 50%; transform: translateY(-50%);
    width: 340px; max-height: 80vh; overflow-y: auto;
    background: rgba(10,6,28,0.94); border: 1px solid rgba(120,90,220,0.12);
    border-radius: 10px; padding: 1.5rem; z-index: 20;
    backdrop-filter: blur(20px); box-shadow: 0 0 60px rgba(80,40,180,0.08);
    animation: slideIn 0.25s ease;
  }
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(-50%) translateX(15px); }
    to { opacity: 1; transform: translateY(-50%) translateX(0); }
  }
  
  @media (max-width: 768px) {
    .expand-panel {
      position: fixed;
      right: 0; left: 0; bottom: 0; top: auto;
      transform: none;
      width: 100%; max-width: 100%;
      max-height: 55vh;
      border-radius: 16px 16px 0 0;
      padding: 1.25rem 1rem 2rem;
      animation: slideUp 0.25s ease;
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .scene-bottom { padding: 1rem; }
    .scene-bottom h1 { font-size: 1.1rem; letter-spacing: 0.25em; }
    .legend { flex-wrap: wrap; gap: 0.8rem; }
    .zoom-ind { right: 0.8rem; }
  }
  .expand-type { font-size: 0.5rem; letter-spacing: 0.25em; color: rgba(180,160,240,0.2); }
  .expand-name { font-size: 1.5rem; font-weight: 300; margin: 0.1rem 0 0; color: rgba(210,195,255,0.88); }
  .expand-desc { font-size: 0.75rem; color: rgba(180,160,240,0.3); line-height: 1.5; margin: 0.5rem 0 1rem; }
  .expand-findings { display: flex; flex-direction: column; gap: 0.6rem; }
  .finding-card {
    padding: 0.65rem; background: rgba(120,90,220,0.04);
    border: 1px solid rgba(120,90,220,0.07); border-radius: 5px;
  }
  .finding-pair { display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.25rem; }
  .fv { color: #cc66ff; font-weight: 500; font-size: 0.85rem; }
  .fsep { color: rgba(180,160,240,0.12); font-size: 0.75rem; }
  .fm { color: #44ddaa; font-size: 0.75rem; }
  .finding-stats { display: flex; gap: 0.8rem; margin-bottom: 0.3rem; }
  .fr { font-family: 'Courier New', monospace; color: #ff6b9d; font-size: 0.9rem; }
  .fp { font-family: 'Courier New', monospace; color: rgba(180,160,240,0.2); font-size: 0.75rem; }
  .fi { font-size: 0.72rem; color: rgba(180,160,240,0.4); line-height: 1.4; font-style: italic; margin: 0 0 0.35rem; }
  .ftags { display: flex; gap: 0.3rem; flex-wrap: wrap; }
  .ftag {
    font-size: 0.5rem; padding: 0.1rem 0.4rem; border-radius: 2px;
    background: rgba(120,90,220,0.06); color: rgba(180,160,240,0.3);
    text-transform: uppercase; letter-spacing: 0.07em;
  }
  .ftag.ok { background: rgba(50,255,100,0.05); color: rgba(50,255,100,0.35); }
  .close-btn {
    position: absolute; top: 0.6rem; right: 0.6rem;
    background: none; border: none; color: rgba(180,160,240,0.2); cursor: pointer; font-size: 0.9rem;
  }
  .close-btn:hover { color: rgba(180,160,240,0.6); }
</style>
