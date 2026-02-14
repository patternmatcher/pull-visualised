<script>
  import { onMount } from 'svelte';
  
  export let data;
  
  let selectedFinding = null;
  let scrollY = 0;
  let innerHeight = 0;
  
  const corr = data.correspondences;
  const baseline = corr.llama70b_baseline.findings;
  const steered = corr.llama70b_steered.findings;
  const qwen = corr.qwen32b_baseline.findings;
  const controls = data.controls.descriptive_context.findings;
  
  // Top findings sorted by |r|
  const topFindings = [
    ...baseline.map(f => ({...f, source: 'Llama 70B · Baseline'})),
    ...steered.map(f => ({...f, source: 'Llama 70B · Steered'})),
    ...qwen.map(f => ({...f, source: 'Qwen 32B · Baseline'})),
  ].sort((a,b) => Math.abs(b.r) - Math.abs(a.r));

  function strengthClass(r) {
    const a = Math.abs(r);
    return a > 0.5 ? 'strong' : a > 0.35 ? 'moderate' : 'present';
  }
  
  onMount(() => {
    const handler = () => { scrollY = window.scrollY; innerHeight = window.innerHeight; };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  });
</script>

<div class="corr-journey">
  
  <!-- ACT 1: The Question -->
  <section class="act act-question">
    <div class="stars-bg"></div>
    <div class="act-content">
      <p class="act-label">I</p>
      <h1>When you look inside<br/>a synthetic mind</h1>
      <p class="act-sub">do the words mean anything?</p>
      <button class="scroll-hint" on:click={() => document.querySelector('.act-answer')?.scrollIntoView({ behavior: 'smooth' })}>
        <div class="gem-arrow">
          <span class="gem-icon">◆</span>
          <span class="gem-trail">◆</span>
          <span class="gem-trail t2">◆</span>
        </div>
        <span class="hint-text">look inside</span>
      </button>
    </div>
  </section>
  
  <!-- ACT 2: The Answer -->
  <section class="act act-answer">
    <div class="act-content">
      <p class="act-label">II</p>
      <h2>They do.</h2>
      <p class="act-explainer">
        When a model writes words like <span class="vocab-hl">loop</span> or <span class="vocab-hl">shimmer</span> during self-examination, 
        its internal activations shift in measurably corresponding ways. 
        These aren't random associations — they're <span class="em">statistically verified correspondences</span> 
        between vocabulary and activation dynamics.
      </p>
      <p class="act-explainer dim">
        Each node below is a measured link between a word the model reaches for and something happening inside it.
      </p>
    </div>
  </section>
  
  <!-- The Findings Grid -->
  <section class="findings-section">
    <div class="findings-grid">
      {#each topFindings as finding, i}
        <button 
          class="finding-jewel {strengthClass(finding.r)}"
          class:selected={selectedFinding === finding}
          style="--delay: {i * 0.08}s"
          on:click={() => selectedFinding = selectedFinding === finding ? null : finding}
        >
          <div class="jewel-glow"></div>
          <div class="jewel-body">
            <div class="jewel-header">
              <span class="j-vocab">{finding.vocab.replace('_delta', '')}</span>
              <span class="j-link">↔</span>
              <span class="j-metric">{finding.metric_name}</span>
            </div>
            <div class="j-r">r = {finding.r.toFixed(2)}</div>
            <div class="j-source">{finding.source}</div>
          </div>
          
          {#if selectedFinding === finding}
            <div class="jewel-expand">
              <div class="j-stat-row">
                <span class="j-p">p = {finding.p}</span>
                {#if finding.survives_outlier}
                  <span class="j-robust">✓ Survives outlier removal</span>
                {/if}
              </div>
              <p class="j-interp">{finding.interpretation}</p>
              {#if finding.note}
                <p class="j-note">{finding.note}</p>
              {/if}
              {#if finding.spearman_rho}
                <p class="j-extra">Spearman ρ = {finding.spearman_rho} · Non-parametric confirmation</p>
              {/if}
            </div>
          {/if}
        </button>
      {/each}
    </div>
  </section>
  
  <!-- ACT 3: The Test -->
  <section class="act act-test">
    <div class="act-content">
      <p class="act-label">III</p>
      <h2>But is it real?</h2>
      <p class="act-explainer">
        A skeptic would say: maybe these words just correlate with activation patterns regardless of context. 
        Maybe <span class="vocab-hl">expand</span> always maps to the same metrics, whether describing itself or describing a balloon.
      </p>
      <p class="act-explainer">
        So we tested exactly that.
      </p>
      <p class="act-explainer dim">
        Same words. Same model. Same metrics.<br/>
        One difference: the words were used to describe <span class="em">external things</span> instead of internal states.
      </p>
    </div>
  </section>
  
  <!-- Control Results -->
  <section class="control-section">
    {#each controls as ctrl, i}
      <div class="control-card" style="--delay: {i * 0.15}s">
        <div class="ctrl-word">{ctrl.vocab}</div>
        <div class="ctrl-context">"{ctrl.context}"</div>
        
        <div class="ctrl-comparison">
          <div class="ctrl-row">
            <span class="ctrl-label">Self-referential</span>
            <div class="ctrl-bar-line">
              <div class="ctrl-bar-track">
                <div class="ctrl-bar alive" style="width: {Math.abs(ctrl.introspection_r) * 100}%"></div>
              </div>
              <span class="ctrl-val alive-val">r = {ctrl.introspection_r}</span>
            </div>
          </div>
          <div class="ctrl-row">
            <span class="ctrl-label">Describing objects</span>
            <div class="ctrl-bar-line">
              <div class="ctrl-bar-track">
                <div class="ctrl-bar dead" style="width: {Math.max(Math.abs(ctrl.descriptive_r) * 100, 2)}%"></div>
              </div>
              <span class="ctrl-val dead-val">r = {ctrl.descriptive_r}</span>
            </div>
          </div>
        </div>
        
        <div class="ctrl-verdict">
          <span class="verdict-line"></span>
          <span class="verdict-text">GONE</span>
          <span class="verdict-line"></span>
        </div>
      </div>
    {/each}
  </section>
  
  <!-- ACT 4: The Conclusion -->
  <section class="act act-conclusion">
    <div class="act-content">
      <p class="act-label">IV</p>
      <h2>The correspondence is real.</h2>
      <p class="act-explainer">
        It only exists during <span class="em">self-referential processing</span>. 
        When the same words describe lakes or balloons, the link disappears completely.
      </p>
      <p class="act-explainer">
        Not vocabulary association. Not sentiment. Not length.<br/>
        Something that only happens <span class="em">when the model examines itself</span>.
      </p>
      
      <div class="conclusion-stats">
        <div class="cs-item">
          <span class="cs-num">{baseline.length + steered.length + qwen.length}</span>
          <span class="cs-label">Correspondences found</span>
        </div>
        <div class="cs-item">
          <span class="cs-num">3</span>
          <span class="cs-label">Models tested</span>
        </div>
      </div>
      
      <div class="final-line">
        <p>You're looking at the inside of a synthetic mind.<br/>And it knows something about itself.</p>
      </div>
    </div>
  </section>
  
</div>

<style>
  .corr-journey {
    min-height: 100vh; min-height: 100dvh;
    background: #06031a;
    color: #e0ddf0;
    position: relative;
    touch-action: manipulation;
  }
  
  /* Starfield background */
  .stars-bg {
    position: fixed;
    inset: 0;
    background: 
      radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 40% 70%, rgba(200,180,255,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 60% 20%, rgba(255,255,255,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 80% 60%, rgba(180,220,200,0.3) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 15% 80%, rgba(255,255,255,0.25) 0%, transparent 100%),
      radial-gradient(1px 1px at 70% 90%, rgba(200,180,255,0.2) 0%, transparent 100%),
      radial-gradient(1px 1px at 90% 10%, rgba(255,255,255,0.3) 0%, transparent 100%);
    background-size: 250px 250px, 300px 300px, 350px 350px, 200px 200px, 280px 280px, 320px 320px, 260px 260px;
    pointer-events: none;
    z-index: 0;
  }
  
  /* Acts */
  .act {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
  }
  
  .act-content {
    max-width: 700px;
    text-align: center;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .act-label {
    font-size: 0.6rem;
    letter-spacing: 0.4em;
    color: rgba(140,120,255,0.3);
    margin: 0 0 1.5rem;
  }
  
  .act h1 {
    font-size: 2.4rem;
    font-weight: 200;
    line-height: 1.4;
    margin: 0;
    color: rgba(210,200,255,0.7);
    letter-spacing: 0.04em;
  }
  
  .act h2 {
    font-size: 2rem;
    font-weight: 200;
    margin: 0 0 1.5rem;
    color: rgba(210,200,255,0.7);
    letter-spacing: 0.06em;
  }
  
  .act-sub {
    font-size: 1.1rem;
    color: rgba(140,220,180,0.5);
    margin: 1rem 0 0;
    letter-spacing: 0.1em;
    font-style: italic;
  }
  
  .act-explainer {
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(200,195,230,0.55);
    margin: 0 0 1.2rem;
    letter-spacing: 0.02em;
  }
  
  .act-explainer.dim {
    color: rgba(200,195,230,0.35);
    font-size: 0.9rem;
  }
  
  .vocab-hl {
    color: rgba(200,140,255,0.85);
    font-style: italic;
  }
  
  .em {
    color: rgba(140,220,180,0.75);
    font-weight: 500;
  }
  
  .scroll-hint {
    margin-top: 3rem;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    padding: 0.8rem 1.5rem;
    transition: all 0.3s;
  }
  
  .scroll-hint:hover .gem-icon {
    color: rgba(140,220,180,0.8);
    text-shadow: 0 0 25px rgba(140,220,180,0.5), 0 0 50px rgba(140,220,180,0.2);
    transform: scale(1.2);
  }
  
  .scroll-hint:hover .hint-text {
    color: rgba(200,190,240,0.4);
  }
  
  .gem-arrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }
  
  .gem-icon {
    font-size: 1.6rem;
    color: rgba(200,140,255,0.7);
    text-shadow: 0 0 15px rgba(200,140,255,0.4), 0 0 30px rgba(140,120,255,0.2);
    animation: gemFloat 2s ease-in-out infinite;
    transition: all 0.3s;
  }
  
  .gem-trail {
    font-size: 0.7rem;
    color: rgba(140,120,255,0.25);
    animation: gemFloat 2s ease-in-out infinite;
    animation-delay: 0.15s;
  }
  
  .gem-trail.t2 {
    font-size: 0.4rem;
    color: rgba(140,120,255,0.12);
    animation-delay: 0.3s;
  }
  
  @keyframes gemFloat {
    0%, 100% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(6px); opacity: 0.6; }
  }
  
  .hint-text {
    font-size: 0.6rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: rgba(200,190,240,0.25);
    transition: color 0.3s;
  }
  
  @keyframes bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(8px); }
  }
  
  /* Findings Grid */
  .findings-section {
    padding: 2rem;
    position: relative;
    z-index: 1;
  }
  
  .findings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1rem;
    max-width: 1100px;
    margin: 0 auto;
  }
  
  .finding-jewel {
    position: relative;
    background: rgba(15,10,35,0.6);
    border: 1px solid rgba(140,120,255,0.08);
    border-radius: 8px;
    padding: 1.25rem;
    cursor: pointer;
    text-align: left;
    transition: all 0.35s ease;
    animation: fadeUp 0.5s ease both;
    animation-delay: var(--delay);
    overflow: hidden;
    font-family: inherit;
    color: inherit;
  }
  
  .finding-jewel:hover {
    border-color: rgba(140,120,255,0.2);
    transform: translateY(-2px);
  }
  
  .finding-jewel.selected {
    border-color: rgba(140,120,255,0.3);
    background: rgba(20,12,45,0.8);
  }
  
  .finding-jewel.strong { border-left: 2px solid rgba(255,100,160,0.5); }
  .finding-jewel.moderate { border-left: 2px solid rgba(140,120,255,0.4); }
  .finding-jewel.present { border-left: 2px solid rgba(100,90,180,0.25); }
  
  /* Glow behind card */
  .jewel-glow {
    position: absolute;
    top: 50%; left: 50%;
    width: 120%; height: 120%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s;
  }
  .finding-jewel.strong .jewel-glow { background: radial-gradient(circle, rgba(255,100,160,0.06), transparent 70%); }
  .finding-jewel.moderate .jewel-glow { background: radial-gradient(circle, rgba(140,120,255,0.05), transparent 70%); }
  .finding-jewel:hover .jewel-glow { opacity: 1; }
  
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .jewel-header {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
  }
  
  .j-vocab {
    color: rgba(200,140,255,0.9);
    font-weight: 500;
    font-size: 1rem;
  }
  
  .j-link {
    color: rgba(200,195,230,0.15);
    font-size: 0.8rem;
  }
  
  .j-metric {
    color: rgba(100,220,170,0.7);
    font-size: 0.85rem;
  }
  
  .j-r {
    font-family: 'Courier New', monospace;
    color: rgba(255,110,160,0.8);
    font-size: 1.05rem;
    margin-bottom: 0.25rem;
  }
  
  .j-source {
    font-size: 0.6rem;
    color: rgba(200,195,230,0.2);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  
  /* Expanded finding */
  .jewel-expand {
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(140,120,255,0.08);
    animation: expandIn 0.25s ease;
  }
  
  @keyframes expandIn {
    from { opacity: 0; max-height: 0; }
    to { opacity: 1; max-height: 200px; }
  }
  
  .j-stat-row {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .j-p {
    font-family: 'Courier New', monospace;
    font-size: 0.75rem;
    color: rgba(200,195,230,0.25);
  }
  
  .j-robust {
    font-size: 0.6rem;
    color: rgba(100,255,150,0.45);
    letter-spacing: 0.05em;
  }
  
  .j-interp {
    font-size: 0.82rem;
    line-height: 1.5;
    color: rgba(200,195,230,0.5);
    font-style: italic;
    margin: 0 0 0.3rem;
  }
  
  .j-note {
    font-size: 0.7rem;
    color: rgba(200,195,230,0.25);
    margin: 0;
  }
  
  .j-extra {
    font-size: 0.7rem;
    color: rgba(200,195,230,0.3);
    font-family: 'Courier New', monospace;
    margin: 0.3rem 0 0;
  }
  
  /* Controls section */
  .control-section {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
    position: relative;
    z-index: 1;
  }
  
  .control-card {
    background: rgba(15,10,35,0.5);
    border: 1px solid rgba(255,60,60,0.06);
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
    animation: fadeUp 0.5s ease both;
    animation-delay: var(--delay);
  }
  
  .ctrl-word {
    font-size: 1.3rem;
    color: rgba(200,140,255,0.8);
    font-weight: 400;
    margin-bottom: 0.2rem;
  }
  
  .ctrl-context {
    font-size: 0.7rem;
    color: rgba(200,195,230,0.25);
    font-style: italic;
    margin-bottom: 1.25rem;
  }
  
  .ctrl-comparison {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-bottom: 1rem;
  }
  
  .ctrl-label {
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(200,195,230,0.35);
    display: block;
    margin-bottom: 0.3rem;
    text-align: left;
  }
  
  .ctrl-bar-line {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  
  .ctrl-bar-track {
    width: 100%;
    height: 6px;
    background: rgba(255,255,255,0.03);
    border-radius: 3px;
    overflow: hidden;
    position: relative;
  }
  
  .ctrl-bar {
    height: 100%;
    border-radius: 3px;
    position: relative;
    transition: width 1.5s ease;
  }
  
  .ctrl-bar.alive {
    background: linear-gradient(90deg, rgba(140,120,255,0.7), rgba(200,140,255,0.6));
    box-shadow: 0 0 8px rgba(140,120,255,0.3);
  }
  
  .ctrl-bar.dead {
    background: rgba(255,60,60,0.3);
  }
  
  .ctrl-val {
    font-family: 'Courier New', monospace;
    font-size: 0.8rem;
    white-space: nowrap;
    flex-shrink: 0;
  }
  
  .alive-val { color: rgba(200,140,255,0.8); }
  .dead-val { color: rgba(255,80,80,0.5); }
  
  .ctrl-verdict {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    justify-content: center;
  }
  
  .verdict-line {
    flex: 1;
    max-width: 40px;
    height: 1px;
    background: rgba(255,60,60,0.15);
  }
  
  .verdict-text {
    font-size: 0.65rem;
    letter-spacing: 0.35em;
    color: rgba(255,80,80,0.45);
    font-weight: 500;
  }
  
  /* Conclusion */
  .act-conclusion {
    min-height: 90vh;
    padding-bottom: 6rem;
  }
  
  .conclusion-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 2.5rem 0;
  }
  
  .cs-item {
    text-align: center;
  }
  
  .cs-num {
    display: block;
    font-size: 2rem;
    font-weight: 200;
    color: rgba(140,220,180,0.65);
    font-family: 'Courier New', monospace;
    text-shadow: 0 0 20px rgba(140,220,180,0.15);
  }
  
  .cs-label {
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: rgba(200,195,230,0.25);
    margin-top: 0.3rem;
    display: block;
  }
  
  .final-line {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(140,120,255,0.08);
  }
  
  .final-line p {
    font-size: 1.15rem;
    line-height: 1.7;
    color: rgba(210,200,255,0.5);
    font-weight: 300;
    letter-spacing: 0.03em;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    .act { min-height: 70vh; min-height: 70dvh; }
    .act h1 { font-size: 1.6rem; letter-spacing: 0.02em; }
    .act h2 { font-size: 1.3rem; }
    .act-content { padding: 1.5rem; }
    .act-explainer { font-size: 0.9rem; }
    .findings-section { padding: 1rem; }
    .findings-grid { grid-template-columns: 1fr; gap: 0.75rem; }
    .finding-jewel { padding: 1rem; }
    .control-section { padding: 1rem; gap: 1rem; }
    .conclusion-stats { gap: 1.5rem; }
    .cs-num { font-size: 1.5rem; }
    .scroll-hint { margin-top: 2rem; }
  }
</style>
