<template>
  <nav class="navbar">
    <div class="logo">
      <span class="logo__stamp">♫</span>
      <span class="logo__text">Oído-Musical</span>
      <span class="logo__tag">EDICIÓN ESPAÑA</span>
    </div>

    <div class="nav-links">
      <router-link to="/" class="nav-item">
        Inicio
      </router-link>

      <router-link to="/Game" class="nav-item play">
        ▶ JUGAR
      </router-link>

      <router-link to="/Ranking" class="nav-item">
        Ranking
      </router-link>
    </div>
  </nav>
</template>

<script setup>
</script>

<!-- Estilos globales: tipografías, variables de la paleta Neo-Brutalismo Ibérico y reset -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700..900;1,9..144,700..900&family=JetBrains+Mono:wght@500;700;800&family=Space+Grotesk:wght@500;600;700&family=Syne:wght@700;800&display=swap');

:root {
  /* Paleta Neo-Brutalismo Ibérico ("Sol, Vinilo y Vermut") */
  --bg-paper: #F6F2EA;
  --surface-card: #FFFDF9;
  --ink-black: #141210;
  --vermut-red: #D92B2B;
  --albero-gold: #F2A900;
  --azulejo-blue: #1D4ED8;
  --verde-oliva-neon: #A3E635;

  /* Tipografías */
  --font-display: 'Fraunces', 'Syne', Georgia, serif;
  --font-sans: 'Space Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-body: var(--font-sans);
  --font-mono: 'JetBrains Mono', monospace;

  /* Compatibilidad y roles */
  --color-bg: var(--bg-paper);
  --color-surface: var(--surface-card);
  --color-surface-alt: #EFE8DC;
  --color-primary: var(--vermut-red);
  --color-primary-dark: var(--ink-black);
  --color-primary-soft: #E24848;
  --color-accent: var(--albero-gold);
  --color-accent-soft: #FCD269;
  --color-text: var(--ink-black);
  --color-text-muted: #57524A;
  --color-border: var(--ink-black);
  --color-success: var(--verde-oliva-neon);
  --color-error: var(--vermut-red);

  --color-button-primary-bg: var(--vermut-red);
  --color-button-primary-text: #FFFFFF;

  /* Estricto Anti-IA: CERO bordes píldora, esquinas rectas o micro-redondeadas (0px - 2px) */
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 2px;
  --radius-pill: 0px;
  --radius-card: 0px;
  --radius-control: 0px;

  /* Sombras duras serigráficas */
  --shadow-solid-sm: 3px 3px 0px var(--ink-black);
  --shadow-solid-md: 5px 5px 0px var(--ink-black);
  --shadow-solid-lg: 8px 8px 0px var(--ink-black);
  --shadow-solid-hover: 2px 2px 0px var(--ink-black);

  --shadow-card: var(--shadow-solid-md);
  --shadow-button: var(--shadow-solid-sm);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  min-height: 100%;
}

body {
  background-color: #F6F2EA;
  background-image: radial-gradient(#141210 0.75px, transparent 0.75px);
  background-size: 24px 24px;
  color: var(--ink-black);
  font-family: var(--font-sans);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/* Foco accesible brutalista */
:focus-visible {
  outline: 3px solid var(--ink-black);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>

<style scoped>
.navbar {
  width: 100%;
  min-height: 60px;
  height: 60px;
  background: var(--surface-card);
  border-bottom: 3px solid var(--ink-black);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 2rem;
  position: relative;
  color: var(--ink-black);
  font-family: var(--font-sans);
  z-index: 50;
}

/* Logo a la izquierda */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo__stamp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: var(--vermut-red);
  color: #FFFFFF;
  border: 2px solid var(--ink-black);
  box-shadow: 2px 2px 0px var(--ink-black);
  font-size: 1.1rem;
  font-weight: 800;
  line-height: 1;
}

.logo__text {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--ink-black);
  line-height: 1;
}

.logo__tag {
  display: inline-block;
  padding: 2px 6px;
  background: var(--albero-gold);
  color: var(--ink-black);
  border: 1.5px solid var(--ink-black);
  box-shadow: 1.5px 1.5px 0px var(--ink-black);
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Enlaces estilo pestañas / cartel */
.nav-links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-item {
  position: relative;
  text-decoration: none;
  color: var(--ink-black);
  font-family: var(--font-sans);
  font-size: 0.88rem;
  font-weight: 700;
  padding: 6px 15px;
  background: var(--surface-card);
  border: 2px solid var(--ink-black);
  box-shadow: 2.5px 2.5px 0px var(--ink-black);
  transition: transform 140ms ease, box-shadow 140ms ease, background-color 140ms ease;
  letter-spacing: 0.02em;
}

.nav-item:hover:not(.play) {
  background: #FFF5D6;
  transform: translate(-1px, -1px);
  box-shadow: 3.5px 3.5px 0px var(--ink-black);
}

.nav-item:active:not(.play) {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px var(--ink-black);
}

/* Pestaña activa */
.nav-item.router-link-exact-active:not(.play) {
  background: var(--albero-gold);
  color: var(--ink-black);
  transform: translate(1px, 1px);
  box-shadow: 1.5px 1.5px 0px var(--ink-black);
}

/* Botón jugar: CTA rectangular brutalista */
.play {
  background: var(--vermut-red);
  color: #FFFFFF;
  padding: 7px 18px;
  font-family: var(--font-sans);
  font-size: 0.88rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 2px solid var(--ink-black);
  box-shadow: 2.5px 2.5px 0px var(--ink-black);
  transition: transform 140ms ease, background-color 140ms ease, box-shadow 140ms ease, color 140ms ease;
}

.play:hover {
  background: var(--albero-gold);
  color: var(--ink-black);
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px var(--ink-black);
}

.play:active {
  transform: translate(3px, 3px);
  box-shadow: 0px 0px 0px var(--ink-black);
}

/* Responsive */
@media (max-width: 600px) {
  .navbar {
    min-height: 52px;
    padding: 0.35rem 0.65rem;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .logo {
    gap: 5px;
  }

  .logo__text {
    font-size: 1.15rem;
  }

  .logo__stamp {
    width: 24px;
    height: 24px;
    font-size: 0.85rem;
  }

  .logo__tag {
    display: none;
  }

  .nav-links {
    gap: 6px;
  }

  .nav-item {
    font-size: 0.78rem;
    padding: 5px 8px;
    box-shadow: 2px 2px 0px var(--ink-black);
  }

  .play {
    padding: 5px 10px;
    font-size: 0.78rem;
    box-shadow: 2px 2px 0px var(--ink-black);
  }
}

@media (min-width: 601px) and (max-width: 768px) {
  .navbar {
    min-height: 64px;
    padding: 0.6rem 1rem;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }
}
</style>
