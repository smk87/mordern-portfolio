<template>
  <div>
    <Sidebar></Sidebar>
    <main>
      <Intro></Intro>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Skills></Skills>
    </main>
  </div>
</template>

<script>
import Sidebar from "./components/SideBar.vue";
import Intro from "./components/Intro.vue";
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";

export default {
  components: {
    Sidebar,
    Intro,
    About,
    Experience,
    Projects,
    Skills
  }
};
</script>

<style>
margin: 0;
padding: 0;
</style>
