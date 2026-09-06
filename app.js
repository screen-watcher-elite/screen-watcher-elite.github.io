/**
 * Ashutosh Chikane Portfolio Application Engine (2026 Edition)
 * Pure Vanilla JavaScript • Zero Dependencies • Dynamic Tab Canvas & Live MCP Sandbox
 */

(function () {
  'use strict';

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
      image: 'https://raw.githubusercontent.com/screen-watcher-elite/tensorforge/main/assets/tensorforge_showcase_transform.png',
      fallbackImage: 'assets/tensorforge_showcase_transform.png',
      imageCaption: 'TensorForge 2D Matrix Transformations: interactive linear transformations, eigensystems, and phase dynamics.',
      gallery: [
        { label: '2D Transformations', url: 'https://raw.githubusercontent.com/screen-watcher-elite/tensorforge/main/assets/tensorforge_showcase_transform.png', fallback: 'assets/tensorforge_showcase_transform.png' },
        { label: 'LossLab Optimizers', url: 'https://raw.githubusercontent.com/screen-watcher-elite/tensorforge/main/assets/tensorforge_showcase_losslab.png', fallback: 'assets/tensorforge_showcase_losslab.png' },
        { label: 'MicroGraph Autograd', url: 'https://raw.githubusercontent.com/screen-watcher-elite/tensorforge/main/assets/tensorforge_showcase_autograd.png', fallback: 'assets/tensorforge_showcase_autograd.png' },
        { label: '3D VectorSpace', url: 'https://raw.githubusercontent.com/screen-watcher-elite/tensorforge/main/assets/tensorforge_showcase_3d.png', fallback: 'assets/tensorforge_showcase_3d.png' }
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

      btn.addEventListener('click', () => {
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
          </div>
          <pre class="terminal-body"><code>${escapeHtml(project.simulatedLog.content)}</code></pre>
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

    data.logs.forEach((log, index) => {
      setTimeout(() => {
        appendTerminalLog(log.prefix, log.text);
      }, index * 120);
    });
  }

  // Bind Tool Buttons
  document.querySelectorAll('.tool-btn').forEach(btn => {
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
    renderTabs();

    // Check hash in URL on page load
    const hash = window.location.hash.replace('#', '');
    if (hash && PROJECTS.some(p => p.id === hash)) {
      selectProject(hash);
      setTimeout(scrollToProjects, 350);
    } else {
      selectProject('omnidesk');
    }

    // Listen for hash changes (e.g. back/forward, deep links)
    window.addEventListener('hashchange', handleHashChange);

    // Initial terminal greeting
    appendTerminalLog('rust', 'OmniDesk MCP Host v2.1.0 (Windows PE x64 Native)');
    appendTerminalLog('rust', 'Loaded: Win32 PostMessage pipeline, WinRT OcrEngine, 500MB Rolling Cache');
    appendTerminalLog('rpc', 'Client initialized connection over stdio (JSON-RPC 2.0)');
    appendTerminalLog('ok', 'Click any tool button above to test real-time tool execution');
  }

  window.addEventListener('DOMContentLoaded', init);
})();
