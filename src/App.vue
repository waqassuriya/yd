<template>
<body class="body-a">
  <div id="app">
    <h1>Youtube Videos Downloader</h1>
    <form @submit.prevent="submitForm">
      <input class="input-type" type="text" v-model="url" placeholder="Enter Url Here !!">
      <button type="submit">Download</button>
    </form>
    <div v-if="results">
      <div class="video-info">
        <img class="image-info" :src="results.thumbnails[0].url">
        <div>
          <strong>{{ results.title }}</strong>
        </div>
      </div>
      <br>
      <strong>DOWNLOAD NOW</strong> : (FORMATS AVAILABLE)
      <a
        class="result-row"
        v-for="result in results.formats"
        :key="results.id"
        :href="result.url"
        target="_blank"
      >
        <div class="format-result">{{ result.format }}</div>
      </a>
    </div>

    <!-- <img class="image" :src="url"> -->
  </div>
</body>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      url: "",
      results: null
    };
  },
  methods: {
    async submitForm() {
      // Using https://reqres.in/
      const response = await axios.get(
        "https://PossibleHarmfulOutcomes--five-nine.repl.co/download",
        { params: { url: this.url } }
      );
      this.results = response.data;
    }
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

.body-a {
  background-image: url("https://utemplates.net/wp-content/uploads/2017/07/Download-Realistic-Paper-Grain-Texture.jpg");
  background-color: #cccccc;
  background-repeat: repeat;
  background-position: 0 0;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
}

.video-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.result {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
}

.result-row {
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: center;
}
.image-info {
  width: 500px;
  height: 200px;
  margin-top: 10px;
}

.format-result {
  color: black;
  border-style: solid;
  border-color: black;
  padding: 10px;
  background-color: lightgrey;
  align-items: center;
}

.input-type {
  background-color: gainsboro;
  margin-bottom: 10px;
}
</style>
