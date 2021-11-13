<template>
  <div class="div-style">
    <p v-html="gistData" />
  </div>
</template>

<script>
var gistUrl = "https://gist.github.com/";
var data = {};

import $ from "jquery";
export default {
  props: {
    gistId: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      gistData: "loading...",
    };
  },
  created() {
    this.getGistData(this.gistId);
  },
  methods: {
    getGistData(gistId) {
      var self = this;
      if (this.file.length > 0) {
        data.file = this.file;
      }
      $.ajax({
        url: gistUrl + gistId + ".json",
        data: data,
        dataType: "jsonp",
        timeout: 20000,
        success: function(response) {
          self.gistData = response.div;
        },
        error: function(response) {
          console.log("error");
        },
      });
    },
  },
};
</script>

<style scoped>
@import url("https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css");

.div-style {
  text-align: center;
}
</style>
