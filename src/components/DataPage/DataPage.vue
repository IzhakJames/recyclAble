<template>
  <div id = "background">
  <br>
  <div id="rectangle">
    <BarChart></BarChart>
    <LineChart></LineChart>
    <StackedBarChart></StackedBarChart>
  </div>
  </div>
</template>

<script>
import BarChart from "./BarChart.vue";
import LineChart from "./LineChart.vue";
import StackedBarChart from "./StackedBarChart.vue";
export default {
  components: {
    BarChart,
    LineChart,
    StackedBarChart
  }
};
</script>

<style scoped>
#background {
    width: 100%;
    min-width:1400px;
    height:1000px;
    background: #57A890;
}

#rectangle {
  width: 90%;
  height: 920px;
  margin:0px 5%;
  background: white;
  border-radius: 30px;
}

</style>
