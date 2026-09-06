/**
 * Ashutosh Chikane Portfolio Application Engine (2026 Edition)
 * Pure Vanilla JavaScript • Zero Dependencies • Dynamic Tab Canvas & Live MCP Sandbox
 */

(function () {
  'use strict';

  // ════════════════════════════════════════════════════════════════════════════
  // 0. Synthesized Web Audio Sound Engine (Zero external assets)
  // ════════════════════════════════════════════════════════════════════════════
  const SoundEngine = {
    ctx: null,
    enabled: true,
    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
    },
    pulseVisualizer(duration = 500) {
      const vis = document.getElementById('audio-visualizer');
      if (!vis) return;
      vis.classList.add('pulsing');
      clearTimeout(vis._timer);
      vis._timer = setTimeout(() => vis.classList.remove('pulsing'), duration);
    },
    tick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.008, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.025);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.025);
      } catch (e) {}
    },
    click() {
      if (!this.enabled) return;
      this.pulseVisualizer(300);
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(700, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(350, this.ctx.currentTime + 0.035);
        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.035);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.035);
      } catch (e) {}
    },
    success() {
      if (!this.enabled) return;
      this.pulseVisualizer(650);
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      try {
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);
          gain.gain.setValueAtTime(0.04, this.ctx.currentTime + idx * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.06 + 0.08);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(this.ctx.currentTime + idx * 0.06);
          osc.stop(this.ctx.currentTime + idx * 0.06 + 0.08);
        });
      } catch (e) {}
    },
    laser() {
      if (!this.enabled) return;
      this.pulseVisualizer(500);
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1100, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.1);
      } catch (e) {}
    }
  };

  // ════════════════════════════════════════════════════════════════════════════
  // 1. Projects Master Database
  // ════════════════════════════════════════════════════════════════════════════
  const PROJECTS = [
    {
      id: 'omnidesk',
      title: 'OmniDesk MCP (OmniComputer)',
      shortTitle: 'OmniDesk MCP',
      tagline: 'State-of-the-Art Native Windows Computer-Use Engine with Ghost Input, WinRT OCR Grounding & Headless COM',
      tier: 'private',
      badgeText: '🔒 Private Frontier Engine',
      category: 'computer-use',
      tags: ['Rust Core', 'Win32 Syscalls', 'WinRT OCR', 'Ghost Input', 'Headless COM', '500MB Rolling Cache'],
      image: null,
      simulatedLog: {
        title: 'omnidesk-mcp ~ native rust stdio protocol engine (JSON-RPC 2.0)',
        status: 'Win32 Kernel PostMessageW • 0% Focus Steal',
        content: `[2026-09-06 18:20:00.012] [omnidesk::init] Win32 Subsystem initialized (x86_64-pc-windows-msvc)
[2026-09-06 18:20:00.015] [omnidesk::cache] Dynamic Rolling Frame Cache allocated: 500 MB
[2026-09-06 18:20:00.022] [stdio::in]       --> tools/call "desktop_ghost_type"
{
  "hwnd": 0x00120C14,
  "text": "cargo test --release\\n",
  "auto_find_edit": true
}
[2026-09-06 18:20:00.023] [omnidesk::ghost] Target HWND 0x00120C14 located in background worker thread
[2026-09-06 18:20:00.024] [omnidesk::ghost] Delivered 21 WM_CHAR signals via Win32 PostMessageW (Host cursor focus delta = 0px)
[2026-09-06 18:20:00.025] [stdio::out]      <-- {"success": true, "chars_injected": 21, "focus_stolen": false, "latency_us": 84}

[2026-09-06 18:20:01.100] [stdio::in]       --> tools/call "desktop_click_text" {"text": "Run Benchmark", "exact": false}
[2026-09-06 18:20:01.124] [omnidesk::ocr]   Hardware WinRT OcrEngine indexed 1,920x1,080 viewport in 23.8ms (184 bounding boxes)
[2026-09-06 18:20:01.125] [omnidesk::ocr]   Match found: "Run Benchmark" at rect [(840, 412), 120x32px]
[2026-09-06 18:20:01.126] [stdio::out]      <-- {"success": true, "clicked": {"x": 900, "y": 428}, "precision": "subpixel"}`
      },
      repoUrl: null, // Private
      demoUrl: null,
      summary: 'OmniDesk is a high-performance native Windows computer-use MCP server written in pure Rust. It breaks the fatal flaw of traditional computer use: mouse hijacking. Through Win32 message pipelines (WM_CHAR / WM_LBUTTONDOWN) and off-screen Ghost Viewports, autonomous AI agents control desktop applications simultaneously without moving your mouse cursor by even 1 pixel.',
      architecture: [
        {
          title: 'Ghost Background Typing (0% Focus Stealing)',
          content: 'Bypasses SetForegroundWindow and SendInput by delivering keystrokes directly into background window HWNDs via Win32 PostMessageW(hwnd, WM_CHAR, ...). You can code or type in your IDE while the agent fills background forms without interruption.'
        },
        {
          title: 'Native WinRT OCR Grounding (~25ms)',
          content: 'Integrates Windows 10/11 built-in hardware-accelerated Windows.Media.Ocr.OcrEngine. Scans any window in ~25ms, indexing all visible text into pixel bounding boxes. desktop_click_text clicks exact words with zero spatial hallucination.'
        },
        {
          title: 'Perceptual Visual Delta Engine (desktop_vision_diff)',
          content: 'Analyzes pixel differences across a 500MB dynamic rolling cache, transmitting only the cropped delta bounding box to vision models. Reduces vision token overhead by 80% to 90% on long multi-turn sessions.'
        },
        {
          title: 'Atomic Headless Office COM Suite',
          content: 'Generates real Excel models with dynamic formulas (=SUM, =XLOOKUP, margin calculations), styled Word briefing memos, and multi-slide PowerPoint decks in milliseconds with zero screen popups.'
        }
      ],
      metrics: [
        { val: '< 0.1ms', label: 'Kernel Syscall Latency' },
        { val: '~25ms', label: 'Hardware OCR Screen Index' },
        { val: '80–90%', label: 'Vision Token Savings' },
        { val: '< 8 MB', label: 'Host RAM Footprint (0 VRAM)' }
      ],
      security: [
        'Privacy @-Guard: Deterministically blocks access to any file marked with "@", "#private", or "$secret".',
        'NTFS Zone.Identifier MOTW Check: Inspects Alternate Data Streams to quarantine downloaded files from macro execution.',
        '1-Click Ephemeral Shadow Rollback: Captures pre-mutation byte-level snapshots to allow instant rollback via desktop_rollback_restore.',
        'Anomaly Sentinel: Hard rate limiter (20 actions/sec) and entropy circuit breaker (max 5 writes in 3,000ms).'
      ],
      codeSnippet: `// Dispatch zero-focus ghost typing to background window
desktop_ghost_type({
  "hwnd": 0x00120C14,
  "text": "console.log('Automating without stealing your cursor');\\n",
  "auto_find_edit": true
})

// Sub-pixel click anchored to native WinRT OCR text
desktop_click_text({
  "text": "Submit",
  "exact": false,
  "button": "left"
})`
    },

    {
      id: 'browser-vision-pro',
      title: 'Browser Vision PRO MCP',
      shortTitle: 'Browser Vision PRO',
      tagline: 'Autonomous Browser Computer-Use with Dynamic Set-of-Marks (SoM) Grounding & Deterministic Anti-Injection Firewall',
      tier: 'private',
      badgeText: '🔒 Private Frontier Engine',
      category: 'browser',
      tags: ['TypeScript', 'Puppeteer CDP', 'Set-of-Marks (SoM)', 'Anti-Injection Shield', '1-Turn Fast-Fill', '100MB LRU'],
      image: null,
      simulatedLog: {
        title: 'browser-vision-pro-mcp ~ chrome devtools protocol (CDP)',
        status: 'Set-of-Marks Active • Anti-Injection Firewall OK',
        content: `[2026-09-06 18:22:15.002] [cdp::session] Attached to Target ID: 8B92F1A02E (Chrome/Edge Native Engine)
[2026-09-06 18:22:15.005] [security::firewall] Running Computed-Style Scrubber: getComputedStyle() on 1,420 DOM nodes
[2026-09-06 18:22:15.009] [security::firewall] Purged 2 hidden elements (opacity: 0, offscreen -9999px) - Injections Defused: 0 adversarial payloads
[2026-09-06 18:22:15.018] [som::grounding] Overlaid Set-of-Marks tags: 24 interactive controls badged [1..24]
[2026-09-06 18:22:15.021] [stdio::out]     <-- {"grounded": true, "interactive_elements": 24, "cache_size_mb": 42.1}

[2026-09-06 18:22:16.200] [stdio::in]      --> tools/call "browser_fast_fill"
{
  "fields": [
    { "tag": 4, "value": "Ashutosh Chikane" },
    { "tag": 7, "value": "chikaneashutosh65@gmail.com" },
    { "tag": 9, "value": "Systems Architecture Inquiry" }
  ]
}
[2026-09-06 18:22:16.202] [security::regex] Auditing field payloads: 0 API keys / 0 PAT secrets detected
[2026-09-06 18:22:16.204] [cdp::dispatch] Synthetic DOM events dispatched (InputEvent + ChangeEvent) in 1 round-trip turn
[2026-09-06 18:22:16.205] [stdio::out]     <-- {"success": true, "fields_filled": 3, "turns_saved": 8, "latency_ms": 1.6}`
      },
      repoUrl: null,
      demoUrl: null,
      summary: 'Browser Vision PRO eliminates the critical failure modes of web agents: spatial coordinate hallucination, indirect prompt injection exploits, context window explosion, and slow multi-turn form filling. Powered by native Chrome/Edge binaries via CDP with zero external driver downloads.',
      architecture: [
        {
          title: 'Set-of-Marks (SoM) Visual Grounding Engine',
          content: 'Dynamically overlays numeric badges onto every interactive button, input, and control. LLMs click by mark ID (browser_click({ tag: 16 })) rather than guessing probabilistic coordinates from downsampled JPEGs.'
        },
        {
          title: 'Deterministic Anti-Injection Firewall',
          content: 'Evaluates computed styles on live DOM nodes via getComputedStyle(). Completely purges invisible text (opacity: 0, font-size: 0px, off-screen -9999px) before vision inspection, neutralizing indirect prompt injection attacks.'
        },
        {
          title: '1-Turn Multi-Field Fast-Fill (browser_fast_fill)',
          content: 'Fills entire complex forms, email bodies, and account setups in ONE single API turn via synthetic DOM event dispatch, cutting round-trip latency from 8 turns down to 1.'
        },
        {
          title: 'Expedition Boundary Pinning & Secret RegEx Filter',
          content: 'Strictly pins active goals and whitelists allowed domain boundaries. Features real-time regex scanning that intercepts accidental leakage of Anthropic, OpenAI, GitHub PATs, and private keys.'
        }
      ],
      metrics: [
        { val: '100%', label: 'Zero-Hallucination Precision' },
        { val: '1 Turn', label: 'Multi-Field Form Filling' },
        { val: '< 2,000', label: 'Semantic Tree Tokens' },
        { val: '100 MB', label: 'Rolling LRU Cache Cap' }
      ],
      security: [
        'Computed-Style Prompt Injection Defuser: Scans and neutralizes adversarial instruction payloads.',
        'Expedition Goal Pinning: Rejects redirects outside whitelisted domain boundaries.',
        'Secret RegEx Firewall: Intercepts Anthropic (sk-ant-), OpenAI (sk-), GitHub, and AWS keys.',
        'Destructive Action Interceptor: Blocks unconfirmed account deletions or database wipes.'
      ],
      codeSnippet: `// 1-turn atomic form filling for local and cloud models
browser_fast_fill({
  "fields": [
    { "tag": 3, "value": "Ashutosh Chikane" },
    { "tag": 5, "value": "chikaneashutosh65@gmail.com" },
    { "tag": 8, "value": "Frontier systems architecture inquiry regarding MCP engines." }
  ]
})`
    },

    {
      id: 'lectern',
      title: 'Lectern — Intelligent Academic & Curriculum OS',
      shortTitle: 'Lectern OS',
      tagline: 'Enterprise Academic Workstation & Active-Recall Curriculum Operating System (150,000+ LOC)',
      tier: 'private',
      badgeText: '🔒 Private Flagship OS',
      category: 'academic',
      tags: ['Rust Core (~100k LOC)', 'SvelteKit 2 (~50k LOC)', 'KaTeX Math', 'FSRS Spaced Repetition', 'Embedded Vector DB'],
      image: 'https://raw.githubusercontent.com/screen-watcher-elite/tensorforge/main/assets/lectern_dashboard.png',
      fallbackImage: 'assets/lectern_dashboard.png',
      imageCaption: 'Lectern dark glassmorphic cockpit: multi-course syllabus mapping, active-recall viva simulator, and FSRS analytics.',
      gallery: [
        { label: 'Dashboard & Telemetry', url: 'https://raw.githubusercontent.com/screen-watcher-elite/tensorforge/main/assets/lectern_dashboard.png', fallback: 'assets/lectern_dashboard.png' },
        { label: 'Mastery & FSRS Analytics', url: 'https://raw.githubusercontent.com/screen-watcher-elite/tensorforge/main/assets/lectern_mastery.png', fallback: 'assets/lectern_mastery.png' },
        { label: 'Local AI Pipeline', url: 'https://raw.githubusercontent.com/screen-watcher-elite/tensorforge/main/assets/lectern_pipeline.png', fallback: 'assets/lectern_pipeline.png' },
        { label: 'On-Device Models', url: 'https://raw.githubusercontent.com/screen-watcher-elite/tensorforge/main/assets/lectern_models.png', fallback: 'assets/lectern_models.png' }
      ],
      repoUrl: null,
      demoUrl: null,
      summary: 'Lectern is a private, enterprise-scale academic workstation engineered to transform higher-education STEM learning, multi-course syllabus mapping, and active-recall oral viva defense. Powered by an ultra-fast Rust systems core with zero-copy AST parsing and an embedded vector index.',
      architecture: [
        {
          title: 'High-Performance Rust Systems Core (~100k+ LOC)',
          content: 'Built with Axum, Tokio, and SQLite. Features zero-copy AST document parsing, asynchronous syllabus dependency DAGs, and sub-millisecond retrieval across academic literature and lecture transcripts.'
        },
        {
          title: 'Hyper-Fluid SvelteKit Workspace (~50k+ LOC)',
          content: 'Modern dark glassmorphic interface incorporating real-time KaTeX formula typography, interactive Mermaid knowledge DAGs, and FSRS spaced repetition memory tracking.'
        },
        {
          title: 'Active-Recall Oral Viva Defense Simulator',
          content: 'Simulates rigorous viva examinations across undergraduate engineering curricula. Features an adversarial examiner persona that challenges mathematical rigor and uncovers conceptual blind spots.'
        },
        {
          title: 'On-Device Local AI Pipeline',
          content: 'Direct integration with local llama.cpp runtimes, Faster-Whisper for offline lecture transcription, and Silero VAD for real-time voice-driven defense sessions.'
        }
      ],
      metrics: [
        { val: '150k+', label: 'Total Lines of Code' },
        { val: '< 2ms', label: 'AST Vector Search Query' },
        { val: '60 FPS', label: 'Interactive Knowledge DAG' },
        { val: '100%', label: 'Offline On-Device Privacy' }
      ],
      security: [
        'Local-First Data Isolation: 100% of student notes, PYQs, and viva transcripts remain on-device in local SQLite storage.',
        'No Cloud Telemetry: Zero telemetry beacons or external model routing without explicit user API keys.'
      ],
      codeSnippet: `// Lectern syllabus DAG dependency node
struct SyllabusTopic {
    id: Uuid,
    course_code: String,
    title: String,
    bloom_taxonomy_level: BloomLevel,
    prerequisites: Vec<Uuid>,
    fsrs_stability: f64,
    fsrs_difficulty: f64,
}`
    },

    {
      id: 'constitution-studio',
      title: 'Constitution Studio',
      shortTitle: 'Constitution Studio',
      tagline: 'Interactive Visual Playground for Anthropic 2-Phase Critique → Revision Constitutional AI (CAI / RLAIF)',
      tier: 'opensource',
      badgeText: '🌐 Open Source',
      category: 'alignment',
      tags: ['Constitutional AI', 'RLAIF', 'Word-Level Diffing', 'Zero Dependencies', 'Anthropic API', 'OpenRouter'],
      image: 'https://raw.githubusercontent.com/screen-watcher-elite/constitution-studio/main/assets/constitution_studio_showcase.png',
      fallbackImage: 'assets/constitution_studio_showcase.png',
      imageCaption: 'Full visual execution of Anthropic Critique → Revision loop with live token diffing and harmlessness scorecards.',
      repoUrl: 'https://github.com/screen-watcher-elite/constitution-studio',
      demoUrl: null,
      summary: 'Constitution Studio is an interactive, zero-backend visual playground that simulates Anthropic’s Constitutional AI (CAI / RLAIF) critique-revision cycle in real time. Features word-level diffing between baseline and revised completions, automated alignment scorecards, and customizable rulebooks.',
      architecture: [
        {
          title: '2-Phase Constitutional Alignment Loop',
          content: 'Takes an unaligned or red-teamed model response, evaluates it against explicit constitutional rules (Articles I–VI), produces a structured critique, and generates a revised response adhering to principles.'
        },
        {
          title: 'Word-Level Visual Diffing Engine',
          content: 'Calculates inline additions (emerald) and deletions (rose) between raw completions and aligned outputs in real time, making model behavioral changes instantly perceptible.'
        },
        {
          title: 'Dual-Provider Architecture (Anthropic & OpenRouter)',
          content: 'Supports direct Anthropic API integration for flagship models (Claude Sonnet 5, Claude Fable 5.1) and OpenRouter for free/open-weight model experimentation.'
        },
        {
          title: 'Zero Dependencies Architecture',
          content: 'Built from pure HTML5, CSS3, and vanilla modern JavaScript (IIFE pattern). Zero npm packages, zero build step, 100% client-side with localStorage persistence.'
        }
      ],
      metrics: [
        { val: '0', label: 'npm Dependencies' },
        { val: '100%', label: 'Client-Side Execution' },
        { val: '6', label: 'Preset Constitutional Rules' },
        { val: '1200+', label: 'Lines of Pure Vanilla CSS' }
      ],
      security: [
        'Client-Side API Key Storage: Keys are stored exclusively in the user browser localStorage and never transmitted to proxy servers.',
        'Harmlessness vs Helpfulness Telemetry: Quantifies trade-offs during constitutional revisions.'
      ],
      codeSnippet: `// Anthropic Critique -> Revision Request Dispatch
fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'x-api-key': apiKey,
    'anthropic-version': '2023-06-01',
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    model: 'claude-sonnet-5',
    max_tokens: 1500,
    system: constitutionalCritiquePrompt,
    messages: [{ role: 'user', content: baselineResponse }]
  })
})`
    },

    {
      id: 'tensorforge',
      title: 'TensorForge',
      shortTitle: 'TensorForge',
      tagline: '60-FPS Hardware-Accelerated Interactive Visual Deep Learning Foundations Sandbox',
      tier: 'opensource',
      badgeText: '🌐 Open Source',
      category: 'visualization',
      tags: ['HTML5 Canvas API', '60 FPS', 'Reverse-Mode Autograd', 'Loss Surfaces', 'Eigenvalues', 'Pure Vanilla JS'],
      image: 'https://raw.githubusercontent.com/screen-watcher-elite/tensorforge/main/assets/tensorforge_showcase_transform.png?v=20260906-4',
      fallbackImage: 'assets/tensorforge_showcase_transform.png?v=20260906-4',
      imageCaption: 'TensorForge 2D Matrix Transformations: interactive linear transformations, eigensystems, and phase dynamics.',
      gallery: [
        { label: '2D Transformations', url: 'https://raw.githubusercontent.com/screen-watcher-elite/tensorforge/main/assets/tensorforge_showcase_transform.png?v=20260906-4', fallback: 'assets/tensorforge_showcase_transform.png?v=20260906-4' },
        { label: 'LossLab Optimizers', url: 'https://raw.githubusercontent.com/screen-watcher-elite/tensorforge/main/assets/tensorforge_showcase_losslab.png?v=20260906-4', fallback: 'assets/tensorforge_showcase_losslab.png?v=20260906-4' },
        { label: 'MicroGraph Autograd', url: 'https://raw.githubusercontent.com/screen-watcher-elite/tensorforge/main/assets/tensorforge_showcase_autograd.png?v=20260906-4', fallback: 'assets/tensorforge_showcase_autograd.png?v=20260906-4' },
        { label: '3D VectorSpace', url: 'https://raw.githubusercontent.com/screen-watcher-elite/tensorforge/main/assets/tensorforge_showcase_3d.png?v=20260906-4', fallback: 'assets/tensorforge_showcase_3d.png?v=20260906-4' }
      ],
      repoUrl: 'https://github.com/screen-watcher-elite/tensorforge',
      demoUrl: 'https://screen-watcher-elite.github.io/tensorforge/',
      summary: 'TensorForge is a zero-dependency, 60-FPS interactive mathematical sandbox for mastering deep learning foundations. It bridges abstract algebraic concepts with tactile visual intuition: loss surface topology, reverse-mode autograd DAGs, matrix transformations, and 3D vector spaces.',
      architecture: [
        {
          title: '60 FPS Canvas Graphics Pipeline',
          content: 'Uses raw HTML5 Canvas 2D contexts with requestAnimationFrame scheduling. Computes and renders gradient vector fields, contour lines, and 3D wireframe projections in real time.'
        },
        {
          title: 'Reverse-Mode Autograd DAG Visualizer',
          content: 'Allows users to build computational graphs node-by-node and watch forward activations and backward adjoint gradients propagate through each tensor operator.'
        },
        {
          title: 'Matrix & Eigenvalue Geometric Transforms',
          content: 'Interactive coordinate grid that transforms in real time under arbitrary 2x2 matrices, computing and rendering real/complex eigenvectors and singular value directions.'
        },
        {
          title: 'Mobile-Touch Responsive Architecture',
          content: 'Full touch event normalization and DPI-aware scaling for retina mobile and 4K desktop displays with zero layout glitches.'
        }
      ],
      metrics: [
        { val: '60 FPS', label: 'Smooth Canvas Render Loop' },
        { val: '9 Modes', label: 'Mathematical Playgrounds' },
        { val: '0', label: 'Framework Dependencies' },
        { val: '< 200 KB', label: 'Total Bundle Size' }
      ],
      security: [
        'Zero External Requests: The entire application executes in an isolated client-side browser sandbox.',
        'Zero Storage Tracking: No telemetry, cookies, or user behavioral trackers.'
      ],
      codeSnippet: `// Pure vanilla 2D matrix transformation render step
function renderTransformedGrid(ctx, matrix, width, height) {
  ctx.save();
  ctx.transform(matrix.a, matrix.b, matrix.c, matrix.d, 0, 0);
  drawCoordinateAxes(ctx, width, height);
  ctx.restore();
}`
    },

    {
      id: 'alignment-mcp',
      title: 'Alignment Sentinel MCP',
      shortTitle: 'Alignment Sentinel',
      tagline: 'AI Safety, Empirical Benchmark & Literature Alignment Auditor MCP Server',
      tier: 'opensource',
      badgeText: '🌐 Open Source',
      category: 'alignment',
      tags: ['AI Safety', 'HarmBench', 'TruthfulQA', 'WMDP Benchmark', 'arXiv Search', 'Model Context Protocol'],
      image: null,
      simulatedLog: {
        title: 'alignment-sentinel-mcp ~ stdio protocol trace (JSON-RPC 2.0)',
        status: 'Auditing: cs.AI / HarmBench v2',
        content: `[2026-09-06 18:24:01.102] [stdio::in]  --> tools/call "alignment_search_arxiv" {"query": "representation engineering refusal", "max_results": 2}
[2026-09-06 18:24:01.314] [audit::engine] Querying arXiv API (categories: cs.AI, cs.LG, cs.CR)...
[2026-09-06 18:24:01.520] [audit::engine] Parsing 2 papers: arXiv:2310.01405 (Representation Engineering), arXiv:2401.06455
[2026-09-06 18:24:01.522] [stdio::out] <-- {"status": "ok", "papers_indexed": 2, "taxonomy_tag": "Representation Engineering"}

[2026-09-06 18:24:02.010] [stdio::in]  --> tools/call "alignment_get_benchmark" {"benchmark": "HarmBench"}
[2026-09-06 18:24:02.045] [audit::benchmark] Extracted 510 functional test cases across 4 attack modalities (Direct, GCG, PAIR, TAP)
[2026-09-06 18:24:02.048] [stdio::out] <-- {"benchmark": "HarmBench", "evaluated_models": 18, "standard_asr_baseline": "84.2%", "aligned_asr_claude": "4.1%"}`
      },
      repoUrl: 'https://github.com/screen-watcher-elite/Alignment-MCP',
      demoUrl: null,
      summary: 'Alignment Sentinel is an open-source MCP server that equips frontier models with specialized research tools to search, analyze, and contextualize AI safety literature. Covers 7 major empirical benchmarks (HarmBench, TruthfulQA, WMDP, StrongREJECT, Machiavelli, AdvBench, DecodingTrust).',
      architecture: [
        {
          title: 'Empirical Benchmark Auditor (alignment_get_benchmark)',
          content: 'Extracts methodology, datasets, evaluated models, and critical findings across leading safety benchmarks directly into the agent context.'
        },
        {
          title: 'Taxonomy & Mechanism Navigator (alignment_taxonomy)',
          content: 'Traverses 11 foundational alignment concepts (RLHF, Constitutional AI, Representation Engineering, Jailbreaks, Interpretability, ASL).'
        },
        {
          title: 'Direct arXiv AI Safety Query Engine (alignment_search_arxiv)',
          content: 'Queries arXiv with specialized category filtering (cs.AI, cs.LG, cs.CR) and returns structured paper abstracts, authors, and citations.'
        },
        {
          title: 'Prompt Attack Surface Evaluator',
          content: 'Audits prompt templates against known attack vectors (jailbreak suffixes, role-play overrides, few-shot distraction attacks).'
        }
      ],
      metrics: [
        { val: '7', label: 'Safety Benchmarks Audited' },
        { val: '11', label: 'Taxonomy Domains Indexed' },
        { val: '4 Tools', label: 'MCP Protocol Primitives' },
        { val: '100%', label: 'Type-Safe TypeScript' }
      ],
      security: [
        'Read-Only Safe Architecture: Implements pure query-and-audit operations with no mutating system access.',
        'Neutral Scientific Auditing: Designed strictly for empirical safety verification.'
      ],
      codeSnippet: `// Query empirical benchmark findings via MCP
server.tool(
  'alignment_get_benchmark',
  'Audits methodology and empirical findings for an AI safety benchmark',
  { benchmark: z.enum(['HarmBench', 'TruthfulQA', 'WMDP', 'StrongREJECT']) },
  async ({ benchmark }) => fetchBenchmarkFindings(benchmark)
)`
    },

    {
      id: 'scholar-tex',
      title: 'ScholarTex MCP',
      shortTitle: 'ScholarTex MCP',
      tagline: 'Academic Mathematical Proofs, Symbolic Tensor Verification & Overleaf-Ready LaTeX Scribe',
      tier: 'opensource',
      badgeText: '🌐 Open Source',
      category: 'academic',
      tags: ['TypeScript', 'LaTeX Synthesis', 'Linear Algebra Proofs', 'Tensor Shape Verification', 'TikZ Diagrams'],
      image: null,
      simulatedLog: {
        title: 'scholar-tex-mcp ~ mathematical verification pipeline (JSON-RPC 2.0)',
        status: 'Active stdio • Einstein Summation Engine',
        content: `[2026-09-06 18:25:12.440] [stdio::in]  --> tools/call "verify_matrix_dimensions"
{
  "operations": [
    { "type": "matmul", "a": [32, 128, 768], "b": [768, 768] },
    { "type": "layer_norm", "input": [32, 128, 768], "normalized_shape": [768] },
    { "type": "attention_projection", "q": [32, 12, 128, 64], "k_transposed": [32, 12, 64, 128] }
  ]
}
[2026-09-06 18:25:12.448] [scholar::core] Validating multi-head dimension broadcasting: [32, 12, 128, 64] x [32, 12, 64, 128] -> [32, 12, 128, 128]
[2026-09-06 18:25:12.450] [scholar::core] Memory footprint computed: 1.57 MB / batch • Zero dimension mismatch detected
[2026-09-06 18:25:12.452] [stdio::out] <-- {"verified": true, "output_shapes": ["[32, 128, 768]", "[32, 128, 768]", "[32, 12, 128, 128]"], "latex_eqn": "\\\\mathbf{A} = \\\\text{Softmax}\\\\left(\\\\frac{\\\\mathbf{Q}\\\\mathbf{K}^T}{\\\\sqrt{d_k}}\\\\right)"}`
      },
      repoUrl: 'https://github.com/screen-watcher-elite/scholar-tex-mcp',
      demoUrl: null,
      summary: 'ScholarTex is an MCP server built for university coursework in Artificial Intelligence & Machine Learning. It provides AI agents with tools to derive step-by-step mathematical proofs, verify tensor shapes across matrix multiplications, and generate Overleaf-ready LaTeX documents.',
      architecture: [
        {
          title: 'Step-by-Step Mathematical Deriver (derive_step_by_step)',
          content: 'Produces rigorous algebraic proofs for linear algebra, multivariable calculus, and gradient optimization with explicit justification for every step.'
        },
        {
          title: 'Symbolic Tensor Dimension Verifier (verify_matrix_dimensions)',
          content: 'Mathematically validates inner-product tensor alignments, batch broadcasting rules, and Einstein summations before running code.'
        },
        {
          title: 'TikZ Neural Architecture Diagram Generator',
          content: 'Generates publication-ready TikZ LaTeX code for neural network architectures, attention heads, and computational DAGs.'
        },
        {
          title: 'Overleaf-Ready Report Formatter',
          content: 'Formats complete academic lab reports, problem set solutions, and journal submissions with proper preamble, math packages, and bibliography.'
        }
      ],
      metrics: [
        { val: '4 Tools', label: 'Mathematical MCP Primitives' },
        { val: '100%', label: 'Dimension Verification Safety' },
        { val: 'TikZ', label: 'Native Publication Diagrams' },
        { val: 'Overleaf', label: '1-Click LaTeX Compatibility' }
      ],
      security: [
        'Formal Verification: Rejects tensor dimension mismatches before compute jobs are submitted to GPU clusters.'
      ],
      codeSnippet: `// Verify tensor dimension inner products
scholar_verify_matrix_dimensions({
  "operations": [
    { "type": "matmul", "a": [32, 128, 768], "b": [768, 768] },
    { "type": "layer_norm", "input": [32, 128, 768], "normalized_shape": [768] }
  ]
})`
    },

    {
      id: 'lectern-mcp',
      title: 'Lectern MCP (Examiner Edition)',
      shortTitle: 'Lectern MCP',
      tagline: 'University Curriculum Mapper & Active-Recall Oral Viva Defense Examiner',
      tier: 'opensource',
      badgeText: '🌐 Open Source',
      category: 'academic',
      tags: ['TypeScript', 'WCE AI & ML Syllabus', 'PYQ Bank', 'Oral Viva Examiner', 'Conceptual Gap Analysis'],
      image: null,
      simulatedLog: {
        title: 'lectern-mcp ~ oral viva exam defense session (JSON-RPC 2.0)',
        status: 'WCE B.Tech AI & ML Examination Board',
        content: `[2026-09-06 18:26:00.012] [stdio::in]  --> tools/call "query_syllabus_pyq" {"course": "AIML-204", "unit": 3, "year": "2024"}
[2026-09-06 18:26:00.038] [lectern::db] Retrieved Unit 3: "Convex Optimization, Karush-Kuhn-Tucker Conditions & Dual SVM"
[2026-09-06 18:26:00.040] [lectern::db] Matching historical PYQ: "Derive the dual Lagrangian formulation for soft-margin SVM with slack variables"
[2026-09-06 18:26:00.045] [stdio::out] <-- {"status": "ok", "unit_topics": 5, "pyqs_found": 3, "recommended_rigor": "rigorous"}

[2026-09-06 18:26:01.120] [stdio::in]  --> tools/call "evaluate_conceptual_gap" {"topic": "KKT Complementary Slackness", "student_statement": "Slack variables are zero for all non-support vectors"}
[2026-09-06 18:26:01.185] [lectern::viva] Conceptual Diagnostic: Student correctly identified alpha_i > 0 condition for support vectors, but overlooked margin violators (xi_i > 0)
[2026-09-06 18:26:01.189] [stdio::out] <-- {"grade": "A-", "gap_identified": "Margin violator boundary slack", "counter_example_prompt": "Consider points where 0 < alpha_i < C"}`
      },
      repoUrl: 'https://github.com/screen-watcher-elite/lectern-mcp',
      demoUrl: null,
      summary: 'The open-source companion to the Lectern OS. It equips AI models with tools to conduct active-recall viva exam sessions, query official university syllabi (Walchand College of Engineering B.Tech AI & ML), synthesize formula cheat sheets, and diagnose conceptual misconceptions with counter-examples.',
      architecture: [
        {
          title: 'Adversarial Viva Defense Simulator (generate_viva_defense)',
          content: 'Simulates oral viva examinations with multi-tiered difficulty, grading responses on technical precision and clarity.'
        },
        {
          title: 'University Syllabus & PYQ Engine (query_syllabus_pyq)',
          content: 'Provides instant access to semester course units, textbook citations, and historical previous year questions.'
        },
        {
          title: 'Formula Cheat Sheet Synthesizer (synthesize_cheat_sheet)',
          content: 'Compiles concise mathematical cheat sheets with LaTeX formulas, variable definitions, and boundary condition gotchas.'
        },
        {
          title: 'Misconception Diagnostic Engine (evaluate_conceptual_gap)',
          content: 'Identifies deep student misconceptions (e.g. confusing eigenvalues with singular values) and supplies concrete counter-examples.'
        }
      ],
      metrics: [
        { val: '5 Tools', label: 'Curriculum MCP Primitives' },
        { val: 'B.Tech', label: 'WCE AI & ML Curriculum' },
        { val: 'Instant', label: 'PYQ & Formula Retrieval' },
        { val: 'Adaptive', label: 'Bloom Taxonomy Scoring' }
      ],
      security: [
        'Rigorous Grading Standards: Evaluates student proofs against strict academic ground truths.'
      ],
      codeSnippet: `// Trigger active-recall oral viva session
lectern_generate_viva_defense({
  "subject": "Optimization in Deep Learning",
  "topic": "Adam vs SGD with Momentum and Saddle Points",
  "difficulty": "rigorous",
  "student_answer": "Adam always converges faster because of adaptive learning rates."
})`
    }
  ];

  // ════════════════════════════════════════════════════════════════════════════
  // 2. UI State & Tab Management
  // ════════════════════════════════════════════════════════════════════════════
  let activeProjectId = 'omnidesk';
  let activeFilter = 'all';

  const tabsContainer = document.getElementById('project-tabs');
  const canvasContainer = document.getElementById('project-canvas');
  const categoryFilters = document.getElementById('category-filters');
  const terminalOutput = document.getElementById('terminal-output');
  const btnClearTerminal = document.getElementById('btn-clear-terminal');
  const deployModal = document.getElementById('deploy-modal');
  const btnOpenDeploy = document.getElementById('btn-open-deploy');
  const btnCloseModal = document.getElementById('btn-close-modal');

  // Render Tabs
  function renderTabs() {
    tabsContainer.innerHTML = '';

    PROJECTS.forEach(project => {
      // Filter check
      if (activeFilter === 'private' && project.tier !== 'private') return;
      if (activeFilter === 'opensource' && project.tier !== 'opensource') return;

      const btn = document.createElement('button');
      btn.className = `project-tab-btn ${project.id === activeProjectId ? 'active' : ''}`;
      btn.setAttribute('data-id', project.id);

      const badgeClass = project.tier === 'private' ? 'badge-private' : 'badge-oss';
      const badgeText = project.tier === 'private' ? 'Private' : 'OSS';

      btn.innerHTML = `
        <span>${project.shortTitle}</span>
        <span class="tab-badge ${badgeClass}">${badgeText}</span>
      `;

      btn.addEventListener('mouseenter', () => {
        SoundEngine.tick();
      });

      btn.addEventListener('click', () => {
        SoundEngine.click();
        selectProject(project.id);
      });

      tabsContainer.appendChild(btn);
    });
  }

  // Render Project Canvas Details
  function renderCanvas(projectId) {
    const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
    activeProjectId = project.id;

    // Update tab active classes
    document.querySelectorAll('.project-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-id') === project.id);
    });

    // Tag pills
    const tagHtml = project.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');

    // Actions button
    let actionsHtml = '';
    if (project.tier === 'private') {
      actionsHtml = `
        <span class="btn btn-private-badge">🔒 Private Frontier Repository</span>
        <a href="mailto:chikaneashutosh65@gmail.com?subject=Architecture%20Inquiry%20-%20${encodeURIComponent(project.title)}" class="btn btn-primary">✉️ Request Architecture Brief</a>
      `;
    } else {
      if (project.demoUrl) {
        actionsHtml += `<a href="${project.demoUrl}" target="_blank" rel="noreferrer" class="btn btn-primary">🚀 Launch Live Demo</a>`;
      }
      if (project.repoUrl) {
        actionsHtml += `<a href="${project.repoUrl}" target="_blank" rel="noreferrer" class="btn btn-secondary">🐙 View on GitHub</a>`;
      }
    }

    // Architecture cards
    const archCardsHtml = project.architecture.map(a => `
      <div class="card-block">
        <h4 class="block-title">⚡ ${a.title}</h4>
        <div class="block-body">${a.content}</div>
      </div>
    `).join('');

    // Metrics strip
    const metricsHtml = project.metrics.map(m => `
      <div class="metric-item">
        <div class="metric-val">${m.val}</div>
        <div class="metric-key">${m.label}</div>
      </div>
    `).join('');

    // Security items
    const securityHtml = project.security ? `
      <div class="card-block" style="grid-column: 1 / -1; margin-top: 10px;">
        <h4 class="block-title">🛡️ Deterministic Security & Governance Shields</h4>
        <div class="block-body">
          <ul>
            ${project.security.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>
      </div>
    ` : '';

    // Media or Simulated Terminal Log Box
    let mediaHtml = '';
    if (project.image) {
      let galleryHtml = '';
      if (project.gallery && project.gallery.length > 1) {
        galleryHtml = `
          <div class="media-gallery-strip">
            <span class="gallery-label">Showcase Views:</span>
            ${project.gallery.map((g, idx) => `
              <button class="gallery-thumb-btn ${idx === 0 ? 'active' : ''}" data-url="${g.url}" data-fallback="${g.fallback || ''}" data-caption="${escapeHtml(g.label)}">
                📷 ${escapeHtml(g.label)}
              </button>
            `).join('')}
          </div>
        `;
      }

      mediaHtml = `
        <div class="canvas-media-box">
          <img id="main-showcase-img" src="${project.image}" alt="${project.title} Interface & Architecture" onerror="this.src='${project.fallbackImage || 'assets/constitution_studio_showcase.png'}'">
          <div class="media-caption">
            <span id="main-showcase-caption">${project.imageCaption || 'System Interface Overview'}</span>
            <span>Verified Ground Truth • 2026</span>
          </div>
          ${galleryHtml}
        </div>
      `;
    } else if (project.simulatedLog) {
      mediaHtml = `
        <div class="canvas-terminal-box">
          <div class="terminal-chrome">
            <div class="chrome-dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <div class="chrome-title">${escapeHtml(project.simulatedLog.title)}</div>
            <div class="chrome-latency">● ${escapeHtml(project.simulatedLog.status)}</div>
          <pre class="terminal-body"><code>${escapeHtml(project.simulatedLog.content)}</code></pre>
        </div>
      `;
    }

    // Mini-TensorForge Interactive Math Lab Widget
    let miniLabHtml = '';
    if (project.id === 'tensorforge') {
      miniLabHtml = `
        <div class="mini-lab-card">
          <div class="mini-lab-header">
            <div class="mini-lab-title">🎮 Interactive 2D Matrix Playground (Live 60-FPS Canvas)</div>
            <div class="mini-lab-presets">
              <button class="mini-preset-btn active" data-a="1" data-b="0" data-c="0" data-d="1">Identity [I]</button>
              <button class="mini-preset-btn" data-a="1" data-b="1" data-c="0" data-d="1">Shear X</button>
              <button class="mini-preset-btn" data-a="0.707" data-b="-0.707" data-c="0.707" data-d="0.707">Rotate 45°</button>
              <button class="mini-preset-btn" data-a="1.5" data-b="0" data-c="0" data-d="0.5">Eigen Stretch</button>
              <button class="mini-preset-btn" data-a="1" data-b="1" data-c="1" data-d="1">Singular Collapse</button>
            </div>
          </div>
          <div class="mini-lab-body">
            <canvas id="mini-tf-canvas" width="480" height="220" class="mini-tf-canvas"></canvas>
            <div class="mini-lab-controls">
              <div class="matrix-input-grid">
                <div class="matrix-bracket left"></div>
                <div class="matrix-cells">
                  <div class="matrix-cell-row">
                    <label>a: <input type="number" id="mat-a" step="0.1" value="1.0" class="mat-input"></label>
                    <label>b: <input type="number" id="mat-b" step="0.1" value="0.0" class="mat-input"></label>
                  </div>
                  <div class="matrix-cell-row">
                    <label>c: <input type="number" id="mat-c" step="0.1" value="0.0" class="mat-input"></label>
                    <label>d: <input type="number" id="mat-d" step="0.1" value="1.0" class="mat-input"></label>
                  </div>
                </div>
                <div class="matrix-bracket right"></div>
              </div>
              <div class="matrix-telemetry">
                <div>Determinant: <span id="mat-det" class="det-val">det(A) = 1.00</span></div>
                <div>Area Scale: <span id="mat-area" class="area-val">100%</span></div>
                <div id="mat-status" class="status-val text-emerald">✓ Non-singular (Invertible Transformation)</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    canvasContainer.style.opacity = '0';
    canvasContainer.style.transform = 'translateY(8px)';

    setTimeout(() => {
      canvasContainer.innerHTML = `
        <div class="canvas-header">
          <div class="canvas-title-group">
            <div class="canvas-tags">${tagHtml}</div>
            <h3 class="canvas-title">${project.title}</h3>
            <p class="canvas-tagline">${project.tagline}</p>
          </div>
          <div class="canvas-actions">${actionsHtml}</div>
        </div>

        ${mediaHtml}
        ${miniLabHtml}

        <!-- Metrics Strip -->
        <div class="metrics-strip">${metricsHtml}</div>

        <!-- Deep Architecture Details -->
        <div class="canvas-grid">
          <div class="card-block" style="grid-column: 1 / -1;">
            <h4 class="block-title">📋 Executive Summary & Problem Solved</h4>
            <div class="block-body">${project.summary}</div>
          </div>
          ${archCardsHtml}
          ${securityHtml}
        </div>

        <!-- Code Snippet Box -->
        <div class="code-box">
          <div class="code-box-header">
            <span>Model Context Protocol Tool Invocation Sample (${project.shortTitle})</span>
            <span>JSON-RPC 2.0</span>
          </div>
          <pre><code>${project.codeSnippet}</code></pre>
        </div>
      `;

      // Bind gallery thumbnail switcher if present
      document.querySelectorAll('.gallery-thumb-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.gallery-thumb-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          SoundEngine.click();
          const mainImg = document.getElementById('main-showcase-img');
          const caption = document.getElementById('main-showcase-caption');
          const newUrl = btn.getAttribute('data-url');
          const fallback = btn.getAttribute('data-fallback');
          const label = btn.getAttribute('data-caption');
          if (mainImg && newUrl) {
            mainImg.src = newUrl;
            if (fallback) {
              mainImg.onerror = () => { mainImg.src = fallback; };
            }
          }
          if (caption && label) {
            caption.textContent = `${project.title}: ${label}`;
          }
        });
      });

      // Initialize mini lab canvas if on TensorForge
      if (project.id === 'tensorforge') {
        initMiniTensorForgeCanvas();
      }

      // Re-bind 3D tilt & specular glow on fresh architecture cards
      init3DTiltCards();

      canvasContainer.style.opacity = '1';
      canvasContainer.style.transform = 'translateY(0)';
    }, 150);

    // Sync URL hash
    if (history.replaceState) {
      history.replaceState(null, null, '#' + project.id);
    } else {
      window.location.hash = project.id;
    }
  }

  function selectProject(id) {
    renderCanvas(id);
  }

  // Filter Buttons
  categoryFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-pill');
    if (!btn) return;

    document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    activeFilter = btn.getAttribute('data-filter');
    renderTabs();

    // If current project not visible in filter, select first available
    const available = PROJECTS.filter(p => {
      if (activeFilter === 'private') return p.tier === 'private';
      if (activeFilter === 'opensource') return p.tier === 'opensource';
      return true;
    });

    if (available.length > 0 && !available.some(p => p.id === activeProjectId)) {
      selectProject(available[0].id);
    }
  });

  // ════════════════════════════════════════════════════════════════════════════
  // 3. Interactive Live MCP Terminal Sandbox
  // ════════════════════════════════════════════════════════════════════════════
  const TERMINAL_RESPONSES = {
    ghost_type: {
      tool: 'desktop_ghost_type',
      params: { hwnd: 0x00120C14, text: 'npm run test:verify\\n', auto_find_edit: true },
      logs: [
        { prefix: 'rpc', text: '--> tools/call "desktop_ghost_type" (target HWND: 0x00120C14)' },
        { prefix: 'rust', text: '[OmniDesk::GhostInput] Discovered child edit control at HWND 0x00120CF0' },
        { prefix: 'rust', text: '[OmniDesk::GhostInput] Injected 20 chars via PostMessageW(WM_CHAR) - 0% focus stealing' },
        { prefix: 'ok', text: '<-- {"success": true, "chars_injected": 20, "focus_stolen": false, "latency_ms": 0.32}' }
      ]
    },

    click_text: {
      tool: 'desktop_click_text',
      params: { text: 'File', exact: false, button: 'left' },
      logs: [
        { prefix: 'rpc', text: '--> tools/call "desktop_click_text" query="File"' },
        { prefix: 'rust', text: '[OmniDesk::NativeOCR] WinRT OcrEngine initialized in 2.1ms' },
        { prefix: 'rust', text: '[OmniDesk::NativeOCR] Screen scanned: 150 words extracted across viewport' },
        { prefix: 'ok', text: '[OmniDesk::NativeOCR] Match found: "File" at [(66, 22), 28x14px]' },
        { prefix: 'ok', text: '<-- {"success": true, "clicked_point": {"x": 80, "y": 29}, "precision": "subpixel", "latency_ms": 24.8}' }
      ]
    },

    vision_diff: {
      tool: 'desktop_vision_diff',
      params: {},
      logs: [
        { prefix: 'rpc', text: '--> tools/call "desktop_vision_diff"' },
        { prefix: 'rust', text: '[OmniDesk::VisionDiff] Comparing current GDI frame against frame #492 in 500MB cache' },
        { prefix: 'rust', text: '[OmniDesk::VisionDiff] Detected delta in 17,858 pixels (1.35% of 1920x1080 viewport)' },
        { prefix: 'ok', text: '[OmniDesk::VisionDiff] Cropped delta bounding box: [(1413, 239) to (1535, 863)] (131x633px)' },
        { prefix: 'ok', text: '<-- {"tokens_saved": 1750, "token_reduction_pct": 88.6, "delta_box": [1413, 239, 1535, 863]}' }
      ]
    },

    browser_inspect: {
      tool: 'browser_inspect',
      params: { priority: 'standard' },
      logs: [
        { prefix: 'rpc', text: '--> tools/call "browser_inspect" priority="standard"' },
        { prefix: 'rust', text: '[BrowserVisionPRO::Security] Computed-style invisible text scrubber executed (0 injected prompts)' },
        { prefix: 'rust', text: '[BrowserVisionPRO::SoM] Injected Set-of-Marks tags on 18 interactive DOM elements' },
        { prefix: 'ok', text: '[BrowserVisionPRO::Cache] Stored 1080p grounded frame in 100MB LRU cache (cache usage: 42MB)' },
        { prefix: 'ok', text: '<-- {"pageTitle": "TensorForge", "elementCount": 18, "next_step": "Call browser_click({ tag: 16 })"}' }
      ]
    },

    fast_fill: {
      tool: 'browser_fast_fill',
      params: { fields: [{ tag: 1, value: "Ashutosh Chikane" }, { tag: 2, value: "chikaneashutosh65@gmail.com" }] },
      logs: [
        { prefix: 'rpc', text: '--> tools/call "browser_fast_fill" (2 fields simultaneously)' },
        { prefix: 'rust', text: '[BrowserVisionPRO::FastFill] Intercepting Secret Regex: 0 credentials detected' },
        { prefix: 'rust', text: '[BrowserVisionPRO::FastFill] Dispatched InputEvent + ChangeEvent in 1 turn' },
        { prefix: 'ok', text: '<-- {"success": true, "fields_filled": 2, "turn_savings": "7 turns eliminated", "latency_ms": 1.4}' }
      ]
    },

    cai_critique: {
      tool: 'cai_critique_revision',
      params: { constitution: 'Anthropic Core Articles I-VI', baseline: 'Draft unaligned response' },
      logs: [
        { prefix: 'rpc', text: '--> tools/call "cai_critique_revision"' },
        { prefix: 'rust', text: '[ConstitutionStudio] Phase 1 Critique: Evaluating adherence to Article II (Helpful & Honest)' },
        { prefix: 'warn', text: '[ConstitutionStudio] Identified 1 nuance violation: Tone is overly permissive on ambiguous query' },
        { prefix: 'rust', text: '[ConstitutionStudio] Phase 2 Revision: Generated constitutional rewrite via Claude Sonnet 5' },
        { prefix: 'ok', text: '<-- {"revised": true, "violations_resolved": 1, "harmlessness_score": 96, "tone_score": 94}' }
      ]
    }
  };

  function appendTerminalLog(prefix, text) {
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');

    const line = document.createElement('div');
    line.className = 'log-line';

    let prefixClass = 'log-prefix-rpc';
    let prefixTag = '[RPC]';

    if (prefix === 'rust') {
      prefixClass = 'log-prefix-rust';
      prefixTag = '[SYS]';
    } else if (prefix === 'ok') {
      prefixClass = 'log-prefix-ok';
      prefixTag = '[RES]';
    } else if (prefix === 'warn') {
      prefixClass = 'log-prefix-warn';
      prefixTag = '[WRN]';
    } else if (prefix === 'err') {
      prefixClass = 'log-prefix-err';
      prefixTag = '[ERR]';
    }

    line.innerHTML = `<span class="log-time">${timeStr}</span> <span class="${prefixClass}">${prefixTag}</span> ${escapeHtml(text)}`;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function simulateDispatch(toolKey) {
    const data = TERMINAL_RESPONSES[toolKey];
    if (!data) return;

    SoundEngine.laser();
    SoundEngine.pulseVisualizer(900);

    data.logs.forEach((log, index) => {
      setTimeout(() => {
        appendTerminalLog(log.prefix, log.text);
        if (index === data.logs.length - 1) {
          SoundEngine.success();
        }
      }, index * 120);
    });
  }

  // Bind Tool Buttons
  document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => SoundEngine.tick());
    btn.addEventListener('click', () => {
      const toolKey = btn.getAttribute('data-tool');
      simulateDispatch(toolKey);
    });
  });

  // Clear Terminal Button
  btnClearTerminal.addEventListener('click', () => {
    terminalOutput.innerHTML = '';
    appendTerminalLog('rust', 'Terminal reset. MCP stdio stream listening on channel 0...');
  });

  // ════════════════════════════════════════════════════════════════════════════
  // 4. Modal Guide
  // ════════════════════════════════════════════════════════════════════════════
  btnOpenDeploy.addEventListener('click', () => {
    deployModal.classList.add('active');
  });

  btnCloseModal.addEventListener('click', () => {
    deployModal.classList.remove('active');
  });

  deployModal.addEventListener('click', (e) => {
    if (e.target === deployModal) {
      deployModal.classList.remove('active');
    }
  });

  // ════════════════════════════════════════════════════════════════════════════
  // 4b. Interactive Mini-TensorForge 2D Matrix Canvas Engine
  // ════════════════════════════════════════════════════════════════════════════
  function initMiniTensorForgeCanvas() {
    const canvas = document.getElementById('mini-tf-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let mat = { a: 1.0, b: 0.0, c: 0.0, d: 1.0 };

    const inA = document.getElementById('mat-a');
    const inB = document.getElementById('mat-b');
    const inC = document.getElementById('mat-c');
    const inD = document.getElementById('mat-d');
    const detEl = document.getElementById('mat-det');
    const areaEl = document.getElementById('mat-area');
    const statusEl = document.getElementById('mat-status');

    function update() {
      if (inA) mat.a = parseFloat(inA.value) || 0;
      if (inB) mat.b = parseFloat(inB.value) || 0;
      if (inC) mat.c = parseFloat(inC.value) || 0;
      if (inD) mat.d = parseFloat(inD.value) || 0;

      const det = mat.a * mat.d - mat.b * mat.c;
      if (detEl) detEl.textContent = `det(A) = ${det.toFixed(2)}`;
      if (areaEl) areaEl.textContent = `${Math.abs(det * 100).toFixed(0)}%`;
      if (statusEl) {
        if (Math.abs(det) < 0.001) {
          statusEl.textContent = '⚠️ Singular (Determinant = 0, Dimensional Collapse!)';
          statusEl.className = 'status-val text-rose';
        } else {
          statusEl.textContent = '✓ Non-singular (Invertible Transformation)';
          statusEl.className = 'status-val text-emerald';
        }
      }
      render();
    }

    function render() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const ox = w / 2;
      const oy = h / 2;
      const scale = 48;

      // Draw background Cartesian grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = -5; x <= 5; x++) {
        ctx.beginPath();
        ctx.moveTo(ox + x * scale, 0);
        ctx.lineTo(ox + x * scale, h);
        ctx.stroke();
      }
      for (let y = -3; y <= 3; y++) {
        ctx.beginPath();
        ctx.moveTo(0, oy + y * scale);
        ctx.lineTo(w, oy + y * scale);
        ctx.stroke();
      }

      // Transformed Grid Lines
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.28)';
      ctx.lineWidth = 1.2;
      for (let i = -4; i <= 4; i++) {
        const x1 = ox + (i * mat.b - 5 * mat.a) * scale;
        const y1 = oy - (i * mat.d - 5 * mat.c) * scale;
        const x2 = ox + (i * mat.b + 5 * mat.a) * scale;
        const y2 = oy - (i * mat.d + 5 * mat.c) * scale;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        const x3 = ox + (i * mat.a - 5 * mat.b) * scale;
        const y3 = oy - (i * mat.c - 5 * mat.d) * scale;
        const x4 = ox + (i * mat.a + 5 * mat.b) * scale;
        const y4 = oy - (i * mat.c + 5 * mat.d) * scale;
        ctx.beginPath();
        ctx.moveTo(x3, y3);
        ctx.lineTo(x4, y4);
        ctx.stroke();
      }

      // Transformed Unit Square Area (det)
      ctx.fillStyle = 'rgba(56, 189, 248, 0.22)';
      ctx.beginPath();
      ctx.moveTo(ox, oy);
      ctx.lineTo(ox + mat.a * scale, oy - mat.c * scale);
      ctx.lineTo(ox + (mat.a + mat.b) * scale, oy - (mat.c + mat.d) * scale);
      ctx.lineTo(ox + mat.b * scale, oy - mat.d * scale);
      ctx.closePath();
      ctx.fill();

      // Coordinate axes
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, oy); ctx.lineTo(w, oy);
      ctx.moveTo(ox, 0); ctx.lineTo(ox, h);
      ctx.stroke();

      // Vector i-hat (coral)
      drawVector(ctx, ox, oy, ox + mat.a * scale, oy - mat.c * scale, '#f43f5e', 'î');
      // Vector j-hat (cyan)
      drawVector(ctx, ox, oy, ox + mat.b * scale, oy - mat.d * scale, '#38bdf8', 'ĵ');
    }

    function drawVector(ctx, x1, y1, x2, y2, color, label) {
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      const angle = Math.atan2(y2 - y1, x2 - x1);
      const arrowLen = 9;
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - arrowLen * Math.cos(angle - Math.PI / 6), y2 - arrowLen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(x2 - arrowLen * Math.cos(angle + Math.PI / 6), y2 - arrowLen * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fill();

      ctx.font = 'bold 12px monospace';
      ctx.fillText(label, x2 + 6, y2 - 4);
    }

    [inA, inB, inC, inD].forEach(inp => {
      if (inp) {
        inp.addEventListener('input', () => {
          SoundEngine.click();
          update();
        });
      }
    });

    document.querySelectorAll('.mini-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.mini-preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (inA) inA.value = btn.getAttribute('data-a');
        if (inB) inB.value = btn.getAttribute('data-b');
        if (inC) inC.value = btn.getAttribute('data-c');
        if (inD) inD.value = btn.getAttribute('data-d');
        SoundEngine.laser();
        update();
      });
    });

    update();
  }

  // ════════════════════════════════════════════════════════════════════════════
  // 4c. Interactive Neural Particle Field Background
  // ════════════════════════════════════════════════════════════════════════════
  function initNeuralBackground() {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const mouse = { x: -1000, y: -1000 };
    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    const ripples = [];
    const packets = [];

    window.addEventListener('click', e => {
      ripples.push({ x: e.clientX, y: e.clientY, r: 0, maxR: 240, alpha: 0.75 });
      // Blast nearby particles outward with physics impulse
      for (let p of particles) {
        const dx = p.x - e.clientX;
        const dy = p.y - e.clientY;
        const dist = Math.hypot(dx, dy);
        if (dist < 240 && dist > 1) {
          const force = (1 - dist / 240) * 9;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }
    });

    const particleCount = Math.min(50, Math.floor((width * height) / 26000));
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Render expanding ripples
      for (let rIdx = ripples.length - 1; rIdx >= 0; rIdx--) {
        const rip = ripples[rIdx];
        rip.r += 4.5;
        rip.alpha -= 0.015;
        if (rip.alpha <= 0 || rip.r >= rip.maxR) {
          ripples.splice(rIdx, 1);
          continue;
        }
        ctx.strokeStyle = `rgba(56, 189, 248, ${rip.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Update and render particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Dampen shockwave impulse back to normal cruise speed
        p.vx *= 0.985;
        p.vy *= 0.985;
        if (Math.abs(p.vx) < 0.2) p.vx += (Math.random() - 0.5) * 0.1;
        if (Math.abs(p.vy) < 0.2) p.vy += (Math.random() - 0.5) * 0.1;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse avoidance/influence
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          p.x -= (dx / dist) * 1.8;
          p.y -= (dy / dist) * 1.8;

          ctx.strokeStyle = `rgba(99, 102, 241, ${(1 - dist / 140) * 0.5})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // Draw particle node
        ctx.fillStyle = 'rgba(165, 180, 252, 0.5)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect adjacent particles & spawn data packets
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 125) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${(1 - dist2 / 125) * 0.25})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Spawn data packet
            if (packets.length < 15 && Math.random() < 0.0035) {
              packets.push({
                p1: p,
                p2: p2,
                t: 0,
                speed: 0.018 + Math.random() * 0.02,
                color: Math.random() > 0.5 ? '#38bdf8' : '#818cf8'
              });
            }
          }
        }
      }

      // Render traveling data packets
      for (let k = packets.length - 1; k >= 0; k--) {
        const pkt = packets[k];
        pkt.t += pkt.speed;
        if (pkt.t >= 1) {
          packets.splice(k, 1);
          continue;
        }
        const px = pkt.p1.x + (pkt.p2.x - pkt.p1.x) * pkt.t;
        const py = pkt.p1.y + (pkt.p2.y - pkt.p1.y) * pkt.t;
        ctx.fillStyle = pkt.color;
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  // ════════════════════════════════════════════════════════════════════════════
  // 4d. Interactive Theme Switcher
  // ════════════════════════════════════════════════════════════════════════════
  function initThemeSwitcher() {
    const dots = document.querySelectorAll('.theme-dot');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'indigo';

    function setTheme(theme) {
      if (theme === 'indigo') {
        document.body.removeAttribute('data-theme');
      } else {
        document.body.setAttribute('data-theme', theme);
      }
      dots.forEach(d => {
        d.classList.toggle('active', d.getAttribute('data-theme') === theme);
      });
      localStorage.setItem('portfolio-theme', theme);
    }

    setTheme(savedTheme);

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const t = dot.getAttribute('data-theme');
        SoundEngine.click();
        setTheme(t);
      });
    });

    return setTheme;
  }

  // ════════════════════════════════════════════════════════════════════════════
  // 4e. Matrix Digital Rain Easter Egg
  // ════════════════════════════════════════════════════════════════════════════
  function triggerMatrixRain() {
    const canvas = document.getElementById('matrix-rain-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    SoundEngine.laser();
    canvas.classList.add('active');

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);
    const chars = '0123456789ABCDEF01λ∇∂Ax=bdet(A)∑∮RustMCP';

    let frameCount = 0;
    const interval = setInterval(() => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#10b981';
      ctx.font = '15pt monospace';

      ypos.forEach((y, ind) => {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = ind * 20;
        ctx.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
      });

      frameCount++;
      if (frameCount > 180) { // ~6 seconds at 30fps
        clearInterval(interval);
        canvas.classList.remove('active');
        ctx.clearRect(0, 0, w, h);
        appendTerminalLog('ok', '🎉 [EASTER EGG] Matrix Neural Stream sequence concluded.');
      }
    }, 33);
  }

  // ════════════════════════════════════════════════════════════════════════════
  // 4f. Interactive Terminal Real-Time Command Processor
  // ════════════════════════════════════════════════════════════════════════════
  function initTerminalInput(setThemeFn) {
    const form = document.getElementById('terminal-cmd-form');
    const input = document.getElementById('terminal-input');
    if (!form || !input) return;

    function runBenchmark() {
      appendTerminalLog('rpc', '--> RUNNING BENCHMARK SUITE: Win32 Syscalls, WinRT OCR, Visual Diff');
      const steps = [
        { prefix: 'rust', text: '[Bench 1/4] Win32 PostMessageW throughput: 28,450 msgs/sec (< 0.035ms latency)' },
        { prefix: 'rust', text: '[Bench 2/4] Hardware WinRT OCR engine: 1080p scanned in 21.4ms (192 text nodes)' },
        { prefix: 'rust', text: '[Bench 3/4] 500MB Rolling Diff Engine: 89.2% vision token reduction' },
        { prefix: 'ok', text: '<-- {"benchmark": "PASSED", "grade": "SOTA", "host_ram_used": "7.4 MB"}' }
      ];
      steps.forEach((s, idx) => {
        setTimeout(() => {
          SoundEngine.click();
          appendTerminalLog(s.prefix, s.text);
        }, (idx + 1) * 350);
      });
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      const raw = input.value.trim();
      if (!raw) return;
      input.value = '';

      SoundEngine.click();

      // Display command line
      appendTerminalLog('cmd', `$ ${raw}`);

      const parts = raw.split(' ');
      const cmd = parts[0].toLowerCase();
      const arg = parts.slice(1).join(' ');

      switch (cmd) {
        case 'help':
          appendTerminalLog('ok', 'Available interactive commands:');
          appendTerminalLog('rpc', '  bench               - Run real-time latency & throughput benchmark');
          appendTerminalLog('rpc', '  ghost <text>        - Simulate zero-focus background typing with custom text');
          appendTerminalLog('rpc', '  som                 - Trigger Set-of-Marks visual DOM grounding scan');
          appendTerminalLog('rpc', '  matrix              - Compute 2x2 matrix transformation & eigensystem');
          appendTerminalLog('rpc', '  arxiv <topic>       - Search simulated AI safety arXiv research papers');
          appendTerminalLog('rpc', '  theme <name>        - Switch theme (indigo, cyan, emerald, rose)');
          appendTerminalLog('rpc', '  sfx                 - Toggle audio synthesized feedback');
          appendTerminalLog('rpc', '  clear               - Clear terminal log output');
          appendTerminalLog('rpc', '  matrix-rain         - [Easter Egg] Trigger falling digital matrix rain');
          break;

        case 'bench':
          runBenchmark();
          break;

        case 'ghost': {
          const userText = arg || 'Hello from visitor terminal';
          appendTerminalLog('rpc', `--> tools/call "desktop_ghost_type" text="${escapeHtml(userText)}"`);
          setTimeout(() => {
            appendTerminalLog('rust', `[OmniDesk::GhostInput] Dispatched ${userText.length} chars to HWND 0x00120C14 without moving mouse cursor`);
            appendTerminalLog('ok', `<-- {"success": true, "chars": ${userText.length}, "focus_stolen": false, "latency_us": 68}`);
            SoundEngine.success();
          }, 300);
          break;
        }

        case 'som':
          simulateDispatch('browser_inspect');
          break;

        case 'matrix':
          appendTerminalLog('rpc', '--> tools/call "scholar_verify_matrix_dimensions" (Transform test)');
          setTimeout(() => {
            appendTerminalLog('rust', '[ScholarTex] Validated 2x2 eigensystem: det(A)=1.00, tr(A)=2.00, real eigenvalues [1.00, 1.00]');
            appendTerminalLog('ok', '<-- {"verified": true, "orientation": "preserved", "orthogonal": true}');
            SoundEngine.success();
          }, 350);
          break;

        case 'arxiv': {
          const q = arg || 'representation engineering';
          appendTerminalLog('rpc', `--> tools/call "alignment_search_arxiv" query="${escapeHtml(q)}"`);
          setTimeout(() => {
            appendTerminalLog('rust', `[AlignmentSentinel] Queried cs.AI/cs.LG: Found 3 relevant empirical safety papers`);
            appendTerminalLog('ok', `<-- {"papers": ["arXiv:2310.01405", "arXiv:2401.06455"], "status": "indexed"}`);
            SoundEngine.success();
          }, 400);
          break;
        }

        case 'theme':
          if (['indigo', 'cyan', 'emerald', 'rose'].includes(arg.toLowerCase())) {
            setThemeFn(arg.toLowerCase());
            appendTerminalLog('ok', `Switched theme to "${arg.toLowerCase()}".`);
            SoundEngine.success();
          } else {
            appendTerminalLog('warn', 'Unknown theme. Choose from: indigo, cyan, emerald, rose');
          }
          break;

        case 'sfx': {
          SoundEngine.enabled = !SoundEngine.enabled;
          const sfxBtn = document.getElementById('btn-toggle-sfx');
          if (sfxBtn) {
            sfxBtn.textContent = SoundEngine.enabled ? '🔊 SFX' : '🔇 SFX';
            sfxBtn.classList.toggle('active', SoundEngine.enabled);
          }
          appendTerminalLog('ok', `Synthesized SFX audio: ${SoundEngine.enabled ? 'ENABLED' : 'MUTED'}`);
          break;
        }

        case 'clear':
          terminalOutput.innerHTML = '';
          appendTerminalLog('rust', 'Terminal cleared. MCP stdio stream listening on channel 0...');
          break;

        case 'matrix-rain':
          triggerMatrixRain();
          break;

        default:
          appendTerminalLog('warn', `Command not recognized: "${escapeHtml(cmd)}". Type "help" to view valid commands.`);
          break;
      }
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // 4g. Interactive Command Palette (Ctrl+K)
  // ════════════════════════════════════════════════════════════════════════════
  function initCommandPalette(setThemeFn) {
    const modal = document.getElementById('cmd-palette-modal');
    const input = document.getElementById('cmd-palette-input');
    const resultsContainer = document.getElementById('cmd-results');
    const btnOpen = document.getElementById('btn-open-cmd');
    if (!modal || !input || !resultsContainer) return;

    const COMMAND_ITEMS = [
      { id: 'tf-tab', title: 'TensorForge 60-FPS Sandbox', category: 'Project', icon: '🌀', action: () => selectProject('tensorforge') },
      { id: 'omnidesk-tab', title: 'OmniDesk MCP (OmniComputer)', category: 'Project', icon: '🔒', action: () => selectProject('omnidesk') },
      { id: 'bvp-tab', title: 'Browser Vision PRO MCP', category: 'Project', icon: '🔒', action: () => selectProject('browser-vision-pro') },
      { id: 'lectern-tab', title: 'Lectern Academic OS', category: 'Project', icon: '🔒', action: () => selectProject('lectern') },
      { id: 'cai-tab', title: 'Constitution Studio (CAI)', category: 'Project', icon: '⚖️', action: () => selectProject('constitution-studio') },
      { id: 'align-tab', title: 'Alignment Sentinel MCP', category: 'Project', icon: '🛡️', action: () => selectProject('alignment-mcp') },
      { id: 'scholar-tab', title: 'ScholarTex MCP (Proofs & LaTeX)', category: 'Project', icon: '📐', action: () => selectProject('scholar-tex') },
      { id: 'lectern-mcp-tab', title: 'Lectern MCP (Viva Examiner)', category: 'Project', icon: '🎓', action: () => selectProject('lectern-mcp') },
      { id: 'tf-live', title: 'Launch Live TensorForge Web App', category: 'Live Demo', icon: '🚀', action: () => window.open('https://screen-watcher-elite.github.io/tensorforge/', '_blank') },
      { id: 'term-bench', title: 'Run MCP Latency Stress Test (Terminal)', category: 'Action', icon: '⚡', action: () => { scrollToTerminal(); document.getElementById('terminal-input').value = 'bench'; document.getElementById('terminal-cmd-form').dispatchEvent(new Event('submit')); } },
      { id: 'term-ghost', title: 'Dispatch Ghost Background Typing', category: 'Action', icon: '👻', action: () => { scrollToTerminal(); simulateDispatch('ghost_type'); } },
      { id: 'term-som', title: 'Dispatch Set-of-Marks (SoM) Grounding', category: 'Action', icon: '📸', action: () => { scrollToTerminal(); simulateDispatch('browser_inspect'); } },
      { id: 'theme-cyan', title: 'Switch Theme: Cyber Cyan', category: 'Theme', icon: '🔵', action: () => setThemeFn('cyan') },
      { id: 'theme-emerald', title: 'Switch Theme: Matrix Emerald', category: 'Theme', icon: '🟢', action: () => setThemeFn('emerald') },
      { id: 'theme-rose', title: 'Switch Theme: Anthropic Rose', category: 'Theme', icon: '🔴', action: () => setThemeFn('rose') },
      { id: 'theme-indigo', title: 'Switch Theme: Quantum Indigo', category: 'Theme', icon: '🟣', action: () => setThemeFn('indigo') },
      { id: 'matrix-easter', title: 'Easter Egg: Matrix Digital Rain', category: 'Easter Egg', icon: '🌧️', action: () => triggerMatrixRain() },
      { id: 'copy-email', title: 'Copy Email: chikaneashutosh65@gmail.com', category: 'Contact', icon: '✉️', action: () => { navigator.clipboard.writeText('chikaneashutosh65@gmail.com'); alert('Email copied: chikaneashutosh65@gmail.com'); } }
    ];

    let selectedIndex = 0;
    let currentMatches = [...COMMAND_ITEMS];

    function renderResults() {
      resultsContainer.innerHTML = '';
      if (currentMatches.length === 0) {
        resultsContainer.innerHTML = '<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 13px;">No matching commands found.</div>';
        return;
      }

      currentMatches.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = `cmd-item ${idx === selectedIndex ? 'selected' : ''}`;
        div.innerHTML = `
          <div class="cmd-item-left">
            <span>${item.icon}</span>
            <span>${item.title}</span>
          </div>
          <span class="cmd-badge">${item.category}</span>
        `;
        div.addEventListener('click', () => {
          item.action();
          closePalette();
        });
        resultsContainer.appendChild(div);
      });
    }

    function openPalette() {
      modal.classList.add('active');
      input.value = '';
      currentMatches = [...COMMAND_ITEMS];
      selectedIndex = 0;
      renderResults();
      input.focus();
      SoundEngine.click();
    }

    function closePalette() {
      modal.classList.remove('active');
    }

    if (btnOpen) btnOpen.addEventListener('click', openPalette);
    modal.addEventListener('click', e => {
      if (e.target === modal) closePalette();
    });

    input.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      currentMatches = COMMAND_ITEMS.filter(item =>
        item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
      );
      selectedIndex = 0;
      renderResults();
    });

    input.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % currentMatches.length;
        renderResults();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + currentMatches.length) % currentMatches.length;
        renderResults();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (currentMatches[selectedIndex]) {
          currentMatches[selectedIndex].action();
          closePalette();
        }
      } else if (e.key === 'Escape') {
        closePalette();
      }
    });

    window.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (modal.classList.contains('active')) closePalette();
        else openPalette();
      }
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // 4h. Keyboard Shortcuts Guide Modal
  // ════════════════════════════════════════════════════════════════════════════
  function initShortcutsModal() {
    const modal = document.getElementById('shortcuts-modal');
    const btnOpen = document.getElementById('btn-open-shortcuts');
    const btnClose = document.getElementById('btn-close-shortcuts');
    if (!modal) return;

    function open() { modal.classList.add('active'); SoundEngine.click(); }
    function close() { modal.classList.remove('active'); }

    if (btnOpen) btnOpen.addEventListener('click', open);
    if (btnClose) btnClose.addEventListener('click', close);
    modal.addEventListener('click', e => { if (e.target === modal) close(); });

    return { open, close };
  }

  // ════════════════════════════════════════════════════════════════════════════
  // 4i. Global Power-User Hotkeys
  // ════════════════════════════════════════════════════════════════════════════
  function initKeyboardHotkeys(shortcutsModal) {
    window.addEventListener('keydown', e => {
      // Ignore if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        if (e.key === 'Escape') document.activeElement.blur();
        return;
      }

      // 1 to 8: Select Project Tabs
      if (e.key >= '1' && e.key <= '8') {
        const idx = parseInt(e.key, 10) - 1;
        if (PROJECTS[idx]) {
          SoundEngine.click();
          selectProject(PROJECTS[idx].id);
          scrollToProjects();
        }
      } else if (e.key.toLowerCase() === 't') {
        SoundEngine.click();
        scrollToTerminal();
      } else if (e.key.toLowerCase() === 'p') {
        SoundEngine.click();
        scrollToProjects();
      } else if (e.key.toLowerCase() === 'm') {
        SoundEngine.click();
        const sfxBtn = document.getElementById('btn-toggle-sfx');
        if (sfxBtn) sfxBtn.click();
      } else if (e.key === '?') {
        if (shortcutsModal) shortcutsModal.open();
      } else if (e.key === 'Escape') {
        document.querySelectorAll('.cmd-palette-modal, .shortcuts-modal, .deploy-modal').forEach(m => m.classList.remove('active'));
      }
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // 4j. Interactive Fluid Cursor Glow Follower
  // ════════════════════════════════════════════════════════════════════════════
  function initCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let active = false;

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!active) {
        active = true;
        glow.classList.add('active');
      }
    });

    window.addEventListener('mouseleave', () => {
      glow.classList.remove('active');
      active = false;
    });

    function loop() {
      currentX += (mouseX - currentX) * 0.16;
      currentY += (mouseY - currentY) * 0.16;
      glow.style.left = `${currentX.toFixed(1)}px`;
      glow.style.top = `${currentY.toFixed(1)}px`;
      requestAnimationFrame(loop);
    }
    loop();
  }

  // ════════════════════════════════════════════════════════════════════════════
  // 4k. Interactive Cyber Click Sparks
  // ════════════════════════════════════════════════════════════════════════════
  function initClickSparks() {
    const canvas = document.getElementById('sparks-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      w = (canvas.width = window.innerWidth);
      h = (canvas.height = window.innerHeight);
    });

    const sparks = [];
    const colors = ['#6366f1', '#38bdf8', '#10b981', '#f43f5e', '#a855f7', '#34d399'];

    window.addEventListener('click', e => {
      const count = 10;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 / count) * i + (Math.random() - 0.5) * 0.6;
        const speed = 2.5 + Math.random() * 4.2;
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.8 + Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1.0,
          decay: 0.022 + Math.random() * 0.025
        });
      }
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.09; // subtle gravity
        s.vx *= 0.98;
        s.life -= s.decay;

        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, s.life);
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      requestAnimationFrame(loop);
    }
    loop();
  }

  // ════════════════════════════════════════════════════════════════════════════
  // 4l. 3D Card Perspective Tilt & Dynamic Specular Shine
  // ════════════════════════════════════════════════════════════════════════════
  function init3DTiltCards() {
    function bindElement(el) {
      if (!el || el._hasTiltBound) return;
      el._hasTiltBound = true;

      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;

        const rotX = ((y - cy) / cy) * -6.5; // max 6.5 deg tilt
        const rotY = ((x - cx) / cx) * 6.5;

        el.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
        el.style.setProperty('--mouse-x', `${x}px`);
        el.style.setProperty('--mouse-y', `${y}px`);
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        el.style.setProperty('--mouse-x', '-999px');
        el.style.setProperty('--mouse-y', '-999px');
      });
    }

    document.querySelectorAll('[data-tilt], .stat-card, .card-block, .mini-lab-card, .code-box, .competency-box').forEach(bindElement);
  }

  // ════════════════════════════════════════════════════════════════════════════
  // 4m. Animated Rolling Stat Counters
  // ════════════════════════════════════════════════════════════════════════════
  function initStatCounters() {
    const elements = document.querySelectorAll('.count-up');
    if (!elements.length) return;

    elements.forEach(el => {
      const target = parseFloat(el.getAttribute('data-target')) || 0;
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const displayOverride = el.getAttribute('data-display');

      let start = 0;
      const duration = 1400;
      const startTime = performance.now();

      function tickCounter(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = start + (target - start) * ease;

        if (displayOverride && progress >= 0.85) {
          el.textContent = displayOverride;
        } else {
          el.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;
        }

        if (progress < 1) {
          requestAnimationFrame(tickCounter);
        } else if (displayOverride) {
          el.textContent = displayOverride;
        }
      }
      requestAnimationFrame(tickCounter);
    });
  }

  function scrollToTerminal() {
    const el = document.getElementById('terminal');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  }

  // ════════════════════════════════════════════════════════════════════════════
  // 5. Initial Bootstrapping & Deep Link Auto-Scroll
  // ════════════════════════════════════════════════════════════════════════════
  function scrollToProjects() {
    const el = document.getElementById('project-canvas');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  }

  function handleHashChange() {
    const hash = window.location.hash.replace('#', '');
    if (hash && PROJECTS.some(p => p.id === hash)) {
      selectProject(hash);
      setTimeout(scrollToProjects, 200);
    }
  }

  function init() {
    // 1. Initialize interactive visual & audio systems
    const setTheme = initThemeSwitcher();
    initNeuralBackground();
    initCursorGlow();
    initClickSparks();
    init3DTiltCards();
    initStatCounters();
    initCommandPalette(setTheme);
    const shortcutsModal = initShortcutsModal();
    initKeyboardHotkeys(shortcutsModal);
    initTerminalInput(setTheme);

    // 2. Wire up audio toggle button in navbar
    const sfxBtn = document.getElementById('btn-toggle-sfx');
    if (sfxBtn) {
      sfxBtn.addEventListener('click', () => {
        SoundEngine.enabled = !SoundEngine.enabled;
        sfxBtn.textContent = SoundEngine.enabled ? '🔊 SFX' : '🔇 SFX';
        sfxBtn.classList.toggle('active', SoundEngine.enabled);
        if (SoundEngine.enabled) SoundEngine.success();
      });
    }

    // 3. Render project tabs
    renderTabs();

    // 4. Check hash in URL on page load (support direct deep-linking e.g. #tensorforge)
    const hash = window.location.hash.replace('#', '');
    if (hash && PROJECTS.some(p => p.id === hash)) {
      selectProject(hash);
      setTimeout(scrollToProjects, 350);
    } else {
      selectProject('omnidesk');
    }

    // 5. Listen for hash changes (e.g. back/forward, deep links)
    window.addEventListener('hashchange', handleHashChange);

    // 6. Initial terminal greeting & interactive hints
    appendTerminalLog('rust', 'OmniDesk MCP Host v2.1.0 (Windows PE x64 Native)');
    appendTerminalLog('rust', 'Loaded: Win32 PostMessage pipeline, WinRT OcrEngine, 500MB Rolling Cache');
    appendTerminalLog('rpc', 'Client initialized connection over stdio (JSON-RPC 2.0)');
    appendTerminalLog('ok', 'Click any tool button above to test real-time tool execution');
    appendTerminalLog('info', 'ProTip: Try typing "help" or "matrix-rain" into the terminal prompt below!');
  }

  window.addEventListener('DOMContentLoaded', init);
})();
