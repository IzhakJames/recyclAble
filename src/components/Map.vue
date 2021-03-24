<template>
  <div id="background">
    <div id="rectangle">
      <img
        src="https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/19356685_0.PNG?itok=yph1Myl7"
        alt="map"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
  font-family: Roboto;
  font-style: italic;
  font-weight: bold;
  font-size: 35px;
  line-height: 53px;
  margin: 2% 0% 0% 0%;
}

p {
  font-family: Roboto;
  font-style: italic;
  font-weight: normal;
  font-size: 25px;
  line-height: 29px;
  text-align: center;
  padding: 5px;
  margin: 0%;
}

#background {
  height: 95vh;
  background-color: #57a890;
  min-width: 1400px;
}

#rectangle {
  min-width: 700px;
  width: 55%;
  height: 70%;
  margin: 5% 25%;
  background: white;
  border-radius: 30px;
  position: absolute;
}

#fname,
#lname {
  width: 38%;
  height: 10%;
  margin: 1% 5%;

  background: #e9e9e9;
}

#email {
  width: 87%;
  height: 10%;
  margin: 1% 5%;

  background: #e9e9e9;
}

#detail {
  width: 87%;
  height: 20%;
  margin: 1% 5%;

  background: #e9e9e9;
}

button {
  width: 15%;
  height: 8%;
  margin: 2% 0% 0% 78%;
  background: #4776ee;
  border-radius: 20px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;

  color: #ffffff;
}

img {
  width: 100%;
  height: 100%;
}
</style>
