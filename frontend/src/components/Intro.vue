<template>
  <section id="intro" class="section scrollspy full-height">
    <div
      class="overlay"
      :style="{
        background: `url(http://localhost:1337${introPic}) no-repeat`
      }"
    ></div>
    <p>{{ introPic }}</p>
    <div class="container">
      <h2>
        I want to <span class="teal">develop things</span><br />that
        <span class="underline">matters!</span>.
      </h2>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      introPicUrl: ""
    };
  },
  computed: {
    introPic() {
      return this.introPicUrl;
    }
  },
  mounted() {
    axios.get("http://localhost:1337/basicinfos").then(res => {
      console.log(res.data[0].introPic.url);
      this.introPicUrl = res.data[0].introPic.url;
    });
  }
};
</script>

<style scoped>
.overlay {
  background-size: 100% auto !important;
  background-position: center !important;
}
</style>
