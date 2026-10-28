/* All the portfolio content lives here. Edit this file to change projects, skills, services or work history. */

window.PORTFOLIO = {
  projects: [
    {
      id: "gather",
      title: "Gather",
      tagline: "Video meetings for Africa",
      year: "2026",
      tags: ["fullstack", "ai"],
      badge: "Live",
      summary:
        "A video-meeting app (like Zoom or Google Meet) built for weak, expensive mobile data. Guests join from a WhatsApp link in their phone browser, with no account, and read live captions in their own language.",
      cover: "assets/images/projects/gather/landing.jpg",
      gallery: [
        ["assets/images/projects/gather/landing.jpg", "Landing page"],
        ["assets/images/projects/gather/presenting.png", "Presenting slides in a call"],
        ["assets/images/projects/gather/raise-hand.png", "Raise hand: the host approves who speaks"],
        ["assets/images/projects/gather/guest-phone.png", "A guest on a phone"],
        ["assets/images/projects/gather/summary.png", "AI summary after the meeting"],
        ["assets/images/projects/gather/dashboard.png", "Host dashboard"],
        ["assets/images/projects/gather/reviews.jpg", "Live reviews on the landing page"],
      ],
      features: [
        "Real-time audio, video and screen sharing on a LiveKit (WebRTC) media server",
        "Guests' mics stay locked until the host approves a raised hand, enforced on the server",
        "Data-saver mode at about 50 MB an hour, with a live data meter",
        "Live captions translated into English, Yoruba, Hausa, Igbo, Pidgin, Swahili and French",
        "AI summaries and action items in each person's language, sent by WhatsApp and email",
        "Scheduling with weekly meetings, calendar invites (.ics), RSVP and reminders",
        "Paystack and Flutterwave payments with verified webhooks",
        "Trustpilot-style reviews that appear live on the landing page",
        "Optional end-to-end encryption, admin dashboard, breakout rooms, polls and chat",
      ],
      proof: "Tested live in real calls with 4 guests · first verified review: 5.0 Excellent",
      stack: ["React", "TypeScript", "Vite", "Tailwind", "Node.js", "Express", "Socket.IO", "Python", "FastAPI", "PostgreSQL", "LiveKit / WebRTC", "Docker", "Render"],
      tree: `Gather/
├─ web/        React app: pages/, room/ (call screen, captions, data meter), components/
├─ server/     Node API: modules/ (auth, meetings, rooms, billing, reviews, scheduler), migrations/
├─ ai/         Python FastAPI: speech-to-text, translation, summaries
├─ tests/e2e/  Playwright browser tests
└─ docker-compose.yml · render.yaml · docs/ARCHITECTURE.md`,
      live: "https://gather-44mh.onrender.com",
      code: "https://github.com/AnigboguJohn/Gather",
      note: "Hosted on a free plan: the first visit can take up to a minute to wake up.",
    },
    {
      id: "regradar",
      title: "RegRadar",
      tagline: "AI regulatory compliance assistant",
      year: "2026",
      tags: ["fullstack", "ai"],
      badge: "Live",
      summary:
        "A tool for compliance teams at banks, fintechs and payment companies. It tracks new Central Bank of Nigeria (CBN) circulars, answers questions with exact citations, and flags which company policies a new rule affects.",
      cover: "assets/images/projects/regradar/landing.jpg",
      gallery: [
        ["assets/images/projects/regradar/landing.jpg", "Sign-in and product overview"],
        ["assets/images/projects/regradar/landing-phone.jpg", "Phone layout"],
      ],
      features: [
        "Automatically collects new CBN circulars, downloads the PDFs and indexes them by section",
        "\"Remi\" AI assistant answers only from the retrieved regulations and cites document, reference and page (RAG)",
        "Hybrid search: PostgreSQL full-text plus pgvector, merged with Reciprocal Rank Fusion",
        "Impact analysis: compares each new rule with company policies and flags conflicts with a fix",
        "Multi-tenant workspaces, team invites, email alerts and a full audit log",
        "Admin console with two-factor sign-in (TOTP, QR code) and system-health alerts",
        "Works with Claude, Groq, Gemini or Ollama, and falls back to cited passages without AI",
        "AWS infrastructure as code with Terraform; CI/CD and uptime checks with GitHub Actions",
      ],
      stack: ["React", "TypeScript", "Node.js", "Express", "Python", "FastAPI", "PostgreSQL + pgvector", "Terraform", "AWS", "Docker", "GitHub Actions"],
      tree: `regradar/
├─ apps/web/         React app: pages/ (Ask, Regulations, Impact, Policies, Settings), admin/
├─ services/api/     Node API: auth, workspaces, alerts, audit, scheduling
├─ services/ai/      Python FastAPI: ingest, chunking, hybrid search, RAG, impact analysis
├─ db/migrations/    PostgreSQL schema (7 migrations)
├─ infra/terraform/  AWS: ECS, RDS, S3, CloudFront, EventBridge, monitoring
└─ .github/workflows/ · tests/ (e2e, browser) · docs/`,
      live: "https://regradar-kur5.onrender.com",
      code: "https://github.com/AnigboguJohn/regradar",
      note: "Hosted on a free plan: the first visit can take up to a minute to wake up.",
    },
    {
      id: "tranyer",
      title: "Tranyer",
      tagline: "Escrow marketplace for buyers and sellers",
      year: "2026",
      tags: ["frontend"],
      badge: "Live",
      summary:
        "A multi-vendor e-commerce marketplace with buyer and seller accounts, cart, wishlist, checkout, order tracking and an admin dashboard, in 8 languages and 7 currencies.",
      cover: "assets/images/projects/tranyer/home.jpg",
      gallery: [
        ["assets/images/projects/tranyer/home.jpg", "Home page"],
        ["assets/images/projects/tranyer/products.jpg", "Categories and ads"],
        ["assets/images/projects/tranyer/home-phone.jpg", "Phone layout"],
      ],
      features: [
        "Buyer and seller accounts, cart, wishlist, checkout (Paystack and Stripe) and order tracking",
        "8 languages and 7 currencies (NGN, USD, EUR, GBP, KES, ZAR, GHS) with automatic conversion",
        "Search, filters (price, brand, rating, category), pagination and grid/list views",
        "Tested with 100,000+ generated products across 20 categories",
        "Seller tools (sell, analytics, advertise, rewards) and an AI shopping-assistant page",
        "Admin dashboard, dark mode and cookie consent",
      ],
      stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "TanStack Query", "React Hook Form", "Zod", "Supabase", "Vercel"],
      tree: `Tranyer-Project/
├─ src/pages/      40+ pages: Products, ProductDetail, Cart, Checkout, TrackOrder, account/, admin/
├─ src/contexts/   Auth, Cart, Wishlist, Localization, Subscription, Theme
├─ src/lib/        translations, product generator, product APIs
└─ src/components/ · tailwind.config.ts · vite.config.ts`,
      live: "https://tranyer.vercel.app",
      code: "https://github.com/AnigboguJohn/Tranyer-Project",
    },
    {
      id: "adf",
      title: "ADF Magazine",
      tagline: "Defence news blog website",
      year: "2025",
      tags: ["frontend"],
      badge: "Live",
      summary: "A responsive multi-page magazine website with article pages, image-rich layouts and mobile navigation, hosted on GitHub Pages.",
      cover: "assets/images/projects/adf-magazine/home.jpg",
      gallery: [
        ["assets/images/projects/adf-magazine/home.jpg", "Home page"],
        ["assets/images/projects/adf-magazine/articles.jpg", "Article layout"],
        ["assets/images/projects/adf-magazine/home-phone.jpg", "Phone layout"],
      ],
      features: [
        "Multi-page magazine with article pages and image-rich layouts",
        "Responsive design with mobile navigation",
        "Styles written in Sass (SCSS)",
        "Hosted for free on GitHub Pages",
      ],
      stack: ["HTML5", "CSS3", "Sass (SCSS)", "JavaScript", "GitHub Pages"],
      tree: `blog_web_design/
├─ index.html · generic.html · blog pages/ (article pages)
└─ assets/ (css, sass, js, webfonts) · images/`,
      live: "https://anigbogujohn.github.io/blog_web_design/",
      code: "https://github.com/AnigboguJohn/blog_web_design",
    },
    {
      id: "recipes",
      title: "Recipes App",
      tagline: "Recipe management web app (Laravel)",
      year: "2024",
      tags: ["php", "fullstack"],
      summary: "A recipe-sharing web app. Anyone can browse recipes; signed-in users post their own with a photo, prep time, ingredients and step-by-step preparation, and only the owner can edit or delete them.",
      code_preview: `// PostsController.php
public function __construct() {
    $this->middleware('auth', ['except' => ['index', 'show']]);
}

public function edit($id) {
    $post = Post::find($id);
    if (auth()->user()->id !== $post->user_id) {
        return redirect("/")->with('error', "You are not authorized");
    }`,
      features: [
        "Laravel authentication: register, login and password reset",
        "Create, edit, delete and view recipes: title, prep time, description, ingredients and preparation",
        "Photo upload for each recipe, with image validation",
        "Only the owner can edit or delete a recipe",
        "Users can edit their own profile",
      ],
      stack: ["PHP", "Laravel 8", "Blade", "MySQL", "Bootstrap"],
      tree: `Recipes_App_Laravel/
├─ app/Http/Controllers/  Auth/, PostsController, UserController
├─ database/migrations/   users, recipes (posts), recipe owner
├─ resources/views/       auth/, posts/ (create, edit, index, show), layouts/
└─ routes/web.php · routes/api.php`,
      code: "https://github.com/AnigboguJohn/Recipes_App_Laravel",
    },
    {
      id: "switch",
      title: "Switch",
      tagline: "Savings and loans platform (Esusu-style)",
      year: "2024",
      tags: ["php", "fullstack"],
      summary: "A digital savings and loans system, an alternative to banks for communities. Members sign up, verify with a one-time code, deposit, withdraw, borrow and repay.",
      code_preview: `<?php // deposit.php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: signin.php");
    exit();
}

// Update the member's balance and total deposit,
// then log the transaction in the history`,
      features: [
        "Sign up and sign in with one-time code (OTP) verification",
        "Deposit, withdraw, borrow and repay",
        "Member dashboard with balance",
        "Full transaction history",
        "PHP sessions and a MySQL database",
      ],
      stack: ["PHP", "MySQL", "HTML", "CSS"],
      tree: `Switch/
├─ signup.php · signin.php · otp_verification.php
├─ dashbord.php · deposit.php · withdraw.php · borrow.php · payback.php
└─ transactions.php · transaction_history.php · connection.php`,
      code: "https://github.com/AnigboguJohn/Switch",
    },
  ],

  services: [
    ["M4 7h16M4 12h10M4 17h7", "Full-stack web apps", "Complete products from idea to launch: interface, API, database, sign-in and admin, deployed and running."],
    ["M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.4 7.2 17.9l.9-5.4L4.2 8.7l5.4-.8L12 3z", "AI features", "Chat assistants that answer from your own documents with citations, plus transcription, translation and summaries."],
    ["M3 7h18v10H3zM3 10h18M7 14h3", "Payments and messaging", "Paystack, Flutterwave and Stripe checkouts, WhatsApp and email notifications, and verified webhooks."],
    ["M4 5h16v11H4zM8 20h8M12 16v4", "Websites and landing pages", "Fast, responsive sites that look good on cheap phones and slow networks, and are easy to update."],
    ["M5 12a7 7 0 0 1 14 0M8 12a4 4 0 0 1 8 0M12 12v8", "Real-time features", "Live video and audio, chat, polls, live dashboards and updates that appear without refreshing."],
    ["M12 3v4M12 17v4M5 12H3M21 12h-2M7 7l-1.5-1.5M18.5 18.5 17 17M7 17l-1.5 1.5M18.5 5.5 17 7", "Deployment and DevOps", "Docker, CI/CD with GitHub Actions, AWS with Terraform, and Render or Vercel, with health checks and alerts."],
  ],

  skills: [
    ["Front-end", "TypeScript / JavaScript / React / Vite / Tailwind CSS / shadcn/ui / TanStack Query / React Router / Blade / Bootstrap", true],
    ["Back-end", "Node.js / Express / Socket.IO / Python / FastAPI / PHP / Laravel / REST APIs / JWT / Zod"],
    ["AI", "RAG with citations / pgvector / hybrid search / Claude / Groq / Gemini / Ollama / Whisper"],
    ["Databases", "PostgreSQL / full-text search / migrations / MySQL / Supabase / Neon"],
    ["Real-time", "WebRTC / LiveKit / WebSockets / Server-Sent Events"],
    ["Cloud & DevOps", "AWS (ECS, RDS, S3, CloudFront) / Terraform / Docker / GitHub Actions / Render / Vercel"],
    ["Integrations", "Paystack / Flutterwave / Stripe / WhatsApp Cloud API / Brevo email / Google OAuth"],
    ["Testing & security", "Playwright / pytest / accessibility checks / TOTP 2FA / rate limiting / HMAC webhooks"],
  ],

  work: [
    ["2022 –", "Sept 2022 to now", "Orbit Brothers Communication", "Web Developer", "Websites & web apps", "http://www.obcgroup.com.ng"],
    ["2021 –", "Sept 2021 to now", "Kodex Academy", "Full-stack intern", "PHP & Laravel", "http://www.kodexng.com"],
    ["2019 – 2023", "Degree", "Nnamdi Azikiwe University", "B.Sc. Architecture & Design", "Education", ""],
  ],

  band: ["Full-stack apps", "AI with citations", "Real-time video", "Payments", "WhatsApp integrations", "Cloud deployment", "Responsive websites"],
};
