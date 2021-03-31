<template>
  <div class="chart">
    <Chart id="chart-style"></Chart>
  </div>
</template>

<script>
import Chart from "./LineChart.js";
export default {
  components: {
    Chart
  }
};
</script>

<style scoped>
#chart-style {
  width:40%;
  height:250px;
}
</style>