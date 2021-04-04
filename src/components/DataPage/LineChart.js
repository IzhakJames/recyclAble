import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    data: function () {
      return {
          datacollection: {
              labels: [2011,2012,2013,2014,2015,2016,2017,2018,2019],
              datasets: [
                { 
                    data: [6.90,7.27,7.85,7.51,7.67,7.81,7.70,7.70,7.23],
                    label:'Waste Generated',
                    borderColor:'red',
                    lineTension:0,
                    fill: false
                },
                { 
                    data: [4.04,4.34,4.83,4.47,4.65,4.77,4.72,4.73,4.25],
                    label:'Waste Recycled',
                    borderColor:'green',
                    lineTension:0,
                    fill: false
                }
            ]
          },
          options: {
              legend: { display: true },
              responsive: true,
              maintainAspectRatio: false
          }
      }
    },
    mounted() {
      this.renderChart(this.datacollection, this.options);
    }
  }