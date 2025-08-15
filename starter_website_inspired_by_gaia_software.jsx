// File: package.json
{
  "name": "test-company-site",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.21",
    "tailwindcss": "^3.3.2",
    "vite": "^4.3.9"
  }
}

// File: tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// File: postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// File: index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test Company LTD</title>
  </head>
  <body class="antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

// File: src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// File: src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// File: src/App.jsx
import React, { useState, useEffect } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#industries", label: "Industries" },
  { href: "#about", label: "About" },
  { href: "#cases", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-teal-500 to-blue-800 shadow" />
      <span className="font-semibold tracking-tight">Test Company LTD</span>
    </div>
  );
}

function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export default function Page() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith("el")) {
      setLang("el");
    } else {
      setLang("en");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-neutral-950 dark:to-neutral-950 text-neutral-900 dark:text-neutral-100">
      <header className="sticky top-0 z-40 border-b bg-white/70 dark:bg-neutral-950/70 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <Logo />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-teal-600 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="rounded-xl bg-teal-600 px-4 py-2 font-medium text-white shadow hover:bg-teal-700">Get a Quote</a>
            <button onClick={() => setDark((d) => !d)} className="rounded-xl border px-3 py-2 text-xs">
              {dark ? "Light" : "Dark"}
            </button>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden rounded-xl border px-3 py-2 text-sm">Menu</button>
        </Container>
      </header>

      <section id="home" className="relative overflow-hidden">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 sm:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Your Partner in Shipping Solutions</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">Delivering Excellence Across Seas</h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">We build reliable software platforms for shipping and logistics companies, ensuring smooth operations from port to port.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-teal-600 px-5 py-3 font-medium text-white shadow hover:bg-teal-700">Start a Project</a>
              <a href="#cases" className="rounded-xl border px-5 py-3 font-medium hover:border-teal-600">See our work</a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1505839673365-e3971f8d9184?auto=format&fit=crop&w=800&q=80"
              alt="Shipping Hero"
              className="w-full h-full object-cover rounded-2xl shadow-lg border"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
