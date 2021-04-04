<template>
  <div class="chart">
    <h2>Waste Disposal by Category (Mil Tonnes)</h2>
    <Chart id="chart-style"></Chart>
  </div>
</template>

<script>
import Chart from "./StackedBarChart.js";
export default {
  components: {
    Chart
  }
};
</script>

<style scoped>
.chart {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
	padding: 15px 20px;
  width:32%;
  margin-left:1%;
  float:left;
  margin-bottom:10px;
}
h2 {
  margin-top: 0;
  padding: 0 0 5px 0;
  color:  #333;
  border-bottom: 1px solid #ccc;
  font-size:17px;
}

#chart-style {
  height:250px;
}

</style>