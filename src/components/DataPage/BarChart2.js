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
          var months = {}
          var currMth = new Date().getMonth()+1
          var currYear = new Date().getFullYear() - 2000
          var i;
          for (i = 11;i>=0;i--) {
            var nextMth = currMth - i;
            var nextYear = currYear;
            if (nextMth < 1) {
              nextMth = 12 + nextMth;
              nextYear = currYear - 1;
            }
            var string = nextMth + "/" + nextYear
            months[string] = 0;
          }

          database.collection('Temp Trip Form').get().then(querySnapShot => {
            querySnapShot.forEach(doc => { 
                var trip = doc.data();
                var month = trip.datetime.toDate().getMonth() + 1;
                var year = trip.datetime.toDate().getFullYear() - 2000;
                var dateString = month + "/" + year;
                months[dateString]++;
            })
            for (var item of Object.keys(months)) {
              this.datacollection.labels.push(item)
              this.datacollection.datasets[0].data.push(months[item])
            }
            this.renderChart(this.datacollection, this.options)
          })
        }
    },
    created() {
      this.fetchItems();
    }
  }