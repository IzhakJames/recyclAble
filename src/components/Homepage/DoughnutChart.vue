<template>
  <div id='chart'>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./DoughnutChart.js";
export default {
  components: {
    Chart
  }
};
</script>

<style scoped>
#chart {
  width:75%;
  margin-left:10%;
  
}
</style>
