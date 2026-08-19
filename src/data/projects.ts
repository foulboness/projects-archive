import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'palette-room',
    number: '01',
    title: 'PALETTE ROOM // 01',
    subtitle: 'Dark Creative Color Laboratory & Exploration Engine',
    shortDescription: 'A dark creative color laboratory for generating, exploring, editing, and saving custom color palettes for digital design projects.',
    category: ['Tools', 'UI/UX', 'React', 'TypeScript', 'Creative Experiments', 'Web Development'],
    primaryCategory: 'Tools',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    year: '2026',
    status: 'Production',
    clientOrContext: 'Web Application',
    role: 'Frontend Developer & UI Engineer',
    duration: '2026',
    image: '/assets/project 1.png',
    galleryImages: [
      '/assets/project 1.png'
    ],
    githubUrl: 'https://github.com/foulboness/color-palette-room',
    liveUrl: 'https://color-palette-room.netlify.app/',
    fullDescription: 'PALETTE ROOM is an editorial dark-mode creative color laboratory designed to streamline the palette generation and discovery workflow for designers and developers. With instant randomized generation, interactive 5-color slot manipulation, granular HEX/RGB editing, individual swatch locking, and local persistence for saved collections, it provides a tactile and fluid color exploration environment.',
    problemAndConcept: {
      challenge: 'Most web color generators are cluttered with intrusive ads, complex settings, or high cognitive load when developers and designers just need a fast, distraction-free playground to generate and fine-tune cohesive 5-color palettes.',
      solution: 'Engineered a streamlined, dark creative-tech interface with keyboard-driven randomization, instantaneous single-swatch locking, reactive HEX/RGB conversions, and one-click clipboard copying.',
      architecture: 'Stateful color harmony generator powered by React hooks, Framer Motion layout transitions, dynamic clipboard APIs, and localStorage persistence for custom saved collections.'
    },
    keyFeatures: [
      {
        title: 'Random Palette Generation',
        description: 'Instantly generate balanced color sets with spacebar or single-click trigger with smooth layout transitions.',
        tag: 'Generation'
      },
      {
        title: 'Five-Color Palette System',
        description: 'Curated 5-slot architecture designed for optimal digital UI hierarchy and aesthetic balance.',
        tag: 'Design System'
      },
      {
        title: 'Individual Color Editing',
        description: 'Granular inline fine-tuning with instant real-time swatch feedback and direct input controls.',
        tag: 'Editor'
      },
      {
        title: 'HEX / RGB Color Values',
        description: 'Seamless dual-format color value inspection and instant one-click copying to clipboard.',
        tag: 'Color Science'
      },
      {
        title: 'Palette Locking',
        description: 'Pin favorite swatches in place while re-randomizing surrounding slots.',
        tag: 'Workflow'
      },
      {
        title: 'Saved Palettes & Collections',
        description: 'Locally persist, manage, and recall custom curated color schemes across browser sessions.',
        tag: 'Persistence'
      }
    ],
    developmentHighlights: [
      {
        label: 'Copy Feedback',
        value: 'Instant',
        detail: 'Seamless clipboard integration with animated notification indicator'
      },
      {
        label: 'Animation Pacing',
        value: '60 FPS',
        detail: 'Smooth color slot transitions and spring re-ordering via Framer Motion'
      },
      {
        label: 'Color Formats',
        value: 'HEX + RGB',
        detail: 'Bi-directional real-time conversion and input validation engine'
      }
    ],
    stats: [
      { metric: '5 Swatches', label: 'Palette Architecture' },
      { metric: '< 1ms', label: 'Generation Speed' },
      { metric: '100% Local', label: 'Offline Persistence' }
    ]
  },
  {
    id: 'nevermore-time-atlas',
    number: '02',
    title: 'NEVERMORE TIME ATLAS // 02',
    subtitle: 'World Clock & Real-Time Global Time Zone Explorer',
    shortDescription: 'A simple and elegant world clock application that displays the current time across multiple cities around the globe in real time with a clean, responsive interface.',
    category: ['Web Development', 'JavaScript', 'Tools'],
    primaryCategory: 'Web Development',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    year: '2026',
    status: 'Production',
    clientOrContext: 'World Clock Web Application',
    role: 'Frontend Developer',
    duration: '2026',
    image: '/assets/project 2.png',
    galleryImages: [
      '/assets/project 2.png'
    ],
    githubUrl: 'https://github.com/foulboness/World-Clock',
    liveUrl: 'https://sky-world-clock.netlify.app/',
    fullDescription: 'NEVERMORE TIME ATLAS is a clean, minimal world clock application built to track and display real-time global time zones with elegance and precision. Designed with a mobile-friendly layout and instant city selection, users can quickly observe the time difference and local day/night status across major metropolitan hubs across the globe.',
    problemAndConcept: {
      challenge: 'Checking global time zones often requires dealing with sluggish, ad-bloated conversion websites or confusing offset math.',
      solution: 'Crafted a lightweight, vanilla JavaScript clock engine with automated 1-second tick reconciliation, flexible city selector dropdowns, and responsive CSS grid cards.',
      architecture: 'Pure vanilla JavaScript architecture using native Intl.DateTimeFormat and Date APIs for accurate DST-aware time zone conversions.'
    },
    keyFeatures: [
      {
        title: 'Real-Time Clock Updates',
        description: 'Precision 1-second interval refresh synchronizing hours, minutes, and seconds across all active city cards.',
        tag: 'Clock Engine'
      },
      {
        title: 'Multiple Global Time Zones',
        description: 'Simultaneously monitor time across major time zones spanning Europe, Asia, the Americas, and Oceania.',
        tag: 'Time Zones'
      },
      {
        title: 'Popular Cities by Default',
        description: 'Pre-configured default cards for iconic world cities including London, Tokyo, New York, and Sydney.',
        tag: 'Defaults'
      },
      {
        title: 'City & Time Zone Selection',
        description: 'Interactive dropdown and search to dynamically add and switch city time trackers on the fly.',
        tag: 'Explorer'
      },
      {
        title: 'Mobile-Friendly Responsive UI',
        description: 'Fluid layout adapting cleanly from small handheld screens to wide desktop displays.',
        tag: 'Responsive'
      },
      {
        title: 'Clean & Minimal Aesthetic',
        description: 'Distraction-free typographic interface focusing purely on legibility and time accuracy.',
        tag: 'Design'
      }
    ],
    developmentHighlights: [
      {
        label: 'Update Rate',
        value: '1,000ms',
        detail: 'Continuous tick synchronization without drift'
      },
      {
        label: 'Dependencies',
        value: '0 kB',
        detail: 'Pure vanilla JavaScript with zero third-party overhead'
      },
      {
        label: 'Accuracy',
        value: 'Intl Native',
        detail: 'DST-aware localized time formatting via browser engine'
      }
    ],
    stats: [
      { metric: 'Real-Time', label: '1s Tick Sync' },
      { metric: 'Global', label: 'Time Zone Coverage' },
      { metric: '0 Dependencies', label: 'Pure JavaScript' }
    ]
  },
  {
    id: 'rose-studio',
    number: '03',
    title: 'ROSE STUDIO // 03',
    subtitle: 'Vintage Poster Image Editor & Experimental Digital Art Lab',
    shortDescription: 'A browser-based creative image editor inspired by vintage poster design, fashion editorials, and experimental digital art with duotone, halftone, and typography tools.',
    category: ['Creative Experiments', 'UI/UX', 'React', 'Tools', 'Web Development'],
    primaryCategory: 'Creative Experiments',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Lucide React', 'HTML5 Canvas API', 'JetBrains Mono'],
    year: '2026',
    status: 'Production',
    clientOrContext: 'Browser-Based Image Editor',
    role: 'Frontend & Creative Developer',
    duration: '2026',
    image: '/assets/project 3.png',
    galleryImages: [
      '/assets/project 3.png'
    ],
    githubUrl: 'https://github.com/foulboness/rose-studio',
    liveUrl: 'https://rosestudioeditor.netlify.app/',
    fullDescription: 'Rose Studio is a browser-based creative image editor inspired by vintage poster design, fashion editorials, and experimental digital art. Rose Studio allows users to transform images using duotone colour treatments, halftone textures, film grain, glitch effects, and custom typography, then export the final composition as a high-resolution PNG.',
    problemAndConcept: {
      challenge: 'Creating high-concept editorial poster art usually demands bulky desktop software like Photoshop or complex texture blending setups.',
      solution: 'Created a fast, browser-native Canvas 2D image processing laboratory with modular filter pipelines for duotone mapping, halftone rasterization, film grain shaders, and customizable typography.',
      architecture: 'Hardware-accelerated HTML5 Canvas pipeline with custom pixel shader mathematics, reactive state control, and lossless canvas PNG rasterization.'
    },
    keyFeatures: [
      {
        title: 'Image Processing Pipeline',
        description: 'Drag-and-drop image uploading, custom image framing across portrait, square, landscape, and original formats.',
        tag: 'Canvas Core'
      },
      {
        title: 'Duotone Studio',
        description: 'Custom two-colour image compositions with built-in artistic color presets, custom shadow, and highlight mapping.',
        tag: 'Color Grading'
      },
      {
        title: 'Vintage Poster Effects',
        description: 'Halftone dot textures, film grain generation, scanline overlays, adjustable vignette, and glitch distortion effects.',
        tag: 'Textures'
      },
      {
        title: 'Editorial Typography',
        description: 'Custom poster titles, subtitle support, adjustable font sizing, editorial glitch typography, and multiple font styles.',
        tag: 'Typography'
      },
      {
        title: 'High-Resolution Export',
        description: 'Instant canvas-based artwork rendering with lossless high-resolution PNG export directly from the browser.',
        tag: 'Export'
      }
    ],
    developmentHighlights: [
      {
        label: 'Render Engine',
        value: 'Canvas 2D',
        detail: 'Direct pixel buffer manipulation via ImageData API'
      },
      {
        label: 'Export Format',
        value: 'Lossless PNG',
        detail: 'High-DPI canvas toBlob rasterization'
      },
      {
        label: 'Processing',
        value: 'Sub-16ms',
        detail: 'Real-time multi-pass filter blending'
      }
    ],
    stats: [
      { metric: 'Canvas 2D', label: 'Processing Pipeline' },
      { metric: 'PNG', label: 'Lossless Export' },
      { metric: '100% Client', label: 'Local Processing' }
    ]
  },
  {
    id: 'midnight-fleet',
    number: '04',
    title: 'MIDNIGHT FLEET // 04',
    subtitle: 'Gothic Nautical Strategy & Browser Battleships Game',
    shortDescription: 'A classic Battleships strategy game reimagined with a dark nautical and gothic visual identity, intelligent computer AI, and tactile feedback.',
    category: ['Creative Experiments', 'JavaScript', 'Web Development', 'UI/UX'],
    primaryCategory: 'Creative Experiments',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'CSS Grid', 'Game Loop'],
    year: '2026',
    status: 'Production',
    clientOrContext: 'Browser Strategy Game',
    role: 'Game Logic & Frontend Developer',
    duration: '2026',
    image: '/assets/project 4.png',
    galleryImages: [
      '/assets/project 4.png'
    ],
    githubUrl: 'https://github.com/foulboness/Battleships',
    liveUrl: 'https://midnight-fleet.netlify.app/',
    fullDescription: 'Midnight Fleet is a classic Battleships turn-based strategy game reimagined with a moody, dark nautical and gothic aesthetic. Players strategically position their fleet across an oceanic battle grid, coordinate radar-guided strikes, and duel against a computer-controlled opponent in an atmospheric, audio-visual browser experience.',
    problemAndConcept: {
      challenge: 'Most web-based board games feature dated 90s graphics, sluggish DOM manipulations, or lack visual atmosphere and clear tactical state feedback.',
      solution: 'Constructed a modular vanilla JavaScript game state machine with dynamic grid collision detection, AI targeting heuristics, responsive CSS Grid boards, and punchy visual strike feedback.',
      architecture: 'Event-driven game state loop managing board coordinates, fleet placement validation, turn arbitration, and randomized hunting AI algorithms.'
    },
    keyFeatures: [
      {
        title: 'Fleet Management System',
        description: 'Interactive ship placement, horizontal and vertical orientation rotation, and strategic board setup.',
        tag: 'Fleet Setup'
      },
      {
        title: 'Turn-Based Combat Gameplay',
        description: 'Player vs. intelligent computer battles with hit-and-miss coordinate tracking and ship destruction alerts.',
        tag: 'Combat Engine'
      },
      {
        title: 'Tactical AI Opponent',
        description: 'Computer-controlled player with dynamic target acquisition and surrounding grid cell search heuristics.',
        tag: 'Game AI'
      },
      {
        title: 'Gothic Nautical Visual Design',
        description: 'Atmospheric midnight and purple palette with clean tactical typography, responsive game board, and visual strike feedback.',
        tag: 'UI/UX'
      },
      {
        title: 'Combat State & Restart',
        description: 'Real-time win/lose state verification, victory fanfare, and instant game reset functionality.',
        tag: 'Game State'
      }
    ],
    developmentHighlights: [
      {
        label: 'AI Strategy',
        value: 'Heuristic Search',
        detail: 'Probabilistic hunting algorithm after initial hit detection'
      },
      {
        label: 'Board Grid',
        value: '10x10 Matrix',
        detail: 'Two-dimensional coordinate array with zero-overlap validation'
      },
      {
        label: 'Performance',
        value: 'Vanilla DOM',
        detail: 'Direct CSS state classes with 60 FPS transitions'
      }
    ],
    stats: [
      { metric: '10x10', label: 'Tactical Grid' },
      { metric: '5 Ships', label: 'Fleet Composition' },
      { metric: '0 Dependencies', label: 'Pure JavaScript' }
    ]
  },
  {
    id: 'kitty-sprinkle-dash',
    number: '05',
    title: 'KITTY SPRINKLE DASH // 05',
    subtitle: '2D Endless Runner & Sprinkle-Powered Arcade Game',
    shortDescription: 'A charming 2D endless runner game centered around a sprinkle-powered kitty navigating dreamy environments filled with obstacles, speed boosts, and rewards.',
    category: ['Creative Experiments', 'JavaScript', 'Web Development', 'UI/UX'],
    primaryCategory: 'Creative Experiments',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'Game Loop'],
    year: '2026',
    status: 'Production',
    clientOrContext: '2D Endless Runner Arcade Game',
    role: 'Game Logic & Frontend Developer',
    duration: '2026',
    image: '/assets/project 5.png',
    galleryImages: [
      '/assets/project 5.png'
    ],
    githubUrl: 'https://github.com/foulboness/Kitty-Sprinkle-Dash',
    liveUrl: 'https://kitty-sprinkle-dash.vercel.app/',
    fullDescription: 'Kitty Sprinkle Dash is a charming 2D endless runner game centered around a sprinkle-powered kitty navigating dreamy, shifting environments filled with obstacles. Players must react quickly, collect sprinkles, avoid water droplets, and survive for as long as possible while chasing a high score through dynamic speed boosts and escalating intensity.',
    problemAndConcept: {
      challenge: 'Browser endless runners frequently struggle with responsive mobile touch controls, frame rate micro-stuttering during parallax rendering, or clunky collision boundaries.',
      solution: 'Constructed a lightweight 60 FPS requestAnimationFrame arcade engine featuring multi-layer parallax scrolling, precision hitbox collision detection, dual keyboard and on-screen touch inputs, and scalable particle rewards.',
      architecture: 'Deterministic 2D game loop managing delta-time physics, sprite frame animation, obstacle spawning curves, and persistent local high-score records.'
    },
    keyFeatures: [
      {
        title: 'Core Endless Runner Loop',
        description: 'Endless arcade obstacle avoidance, lives/health system, escalating challenge, and persistent high-score tracking.',
        tag: 'Arcade Core'
      },
      {
        title: 'Collectibles & Power-Ups',
        description: 'Sprinkle collection system, score and in-game currency, temporary speed boost power-ups, and reward-based gameplay.',
        tag: 'Power-Ups'
      },
      {
        title: 'Dynamic Shifting World',
        description: 'Changing environmental backdrops, dynamic obstacle patterns, and increasing gameplay intensity curves.',
        tag: 'World Engine'
      },
      {
        title: 'Multi-Modal Controls',
        description: 'Responsive controls via Arrow keys, A/D movement, and customized on-screen pink mobile touch buttons.',
        tag: 'Controls'
      }
    ],
    developmentHighlights: [
      {
        label: 'Target FPS',
        value: '60 FPS',
        detail: 'Smooth requestAnimationFrame delta-time game loop'
      },
      {
        label: 'Hitbox Precision',
        value: 'Sub-pixel',
        detail: 'AABB collision engine preventing unfair obstacle clips'
      },
      {
        label: 'Input Latency',
        value: 'Zero Lag',
        detail: 'Multi-touch listener binding with active passive flags'
      }
    ],
    stats: [
      { metric: '60 FPS', label: 'Arcade Engine' },
      { metric: 'Multi-Touch', label: 'Mobile & Desktop Controls' },
      { metric: '0 Dependencies', label: 'Pure JavaScript' }
    ]
  },
  {
    id: 'moonberry-cafe',
    number: '06',
    title: 'MOONBERRY CAFÉ // 06',
    subtitle: 'Cozy Café & Responsive Recipe Showcase Platform',
    shortDescription: 'A modern and playful recipe website designed around the atmosphere of a cozy café with a Hello Kitty-inspired visual identity and clean responsive interface.',
    category: ['Web Development', 'UI/UX', 'JavaScript'],
    primaryCategory: 'Web Development',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Netlify'],
    year: '2026',
    status: 'Production',
    clientOrContext: 'Responsive Recipe Website',
    role: 'Frontend Developer & UI Designer',
    duration: '2026',
    image: '/assets/project 6.png',
    galleryImages: [
      '/assets/project 6.png'
    ],
    githubUrl: 'https://github.com/foulboness/MoonBerry-Cafe',
    liveUrl: 'https://moonberry-cafe.netlify.app/',
    fullDescription: 'MoonBerry Café is a modern and playful recipe website designed around the welcoming atmosphere of a cozy café. It combines a Hello Kitty-inspired visual identity with a clean, responsive interface to create an engaging browsing experience for discovering and following delightful café drink and pastry recipes.',
    problemAndConcept: {
      challenge: 'Online recipe blogs are often inundated with intrusive ads, broken mobile formatting, and cluttered layouts that detract from the cooking experience.',
      solution: 'Designed a warm, pastel-infused editorial café theme with dedicated recipe cards, responsive ingredient checklists, and quick step-by-step preparation workflows.',
      architecture: 'Static web architecture optimized for sub-second delivery via Netlify CDN, responsive CSS custom properties, and semantic HTML5.'
    },
    keyFeatures: [
      {
        title: 'Responsive Multi-Device Layout',
        description: 'Adaptive styling tailored for fluid browsing across mobile handsets, tablets, and high-DPI desktop screens.',
        tag: 'Responsive'
      },
      {
        title: 'Hello Kitty-Themed Visual Identity',
        description: 'Playful, friendly café aesthetic featuring gentle pastel palettes, custom badge motifs, and cozy typography.',
        tag: 'Branding'
      },
      {
        title: 'Clean Navigation & Hero Section',
        description: 'Smooth header navigation with an inviting hero banner introducing the seasonal café menu and featured recipes.',
        tag: 'UI/UX'
      },
      {
        title: 'Recipe-Focused Content Architecture',
        description: 'Structured ingredient measurements, preparation steps, baking times, and serving suggestions.',
        tag: 'Content Layout'
      },
      {
        title: 'Fast Static Edge Deployment',
        description: 'High-speed static delivery via Netlify CDN with compressed assets and instant page rendering.',
        tag: 'Deployment'
      }
    ],
    developmentHighlights: [
      {
        label: 'Performance',
        value: '100/100',
        detail: 'Lighthouse performance score with zero layout shift'
      },
      {
        label: 'Responsiveness',
        value: 'Mobile-First',
        detail: 'Fluid viewport scaling across all modern breakpoints'
      },
      {
        label: 'Architecture',
        value: 'Static Netlify',
        detail: 'Ultra-fast static edge delivery'
      }
    ],
    stats: [
      { metric: '100%', label: 'Responsive' },
      { metric: 'Static CDN', label: 'Netlify Edge' },
      { metric: '0 Dependencies', label: 'Pure JavaScript' }
    ]
  },
  {
    id: 'blackprint-heist-crew',
    number: '07',
    title: 'BLACKPRINT // 07',
    subtitle: 'Tactical Heist Crew Organizer & Classified Kanban Board',
    shortDescription: 'A tactical heist planning workspace disguised as a classified case file, featuring multi-phase Kanban progression, crew roster heat tracking, and loadout manifests.',
    category: ['Tools', 'UI/UX', 'TypeScript', 'React', 'Web Development'],
    primaryCategory: 'Tools',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'dnd-kit', 'Zustand', 'Framer Motion'],
    year: '2026',
    status: 'Production',
    clientOrContext: 'Heist Crew Organizer / Kanban Workspace',
    role: 'Frontend Architect & Product Engineer',
    duration: '2026',
    image: '/assets/project 7.png',
    galleryImages: [
      '/assets/project 7.png'
    ],
    githubUrl: 'https://github.com/foulboness/Heist-Crew-Organizer',
    liveUrl: 'https://blackprint-heist-crew.vercel.app/',
    fullDescription: 'BLACKPRINT is a tactical heist planning workspace disguised as a classified dossier case file. It reimagines standard project management Kanban boards into an immersive crew-planning system where objectives, specialists, and specialized equipment are orchestrated across five distinct operational phases.',
    problemAndConcept: {
      challenge: 'Standard productivity boards are sterile and uninspiring for storytelling, gaming campaigns, or immersive project workflows that require multi-faceted asset assignment.',
      solution: 'Engineered a high-density, dark tactical interface utilizing dnd-kit multi-container drag-and-drop, heat-level crew meters, budget tracking, and real-time operational phase progression.',
      architecture: 'Next.js 14 App Router paired with a normalized Zustand store, custom collision detection algorithms via @dnd-kit/core, and automated localStorage persistence.'
    },
    keyFeatures: [
      {
        title: 'Five-Phase Timeline Board',
        description: 'Multi-container drag-and-drop across operational phases: Casing → Prep → Entry → The Score → Exit.',
        tag: 'Timeline Board'
      },
      {
        title: 'Tactical Crew Roster',
        description: 'Recruit specialists with custom codenames, heat-level telemetry, and direct card assignment via drag-and-drop.',
        tag: 'Crew Management'
      },
      {
        title: 'Loadout Manifest & Budgeting',
        description: 'Equipment and gear inventory tracking with budget calculations, acquisition states, and objective tagging.',
        tag: 'Loadout'
      },
      {
        title: 'Live Phase Ticker',
        description: 'Real-time operational readiness ticker computing crew staffing, required gear, and stage completion.',
        tag: 'Telemetry'
      },
      {
        title: 'Persistent State Engine',
        description: 'Zustand-powered state architecture with automatic localStorage synchronization that survives browser refreshes.',
        tag: 'State Management'
      }
    ],
    developmentHighlights: [
      {
        label: 'Drag Engine',
        value: 'dnd-kit',
        detail: 'Pointer and keyboard accessible multi-container drag physics'
      },
      {
        label: 'State Architecture',
        value: 'Zustand',
        detail: 'Normalized state slices with zero unnecessary re-renders'
      },
      {
        label: 'Persistence',
        value: 'Local Sync',
        detail: 'Seamless automatic hydration and localStorage persistence'
      }
    ],
    stats: [
      { metric: '5 Phases', label: 'Mission Timeline' },
      { metric: '0ms Lag', label: 'Drag & Drop Physics' },
      { metric: '100% Local', label: 'Persistent State' }
    ]
  },
  {
    id: 'syntax404-portfolio',
    number: '08',
    title: 'SYNTAX404 // 08',
    subtitle: 'Terminal-Inspired Desktop Workspace & Developer Portfolio',
    shortDescription: 'A terminal-inspired developer portfolio designed as an interactive desktop workspace with movable-looking windows, CLI commands, and retro-futuristic purple themes.',
    category: ['Web Development', 'UI/UX', 'JavaScript', 'Creative Experiments'],
    primaryCategory: 'Web Development',
    technologies: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'CLI Interface', 'Netlify'],
    year: '2026',
    status: 'Production',
    clientOrContext: 'Developer Portfolio & Interactive Workspace',
    role: 'Frontend Developer & Creative Designer',
    duration: '2026',
    image: '/assets/project 8.png',
    galleryImages: [
      '/assets/project 8.png'
    ],
    githubUrl: 'https://github.com/foulboness/Syntax404-Portfolio',
    liveUrl: 'https://syntax404porfolio.netlify.app/',
    fullDescription: 'Syntax404 is a terminal-inspired developer portfolio designed as an interactive desktop workspace. It replaces the traditional portfolio layout with movable-looking windows, terminal prompts, custom purple command palettes, and developer-focused interface elements to create an immersive and memorable browsing experience.',
    problemAndConcept: {
      challenge: 'Most web developer portfolios follow identical cookie-cutter landing page templates that fail to express personal technical identity or creative flair.',
      solution: 'Constructed an interactive pseudo-desktop GUI environment with CLI prompt simulation, draggable window panels, fast keyboard command parsing, and lightweight vanilla DOM manipulation.',
      architecture: 'Lightweight vanilla JavaScript architecture with zero runtime dependencies, customized CSS terminal windowing, and instant Netlify CDN delivery.'
    },
    keyFeatures: [
      {
        title: 'Terminal Interface & CLI',
        description: 'Command-line visual language with interactive prompts, developer-focused typography, and custom purple CRT theme.',
        tag: 'Terminal UI'
      },
      {
        title: 'Desktop Workspace Windowing',
        description: 'Desktop-style window layouts with structured project drawers, interactive controls, and information panels.',
        tag: 'Workspace'
      },
      {
        title: 'Comprehensive Portfolio Showcase',
        description: 'Curated projects archive, technical skills matrix, personal background profile, and direct contact endpoints.',
        tag: 'Showcase'
      },
      {
        title: 'Ultra-Lightweight & Performant',
        description: 'Zero external heavy frameworks for instantaneous sub-100ms loading and flawless responsive mobile support.',
        tag: 'Performance'
      },
      {
        title: 'Fast Static Edge Deployment',
        description: 'High-speed edge routing hosted on Netlify with automated asset compression and instant initial render.',
        tag: 'Deployment'
      }
    ],
    developmentHighlights: [
      {
        label: 'Bundle Size',
        value: '0 kB',
        detail: 'Pure vanilla JS and lightweight CSS with zero runtime framework weight'
      },
      {
        label: 'Interface',
        value: 'CLI + GUI',
        detail: 'Dual terminal command prompt and windowed desktop GUI'
      },
      {
        label: 'Load Speed',
        value: 'Sub-100ms',
        detail: 'Instant initial paint and high Lighthouse performance'
      }
    ],
    stats: [
      { metric: '0 Dependencies', label: 'Pure Vanilla JS' },
      { metric: 'Terminal UI', label: 'CLI & GUI Mode' },
      { metric: '100%', label: 'Responsive Workspace' }
    ]
  }
];

export const CATEGORIES = [
  'All Projects',
  'Web Development',
  'UI/UX',
  'React',
  'JavaScript',
  'TypeScript',
  'Full Stack',
  'Creative Experiments',
  'Tools'
] as const;
