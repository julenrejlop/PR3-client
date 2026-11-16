<template>
  <svg
    class="spanish-skyline"
    viewBox="0 0 1200 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMax slice"
  >
    <!-- Silueta de arquitectura española: catedrales, torres, arcos y campanarios -->
    <path
      d="M0 180h1200v-35l-15-4v-18h-8v16l-12-3v-30l-6-12-6 12v30h-10v-45l-4-6-4 6v45h-14v-22h-6v22h-12v-55l-8-15-8 15v55h-15v-30h-10v30h-16v-65l-10-20-10 20v65h-12v-25h-8v25h-18v-80l-7-12-7 12v80h-15v-40h-10v40h-20v-50l-12-18-12 18v50h-14v-30h-8v30h-25v-105l-6-15-6 15v105h-15v-45h-12v45h-22v-70l-8-15-8 15v70h-18v-35h-10v35h-30v-90l-10-18-10 18v90h-15v-40h-8v40h-20v-60l-15-20-15 20v60h-15v-25h-10v25h-25v-115l-8-20-8 20v115h-15v-50h-10v50h-25v-75l-10-15-10 15v75h-18v-30h-12v30h-22v-95l-7-15-7 15v95h-15v-40h-10v40h-30v-65l-12-18-12 18v65h-14v-25h-8v25h-20v-85l-8-15-8 15v85h-15v-35h-10v35h-25v-110l-6-18-6 18v110h-15v-45h-10v45h-25v-60l-10-16-10 16v60h-15v-28h-8v28h-20v-80l-7-14-7 14v80h-12v-35h-10v35h-35v-55l-12-16-12 16v55h-15v-25h-8v25h-25v-100l-8-18-8 18v100h-15v-40h-10v40h-30v-65l-10-14-10 14v65h-15v-30h-8v30h-20v-75l-8-15-8 15v75h-15v-35h-10v35h-30v-95l-10-18-10 18v95h-15v-40h-8v40h-35z"
      fill="currentColor"
      opacity="0.16"
    />
    <path
      d="M0 180h1200v-20l-20-2v-12h-8v11l-15-2v-22l-6-10-6 10v22h-12v-35l-4-5-4 5v35h-15v-16h-6v16h-14v-42l-8-12-8 12v42h-18v-24h-10v24h-20v-52l-10-16-10 16v52h-14v-20h-8v20h-20v-65l-7-10-7 10v65h-18v-32h-10v32h-25v-40l-12-14-12 14v40h-15v-22h-8v22h-30v-80l-6-12-6 12v80h-18v-35h-12v35h-25v-55l-8-12-8 12v55h-20v-28h-10v28h-35v-70l-10-14-10 14v70h-18v-32h-8v32h-22v-48l-15-16-15 16v48h-18v-20h-10v20h-30v-90l-8-16-8 16v90h-18v-40h-10v40h-30v-60l-10-12-10 12v60h-20v-22h-12v22h-25v-75l-7-12-7 12v75h-18v-32h-10v32h-35v-50l-12-14-12 14v50h-18v-20h-8v20h-25v-68l-8-12-8 12v68h-18v-28h-10v28h-30v-85l-6-14-6 14v85h-18v-35h-10v35h-30v-48l-10-12-10 12v48h-18v-22h-8v22h-25v-65l-7-12-7 12v65h-15v-28h-10v28h-40z"
      fill="currentColor"
      opacity="0.28"
    />
  </svg>
</template>

<style scoped>
.spanish-skyline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: clamp(80px, 14vw, 150px);
  pointer-events: none;
  z-index: 0;
  color: #C88D56;
}
</style>
