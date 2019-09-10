<template>
  <section id="intro" class="section scrollspy full-height">
    <div
      class="overlay"
      :style="{
        background: `url(${mainUrl}${introPicUrl}) no-repeat`
      }"
    ></div>
    <div class="container">
      <h2>
        I want to <span class="teal">develop things</span><br />that
        <span class="underline">matter!</span>
      </h2>
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
      introPicUrl: "",
      mainUrl: endpoints.main
    };
  },
  created() {
    axios.get(endpoints.basicInfo).then(res => {
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
