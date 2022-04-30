export default {
  methods: {
    scrollTo(className) {
      var my_element = document.getElementById(className);

      if (my_element) {
        my_element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    },
  },
};