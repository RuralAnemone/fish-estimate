<template>
  <div>
    <UApp>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </UApp>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all .2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 0, 15deg);
  /* transform: scale(2); */
}
</style>