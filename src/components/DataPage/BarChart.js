import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    data: function () {
      return {
          datacollection: {
              labels: [2011,2012,2013,2014,2015,2016,2017,2018,2019],
              datasets: [{
                  label: "Overall Recycling Rate",
                  backgroundColor: 'rgba(6, 198, 147, 0.5)',
                  data: [59,60,61,60,61,61,61,61,59],
                  type:"bar"
                },{
                  label: "Non-Domestic Recycling Rate",
                  data:[73,75,77,76,77,76,76,74,73],
                  type:"line",
                  fill:"none",
                  borderColor:"orange"
                },{
                  label:"Domestic Recycling Rate",
                  data:[18,21,20,19,19,21,21,22,17],
                  type:"line",
                  fill:"none",
                  borderColor:"purple"
                }]
          },
          options: {
              legend: { display: true },
              title: {
                display: true,
                text: 'Recycling Rates (%)'
              },
              responsive: true,
              maintainAspectRatio: false,
              scales:{
                yAxes:[{
                    ticks:{

                    }
                 }], 
            }
          }
      }
    },
    mounted() {
      this.renderChart(this.datacollection, this.options);
    }
  }