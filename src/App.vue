<template>
  <div id="app">
    <h1>Youtube Videos Downloader</h1>
    <form @submit.prevent="submitForm">
      <input class="input-type" type="text" v-model="url" placeholder="Enter Url Here !!" />
      <button type="submit">Download</button>
    </form>
    <div v-if="results">
      <div class="video-info">
        <img class="image-info" :src="results.thumbnails[0].url" />
        <div>
          <strong>{{ results.title }}</strong>
        </div>
      </div>
      <br />
      <strong>DOWNLOAD NOW</strong> : (FORMATS AVAILABLE)
      <a
        v-for="result in results.formats"
        :key="result.id"
        :href="result.url"
        class="result-row"
        target="_blank"
      >
        <div class="format-result">{{ result.format }}</div>
      </a>
    </div>

    <!-- <img class="image" :src="url"> -->
  </div>
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
      const response = await axios.get("/download", {
        params: { url: this.url }
      });
      this.results = response.data;
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;

  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiWY5rpEfDb_-lDdwKp8jV6EpZW__C56nB9q8g0H0frhncG-N6A&s");
  background-color: #cccccc;
  background-repeat: repeat;
  background-position: 0 0;
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
  padding: 2px;
  border: 3px solid gainsboro;
  border-radius: 15px 50px 800px 5px;
  margin: 10px;
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
  padding: 1px;
  border: 1px solid #021a40;
  width: 600px;
}
</style>
