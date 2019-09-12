<template>
  <section id="projects" class="section scrollspy">
    <h3 class="page-title white-text teal">Projects</h3>
    <div class="container">
      <div class="row">
        <div
          class="col s12 m6 l4 "
          v-for="(project, index) in projects"
          :key="index"
        >
          <div class="card medium project">
            <div
              class="card-image waves-effect waves-block waves-light thumbnail"
            >
              <img
                alt="Screenshot of Interpol8r web app"
                :src="`${mainUrl}${project.thumbnail.url}`"
                class="activator"
                style="height: 100%;"
              />
            </div>
            <div class="card-content">
              <span class="card-title activator teal-text hoverline"
                >{{ project.title
                }}<i class="mdi-navigation-more-vert right"></i
              ></span>
              <p>
                {{ project.info }}
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title brown-text"
                >Accomplishments<i class="mdi-navigation-close right"></i
              ></span>
              <ul>
                <li
                  v-for="(accomplishment, index) in project.accomplishments"
                  :key="index"
                >
                  <strong>{{ accomplishment }}</strong>
                </li>
              </ul>
              <div class="card-action">
                <a
                  :href="project.link"
                  target="_blank"
                  data-position="top"
                  data-tooltip="View Online"
                  class="btn-floating btn-large waves-effect waves-light brown tooltipped"
                  ><i class="fa fa-external-link"></i></a
                ><a
                  :href="project.github"
                  target="_blank"
                  data-position="top"
                  data-tooltip="View Source"
                  class="btn-floating btn-large waves-effect waves-light brown tooltipped"
                  ><i class="fa fa-github"></i
                ></a>
              </div>
            </div>
          </div>
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
      projects: [],
      mainUrl: endpoints.main
    };
  },
  async created() {
    const res = await axios.get(endpoints.projects);
    this.projects = res.data;
  }
};
</script>

<style scoped>
.project {
  border-radius: 10px;
}

.thumbnail {
  height: 15rem !important;
  background: red;
}
</style>