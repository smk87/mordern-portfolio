<template>
  <section id="experience" class="section scrollspy">
    <h3 class="page-title white-text teal">Experience</h3>
    <div class="container">
      <div v-for="(experience, index) in experiences" :key="index" class="card">
        <div class="card-content">
          <div class="row">
            <div class="col s12 m2">
              <a :href="experience.link" target="_blank"
                ><img
                  alt=""
                  :src="experience.companyLogo"
                  class="responsive-img center-block"
              /></a>
            </div>
            <div class="col s12 m10 companyTitle">
              <p>
                <span class="card-title"
                  ><a
                    :href="experience.link"
                    target="_blank"
                    class="teal-text hoverline"
                    style="font-size: 1.2rem;"
                    >{{ experience.companyTitle }}</a
                  ></span
                >
              </p>
            </div>
          </div>
          <div class="role brown-text">{{ experience.position }}</div>
          <p>
            <em class="grey-text">{{ experience.info }}</em>
          </p>
          <ul>
            <li
              v-for="(accomplishment, index) in experience.accomplishments"
              :key="index"
            >
              {{ accomplishment.text }}
            </li>
          </ul>
        </div>
        <div class="card-action">
          <span
            >{{ experience.start }} - {{ experience.end }} |
            {{ experience.location }}</span
          >
        </div>
      </div>
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
      experiences: []
    };
  },
  created() {
    axios.get(endpoints.experiences).then(res => {
      this.experiences = res.data;
    });
  }
};
</script>

<style scoped>
.companyTitle {
  margin: -0.5rem 0 0 0;
}

@media (max-width: 40rem) {
  .companyTitle {
    margin: 0;
  }
}
</style>