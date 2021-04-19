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
  }, 
};
</script>

<style scoped>
#chart {
  width:85%;
  margin-left:5%;
  
}
</style>
