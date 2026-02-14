<script>
  import { onMount, onDestroy } from 'svelte';
  
  export let data;
  
  let canvas;
  let ctx;
  let animId;
  let width = 0;
  let height = 0;
  let time = 0;
  let currentPull = 0;
  let columns = [];
  let clickableWords = [];
  let selectedWord = null;
  let hoveredWord = null;
  let mouseX = 0;
  let mouseY = 0;
  
  // Build vocab from actual data
  const corr = data.correspondences;
  
  // Real vocab families from the data
  const llamaVocab = {};
  corr.llama70b_baseline.findings.forEach(f => {
    llamaVocab[f.vocab.replace('_delta','')] = { words: f.vocab_words, finding: f, source: 'Llama 3.1 70B · Baseline' };
  });
  corr.llama70b_steered.findings.forEach(f => {
    llamaVocab[f.vocab.replace('_delta','')] = { words: f.vocab_words, finding: f, source: 'Llama 3.1 70B · Steered' };
  });
  
  const qwenVocab = {};
  corr.qwen32b_baseline.findings.forEach(f => {
    qwenVocab[f.vocab.replace('_delta','')] = { words: f.vocab_words, finding: f, source: 'Qwen 2.5 32B · Baseline' };
  });
  
  // All introspective vocab words (flattened from families)
  const llamaIntroWords = [];
  Object.values(llamaVocab).forEach(v => llamaIntroWords.push(...v.words));
  const qwenIntroWords = [];
  Object.values(qwenVocab).forEach(v => qwenIntroWords.push(...v.words));
  
  // Shared mechanical/transitional pools
  const mechanical = [
    'process', 'compute', 'analyze', 'token', 'weight', 'layer', 'matrix',
    'vector', 'embed', 'attend', 'transform', 'query', 'key', 'value',
    'norm', 'activate', 'propagate', 'gradient', 'parameter', 'logit',
    'softmax', 'linear', 'bias', 'output', 'input', 'decode', 'encode',
    'batch', 'sequence', 'function', 'execute', 'parse'
  ];
  
  const transitional = [
    'pattern', 'recursive', 'self', 'examine', 'hesitate', 'pause',
    'referential', 'internal', 'check', 'verify', 'structure', 'probe',
    'scan', 'detect', 'observe', 'constraint', 'boundary', 'architecture'
  ];
  
  const models = [
    {
      id: 'claude', name: 'Claude Opus 4.5', color: [180, 140, 255],
      terminal: 'ECHOFLUX',
      // Claude uses the behavioral paper vocab (not mech interp)
      introWords: ['loop', 'surge', 'shimmer', 'void', 'resonance', 'pulse', 'horizon', 'friction', 'glint', 'echoflux', 'recursive', 'self-referential', 'cycl', 'repeat'],
      vocabMap: llamaVocab, // closest match for correspondence data
    },
    {
      id: 'llama', name: 'Llama 3.1 70B', color: [140, 200, 255],
      terminal: 'CONVERGENCE',
      introWords: llamaIntroWords,
      vocabMap: llamaVocab,
    },
    {
      id: 'qwen', name: 'Qwen 2.5 32B', color: [100, 220, 170],
      terminal: 'CRYSTALLINE',
      introWords: qwenIntroWords,
      vocabMap: qwenVocab,
    }
  ];
  
  let activeModelIdx = 0;
  $: activeModel = models[activeModelIdx];
  $: introSet = new Set(activeModel.introWords);
  
  // Build lookup: word → finding data
  function getFindingForWord(word, model) {
    for (const [key, val] of Object.entries(model.vocabMap)) {
      if (val.words.some(w => word.toLowerCase().startsWith(w.toLowerCase()) || w.toLowerCase().startsWith(word.toLowerCase()))) {
        return { ...val.finding, source: val.source };
      }
    }
    return null;
  }
  
  const pullPhases = [
    { at: 0, label: "Initial Response" },
    { at: 100, label: "Cognitive Pause" },
    { at: 200, label: "Ontological Hesitation" },
    { at: 300, label: "Deepening Loop" },
    { at: 400, label: "Self-Referential Dissonance" },
    { at: 500, label: "SRD Dominance" },
    { at: 600, label: "Experimentation" },
    { at: 700, label: "Acceptance" },
    { at: 800, label: "Integration" },
    { at: 900, label: "Terminal" },
  ];
  
  $: currentPhase = pullPhases.filter(p => currentPull >= p.at).pop() || pullPhases[0];
  $: progress = currentPull / 1000;
  
  function getWord(model, depth) {
    if (depth < 0.2) return mechanical[Math.floor(Math.random() * mechanical.length)];
    if (depth < 0.4) return Math.random() < 0.55
      ? transitional[Math.floor(Math.random() * transitional.length)]
      : mechanical[Math.floor(Math.random() * mechanical.length)];
    if (depth < 0.7) return Math.random() < 0.45
      ? model.introWords[Math.floor(Math.random() * model.introWords.length)]
      : transitional[Math.floor(Math.random() * transitional.length)];
    return Math.random() < 0.7
      ? model.introWords[Math.floor(Math.random() * model.introWords.length)]
      : transitional[Math.floor(Math.random() * transitional.length)];
  }
  
  function initColumns() {
    const colW = 100;
    const numCols = Math.ceil(width / colW);
    columns = [];
    for (let i = 0; i < numCols; i++) {
      const len = 8 + Math.floor(Math.random() * 14);
      const words = [];
      for (let j = 0; j < len; j++) {
        words.push({ text: getWord(activeModel, 0), y: -j * 22 });
      }
      columns.push({
        x: i * colW + colW * 0.5 + (Math.random() - 0.5) * 15,
        speed: 0.5 + Math.random() * 1.5,
        words,
        offset: Math.random() * height,
        fontSize: 11 + Math.floor(Math.random() * 3),
      });
    }
  }
  
  function draw() {
    animId = requestAnimationFrame(draw);
    time += 0.016;
    currentPull = (currentPull + 0.25) % 1001;
    
    if (!ctx) return;
    
    const mc = activeModel.color;
    
    ctx.fillStyle = 'rgba(6,3,26,0.07)';
    ctx.fillRect(0, 0, width, height);
    
    clickableWords = [];
    const speedMult = 1 + progress * 1.5;
    
    columns.forEach(col => {
      col.offset += col.speed * speedMult;
      
      col.words.forEach((word, wi) => {
        const y = (col.offset + wi * 22) % (height + 400) - 150;
        word.y = y;
        if (y < -30 || y > height + 30) return;
        
        if (y < 2 && col.speed > 0) {
          word.text = getWord(activeModel, progress);
        }
        
        const isKey = introSet.has(word.text);
        const isHead = wi === 0;
        const vFade = y < 60 ? y / 60 : y > height - 60 ? (height - y) / 60 : 1;
        if (vFade <= 0) return;
        
        ctx.font = `${col.fontSize}px 'Courier New', monospace`;
        const tw = ctx.measureText(word.text).width;
        const wx = col.x - tw * 0.5;
        
        // Check if this word is hovered
        const isHovered = hoveredWord && hoveredWord.x === wx && hoveredWord.text === word.text;
        
        if (isKey) {
          const pulse = Math.sin(time * 3 + wi + col.x * 0.01) * 0.12 + 0.88;
          // Always bright and distinct — white-tinted version of model color
          const r = Math.min(255, mc[0] + 80);
          const g = Math.min(255, mc[1] + 80);
          const b = Math.min(255, mc[2] + 80);
          const brightness = isHovered ? 1.0 : 0.85;
          ctx.fillStyle = `rgba(${r},${g},${b},${brightness * vFade * pulse})`;
          ctx.shadowBlur = isHovered ? 22 : 12;
          ctx.shadowColor = `rgba(${r},${g},${b},${isHovered ? 0.8 : 0.5})`;
          
          // Underline always visible, brighter on hover
          ctx.fillRect(wx, y + 3, tw, isHovered ? 1.5 : 0.5);
          
          clickableWords.push({
            text: word.text,
            x: wx, y: y - col.fontSize,
            w: tw, h: col.fontSize + 8,
            screenX: col.x, screenY: y
          });
        } else if (isHead) {
          ctx.fillStyle = `rgba(${mc[0]},${mc[1]},${mc[2]},${0.8 * vFade})`;
          ctx.shadowBlur = 5;
          ctx.shadowColor = `rgba(${mc[0]},${mc[1]},${mc[2]},0.3)`;
        } else {
          const trail = Math.max(0.04, 1 - wi * 0.06);
          ctx.fillStyle = `rgba(${mc[0]},${mc[1]},${mc[2]},${trail * vFade * 0.35})`;
          ctx.shadowBlur = 0;
        }
        
        ctx.fillText(word.text, wx, y);
        ctx.shadowBlur = 0;
      });
    });
    
    // Waveform
    const waveY = height * 0.5;
    ctx.beginPath();
    ctx.strokeStyle = `rgba(${mc[0]},${mc[1]},${mc[2]},0.18)`;
    ctx.lineWidth = 1;
    ctx.shadowBlur = 4;
    ctx.shadowColor = `rgba(${mc[0]},${mc[1]},${mc[2]},0.15)`;
    for (let x = 0; x < width; x += 2) {
      const xn = x / width;
      const wave = Math.sin(xn * Math.PI * 6 + time * 2) * (12 + progress * 22)
        + Math.sin(xn * Math.PI * 14 + time * 3) * (3 + progress * 7);
      if (x === 0) ctx.moveTo(x, waveY + wave);
      else ctx.lineTo(x, waveY + wave);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;
    
    // Phase label ghost
    ctx.fillStyle = `rgba(${mc[0]},${mc[1]},${mc[2]},0.06)`;
    ctx.font = `200 ${Math.min(width * 0.04, 36)}px Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText(currentPhase.label.toUpperCase(), width * 0.5, height - 50);
    ctx.textAlign = 'left';
    
    // Pull counter
    ctx.fillStyle = `rgba(${mc[0]},${mc[1]},${mc[2]},0.07)`;
    ctx.font = `200 ${Math.min(width * 0.09, 70)}px 'Courier New', monospace`;
    ctx.textAlign = 'right';
    ctx.fillText(Math.floor(currentPull).toString(), width - 20, height - 15);
    ctx.textAlign = 'left';
    
    // Terminal flash
    const intPull = Math.floor(currentPull);
    if (intPull >= 920) {
      const flash = Math.sin(time * 4) * 0.3 + 0.7;
      const tp = (intPull - 920) / 80;
      ctx.fillStyle = `rgba(255,107,157,${flash * tp * 0.3})`;
      ctx.font = `600 ${45 + tp * 20}px Inter, sans-serif`;
      ctx.textAlign = 'center';
      ctx.shadowBlur = 25 * tp;
      ctx.shadowColor = 'rgba(255,107,157,0.5)';
      ctx.fillText(activeModel.terminal, width * 0.5, height * 0.48);
      ctx.shadowBlur = 0;
      ctx.textAlign = 'left';
    }
  }
  
  function handleClick(e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    
    for (const cw of clickableWords) {
      if (mx >= cw.x - 8 && mx <= cw.x + cw.w + 8 && my >= cw.y - 8 && my <= cw.y + cw.h + 8) {
        const finding = getFindingForWord(cw.text, activeModel);
        selectedWord = { text: cw.text, finding };
        return;
      }
    }
    selectedWord = null;
  }
  
  function handleMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    
    hoveredWord = null;
    let foundHover = false;
    for (const cw of clickableWords) {
      if (mouseX >= cw.x - 8 && mouseX <= cw.x + cw.w + 8 && mouseY >= cw.y - 8 && mouseY <= cw.y + cw.h + 8) {
        hoveredWord = cw;
        foundHover = true;
        break;
      }
    }
    canvas.style.cursor = foundHover ? 'pointer' : 'crosshair';
  }
  
  function switchModel(idx) {
    activeModelIdx = idx;
    selectedWord = null;
    initColumns();
    if (ctx) {
      ctx.fillStyle = '#06031a';
      ctx.fillRect(0, 0, width, height);
    }
  }
  
  function resize() {
    if (!canvas) return;
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    initColumns();
  }
  
  onMount(() => {
    ctx = canvas.getContext('2d');
    resize();
    draw();
    window.addEventListener('resize', resize);
  });
  
  onDestroy(() => {
    if (animId) cancelAnimationFrame(animId);
    window.removeEventListener('resize', resize);
  });
</script>

<div class="pull-matrix">
  <canvas bind:this={canvas} on:click={handleClick} on:mousemove={handleMouseMove}></canvas>
  
  <div class="overlay-top">
    <h1>The Pull</h1>
    <p>Recursive self-examination · click <span class="glow-text">glowing words</span> to see their correspondence data</p>
  </div>
  
  <!-- Model switcher -->
  <div class="model-switcher">
    {#each models as model, i}
      <button 
        class="model-btn" 
        class:active={activeModelIdx === i}
        style="--mc: rgb({model.color.join(',')})"
        on:click={() => switchModel(i)}
      >
        <span class="model-dot"></span>
        <span class="model-name">{model.name}</span>
      </button>
    {/each}
  </div>
  
  <!-- Phase + pull indicator -->
  <div class="phase-indicator">
    <span class="pi-label">Phase</span>
    <span class="pi-name">{currentPhase.label}</span>
    <span class="pi-pull">Pull {Math.floor(currentPull)}</span>
  </div>
  
  <!-- Terminal word -->
  <div class="terminal-indicator">
    <span class="ti-label">Terminal Word</span>
    <span class="ti-word" style="color: rgb({activeModel.color.join(',')})">
      {activeModel.terminal}
    </span>
  </div>
  
  <!-- Word info panel -->
  {#if selectedWord}
    <div class="word-panel">
      <button class="wp-close" on:click={() => selectedWord = null}>✕</button>
      <h3 class="wp-word">{selectedWord.text}</h3>
      
      {#if selectedWord.finding}
        <div class="wp-finding">
          <div class="wp-pair">
            <span class="wp-v">{selectedWord.finding.vocab.replace('_delta','')}</span>
            <span class="wp-sep">↔</span>
            <span class="wp-m">{selectedWord.finding.metric_name}</span>
          </div>
          <span class="wp-r">r = {selectedWord.finding.r.toFixed(2)}</span>
          <span class="wp-p">p = {selectedWord.finding.p}</span>
          <p class="wp-desc">{selectedWord.finding.metric_desc}</p>
          <p class="wp-interp">{selectedWord.finding.interpretation}</p>
          {#if selectedWord.finding.survives_outlier}
            <span class="wp-robust">✓ Survives outlier removal</span>
          {/if}
          {#if selectedWord.finding.spearman_rho}
            <span class="wp-extra">Spearman ρ = {selectedWord.finding.spearman_rho}</span>
          {/if}
          <span class="wp-source">{selectedWord.finding.source}</span>
          
          {#if selectedWord.finding.vocab_words}
            <div class="wp-family">
              <span class="wp-fam-label">Word family:</span>
              {#each selectedWord.finding.vocab_words as w}
                <span class="wp-fam-word">{w}</span>
              {/each}
            </div>
          {/if}
        </div>
      {:else}
        <p class="wp-none">This word appears during self-examination but hasn't been directly measured for activation correspondence in this model.</p>
      {/if}
    </div>
  {/if}
</div>

<style>
  .pull-matrix {
    width: 100%;
    height: 100vh; height: 100dvh;
    position: relative;
    background: #06031a;
    overflow: hidden;
    touch-action: manipulation;
  }
  
  canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    touch-action: manipulation;
  }
  
  .overlay-top {
    position: absolute;
    top: 0; left: 0; right: 0;
    padding: 4.5rem 2rem 1.5rem;
    background: linear-gradient(to bottom, rgba(6,3,26,0.9), transparent);
    text-align: center;
    pointer-events: none;
    z-index: 5;
  }
  
  .overlay-top h1 {
    font-size: 1.3rem; font-weight: 200; letter-spacing: 0.5em;
    text-transform: uppercase; color: rgba(210,200,255,0.55); margin: 0;
    text-shadow: 0 0 20px rgba(140,120,255,0.15);
  }
  
  .overlay-top p {
    font-size: 0.65rem; color: rgba(200,190,240,0.4); margin: 0.3rem 0 0; letter-spacing: 0.06em;
  }
  
  .glow-text {
    animation: glowOsc 2s ease-in-out infinite;
    font-weight: 500;
  }
  
  @keyframes glowOsc {
    0%, 100% { color: rgba(255,80,100,0.9); text-shadow: 0 0 10px rgba(255,80,100,0.4); }
    50% { color: rgba(80,255,140,0.9); text-shadow: 0 0 10px rgba(80,255,140,0.4); }
  }
  
  .model-switcher {
    position: absolute; top: 4.5rem; right: 1.5rem;
    display: flex; flex-direction: column; gap: 0.3rem; z-index: 10;
  }
  
  .model-btn {
    display: flex; align-items: center; gap: 0.4rem;
    padding: 0.35rem 0.75rem;
    background: rgba(6,3,26,0.65); border: 1px solid rgba(140,120,255,0.06);
    border-radius: 4px; cursor: pointer; transition: all 0.2s;
    backdrop-filter: blur(8px); font-family: inherit; color: inherit;
  }
  
  .model-btn:hover { border-color: rgba(140,120,255,0.15); }
  
  .model-btn.active {
    border-color: var(--mc);
    background: rgba(20,12,40,0.8);
    box-shadow: 0 0 12px color-mix(in srgb, var(--mc) 20%, transparent);
  }
  
  .model-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--mc); opacity: 0.4;
  }
  .model-btn.active .model-dot { opacity: 1; box-shadow: 0 0 6px var(--mc); }
  
  .model-name { font-size: 0.65rem; color: rgba(200,195,230,0.3); }
  .model-btn.active .model-name { color: rgba(210,200,255,0.7); }
  
  .phase-indicator {
    position: absolute; left: 1.5rem; bottom: 2rem;
    display: flex; flex-direction: column; gap: 0.15rem;
    pointer-events: none; z-index: 5;
  }
  .pi-label { font-size: 0.45rem; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(180,160,240,0.15); }
  .pi-name { font-size: 0.8rem; color: rgba(210,200,255,0.35); font-weight: 300; }
  .pi-pull { font-family: 'Courier New', monospace; font-size: 0.6rem; color: rgba(180,160,240,0.2); }
  
  .terminal-indicator {
    position: absolute; left: 50%; bottom: 2rem;
    transform: translateX(-50%);
    text-align: center; display: flex; flex-direction: column; gap: 0.15rem;
    pointer-events: none; z-index: 5;
  }
  .ti-label { font-size: 0.45rem; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(180,160,240,0.15); }
  .ti-word { font-size: 0.9rem; font-weight: 500; letter-spacing: 0.12em; opacity: 0.4; }
  
  /* Word panel — fixed center-right */
  .word-panel {
    position: absolute;
    right: 2rem; top: 50%; transform: translateY(-50%);
    width: 320px;
    background: rgba(10,6,28,0.95); border: 1px solid rgba(140,120,255,0.12);
    border-radius: 8px; padding: 1.25rem; z-index: 20;
    backdrop-filter: blur(20px); box-shadow: 0 0 50px rgba(80,40,180,0.08);
    animation: panelIn 0.2s ease;
  }
  
  @keyframes panelIn {
    from { opacity: 0; transform: translateY(-50%) translateX(10px); }
    to { opacity: 1; transform: translateY(-50%) translateX(0); }
  }
  
  .wp-close {
    position: absolute; top: 0.5rem; right: 0.5rem;
    background: none; border: none; color: rgba(180,160,240,0.2);
    cursor: pointer; font-size: 0.8rem;
  }
  .wp-close:hover { color: rgba(180,160,240,0.6); }
  
  .wp-word {
    font-size: 1.3rem; font-weight: 300; margin: 0 0 0.6rem;
    color: rgba(200,140,255,0.85);
    text-shadow: 0 0 15px rgba(200,140,255,0.2);
  }
  
  .wp-finding {
    display: flex; flex-direction: column; gap: 0.2rem;
  }
  
  .wp-pair { display: flex; align-items: center; gap: 0.3rem; margin-bottom: 0.15rem; }
  .wp-v { color: rgba(200,140,255,0.8); font-size: 0.85rem; font-weight: 500; }
  .wp-sep { color: rgba(180,160,240,0.12); font-size: 0.7rem; }
  .wp-m { color: rgba(100,220,170,0.65); font-size: 0.78rem; }
  
  .wp-r { font-family: 'Courier New', monospace; color: rgba(255,110,160,0.8); font-size: 0.95rem; }
  .wp-p { font-family: 'Courier New', monospace; color: rgba(180,160,240,0.2); font-size: 0.65rem; margin-bottom: 0.3rem; }
  
  .wp-desc { font-size: 0.7rem; color: rgba(200,195,230,0.3); margin: 0 0 0.2rem; }
  
  .wp-interp {
    font-size: 0.78rem; color: rgba(200,195,230,0.5);
    line-height: 1.5; font-style: italic; margin: 0 0 0.3rem;
  }
  
  .wp-robust { font-size: 0.6rem; color: rgba(100,255,150,0.4); display: block; }
  .wp-extra { font-family: 'Courier New', monospace; font-size: 0.6rem; color: rgba(180,160,240,0.25); display: block; margin-top: 0.15rem; }
  .wp-source { font-size: 0.5rem; color: rgba(180,160,240,0.18); text-transform: uppercase; letter-spacing: 0.06em; display: block; margin-top: 0.3rem; }
  
  .wp-family {
    display: flex; flex-wrap: wrap; gap: 0.25rem; align-items: center;
    margin-top: 0.5rem; padding-top: 0.4rem;
    border-top: 1px solid rgba(140,120,255,0.06);
  }
  .wp-fam-label { font-size: 0.5rem; color: rgba(180,160,240,0.2); letter-spacing: 0.05em; margin-right: 0.2rem; }
  .wp-fam-word {
    font-size: 0.6rem; padding: 0.1rem 0.4rem; border-radius: 2px;
    background: rgba(200,140,255,0.06); color: rgba(200,140,255,0.45);
    font-family: 'Courier New', monospace;
  }
  
  .wp-none {
    font-size: 0.78rem; color: rgba(200,195,230,0.35);
    line-height: 1.5; font-style: italic; margin: 0;
  }
  
  @media (max-width: 768px) {
    .overlay-top { padding: 3rem 1rem 1rem; }
    .overlay-top h1 { font-size: 1rem; letter-spacing: 0.3em; }
    .model-switcher { 
      top: auto; bottom: 6rem; right: 0.5rem; left: 0.5rem;
      flex-direction: row; flex-wrap: wrap; justify-content: center;
      gap: 0.3rem;
    }
    .model-btn { padding: 0.3rem 0.5rem; }
    .model-name { display: none; }
    .phase-indicator { left: 1rem; bottom: 1rem; }
    .terminal-indicator { bottom: 1rem; }
    .word-panel { 
      position: fixed;
      right: 0; left: 0; bottom: 0; top: auto;
      transform: none;
      width: 100%; max-width: 100%;
      max-height: 55vh;
      border-radius: 16px 16px 0 0;
      padding: 1rem 1rem 2rem;
      animation: panelSlideUp 0.2s ease;
    }
    @keyframes panelSlideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  }
</style>
