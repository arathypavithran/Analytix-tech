<?php
// PHP Script to generate index.html with Pure Code Framer Motion & linear-gradient(90deg, rgb(18, 25, 38), #52257c)

$html = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Analytix BSS – Technology Experts | ERP, AI, Cybersecurity, Design & Development</title>
  <meta name="description" content="Technology experts delivering ERP, design, development, marketing, AI automation, and cybersecurity solutions for business growth. Aramco SCCC certified & Odoo Silver Partner.">
  <meta name="keywords" content="Odoo ERP, Aramco Cybersecurity Compliance, AI Automation, Web Development, Digital Marketing, Analytix BSS, Saudi Arabia, UAE, Middle East">

  <!-- Open Graph -->
  <meta property="og:title" content="Analytix BSS – Modern Digital Backbone for Enterprise Growth">
  <meta property="og:description" content="We help businesses grow with ERP, design, development, marketing, automation, and cybersecurity solutions built for speed, scale, and success.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://analytixbss.com/technew/">
  <meta property="og:image" content="assets/Hero_Main.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="assets/tech-logo-1.png">

  <!-- Stylesheet -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- HEADER / NAVIGATION -->
  <header class="header">
    <div class="container header-inner">
      <a href="#home" class="logo-link">
        <img src="assets/tech-logo.png" alt="Analytix BSS Logo" class="logo-img" onerror="this.src='assets/tech-logo-1.png'">
      </a>

      <ul class="nav-menu">
        <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#about" class="nav-link">About Us</a></li>
        
        <!-- Services Dropdown -->
        <li class="nav-item">
          <a href="#services" class="nav-link">
            Services
            <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </a>
          <div class="dropdown-menu">
            <a href="#services-design" class="dropdown-link">
              <span class="dropdown-title">UI/UX & Brand Design</span>
              <span class="dropdown-desc">Human-centered digital interfaces & identity</span>
            </a>
            <a href="#services-development" class="dropdown-link">
              <span class="dropdown-title">Enterprise Development</span>
              <span class="dropdown-desc">Web apps, cloud architecture & platforms</span>
            </a>
            <a href="#services-marketing" class="dropdown-link">
              <span class="dropdown-title">Performance Marketing</span>
              <span class="dropdown-desc">Growth strategy, SEO & CRO optimization</span>
            </a>
          </div>
        </li>

        <!-- Solutions Dropdown -->
        <li class="nav-item">
          <a href="#solutions" class="nav-link">
            Solutions
            <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </a>
          <div class="dropdown-menu">
            <a href="#solutions-odoo" class="dropdown-link">
              <span class="dropdown-title">Odoo ERP Implementation</span>
              <span class="dropdown-desc">Unified sales, finance, inventory & HR</span>
            </a>
            <a href="#solutions-ai" class="dropdown-link">
              <span class="dropdown-title">AI Process Automation</span>
              <span class="dropdown-desc">Workflow optimization & intelligent models</span>
            </a>
            <a href="#solutions-cyber" class="dropdown-link">
              <span class="dropdown-title">Aramco Cybersecurity (SCCC)</span>
              <span class="dropdown-desc">Full compliance, audit & threat protection</span>
            </a>
          </div>
        </li>

        <!-- Industries Dropdown -->
        <li class="nav-item">
          <a href="#industries-fnb" class="nav-link">
            Industries
            <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </a>
          <div class="dropdown-menu">
            <a href="#industries-fnb" class="dropdown-link"><span class="dropdown-title">Food & Beverage</span></a>
            <a href="#industries-logistics" class="dropdown-link"><span class="dropdown-title">Logistics & Supply Chain</span></a>
            <a href="#industries-manufacturing" class="dropdown-link"><span class="dropdown-title">Manufacturing</span></a>
            <a href="#industries-construction" class="dropdown-link"><span class="dropdown-title">Construction & Projects</span></a>
          </div>
        </li>

        <li class="nav-item"><a href="#blog" class="nav-link">Blog</a></li>
        <li class="nav-item"><a href="#contact" class="nav-link">Contact Us</a></li>
      </ul>

      <div class="header-cta">
        <a href="#contact" class="btn btn-primary">
          Get Started
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>

      <button class="mobile-toggle" aria-label="Toggle navigation menu">
        <svg class="hamburger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  </header>

  <!-- Mobile Navigation Drawer -->
  <div class="mobile-nav-backdrop"></div>
  <nav class="mobile-nav">
    <a href="#home">Home</a>
    <a href="#about">About Us</a>
    <a href="#services">All Services</a>
    <a href="#services-design" style="padding-left: 1rem; font-size: 0.9rem;">— Design</a>
    <a href="#services-development" style="padding-left: 1rem; font-size: 0.9rem;">— Development</a>
    <a href="#services-marketing" style="padding-left: 1rem; font-size: 0.9rem;">— Marketing</a>
    <a href="#solutions-odoo">Odoo ERP Implementation</a>
    <a href="#solutions-ai">AI Process Automation</a>
    <a href="#solutions-cyber">Aramco Cybersecurity Compliance</a>
    <a href="#industries-fnb">Industries Solution</a>
    <a href="#blog">Blog & Insights</a>
    <a href="#contact" class="btn btn-primary" style="margin-top: 1rem;">Contact Us</a>
  </nav>

  <!-- MAIN SPA CONTENT CONTAINER -->
  <main id="app-root">

    <!-- ===================================================================
         VIEW 1: HOMEPAGE (#home)
         =================================================================== -->
    <section id="home" class="page-view active">
      
      <!-- HERO BANNER SECTION WITH 30-FRAME SEQUENCE SHOWCASE (PUBLIC/IMAGES/HEROSECTION) -->
      <div class="hero-banner-section" id="heroBannerSection">
        <!-- Ambient background atmosphere overlay -->
        <div class="hero-bg-atmosphere" aria-hidden="true">
          <div class="hero-gradient-overlay"></div>
          <div class="glow-shape shape-1"></div>
          <div class="glow-shape shape-2"></div>
        </div>

        <div class="container hero-banner-grid">
          
          <!-- LEFT COLUMN: Feature Selector Tabs & Content -->
          <div class="hero-text-col">
            
            <!-- Feature Step Selector Tabs -->
            <div class="hero-feature-tabs">
              <button class="feature-tab-btn active" data-step="1">
                <span class="tab-num">01</span>
                <span class="tab-text">Overview</span>
              </button>
              <button class="feature-tab-btn" data-step="2">
                <span class="tab-num">02</span>
                <span class="tab-text">Odoo ERP</span>
              </button>
              <button class="feature-tab-btn" data-step="3">
                <span class="tab-num">03</span>
                <span class="tab-text">Cybersecurity</span>
              </button>
              <button class="feature-tab-btn" data-step="4">
                <span class="tab-num">04</span>
                <span class="tab-text">AI Automation</span>
              </button>
            </div>

            <div class="hero-text-wrapper">
              
              <!-- FEATURE STEP 1 -->
              <div class="feature-text-step active" data-step="1">
                <div class="eyebrow">
                  <span class="eyebrow-dot"></span>
                  SMARTER SYSTEMS • REAL BUSINESS GROWTH
                </div>
                <h1>Technology Experts Delivering ERP, AI & Security</h1>
                <p>We help enterprise organizations scale with Odoo ERP, design, development, marketing, AI process automation, and Aramco-certified cybersecurity solutions built for speed and success.</p>
                
                <div class="hero-actions">
                  <a href="#contact" class="btn btn-primary">
                    Book a Consultation
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                  <a href="#solutions-odoo" class="btn btn-secondary">Explore Solutions</a>
                </div>
                
                <div class="hero-badges-row">
                  <div class="hero-mini-badge">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    <span>Aramco CCC / SCCC Certified</span>
                  </div>
                  <div class="hero-mini-badge">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <span>Odoo Silver Partner</span>
                  </div>
                </div>
              </div>

              <!-- FEATURE STEP 2 -->
              <div class="feature-text-step" data-step="2">
                <div class="eyebrow eyebrow-accent">
                  <span class="eyebrow-dot"></span>
                  FEATURE 01 // ENTERPRISE ERP
                </div>
                <h1>Odoo ERP Implementation & Operational Mastery</h1>
                <p>Unify finance, sales, inventory, HR, and supply chain into one intelligent, automated ecosystem. Tailored for F&B, Logistics, Manufacturing, and Construction.</p>
                
                <div class="feature-metrics-grid">
                  <div class="metric-card">
                    <div class="metric-num">40%+</div>
                    <div class="metric-label">Efficiency Boost</div>
                  </div>
                  <div class="metric-card">
                    <div class="metric-num">100%</div>
                    <div class="metric-label">Real-Time Operations</div>
                  </div>
                </div>

                <div class="hero-actions">
                  <a href="#solutions-odoo" class="btn btn-primary">
                    Explore Odoo ERP
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>

              <!-- FEATURE STEP 3 -->
              <div class="feature-text-step" data-step="3">
                <div class="eyebrow eyebrow-cyan">
                  <span class="eyebrow-dot"></span>
                  FEATURE 02 // CYBERSECURITY & COMPLIANCE
                </div>
                <h1>Aramco Cybersecurity & Sovereign Defense</h1>
                <p>Protect critical digital assets and ensure SCCC / CCC audit compliance with end-to-end threat monitoring, vulnerability management, and defense architecture.</p>

                <div class="feature-metrics-grid">
                  <div class="metric-card">
                    <div class="metric-num">SCCC</div>
                    <div class="metric-label">Audit Preparedness</div>
                  </div>
                  <div class="metric-card">
                    <div class="metric-num">24/7</div>
                    <div class="metric-label">Threat Shield</div>
                  </div>
                </div>

                <div class="hero-actions">
                  <a href="#solutions-cyber" class="btn btn-primary">
                    Aramco Cybersecurity
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>

              <!-- FEATURE STEP 4 -->
              <div class="feature-text-step" data-step="4">
                <div class="eyebrow eyebrow-purple">
                  <span class="eyebrow-dot"></span>
                  FEATURE 03 // AI & CUSTOM ENGINEERING
                </div>
                <h1>AI Process Automation & Scalable Architecture</h1>
                <p>Custom enterprise web applications, intelligent LLM automation workflows, and high-performance cloud engineering built for rapid digital expansion.</p>

                <div class="feature-metrics-grid">
                  <div class="metric-card">
                    <div class="metric-num">AI Native</div>
                    <div class="metric-label">Smart Workflows</div>
                  </div>
                  <div class="metric-card">
                    <div class="metric-num">Global</div>
                    <div class="metric-label">Cloud Deployment</div>
                  </div>
                </div>

                <div class="hero-actions">
                  <a href="#contact" class="btn btn-primary">
                    Book AI Consultation
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

          <!-- RIGHT COLUMN: 30-Frame Canvas Motion Showcase -->
          <div class="hero-motion-col">
            <div class="hero-motion-card">
              <canvas id="heroSequenceCanvas" class="hero-motion-canvas"></canvas>
              <div class="motion-card-glass-overlay"></div>
              
              <!-- Motion Interactive Control Bar -->
              <div class="motion-controls">
                <button id="motionPlayPauseBtn" class="motion-ctrl-btn" aria-label="Toggle Animation">
                  <svg id="motionPlayIcon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="display:none;"><path d="M8 5v14l11-7z"/></svg>
                  <svg id="motionPauseIcon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                </button>
                <div class="motion-scrubber-track" id="motionScrubberTrack">
                  <div class="motion-scrubber-fill" id="motionScrubberFill"></div>
                </div>
                <span class="motion-frame-counter" id="motionFrameCounter">01 / 30</span>
              </div>

              <!-- Floating Partner Badges -->
              <div class="motion-badge badge-pos-top">
                <div class="badge-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <div class="badge-title">Aramco Certified</div>
                  <div class="badge-sub">CCC / SCCC Ready</div>
                </div>
              </div>
              <div class="motion-badge badge-pos-bottom">
                <div class="badge-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div>
                  <div class="badge-title">Odoo Silver Partner</div>
                  <div class="badge-sub">Enterprise ERP</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- ORGANIC CURVED DIVIDER -->
      <div class="section-divider" style="margin-top: -3px; background: #52257c;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#121926">
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <!-- Trust Bar / Client Logos -->
      <div class="trust-bar">
        <div class="container">
          <div class="trust-label">Trusted by Visionaries & Enterprise Leaders Across Saudi Arabia & Global Markets</div>
          <div class="logos-slider">
            <img src="assets/p1-logo-1.webp" alt="Client Partner 1" class="logo-item" onerror="this.style.display='none'">
            <img src="assets/p1-logo-2.webp" alt="Client Partner 2" class="logo-item" onerror="this.style.display='none'">
            <img src="assets/p1-logo-3.webp" alt="Client Partner 3" class="logo-item" onerror="this.style.display='none'">
            <img src="assets/p1-logo-4.webp" alt="Client Partner 4" class="logo-item" onerror="this.style.display='none'">
            <img src="assets/p1-logo-5.webp" alt="Client Partner 5" class="logo-item" onerror="this.style.display='none'">
            <img src="assets/p1-logo-6.webp" alt="Client Partner 6" class="logo-item" onerror="this.style.display='none'">
          </div>
        </div>
      </div>

      <!-- ORGANIC CURVED DIVIDER TO LIGHT SECTION -->
      <div class="section-divider" style="background: #121926;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#f8fafc">
          <path d="M0,60 C300,130 600,10 900,80 C1050,115 1150,40 1200,30 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <!-- What We're Known For (Soft Light Section) -->
      <div class="section-padding bg-light-section">
        <div class="container">
          <div style="text-align: center; max-width: 760px; margin: 0 auto 3.5rem auto;" class="reveal">
            <div class="eyebrow">Key Solutions</div>
            <h2>What We’re Known For</h2>
            <p>A complete range of services designed to simplify operations, ensure compliance, and support business growth.</p>
          </div>

          <div class="grid-3">
            <div class="card reveal">
              <div class="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3 class="card-title">Odoo ERP Implementation</h3>
              <p class="card-desc">Managing your business with five different tools is exhausting. Odoo brings your sales, operations, finance, and team into one place, so you always know what’s happening and what to do next.</p>
              <ul style="list-style: none; margin-bottom: 1.5rem; color: var(--text-dark-muted); font-size: 0.9rem; display: flex; flex-direction: column; gap: 0.4rem;">
                <li>✓ ERP Setup & Configuration</li>
                <li>✓ Custom Module Development</li>
                <li>✓ Third-Party System Integration</li>
                <li>✓ Data Migration & Support</li>
              </ul>
              <a href="#solutions-odoo" class="card-link" style="color: var(--purple-primary);">Learn More →</a>
            </div>

            <div class="card reveal">
              <div class="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12L2.1 12a10 10 0 0 0 9.9 10V12z"/></svg>
              </div>
              <h3 class="card-title">AI Process Automation</h3>
              <p class="card-desc">Repetitive tasks can slow down your team’s progress. We identify the obstacles in your workflow and automate them, so your team can focus on work that actually needs human input.</p>
              <ul style="list-style: none; margin-bottom: 1.5rem; color: var(--text-dark-muted); font-size: 0.9rem; display: flex; flex-direction: column; gap: 0.4rem;">
                <li>✓ AI Strategy & Use Case ID</li>
                <li>✓ Workflow Automation Design</li>
                <li>✓ Custom AI Model Integration</li>
                <li>✓ API & System Automation</li>
              </ul>
              <a href="#solutions-ai" class="card-link" style="color: var(--purple-primary);">Learn More →</a>
            </div>

            <div class="card reveal">
              <div class="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 class="card-title">Aramco Cybersecurity Compliance</h3>
              <p class="card-desc">Achieve compliance with Aramco Cybersecurity Standards (CCC/SCCC) without stress. We help contractors identify security gaps, implement required controls, and get audit-ready fast.</p>
              <ul style="list-style: none; margin-bottom: 1.5rem; color: var(--text-dark-muted); font-size: 0.9rem; display: flex; flex-direction: column; gap: 0.4rem;">
                <li>✓ Gap Analysis & Risk Assessment</li>
                <li>✓ Cybersecurity Controls Setup</li>
                <li>✓ Audit Readiness Preparation</li>
                <li>✓ Certification Guidance</li>
              </ul>
              <a href="#solutions-cyber" class="card-link" style="color: var(--purple-primary);">Learn More →</a>
            </div>
          </div>
        </div>
      </div>

      <!-- ORGANIC CURVED DIVIDER BACK TO DARK NAVY/PURPLE -->
      <div class="section-divider" style="background: #f1f5f9;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#121926">
          <path d="M0,30 C200,100 500,0 800,70 C1000,120 1150,20 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <!-- Values & Collaboration -->
      <div class="section-padding">
        <div class="container split-block">
          <div class="reveal">
            <div class="eyebrow">Our Core Values</div>
            <h2>We believe in the power of collaboration.</h2>
            <p style="margin-bottom: 1.5rem;">From cybersecurity and ERP to design and marketing, we bring everything together so your business runs smarter. We don't just hand over a deliverable and disappear — we work alongside our clients as long-term partners.</p>
            
            <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-top: 2rem;">
              <div style="display: flex; gap: 1rem;">
                <div style="width: 38px; height: 38px; border-radius: 50%; background: rgba(124, 58, 237, 0.2); color: #c4b5fd; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">01</div>
                <div>
                  <h4 style="margin-bottom: 0.25rem;">Customer-Centric Mind</h4>
                  <p style="font-size: 0.95rem;">We understand your goals, challenges, and audience to create solutions that deliver real value.</p>
                </div>
              </div>

              <div style="display: flex; gap: 1rem;">
                <div style="width: 38px; height: 38px; border-radius: 50%; background: rgba(124, 58, 237, 0.2); color: #c4b5fd; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">02</div>
                <div>
                  <h4 style="margin-bottom: 0.25rem;">Results-Driven</h4>
                  <p style="font-size: 0.95rem;">Every strategy, system, and campaign is built to create measurable business outcomes.</p>
                </div>
              </div>

              <div style="display: flex; gap: 1rem;">
                <div style="width: 38px; height: 38px; border-radius: 50%; background: rgba(124, 58, 237, 0.2); color: #c4b5fd; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">03</div>
                <div>
                  <h4 style="margin-bottom: 0.25rem;">Long-Term Partnership</h4>
                  <p style="font-size: 0.95rem;">Showing up, staying accountable, and sharing in the wins as your business continues to grow.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="split-media reveal">
            <img src="assets/Core-values-1.jpg" alt="Analytix Core Values & Collaboration" class="split-img" onerror="this.src='assets/let-building-something.jpg'">
          </div>
        </div>
      </div>

      <!-- Core Services Overview -->
      <div class="section-padding" style="background: var(--bg-dark-surface);">
        <div class="container">
          <div style="text-align: center; max-width: 700px; margin: 0 auto 3.5rem auto;" class="reveal">
            <div class="eyebrow">Capabilities</div>
            <h2>What We Do Best</h2>
            <p>End-to-end digital expertise engineered to power enterprise operations and brand growth.</p>
          </div>

          <div class="grid-3">
            <div class="card reveal">
              <img src="assets/desgin.jpg" alt="UI/UX & Brand Design" class="card-img" onerror="this.src='assets/solutions-04.jpg'">
              <h3 class="card-title">Design</h3>
              <p class="card-desc">Human-centered UI/UX and brand identity built to build trust and elevate customer experience across every touchpoint.</p>
              <a href="#services-design" class="card-link">Explore Design Services →</a>
            </div>

            <div class="card reveal">
              <img src="assets/web-development_.jpg" alt="Software Development" class="card-img" onerror="this.src='assets/solutions-05.jpg'">
              <h3 class="card-title">Development</h3>
              <p class="card-desc">Scalable web applications, cloud platforms, and custom software systems engineered for high performance and security.</p>
              <a href="#services-development" class="card-link">Explore Development Services →</a>
            </div>

            <div class="card reveal">
              <img src="assets/marketing_.jpg" alt="Digital Marketing" class="card-img" onerror="this.src='assets/solutions-06.jpg'">
              <h3 class="card-title">Marketing</h3>
              <p class="card-desc">Integrated performance marketing, SEO, and conversion optimization to turn visitors into long-term loyal clients.</p>
              <a href="#services-marketing" class="card-link">Explore Marketing Services →</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Industry Focus -->
      <div class="section-padding">
        <div class="container">
          <div style="text-align: center; max-width: 760px; margin: 0 auto 3.5rem auto;" class="reveal">
            <div class="eyebrow">Industry Expertise</div>
            <h2>Built for the Industries That Keep Things Moving</h2>
            <p>Tailored Odoo ERP & digital transformation packages engineered for specialized operational demands.</p>
          </div>

          <div class="grid-4">
            <div class="card reveal">
              <div class="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
              </div>
              <h4 style="margin-bottom: 0.5rem;">Food & Beverage</h4>
              <p style="font-size: 0.88rem;">POS integration, kitchen display, batch tracking & multi-branch stock control.</p>
              <a href="#industries-fnb" class="card-link" style="margin-top: 1rem;">View Solutions →</a>
            </div>

            <div class="card reveal">
              <div class="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <h4 style="margin-bottom: 0.5rem;">Logistics</h4>
              <p style="font-size: 0.88rem;">Fleet management, real-time shipment tracking & automated warehouse dispatch.</p>
              <a href="#industries-logistics" class="card-link" style="margin-top: 1rem;">View Solutions →</a>
            </div>

            <div class="card reveal">
              <div class="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <h4 style="margin-bottom: 0.5rem;">Manufacturing</h4>
              <p style="font-size: 0.88rem;">MRP work centers, multi-level BOMs, quality checks & inventory forecasting.</p>
              <a href="#industries-manufacturing" class="card-link" style="margin-top: 1rem;">View Solutions →</a>
            </div>

            <div class="card reveal">
              <div class="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
              </div>
              <h4 style="margin-bottom: 0.5rem;">Construction</h4>
              <p style="font-size: 0.88rem;">Smart schedule control, site cost tracking, subcontractor management & billing.</p>
              <a href="#industries-construction" class="card-link" style="margin-top: 1rem;">View Solutions →</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="stats-section">
        <div class="container">
          <div style="text-align: center; margin-bottom: 3rem;" class="reveal">
            <div class="eyebrow">Proven Track Record</div>
            <h2>Why Businesses Keep Choosing Us</h2>
          </div>

          <div class="grid-4">
            <div class="stat-card reveal">
              <div class="stat-number" data-target="17" data-suffix="+">17+</div>
              <div class="stat-label">Years in the Industry</div>
            </div>
            <div class="stat-card reveal">
              <div class="stat-number" data-target="40" data-suffix="+">40+</div>
              <div class="stat-label">Projects Delivered</div>
            </div>
            <div class="stat-card reveal">
              <div class="stat-number" data-target="15" data-suffix="+">15+</div>
              <div class="stat-label">Countries Served</div>
            </div>
            <div class="stat-card reveal">
              <div class="stat-number" data-target="100" data-suffix="%">100%</div>
              <div class="stat-label">Real-Time Support, Always</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="section-padding">
        <div class="container">
          <div style="text-align: center; max-width: 760px; margin: 0 auto 3.5rem auto;" class="reveal">
            <div class="eyebrow">Client Success</div>
            <h2>We’re proud to partner with visionaries and businesses.</h2>
            <p>Their feedback inspires digital experiences that make impact.</p>
          </div>

          <div class="grid-3">
            <div class="testimonial-card reveal">
              <div class="testimonial-quote">"Analytix transformed our operational workflow with Odoo ERP. Their team guided us through every step and customized modules to match our exact logistics process."</div>
              <div class="testimonial-author">
                <img src="assets/author-1.webp" alt="Faisal Al-Rashidi" class="author-avatar" onerror="this.src='assets/author-6.webp'">
                <div>
                  <div class="author-name">Faisal Al-Rashidi</div>
                  <div class="author-role">Managing Director, Logistics KSA</div>
                </div>
              </div>
            </div>

            <div class="testimonial-card reveal">
              <div class="testimonial-quote">"Their Aramco cybersecurity compliance consultation saved us months of trial and error. We passed our audit seamlessly without delaying our contract timelines."</div>
              <div class="testimonial-author">
                <img src="assets/author-2.webp" alt="Sara Nasser" class="author-avatar" onerror="this.src='assets/author-7.webp'">
                <div>
                  <div class="author-name">Sara Nasser</div>
                  <div class="author-role">VP of IT Operations, Energy Services</div>
                </div>
              </div>
            </div>

            <div class="testimonial-card reveal">
              <div class="testimonial-quote">"The team at Analytix redefined our digital presence and marketing funnel. Our conversion rates increased dramatically within the first quarter."</div>
              <div class="testimonial-author">
                <img src="assets/author-3.webp" alt="Ahmed Al-Mannai" class="author-avatar" onerror="this.src='assets/author-6.webp'">
                <div>
                  <div class="author-name">Ahmed Al-Mannai</div>
                  <div class="author-role">CEO, Gulf Industrial Group</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Blog Insights Section -->
      <div class="section-padding" style="background: var(--bg-dark-surface);">
        <div class="container">
          <div style="display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 3.5rem; flex-wrap: wrap; gap: 1.5rem;" class="reveal">
            <div>
              <div class="eyebrow">Frontline Knowledge</div>
              <h2>Insights from the Frontlines of Tech</h2>
            </div>
            <a href="#blog" class="btn btn-secondary">View All Articles →</a>
          </div>

          <div class="grid-4">
            <div class="card reveal" style="padding: 1.5rem;">
              <img src="assets/b2-img-1.webp" alt="Aramco Standards" style="width: 100%; height: 160px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1rem;" onerror="this.src='assets/solutions-01.jpg'">
              <div style="font-size: 0.8rem; color: #c4b5fd; margin-bottom: 0.5rem; font-weight: 600;">21 Apr 2026 • Cybersecurity</div>
              <h4 style="font-size: 1rem; margin-bottom: 0.75rem;"><a href="#blog-1">How Aramco Cybersecurity Standards Protect the Local Economy</a></h4>
              <a href="#blog-1" class="card-link" style="font-size: 0.85rem;">Read Article →</a>
            </div>

            <div class="card reveal" style="padding: 1.5rem;">
              <img src="assets/b2-img-2.webp" alt="Odoo ERP Integration" style="width: 100%; height: 160px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1rem;" onerror="this.src='assets/solutions-02.jpg'">
              <div style="font-size: 0.8rem; color: #c4b5fd; margin-bottom: 0.5rem; font-weight: 600;">21 Apr 2026 • ERP & Systems</div>
              <h4 style="font-size: 1rem; margin-bottom: 0.75rem;"><a href="#blog-2">Odoo: Why Modern Businesses Choose Integration:</a></h4>
              <a href="#blog-2" class="card-link" style="font-size: 0.85rem;">Read Article →</a>
            </div>

            <div class="card reveal" style="padding: 1.5rem;">
              <img src="assets/b2-img-3.webp" alt="Future of Tech" style="width: 100%; height: 160px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1rem;" onerror="this.src='assets/solutions-03.jpg'">
              <div style="font-size: 0.8rem; color: #c4b5fd; margin-bottom: 0.5rem; font-weight: 600;">21 Apr 2026 • AI & Strategy</div>
              <h4 style="font-size: 1rem; margin-bottom: 0.75rem;"><a href="#blog-3">Why the Future of Tech is Powered by Humans:</a></h4>
              <a href="#blog-3" class="card-link" style="font-size: 0.85rem;">Read Article →</a>
            </div>

            <div class="card reveal" style="padding: 1.5rem;">
              <img src="assets/b2-img-4.webp" alt="Marketing Leakage" style="width: 100%; height: 160px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1rem;" onerror="this.src='assets/solutions-04.jpg'">
              <div style="font-size: 0.8rem; color: #c4b5fd; margin-bottom: 0.5rem; font-weight: 600;">21 Apr 2026 • Growth Marketing</div>
              <h4 style="font-size: 1rem; margin-bottom: 0.75rem;"><a href="#blog-4">Why Your Marketing Might Be Leaking Revenue:</a></h4>
              <a href="#blog-4" class="card-link" style="font-size: 0.85rem;">Read Article →</a>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Accordion -->
      <div class="section-padding">
        <div class="container" style="max-width: 900px;">
          <div style="text-align: center; margin-bottom: 3.5rem;" class="reveal">
            <div class="eyebrow">Got Questions?</div>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div class="accordion reveal">
            <div class="accordion-item">
              <button class="accordion-header">
                <span>What services does Analytix BSS specialize in?</span>
                <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div class="accordion-content">
                <p>Analytix BSS provides enterprise technology solutions including Odoo ERP Implementation, AI Process Automation, Aramco Cybersecurity Compliance (CCC/SCCC), Custom Software & Web Development, UI/UX Design, and Performance Marketing.</p>
              </div>
            </div>

            <div class="accordion-item">
              <button class="accordion-header">
                <span>How does Odoo ERP implementation help my business?</span>
                <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div class="accordion-content">
                <p>Odoo eliminates disconnected tools by unifying your sales, finance, inventory, HR, purchasing, and operations into one single system. This improves data visibility, eliminates duplicate entry, and accelerates workflow execution.</p>
              </div>
            </div>

            <div class="accordion-item">
              <button class="accordion-header">
                <span>Why is Aramco Cybersecurity Compliance necessary for contractors?</span>
                <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div class="accordion-content">
                <p>Saudi Aramco mandates that all suppliers and contractors adhere to Cybersecurity Compliance Certificates (CCC/SCCC). We guide contractors through gap analysis, security controls deployment, and audit readiness to ensure ongoing eligibility for major contracts.</p>
              </div>
            </div>

            <div class="accordion-item">
              <button class="accordion-header">
                <span>How long does an ERP implementation or AI automation project take?</span>
                <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div class="accordion-content">
                <p>Timelines depend on project scope. Standard Odoo implementations typically range from 4 to 12 weeks, while custom AI process automations can be delivered in 2 to 6 weeks with full ongoing support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Hero CTA Banner -->
      <div class="section-padding">
        <div class="container">
          <div style="background: linear-gradient(135deg, rgba(82,37,124,0.5) 0%, rgba(37,99,235,0.3) 100%); border: 1px solid var(--border-purple-hover); border-radius: var(--radius-lg); padding: 4rem 2rem; text-align: center; position: relative; overflow: hidden;" class="reveal">
            <div class="eyebrow" style="background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); color: #fff;">Let's Build Something</div>
            <h2 style="font-size: clamp(2rem, 4vw, 3.2rem); margin-bottom: 1.5rem; color: #fff;">Remarkable.</h2>
            <p style="max-width: 600px; margin: 0 auto 2.5rem auto; color: #e2e8f0; font-size: 1.15rem;">Ready to upgrade your enterprise systems, automate workflows, or achieve Aramco cybersecurity certification?</p>
            <a href="#contact" class="btn btn-primary" style="font-size: 1.05rem; padding: 1rem 2.5rem;">
              Get Started Now
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>

    </section>

    <!-- ===================================================================
         VIEW 2: ABOUT US (#about)
         =================================================================== -->
    <section id="about" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container">
          <div style="max-width: 800px; margin: 0 auto; text-align: center;" class="reveal">
            <div class="eyebrow">About Analytix BSS</div>
            <h1>We Build the Digital Backbone of Your Business</h1>
            <p style="font-size: 1.2rem; margin-top: 1.5rem;">From cybersecurity and ERP to design and marketing, we bring everything together so your business runs smarter, scales faster, and stays protected.</p>
          </div>
        </div>
      </div>

      <div class="section-padding" style="background: var(--bg-dark-surface);">
        <div class="container split-block">
          <div class="split-media reveal">
            <img src="assets/let-building-something-02.jpg" alt="Analytix Team Expertise" class="split-img" onerror="this.src='assets/let-building-something.jpg'">
          </div>

          <div class="reveal">
            <div class="eyebrow">Who We Are</div>
            <h2>17+ Years of Engineering Business Growth</h2>
            <p style="margin-bottom: 1.25rem;">At Analytix BSS, we believe that technology should be an accelerator, not a barrier. Over the past 17 years, we have empowered over 40+ major enterprise clients across 15 countries to simplify their business operations, protect their digital assets, and achieve sustainable digital transformation.</p>
            <p>Our team brings together certified Odoo ERP architects, cybersecurity compliance auditors, full-stack software engineers, creative UI/UX designers, and growth marketers under one unified roof.</p>
          </div>
        </div>
      </div>

      <!-- Core Values Grid -->
      <div class="section-padding">
        <div class="container">
          <div style="text-align: center; max-width: 700px; margin: 0 auto 3.5rem auto;" class="reveal">
            <div class="eyebrow">Our Guiding Principles</div>
            <h2>Our Core Values</h2>
          </div>

          <div class="grid-4">
            <div class="card reveal">
              <div class="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h4>Customer-Centric Mind</h4>
              <p style="font-size: 0.9rem;">We understand your goals, challenges, and audience to create solutions that deliver real business value.</p>
            </div>

            <div class="card reveal">
              <div class="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h4>Results-Driven</h4>
              <p style="font-size: 0.9rem;">Every strategy, system, and campaign is engineered to create measurable, bottom-line outcomes.</p>
            </div>

            <div class="card reveal">
              <div class="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4>Collaboration</h4>
              <p style="font-size: 0.9rem;">We work alongside our clients as long-term partners — staying accountable and sharing in the wins.</p>
            </div>

            <div class="card reveal">
              <div class="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </div>
              <h4>Expert Team</h4>
              <p style="font-size: 0.9rem;">Deep domain experts with international experience in ERP, cloud systems, compliance, and growth design.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 3: ALL SERVICES OVERVIEW (#services)
         =================================================================== -->
    <section id="services" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container text-center" style="max-width: 800px; margin: 0 auto; text-align: center;">
          <div class="eyebrow">Our Capabilities</div>
          <h1>Services Built for Scale & Speed</h1>
          <p style="font-size: 1.2rem; margin-top: 1.5rem;">Discover our full suite of design, software development, and growth marketing services tailored for modern enterprises.</p>
        </div>
      </div>

      <div class="section-padding">
        <div class="container grid-3">
          <div class="card reveal">
            <img src="assets/desgin.jpg" alt="Design Services" class="card-img" onerror="this.src='assets/solutions-04.jpg'">
            <h2>UI/UX & Brand Design</h2>
            <p class="card-desc">Human-centered digital interfaces, brand identity systems, product design, and interactive prototypes built to delight users and convert visitors into loyal customers.</p>
            <a href="#services-design" class="btn btn-secondary">Explore Design Services →</a>
          </div>

          <div class="card reveal">
            <img src="assets/web-development_.jpg" alt="Software Development" class="card-img" onerror="this.src='assets/solutions-05.jpg'">
            <h2>Enterprise Development</h2>
            <p class="card-desc">Robust web applications, custom API integrations, cloud architecture, mobile apps, and enterprise software built with modern front-end and back-end frameworks.</p>
            <a href="#services-development" class="btn btn-secondary">Explore Development Services →</a>
          </div>

          <div class="card reveal">
            <img src="assets/marketing_.jpg" alt="Marketing Services" class="card-img" onerror="this.src='assets/solutions-06.jpg'">
            <h2>Performance Marketing</h2>
            <p class="card-desc">Data-driven growth campaigns, search engine optimization (SEO), conversion rate optimization (CRO), paid search, and complete revenue leakage prevention.</p>
            <a href="#services-marketing" class="btn btn-secondary">Explore Marketing Services →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 4: SERVICE DETAIL - DESIGN (#services-design)
         =================================================================== -->
    <section id="services-design" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 800px; margin: 0 auto; text-align: center;">
          <div class="eyebrow">Design Practice</div>
          <h1>Strategic UI/UX & Digital Brand Design</h1>
          <p style="font-size: 1.2rem; margin-top: 1.5rem;">We turn complex enterprise requirements into intuitive, elegant, human-centered digital experiences that drive engagement and trust.</p>
        </div>
      </div>

      <div class="section-padding" style="background: var(--bg-dark-surface);">
        <div class="container split-block">
          <div class="reveal">
            <h2>Human-Centered Interface Engineering</h2>
            <p style="margin-bottom: 1.25rem;">Great design is more than just visuals — it’s how your product works, feels, and communicates value to your users. Our design team focuses on solving real user friction points while reinforcing your brand identity.</p>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; color: var(--text-muted);">
              <li>✓ Comprehensive User Research & Journey Mapping</li>
              <li>✓ Wireframing & High-Fidelity Interactive Prototypes</li>
              <li>✓ Enterprise Design Systems & UI Component Libraries</li>
              <li>✓ Conversion-Focused Web & Mobile Interfaces</li>
            </ul>
          </div>
          <div class="split-media reveal">
            <img src="assets/desgin.jpg" alt="Design UI/UX Workflow" class="split-img">
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 5: SERVICE DETAIL - DEVELOPMENT (#services-development)
         =================================================================== -->
    <section id="services-development" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 800px; margin: 0 auto; text-align: center;">
          <div class="eyebrow">Engineering Practice</div>
          <h1>Enterprise Web & Software Development</h1>
          <p style="font-size: 1.2rem; margin-top: 1.5rem;">Custom web applications, API integrations, cloud systems, and scalable software built with modern standards for speed, security, and uptime.</p>
        </div>
      </div>

      <div class="section-padding" style="background: var(--bg-dark-surface);">
        <div class="container split-block">
          <div class="split-media reveal">
            <img src="assets/web-development_.jpg" alt="Software Architecture" class="split-img">
          </div>
          <div class="reveal">
            <h2>Scalable Software Architecture</h2>
            <p style="margin-bottom: 1.25rem;">We build custom digital backbones that integrate seamlessly with your existing infrastructure. From cloud migration to microservice development, our solutions are engineered for long-term maintainability.</p>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; color: var(--text-muted);">
              <li>✓ Custom Web & Mobile Application Development</li>
              <li>✓ Enterprise System Integrations & RESTful APIs</li>
              <li>✓ Cloud Architecture & High-Availability Hosting</li>
              <li>✓ Rigorous QA Testing & Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 6: SERVICE DETAIL - MARKETING (#services-marketing)
         =================================================================== -->
    <section id="services-marketing" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 800px; margin: 0 auto; text-align: center;">
          <div class="eyebrow">Growth Practice</div>
          <h1>Integrated Performance Marketing & Revenue Optimization</h1>
          <p style="font-size: 1.2rem; margin-top: 1.5rem;">Stop revenue leakage. Connect your marketing channels, website user experience, and CRM into one synchronized growth engine.</p>
        </div>
      </div>

      <div class="section-padding" style="background: var(--bg-dark-surface);">
        <div class="container split-block">
          <div class="reveal">
            <h2>Fixing Disconnected Marketing Funnels</h2>
            <p style="margin-bottom: 1.25rem;">Many businesses invest heavily in ads or SEO, only to lose potential clients due to poor landing page conversion or disconnected sales tech stacks. Our integrated approach fixes the entire customer journey.</p>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; color: var(--text-muted);">
              <li>✓ Search Engine Optimization (SEO) & Technical Audits</li>
              <li>✓ Conversion Rate Optimization (CRO) & A/B Testing</li>
              <li>✓ Targeted B2B Lead Generation Campaigns</li>
              <li>✓ Revenue Attribution & CRM Integration</li>
            </ul>
          </div>
          <div class="split-media reveal">
            <img src="assets/marketing_.jpg" alt="Performance Growth Marketing" class="split-img">
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 7: SOLUTIONS OVERVIEW (#solutions)
         =================================================================== -->
    <section id="solutions" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 800px; margin: 0 auto; text-align: center;">
          <div class="eyebrow">Flagship Solutions</div>
          <h1>Enterprise Solutions Engineered for Business Scale</h1>
          <p style="font-size: 1.2rem; margin-top: 1.5rem;">Explore our high-impact solutions for ERP implementation, AI process automation, and Aramco cybersecurity compliance.</p>
        </div>
      </div>

      <div class="section-padding">
        <div class="container grid-3">
          <div class="card reveal">
            <img src="assets/solutions-01.jpg" alt="Odoo ERP Solution" class="card-img">
            <h3>Odoo ERP Implementation</h3>
            <p class="card-desc">Unify sales, finance, purchasing, inventory, and HR under one centralized ERP platform customized for your business workflows.</p>
            <a href="#solutions-odoo" class="btn btn-secondary">Explore Odoo ERP →</a>
          </div>

          <div class="card reveal">
            <img src="assets/solutions-02.jpg" alt="AI Automation Solution" class="card-img">
            <h3>AI Process Automation</h3>
            <p class="card-desc">Automate repetitive operational tasks, optimize document processing, and leverage custom AI models for instant business intelligence.</p>
            <a href="#solutions-ai" class="btn btn-secondary">Explore AI Automation →</a>
          </div>

          <div class="card reveal">
            <img src="assets/solutions-03.jpg" alt="Aramco Cybersecurity Solution" class="card-img">
            <h3>Aramco Cybersecurity Compliance</h3>
            <p class="card-desc">Comprehensive CCC & SCCC audit preparation, risk assessment, security controls deployment, and compliance certification guidance.</p>
            <a href="#solutions-cyber" class="btn btn-secondary">Explore Cybersecurity →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 8: SOLUTION DETAIL - ODOO ERP (#solutions-odoo)
         =================================================================== -->
    <section id="solutions-odoo" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 850px; margin: 0 auto; text-align: center;">
          <div class="eyebrow">Odoo Silver Partner</div>
          <h1>Unified Odoo ERP Implementation for Business Efficiency</h1>
          <p style="font-size: 1.2rem; margin-top: 1.5rem;">Managing your business with five different tools is exhausting. Odoo brings your sales, operations, finance, and team into one place, so you always know what’s happening and what to do next.</p>
        </div>
      </div>

      <div class="section-padding" style="background: var(--bg-dark-surface);">
        <div class="container">
          <div style="text-align: center; max-width: 700px; margin: 0 auto 3rem auto;" class="reveal">
            <h2>Our Complete Odoo ERP Implementation Process</h2>
          </div>

          <div class="grid-3">
            <div class="card reveal">
              <div class="card-icon">1</div>
              <h4>1. ERP Setup & Configuration</h4>
              <p>Tailored installation and module selection customized to match your company's organizational chart, workflows, and multi-currency demands.</p>
            </div>

            <div class="card reveal">
              <div class="card-icon">2</div>
              <h4>2. Custom Module Development</h4>
              <p>Specialized Python & Odoo module engineering to address unique industry requirements that default apps cannot handle out-of-the-box.</p>
            </div>

            <div class="card reveal">
              <div class="card-icon">3</div>
              <h4>3. System Integration & APIs</h4>
              <p>Seamlessly connect Odoo with your existing payment gateways, e-commerce platforms, logistics providers, and legacy software systems.</p>
            </div>

            <div class="card reveal">
              <div class="card-icon">4</div>
              <h4>4. Data Migration & Cleanup</h4>
              <p>Safe extraction, transformation, and migration of legacy financial records, customer databases, and product inventories with zero data loss.</p>
            </div>

            <div class="card reveal">
              <div class="card-icon">5</div>
              <h4>5. User Training & Adoption</h4>
              <p>Hands-on training sessions for your leadership, department heads, and operational staff to guarantee rapid software adoption across your team.</p>
            </div>

            <div class="card reveal">
              <div class="card-icon">6</div>
              <h4>6. Ongoing SLA Maintenance</h4>
              <p>24/7 technical assistance, regular security updates, server backups, and continuous system optimizations whenever your business scales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 9: SOLUTION DETAIL - AI AUTOMATION (#solutions-ai)
         =================================================================== -->
    <section id="solutions-ai" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 850px; margin: 0 auto; text-align: center;">
          <div class="eyebrow">Intelligent Automation</div>
          <h1>AI Process Automation & Workflow Engineering</h1>
          <p style="font-size: 1.2rem; margin-top: 1.5rem;">Repetitive tasks can slow down your team’s progress. We identify the obstacles in your workflow and automate them, so your team can focus on work that actually needs human input.</p>
        </div>
      </div>

      <div class="section-padding" style="background: var(--bg-dark-surface);">
        <div class="container split-block">
          <div class="reveal">
            <h2>Transforming Operational Speed with AI</h2>
            <p style="margin-bottom: 1.25rem;">Our AI solutions integrate directly into your operational stack — enabling automated invoice processing, customer support routing, document extraction, and predictive analytics.</p>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; color: var(--text-muted);">
              <li>✓ AI Strategy & Use Case Identification</li>
              <li>✓ Automated Document Extraction & Ingestion</li>
              <li>✓ Intelligent Process Automation (IPA) & Webhooks</li>
              <li>✓ Custom Machine Learning & Natural Language Models</li>
            </ul>
          </div>
          <div class="split-media reveal">
            <img src="assets/solutions-02.jpg" alt="AI Automation Engineering" class="split-img">
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 10: SOLUTION DETAIL - ARAMCO CYBERSECURITY (#solutions-cyber)
         =================================================================== -->
    <section id="solutions-cyber" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 850px; margin: 0 auto; text-align: center;">
          <div class="eyebrow">Aramco SCCC Certified</div>
          <h1>Aramco Cybersecurity Compliance (CCC / SCCC) Consulting</h1>
          <p style="font-size: 1.2rem; margin-top: 1.5rem;">Achieve compliance with Aramco Cybersecurity Standards without stress. We help contractors identify security gaps, implement required controls, and get audit-ready fast.</p>
        </div>
      </div>

      <div class="section-padding" style="background: var(--bg-dark-surface);">
        <div class="container">
          <div class="grid-3">
            <div class="card reveal">
              <h4>1. Gap Analysis & Assessment</h4>
              <p>In-depth inspection of your existing IT infrastructure, policies, and access controls against Aramco CCC requirements to identify non-compliance areas.</p>
            </div>

            <div class="card reveal">
              <h4>2. Controls Implementation</h4>
              <p>Deployment of mandatory cybersecurity controls including network segmentation, endpoint protection, multi-factor authentication, and encryption.</p>
            </div>

            <div class="card reveal">
              <h4>3. Audit Preparedness & Support</h4>
              <p>Comprehensive documentation, policy creation, staff security awareness training, and mock audit rehearsal to ensure 100% first-pass certification success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 11: INDUSTRY - FOOD & BEVERAGE (#industries-fnb)
         =================================================================== -->
    <section id="industries-fnb" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 800px; margin: 0 auto; text-align: center;">
          <div class="eyebrow">Industry Solutions</div>
          <h1>Odoo ERP for Food & Beverage Businesses</h1>
          <p style="font-size: 1.2rem; margin-top: 1.5rem;">Synchronize your restaurant POS, kitchen display system, ingredient inventory, batch expiry dates, and multi-branch financial accounting.</p>
        </div>
      </div>

      <div class="section-padding" style="background: var(--bg-dark-surface);">
        <div class="container split-block">
          <div class="split-media reveal">
            <img src="assets/Food-and-beverages.gif" alt="F&B Management System" class="split-img" onerror="this.src='assets/solutions-04.jpg'">
          </div>
          <div class="reveal">
            <h2>Complete Control Over Kitchen & Inventory</h2>
            <p style="margin-bottom: 1.25rem;">Food & Beverage operations demand speed, accuracy, and compliance with health regulations. Our specialized Odoo F&B package provides:</p>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; color: var(--text-muted);">
              <li>✓ Real-Time POS & Kitchen Display System (KDS) Sync</li>
              <li>✓ Recipe Costing & Automated Ingredient Depletion</li>
              <li>✓ Batch Tracking & Expiry Date Management</li>
              <li>✓ Multi-Branch Centralized Financial Reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 12: INDUSTRY - LOGISTICS (#industries-logistics)
         =================================================================== -->
    <section id="industries-logistics" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 800px; margin: 0 auto; text-align: center;">
          <div class="eyebrow">Industry Solutions</div>
          <h1>Odoo ERP for Logistics & Supply Chain</h1>
          <p style="font-size: 1.2rem; margin-top: 1.5rem;">Optimize fleet dispatching, warehouse storage management, route planning, customs clearance, and real-time shipment tracking.</p>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 13: INDUSTRY - MANUFACTURING (#industries-manufacturing)
         =================================================================== -->
    <section id="industries-manufacturing" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 800px; margin: 0 auto; text-align: center;">
          <div class="eyebrow">Industry Solutions</div>
          <h1>Odoo ERP for Manufacturing</h1>
          <p style="font-size: 1.2rem; margin-top: 1.5rem;">Streamline work center scheduling, multi-level Bill of Materials (BOM), shop floor control, quality checks, and predictive maintenance.</p>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 14: INDUSTRY - CONSTRUCTION (#industries-construction)
         =================================================================== -->
    <section id="industries-construction" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 800px; margin: 0 auto; text-align: center;">
          <div class="eyebrow">Industry Solutions</div>
          <h1>Odoo ERP for Construction & Smart Schedule Control</h1>
          <p style="font-size: 1.2rem; margin-top: 1.5rem;">Track project milestones, site material costs, subcontractor contracts, equipment allocation, and schedule progress in real time.</p>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 15: BLOG LIST (#blog)
         =================================================================== -->
    <section id="blog" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 800px; margin: 0 auto; text-align: center;">
          <div class="eyebrow">Blog & Insights</div>
          <h1>Insights from the Frontlines of Tech</h1>
          <p style="font-size: 1.2rem; margin-top: 1.5rem;">Articles, case studies, and strategic guidance on cybersecurity, ERP, artificial intelligence, and growth marketing.</p>
          
          <div style="margin-top: 2rem; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <input type="text" id="blogSearchInput" placeholder="Search articles..." class="form-input" style="max-width: 380px;">
          </div>
        </div>
      </div>

      <div class="section-padding">
        <div class="container grid-2">
          
          <div class="card blog-card-item reveal" data-category="cybersecurity">
            <img src="assets/b2-img-1.webp" alt="Aramco Cybersecurity Standards" class="card-img" style="height: 220px;" onerror="this.src='assets/solutions-01.jpg'">
            <div style="font-size: 0.85rem; color: #c4b5fd; margin-bottom: 0.5rem; font-weight: 600;">21 Apr 2026 • Cybersecurity</div>
            <h3>How Aramco Cybersecurity Standards Protect the Local Economy</h3>
            <p class="card-desc">Discover how Saudi Aramco's mandatory cybersecurity compliance framework protects national infrastructure, secures supply chains, and fosters economic resilience.</p>
            <a href="#blog-1" class="btn btn-secondary">Read Article →</a>
          </div>

          <div class="card blog-card-item reveal" data-category="erp">
            <img src="assets/b2-img-2.webp" alt="Odoo Integration" class="card-img" style="height: 220px;" onerror="this.src='assets/solutions-02.jpg'">
            <div style="font-size: 0.85rem; color: #c4b5fd; margin-bottom: 0.5rem; font-weight: 600;">21 Apr 2026 • ERP & Systems</div>
            <h3>Odoo: Why Modern Businesses Choose Integration:</h3>
            <p class="card-desc">Managing operations across five isolated tools causes revenue leakage and data errors. Learn why enterprise leaders are switching to integrated Odoo ERP.</p>
            <a href="#blog-2" class="btn btn-secondary">Read Article →</a>
          </div>

          <div class="card blog-card-item reveal" data-category="ai">
            <img src="assets/b2-img-3.webp" alt="Human Tech Future" class="card-img" style="height: 220px;" onerror="this.src='assets/solutions-03.jpg'">
            <div style="font-size: 0.85rem; color: #c4b5fd; margin-bottom: 0.5rem; font-weight: 600;">21 Apr 2026 • AI & Strategy</div>
            <h3>Why the Future of Tech is Powered by Humans:</h3>
            <p class="card-desc">While AI handles speed and pattern recognition, human judgment, context, and empathy remain irreplaceable for digital transformation success.</p>
            <a href="#blog-3" class="btn btn-secondary">Read Article →</a>
          </div>

          <div class="card blog-card-item reveal" data-category="marketing">
            <img src="assets/b2-img-4.webp" alt="Marketing Leaks" class="card-img" style="height: 220px;" onerror="this.src='assets/solutions-04.jpg'">
            <div style="font-size: 0.85rem; color: #c4b5fd; margin-bottom: 0.5rem; font-weight: 600;">21 Apr 2026 • Growth Marketing</div>
            <h3>Why Your Marketing Might Be Leaking Revenue:</h3>
            <p class="card-desc">High traffic but low sales? Learn how disconnected marketing stacks cause revenue leakage and what steps to take to build a synchronized growth funnel.</p>
            <a href="#blog-4" class="btn btn-secondary">Read Article →</a>
          </div>

        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 16: BLOG DETAIL 1 (#blog-1)
         =================================================================== -->
    <section id="blog-1" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 800px; margin: 0 auto;">
          <a href="#blog" class="card-link" style="margin-bottom: 1.5rem; display: inline-block;">← Back to All Articles</a>
          <div style="font-size: 0.9rem; color: #c4b5fd; margin-bottom: 0.5rem; font-weight: 600;">Published on 21 Apr 2026 • Cybersecurity</div>
          <h1>How Aramco Cybersecurity Standards Protect the Local Economy</h1>
        </div>
      </div>

      <div class="section-padding" style="background: var(--bg-dark-surface);">
        <div class="container" style="max-width: 800px; font-size: 1.1rem; line-height: 1.8;">
          <img src="assets/b2-img-1.webp" alt="Aramco Cybersecurity" style="width: 100%; border-radius: var(--radius-lg); margin-bottom: 2.5rem;" onerror="this.src='assets/solutions-01.jpg'">
          
          <p style="margin-bottom: 1.5rem;">Saudi Aramco stands as one of the world's premier energy providers. Protecting its digital and physical infrastructure is essential not only for company operations, but for the entire regional economy.</p>
          
          <h2 style="margin: 2rem 0 1rem 0;">What Are Aramco Cybersecurity Standards?</h2>
          <p style="margin-bottom: 1.5rem;">Aramco's Cybersecurity Compliance Certificate (CCC) and SCCC framework establish stringent security controls across access management, data encryption, network protection, vulnerability management, and incident response.</p>
          
          <h2 style="margin: 2rem 0 1rem 0;">Why Compliance Matters for Contractors</h2>
          <p style="margin-bottom: 1.5rem;">Contractors and suppliers seeking to work with Aramco must demonstrate compliance. Achieving certification guarantees that vendors do not introduce security risks into the broader energy ecosystem.</p>
          
          <div style="margin-top: 3rem; padding: 2rem; background: var(--bg-dark-card); border-radius: var(--radius-md); border: 1px solid var(--border-purple);">
            <h3>Need Aramco CCC / SCCC Audit Preparation?</h3>
            <p style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Analytix BSS offers complete gap analysis, controls deployment, and certification support.</p>
            <a href="#contact" class="btn btn-primary">Book Consultation</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 17: BLOG DETAIL 2 (#blog-2)
         =================================================================== -->
    <section id="blog-2" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 800px; margin: 0 auto;">
          <a href="#blog" class="card-link" style="margin-bottom: 1.5rem; display: inline-block;">← Back to All Articles</a>
          <div style="font-size: 0.9rem; color: #c4b5fd; margin-bottom: 0.5rem; font-weight: 600;">Published on 21 Apr 2026 • ERP & Systems</div>
          <h1>Odoo: Why Modern Businesses Are Leaving Disconnected Tools Behind</h1>
        </div>
      </div>

      <div class="section-padding" style="background: var(--bg-dark-surface);">
        <div class="container" style="max-width: 800px; font-size: 1.1rem; line-height: 1.8;">
          <img src="assets/b2-img-2.webp" alt="Odoo Integration" style="width: 100%; border-radius: var(--radius-lg); margin-bottom: 2.5rem;" onerror="this.src='assets/solutions-02.jpg'">
          <p>Managing operations with separate CRM, accounting, inventory, and HR tools leads to duplicate data entry, missed sales, and operational delays. Integrated Odoo ERP unifies all your departments under one single platform.</p>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 18: BLOG DETAIL 3 (#blog-3)
         =================================================================== -->
    <section id="blog-3" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 800px; margin: 0 auto;">
          <a href="#blog" class="card-link" style="margin-bottom: 1.5rem; display: inline-block;">← Back to All Articles</a>
          <div style="font-size: 0.9rem; color: #c4b5fd; margin-bottom: 0.5rem; font-weight: 600;">Published on 21 Apr 2026 • AI & Strategy</div>
          <h1>Why the Future of Tech is Powered by Humans</h1>
        </div>
      </div>

      <div class="section-padding" style="background: var(--bg-dark-surface);">
        <div class="container" style="max-width: 800px; font-size: 1.1rem; line-height: 1.8;">
          <img src="assets/b2-img-3.webp" alt="Human Tech Future" style="width: 100%; border-radius: var(--radius-lg); margin-bottom: 2.5rem;" onerror="this.src='assets/solutions-03.jpg'">
          <p>While artificial intelligence excels at speed and repetitive task automation, human judgment, empathy, and strategic thinking remain essential for true digital transformation success.</p>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 19: BLOG DETAIL 4 (#blog-4)
         =================================================================== -->
    <section id="blog-4" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 800px; margin: 0 auto;">
          <a href="#blog" class="card-link" style="margin-bottom: 1.5rem; display: inline-block;">← Back to All Articles</a>
          <div style="font-size: 0.9rem; color: #c4b5fd; margin-bottom: 0.5rem; font-weight: 600;">Published on 21 Apr 2026 • Growth Marketing</div>
          <h1>Why Your Marketing Might Be Leaking Revenue</h1>
        </div>
      </div>

      <div class="section-padding" style="background: var(--bg-dark-surface);">
        <div class="container" style="max-width: 800px; font-size: 1.1rem; line-height: 1.8;">
          <img src="assets/b2-img-4.webp" alt="Marketing Revenue Leakage" style="width: 100%; border-radius: var(--radius-lg); margin-bottom: 2.5rem;" onerror="this.src='assets/solutions-04.jpg'">
          <p>Investing in ads without an optimized landing page or connected CRM causes money to slip away through marketing cracks. Learn how full-stack attribution fixes revenue leakage.</p>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         VIEW 20: CONTACT US (#contact)
         =================================================================== -->
    <section id="contact" class="page-view">
      <div class="hero-section">
        <div class="hero-atmosphere" aria-hidden="true"><div class="hero-gradient-overlay"></div></div>
        <div class="container" style="max-width: 800px; margin: 0 auto; text-align: center;">
          <div class="eyebrow">Get In Touch</div>
          <h1>Let’s Discuss Your Next Enterprise Milestone</h1>
          <p style="font-size: 1.2rem; margin-top: 1.5rem;">Have questions about Odoo ERP, AI automation, or Aramco cybersecurity compliance? Contact our global expert team today.</p>
        </div>
      </div>

      <div class="section-padding">
        <div class="container split-block">
          
          <!-- Contact Form -->
          <div class="card reveal" style="padding: 2.5rem;">
            <h3 style="margin-bottom: 1.5rem;">Send Us a Message</h3>
            
            <form id="contactForm" novalidate>
              <div class="form-group">
                <label class="form-label" for="c-name">Full Name *</label>
                <input type="text" id="c-name" name="name" class="form-input" placeholder="e.g. Faisal Al-Rashidi" required>
              </div>

              <div class="grid-2" style="gap: 1rem;">
                <div class="form-group">
                  <label class="form-label" for="c-email">Work Email *</label>
                  <input type="email" id="c-email" name="email" class="form-input" placeholder="name@company.com" required>
                </div>
                <div class="form-group">
                  <label class="form-label" for="c-phone">Phone / WhatsApp *</label>
                  <input type="tel" id="c-phone" name="phone" class="form-input" placeholder="+966 50 000 0000" required>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="c-service">Service of Interest</label>
                <select id="c-service" name="service" class="form-select">
                  <option value="odoo">Odoo ERP Implementation</option>
                  <option value="ai">AI Process Automation</option>
                  <option value="cybersecurity">Aramco Cybersecurity Compliance (CCC/SCCC)</option>
                  <option value="design">UI/UX & Brand Design</option>
                  <option value="development">Enterprise Web/App Development</option>
                  <option value="marketing">Performance Marketing & CRO</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="c-message">How Can We Help You? *</label>
                <textarea id="c-message" name="message" class="form-textarea" placeholder="Tell us about your project or compliance goals..." required></textarea>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%;">
                Submit Inquiry
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>

              <div id="formStatus" class="form-status"></div>
            </form>
          </div>

          <!-- Global Offices List -->
          <div class="reveal">
            <h3 style="margin-bottom: 1.5rem;">Global & Regional Offices</h3>

            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              
              <div style="background: var(--bg-dark-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-purple);">
                <h4 style="color: #c4b5fd; margin-bottom: 0.25rem;">Riyadh, Saudi Arabia</h4>
                <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"># 703, 7th floor, Futuro Tower King Saud Rd, Riyadh | Jarir Business Centre, Jarir Street</p>
                <div style="font-size: 0.85rem; color: var(--text-main);">📞 +966 55 399 3940 | ✉️ info@analytix.sa</div>
              </div>

              <div style="background: var(--bg-dark-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-purple);">
                <h4 style="color: #c4b5fd; margin-bottom: 0.25rem;">Jeddah, Saudi Arabia</h4>
                <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"># 301, 3rd Floor, Al Modon, Al-Gharbiyah Hael Street, Dansat Building, Jeddah</p>
                <div style="font-size: 0.85rem; color: var(--text-main);">📞 +966 50 637 6474 | ✉️ info@analytix.sa</div>
              </div>

              <div style="background: var(--bg-dark-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-purple);">
                <h4 style="color: #c4b5fd; margin-bottom: 0.25rem;">Dammam & Al Khobar, KSA</h4>
                <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"># 407, 4th Floor, SQ Business Towers, Al Khuzama, Al Khobar</p>
                <div style="font-size: 0.85rem; color: var(--text-main);">📞 +966 55 502 9328 | ✉️ info@analytix.sa</div>
              </div>

              <div style="background: var(--bg-dark-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-purple);">
                <h4 style="color: #c4b5fd; margin-bottom: 0.25rem;">United Arab Emirates & Qatar</h4>
                <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">Dubai / Abu Dhabi: +971 56 201 0475 | Qatar (Doha): +974 703 700 10</p>
                <div style="font-size: 0.85rem; color: var(--text-main);">✉️ info@analytixme.com | info@analytix.qa</div>
              </div>

              <div style="background: var(--bg-dark-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-purple);">
                <h4 style="color: #c4b5fd; margin-bottom: 0.25rem;">London, UK & International</h4>
                <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">71-75 Shelton Street Convent Garden, London | Phone: +44 7404 074704</p>
                <div style="font-size: 0.85rem; color: var(--text-main);">✉️ info@analytixme.com</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#home">
            <img src="assets/tech-logo.png" alt="Analytix BSS Logo" class="logo-img" onerror="this.src='assets/tech-logo-1.png'">
          </a>
          <p>Analytix BSS delivers enterprise ERP implementation, AI process automation, Aramco cybersecurity compliance, UI/UX design, and performance marketing.</p>
        </div>

        <div>
          <h4 class="footer-title">Navigation</h4>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#blog">Blog & News</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-title">Solutions</h4>
          <ul class="footer-links">
            <li><a href="#solutions-odoo">Odoo ERP Implementation</a></li>
            <li><a href="#solutions-ai">AI Process Automation</a></li>
            <li><a href="#solutions-cyber">Aramco Cybersecurity (SCCC)</a></li>
            <li><a href="#industries-fnb">Odoo for Food & Beverage</a></li>
            <li><a href="#industries-logistics">Odoo for Logistics</a></li>
            <li><a href="#industries-construction">Smart Schedule Control</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-title">Contact</h4>
          <div class="footer-contact-item">
            <span>📍</span>
            <span>Riyadh, Jeddah & Dammam, Kingdom of Saudi Arabia</span>
          </div>
          <div class="footer-contact-item">
            <span>📞</span>
            <span>+966 55 399 3940</span>
          </div>
          <div class="footer-contact-item">
            <span>✉️</span>
            <span>info@analytix.sa / info@analytixtech.io</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 Analytix BSS. All Rights Reserved.</div>
        <div style="display: flex; gap: 1.5rem;">
          <a href="#about" style="color: var(--text-dim);">Privacy Policy</a>
          <a href="#about" style="color: var(--text-dim);">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Application Script -->
  <script src="js/main.js"></script>
</body>
</html>
HTML;

file_put_contents(__DIR__ . '/index.html', $html);
echo "Generated index.html with linear-gradient(90deg, rgb(18, 25, 38), #52257c)! Size: " . strlen($html) . " bytes\n";
