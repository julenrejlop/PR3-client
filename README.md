# Oído-Musical

Concurso musical desarrollado con Vue 3 como SPA (Single Page Application). El jugador escucha un fragmento aleatorio de una canción española y debe elegir el título correcto entre cuatro opciones. Al terminar las 10 rondas se muestran sus resultados y su posición en un ranking que se guarda en el navegador.

## Tecnologías

- Vue 3 (Composition API con `<script setup>`)
- Vite
- Vue Router (enrutamiento y lazy loading de las vistas)
- Pinia (estado compartido entre componentes)
- Howler.js (reproducción de audio)

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Después se abre en el navegador la dirección que indica la terminal (normalmente `http://localhost:5173`).

Los audios deben estar en `public/audio/` y sus nombres tienen que coincidir con los de `src/data/songs.js`.

## Estructura del proyecto

```
public/
  audio/                  mp3 de las canciones
src/
  assets/                 estilos globales (oido-musical.css)
  components/
    BaseButton.vue        botón reutilizable (enlace o botón)
    GameIntro.vue         instrucciones de la pantalla del concurso
    Navbar.vue            barra de navegación
    PlayerNameForm.vue    formulario del nombre del jugador
    game/
      AudioPlayer.vue     reproduce el fragmento de la canción
      CountDown.vue       cuenta atrás de cada pregunta
      FeedbackMessage.vue mensaje de acierto, fallo o tiempo agotado
      GameResult.vue      pantalla de resultados finales
      GameTitle.vue       título del juego
      ProgressBar.vue     barra de progreso de las rondas
      QuestionCard.vue    tarjeta con las cuatro opciones
      ShowPoints.vue      puntos actuales
      ShowRound.vue       ronda actual
      ShowUserName.vue    nombre del jugador
  data/
    songs.js              lista de canciones con sus preguntas
  router/
    index.js              rutas y guardia de navegación
  stores/
    game.js               estado y lógica de la partida
    ranking.js            ranking guardado en localStorage
  views/
    HomeView.vue          landing page
    GameView.vue          pantalla previa al concurso
    PlayingView.vue       partida en curso y resultados
    RankingView.vue       tabla de clasificación
```

## Rutas

| Ruta | Vista | Descripción |
| --- | --- | --- |
| `/` | HomeView | Landing page con las reglas |
| `/Game` | GameView | Instrucciones y formulario del nombre |
| `/Playing` | PlayingView | La partida. Exige haber escrito un nombre |
| `/Ranking` | RankingView | Las 10 mejores puntuaciones |

Todas las vistas, salvo la de inicio, se cargan con lazy loading, es decir, solo se descargan cuando el usuario entra en ellas. Si alguien intenta entrar directamente en `/Playing` sin nombre, el router lo redirige a `/Game`.

## Reglas del juego

- Cada partida tiene 10 preguntas elegidas al azar entre todas las canciones de `songs.js`.
- Las cuatro opciones de cada pregunta también aparecen en orden aleatorio.
- De cada canción suenan 5 segundos desde un punto aleatorio.
- El jugador dispone de 10 segundos para responder cada pregunta.
- Acierto: se suman 10 puntos, la opción se marca en verde y se muestra un mensaje de felicitación.
- Fallo: la opción elegida se marca en rojo, se marca en verde la correcta y se muestra un mensaje de fallo.
- Tiempo agotado: se marca en verde la correcta y se avisa de que no ha contestado a tiempo. Los puntos no cambian.
- Después de cada respuesta hay una pausa de 2 segundos y se pasa a la siguiente pregunta.
- Al terminar las 10 rondas se muestran la puntuación, los aciertos, el porcentaje de precisión, el tiempo total y la posición en el ranking.

### Ranking y desempate

- Se ordena por puntos, de mayor a menor.
- Si dos jugadores empatan a puntos, queda por delante el que ha tardado menos tiempo en total.
- El tiempo total es la suma de los segundos que el jugador ha tardado en responder cada pregunta. Si se le acaba el tiempo en una pregunta, cuenta lo que ha pasado hasta ese momento.
- La tabla muestra solo las 10 mejores. Si el jugador no entra, se le indica su posición y que debe mejorar.
- La fila del jugador de la partida actual aparece resaltada.

## Orden de ejecución de las funciones más importantes

### 1. Arranque de la aplicación

1. `main.js` crea la app con `createApp(App)`, instala Pinia y el router (`app.use(...)`) y la monta en `#app`.
2. Al instalar Pinia se crean los stores bajo demanda: `game.js` y `ranking.js` se inicializan la primera vez que alguien llama a `useGameStore()` o `useRankingStore()`.
3. Al crearse `ranking.js`, lee `localStorage.getItem('ranking')`. Si hay datos, los convierte con `JSON.parse`; si no, empieza con una lista vacía.
4. `App.vue` muestra la `Navbar` y un `<router-view />` donde el router coloca la vista de la ruta actual.

### 2. Entrar a jugar

1. El jugador pulsa el botón de la landing o el de la barra y el router lleva a `/Game`.
2. `GameView` muestra `GameIntro` (las instrucciones) y `PlayerNameForm`.
3. Al enviar el formulario se ejecuta `start()` en `PlayerNameForm.vue`:
   - Si el nombre está vacío, no hace nada.
   - Si no, llama a `gameStore.startGame(nombre)` y después hace `router.push` a `/Playing`.
4. Antes de abrir `/Playing`, la guardia `router.beforeEach` comprueba `meta.requiresName`. Si `username` está vacío, redirige a `/Game`.

### 3. Preparar la partida: `startGame(name)` en `game.js`

1. Guarda el nombre y pone a cero los puntos, los aciertos y el tiempo total.
2. Llama a `resetRounds()` (ronda 1) y deja `selectedOption` en `null` y `finished` en `false`.
3. Apunta la hora de inicio de la pregunta (`questionStart = Date.now()`).
4. Baraja todas las canciones con `shuffle()` y se queda con las 10 primeras (`slice(0, 10)`).
5. Baraja también las cuatro opciones de cada canción.
6. Guarda las 10 preguntas en `questions`.

### 4. Cada ronda en `PlayingView`

`PlayingView` muestra los componentes de la partida. `CountDown` y `QuestionCard` llevan `:key="gameStore.currentRound"`, de modo que al cambiar de ronda Vue los destruye y los crea de nuevo desde cero.

1. `QuestionCard` recibe la pregunta actual (`gameStore.currentQuestion`, un `computed` que devuelve `questions[currentRound - 1]`).
2. Dentro de `QuestionCard`, `AudioPlayer` se monta y en `onMounted` crea un objeto `Howl` con el archivo de la canción.
3. Cuando el audio termina de cargar (`onload`):
   - Calcula un punto de inicio aleatorio: `Math.random() * (duración - 5)`.
   - Llama a `sound.seek(inicio)` y `sound.play()`.
   - Programa un `setTimeout` que para el audio a los 5 segundos.
4. `CountDown` se monta y, en `onMounted`, arranca un `setInterval` que resta 1 cada segundo.

### 5. El jugador responde

1. Pulsa una opción: `QuestionCard` emite el evento `select` con la opción elegida.
2. `PlayingView` ejecuta `onSelect(option)`:
   1. Llama a `gameStore.answer(option)`:
      - Si ya había respondido, sale sin hacer nada.
      - Guarda la opción en `selectedOption`.
      - Llama a `addTime()`, que suma al tiempo total lo que ha tardado en esta pregunta.
      - Anota en `roundResults` si fue acierto o fallo (para colorear la barra de progreso).
      - Si es correcta, suma 10 puntos y aumenta `correctCount`.
   2. Llama a `goNext()`, que programa `gameStore.advance()` dentro de 2 segundos.
3. Al cambiar `selectedOption`:
   - `QuestionCard` pinta en verde la correcta, en rojo la elegida si falló y atenúa el resto, y bloquea los botones.
   - `AudioPlayer` detecta con `watch` que `answered` pasó a `true` y para la canción.
   - `CountDown` detecta con `watch` que `stopped` pasó a `true` y para el contador.
   - El `computed` `result` del store devuelve `'correct'` o `'wrong'` y `FeedbackMessage` muestra el mensaje correspondiente.

### 6. Se acaba el tiempo

1. Cuando `CountDown` llega a 0, para el intervalo y emite el evento `timeout`.
2. `PlayingView` ejecuta `onTimeout()`, que llama a `gameStore.timeUp()`:
   - Si ya había respondido, sale sin hacer nada.
   - Pone `selectedOption` a `''` (cadena vacía, que significa "no ha respondido").
   - Suma el tiempo con `addTime()` y marca la ronda como fallada en `roundResults`.
3. `result` pasa a valer `'timeout'`, y se muestra el mensaje de tiempo agotado y la respuesta correcta en verde.
4. Igual que en el caso anterior, se llama a `goNext()`.

### 7. Pasar a la siguiente ronda: `advance()` en `game.js`

Se ejecuta 2 segundos después de cada respuesta o de cada tiempo agotado.

1. Pone `selectedOption` a `null` y reinicia `questionStart` (para que la siguiente pregunta cuente su propio tiempo).
2. Si no es la última ronda, llama a `nextRound()`, que suma 1 a `currentRound`. Como cambia la `key`, `QuestionCard` y `CountDown` se recrean y vuelve a empezar el ciclo desde el punto 4.
3. Si era la última, termina la partida:
   1. Pone `finished` a `true`.
   2. Llama a `ranking.addScore(...)` con el nombre, los puntos, la precisión y el tiempo total.
   3. Guarda el id de esa partida en `lastScoreId`.
   4. Busca en `ranking.scores` en qué posición quedó y la guarda en `position`.

### 8. Guardar en el ranking: `addScore(score)` en `ranking.js`

1. Añade la partida a la lista con `push`.
2. Ordena la lista con `sort`: más puntos primero y, si empatan, menos tiempo primero.
3. Guarda la lista en el navegador con `localStorage.setItem('ranking', JSON.stringify(...))`.

### 9. Resultados

1. Como `finished` es `true`, `PlayingView` deja de mostrar la partida y muestra `GameResult`.
2. `GameResult` elige una frase según el porcentaje de aciertos (`accuracy`, calculado como aciertos entre rondas por 100) y muestra los puntos, los aciertos, la precisión, el tiempo total y la posición (`gameStore.position`).
3. El botón "Volver a jugar" llama de nuevo a `startGame(gameStore.username)` y se repite el ciclo desde el punto 3.

### 10. Ver el ranking

1. `RankingView` toma `ranking.scores` (ya ordenada) y pinta solo las 10 primeras con `slice(0, 10)`.
2. Si la lista está vacía, muestra un mensaje invitando a jugar.
3. Resalta la fila cuyo `id` coincide con `gameStore.lastScoreId`.
4. Si `gameStore.position` es mayor que 10, muestra un mensaje diciendo que hay que mejorar para entrar entre los diez mejores.

## Comunicación entre componentes

- Padre a hijo, con props: `PlayingView` pasa el nombre a `ShowUserName` y los puntos a `ShowPoints`; `QuestionCard` pasa el archivo a `AudioPlayer`.
- Hijo a padre, con eventos: `QuestionCard` emite `select` y `CountDown` emite `timeout`; `PlayingView` los recibe y actúa.
- Entre hermanos, con Pinia: `ShowRound`, `ProgressBar` y `GameResult` leen el estado directamente de `game.js`, y `GameResult` y `RankingView` comparten datos a través de `game.js` y `ranking.js`.

## Almacenamiento

- El estado de la partida vive en Pinia, es decir, en memoria. Se pierde al recargar la página.
- El ranking se guarda en `localStorage` con la clave `ranking`, por lo que permanece aunque se cierre el navegador. Se guarda a nivel de equipo y navegador, no de sesión.
- Para borrar el ranking durante las pruebas se puede ejecutar `localStorage.removeItem('ranking')` en la consola del navegador.

## Formato de las canciones

Cada elemento de `src/data/songs.js` tiene esta forma:

```js
{
  id: 1,
  file: '/audio/nombre_del_archivo.mp3',
  correct: 'Título correcto',
  options: ['Título correcto', 'Opción B', 'Opción C', 'Opción D'],
}
```

La opción correcta debe aparecer también dentro de `options`.
