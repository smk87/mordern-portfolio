<template>
  <section id="about" class="section scrollspy">
    <h3 class="page-title white-text teal">About</h3>
    <div class="container flow-text">
      <blockquote>
        <h2>{{ header }}</h2>
      </blockquote>
      <p>
        {{ descripion }}
      </p>
      <p>
        <strong>Current Focus</strong>:&nbsp;<a
          aria-label="Navigate to the Inclusive Design Patterns homepage"
          href="https://www.smashingmagazine.com/inclusive-design-patterns/"
          >Accessibility</a
        >&nbsp;//&nbsp;<a
          aria-label="Navigate to the Full Stack React homepage"
          href="https://www.fullstackreact.com/"
          >React</a
        >&nbsp;//&nbsp;<a
          aria-label='Navigate to the article "Scalable CSS"'
          href="https://mrmrs.github.io/writing/2016/03/24/scalable-css/"
          >Design Systems</a
        >
      </p>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      introHeader: "",
      introDescription: ""
    };
  },
  computed: {
    header() {
      return this.introHeader;
    },
    descripion() {
      return this.introDescription;
    }
  },
  mounted() {
    axios.get("http://localhost:1337/basicinfos").then(res => {
      this.introHeader = res.data[0].introHeader;
      this.introDescription = res.data[0].introDescription;
    });
  }
};
</script>

<style>
</style>