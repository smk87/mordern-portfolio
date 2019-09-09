<template>
  <div>
    <Sidebar></Sidebar>
    <main>
      <Intro></Intro>
    </main>
  </div>
</template>

<script>
import Sidebar from "./components/SideBar.vue";
import Intro from "./components/Intro.vue";

export default {
  components: {
    Sidebar,
    Intro
  }
};
</script>

<style>
</style>
