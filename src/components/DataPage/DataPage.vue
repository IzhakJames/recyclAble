<template>
  <div id = "background">
  <br>
  <div id="rectangle">
    <h2> Singapore Environmental Statistics </h2>
    <BarChart></BarChart>
    <LineChart></LineChart>
    <StackedBarChart></StackedBarChart>
    <h2> recyclABLE User Statistics </h2>
    <PieChart></PieChart>
    <BarChart2></BarChart2>
    <Table></Table>
  </div>
  </div>
</template>

<script>
import BarChart from "./BarChart.vue";
import BarChart2 from "./BarChart2.vue";
import LineChart from "./LineChart.vue";
import StackedBarChart from "./StackedBarChart.vue";
import PieChart from "./PieChart.vue";
import Table from "./Table.vue";
export default {
  components: {
    BarChart,
    LineChart,
    StackedBarChart,
    PieChart,
    BarChart2,
    Table
  }
};
</script>

<style scoped>
#background {
    width: 100%;
    min-width:1400px;
    height:810px;
    background: #57A890;
}

h2 {
  text-align:center;
  padding-top:10px;
}

#rectangle {
  width: 90%;
  height: 780px;
  margin:0px 5%;
  background: white;
  border-radius: 30px;
}

</style>
