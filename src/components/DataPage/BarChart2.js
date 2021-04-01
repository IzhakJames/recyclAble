import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
    extends: Bar,
    data: function () {
      return {
          datacollection: {
              labels: [],
              datasets: [{
                  label: "Overall",
                  backgroundColor: 'rgba(6, 198, 147, 0.5)',
                  data: [],
                }]
          },
          options: {
              legend: { display: false },
              responsive: true,
              maintainAspectRatio: false,
              scales:{
                yAxes:[{
                    ticks:{
                      beginAtZero:true
                    }
                 }], 
            }
          }
      }
    },
    methods: {
      fetchItems: function () {
          var totalItems = {"Glass":0,"Metal":0,"Paper":0,"Plastic":0,"Others":0}
          database.collection('Temp Trip Form').get().then(querySnapShot => {
            querySnapShot.forEach(doc => { 
                var trip = doc.data()
                totalItems[trip.item_category]++;
            })
            for (var item of Object.keys(totalItems).sort()) {
              this.datacollection.labels.push(item)
              this.datacollection.datasets[0].data.push(totalItems[item])
            }
            this.renderChart(this.datacollection, this.options)
          })
        }
    },
    created() {
      this.fetchItems();
    }
  }