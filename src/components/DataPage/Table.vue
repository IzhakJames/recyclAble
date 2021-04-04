<template>
  <div class="chart">
    <h2>Top User Contributions</h2>
    <VueTableDynamic id="chart-style" :params="params"></VueTableDynamic>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic';
import database from '../../firebase.js';

export default {
  components: {
    VueTableDynamic
  }, 
  data: function() {
      return {
      data:[],
      params: {
        data: [
          ['Rank', 'User', 'Contributions']
        ],
        header: 'row',
        border: true
      }
    }
  },
  methods: {
      fetchItems:function() {
        database.collection('Users').get().then(querySnapShot => {
          querySnapShot.forEach(doc => { 
              var user = doc.data();
              this.data.push([user.fullName,user.recyclingTripCounter]);
          })
        }).then(() => {
            this.data.sort((x,y) => {return y[1] - x[1]});
            for (var index in this.data) {
                this.params.data.push([parseInt(index)+1,this.data[index][0],this.data[index][1]]);
            }
        }) 
      }
  },
  created() {
      this.fetchItems();
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
  overflow:scroll;
}

</style>