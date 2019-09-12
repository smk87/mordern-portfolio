"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(req) {
    const experiences = await strapi
      .query("experiences")
      .find({ _sort: "start:desc" });

    return experiences;
  }
};
