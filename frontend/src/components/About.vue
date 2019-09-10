<template>
  <section id="about" class="section scrollspy">
    <h3 class="page-title white-text teal">About</h3>
    <div class="container flow-text">
      <blockquote>
        <h2>{{ introHeader }}</h2>
      </blockquote>
      <p>
        {{ introDescription }}
      </p>
      <p>
        <strong>Current Focus</strong>:
        <span v-for="(focus, index) in currentFocus" :key="index"
          >&nbsp;<a
            aria-label="Navigate to the Inclusive Design Patterns homepage"
            href="#"
            >{{ focus }}</a
          ><span v-if="index + 1 !== currentFocus.length"
            >&nbsp;//&nbsp;</span
          ></span
        >
      </p>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import constant from "../constant";

const { endpoints } = constant;

export default {
  data() {
    return {
      introHeader: "",
      introDescription: "",
      currentFocus: []
    };
  },
  created() {
    axios.get(endpoints.basicInfo).then(res => {
      this.introHeader = res.data[0].introHeader;
      this.introDescription = res.data[0].introDescription;
      this.currentFocus = res.data[0].currentFocus.split(",");
    });
  }
};
</script>