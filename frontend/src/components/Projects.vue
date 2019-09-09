<template>
  <section id="projects" class="section scrollspy">
    <h3 class="page-title white-text teal">Projects</h3>
    <div class="container">
      <div class="row">
        <div class="col s12 m6 l4">
          <div class="card medium">
            <div class="card-image waves-effect waves-block waves-light">
              <img
                alt="Screenshot of Interpol8r web app"
                src="/assets/img/interpol8r.jpg"
                class="activator"
              />
            </div>
            <div class="card-content">
              <span class="card-title activator teal-text hoverline"
                >Interpol8r<i class="mdi-navigation-more-vert right"></i
              ></span>
              <p>
                Experimental web app with homemade recursive string
                interpolation.
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title brown-text"
                >Accomplishments<i class="mdi-navigation-close right"></i
              ></span>
              <ul>
                <li><strong>Ruby on Rails</strong> backend</li>
                <li><strong>Bulma CSS</strong> frontend</li>
                <li>String interpolation via <strong>recursion</strong></li>
                <li><strong>Dependency free</strong> JS config</li>
              </ul>
              <div class="card-action">
                <a
                  aria-label="Visit Interpol8r web app"
                  href="https://interpol8r.herokuapp.com/"
                  target="_blank"
                  data-position="top"
                  data-tooltip="View Online"
                  class="btn-floating btn-large waves-effect waves-light brown tooltipped"
                  ><i class="fa fa-external-link"></i></a
                ><a
                  aria-label="Visit the GitHub repo for Interpol8r project"
                  href="https://github.com/andrewborstein/interpol8r"
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
export default {};
</script>