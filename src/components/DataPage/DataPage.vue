<template>
  <div id = "background">
  <br>
  <div id="rectangle">
    <br>
    <h2> Singapore Environmental Statistics </h2>
    <br>
    <BarChart></BarChart>
    <LineChart></LineChart>
    <StackedBarChart></StackedBarChart>
    <h2>User Statistics </h2>
    <br>
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
    padding-top:1.5%;
    width: 100%;
    min-width:1400px;
    height:970px;
    background: #57A890;
}

h2 {
  text-align:center;
  padding-top:10px;
}

#rectangle {
  width: 90%;
  height: 920px;
  margin:0px 5%;
  background: white;
  border-radius: 30px;
}



</style>
