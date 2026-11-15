
<template>
  <nav class="navbar">
    <div class="logo">
      <span>Oído-Musical</span>
    </div>

    <div class="nav-links">
      <router-link to="/" class="nav-item">
        Inicio
      </router-link>

      <router-link to="/Game" class="nav-item play">
        ▶ Jugar
      </router-link>

      <router-link to="/Ranking" class="nav-item">
        Ranking
      </router-link>
    </div>
  </nav>
</template>

<script setup>
</script>

<!-- Estilos globales: tipografías, variables de la paleta y reset -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,500;0,6..96,600;1,6..96,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');

:root {
  /* Paleta de marca */
  --color-bg: #121820;
  --color-surface: #263746;
  --color-accent: #B68D40;
  --color-secondary: #A7B5A4;
  --color-text: #F3F0E8;

  /* Roles de interfaz */
  --color-text-muted: #A7B5A4;
  --color-border: #263746;
  --color-button-primary-bg: #B68D40;
  --color-button-primary-text: #121820;
  --color-button-secondary-bg: #263746;
  --color-button-secondary-text: #F3F0E8;

  /* Tipografía */
  --font-display: 'Bodoni Moda', 'Didot', 'Bodoni 72', Georgia, serif;
  --font-body: 'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif;
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
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/* Foco visible para navegación con teclado */
:focus-visible {
  outline: 3px solid var(--color-text);
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
  height: 72px;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  color: var(--color-text);
  font-family: var(--font-body);
}

/* Logo a la izquierda */
.logo {
  position: absolute;
  left: 40px;

  display: flex;
  align-items: center;
  gap: 10px;

  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--color-text);
}

.logo::before {
  content: '♪';
  color: var(--color-accent);
  font-size: 26px;
  line-height: 1;
}

/* Enlaces centrados */
.nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.nav-item {
  position: relative;
  text-decoration: none;
  color: var(--color-secondary);
  font-size: 16px;
  font-weight: 600;
  padding: 6px 0;
  transition: color 0.2s ease;
}

.nav-item:hover {
  color: var(--color-text);
}

/* Página activa: subrayado fino dorado */
.nav-item.router-link-exact-active:not(.play) {
  color: var(--color-text);
}

.nav-item.router-link-exact-active:not(.play)::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background: var(--color-accent);
  border-radius: 2px;
}

/* Botón jugar: CTA principal */
.play {
  background: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
  padding: 11px 24px;
  border-radius: 8px;
  font-weight: 700;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.play:hover {
  color: var(--color-button-primary-text);
  filter: brightness(1.1);
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 600px) {
  .navbar {
    height: 64px;
    justify-content: space-between;
    padding: 0 16px;
  }

  .logo {
    position: static;
    font-size: 17px;
    gap: 6px;
  }

  .logo::before {
    font-size: 19px;
  }

  .nav-links {
    gap: 14px;
  }

  .nav-item {
    font-size: 13px;
  }

  .play {
    padding: 8px 12px;
  }
}
</style>
