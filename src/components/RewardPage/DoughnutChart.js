import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data: function () {
    return {
        datacollection: {
            labels: ["Current Trips", "Trips required till next reward"],
            datasets: [{
                label: "%",
                backgroundColor: ["green", "lightgrey"],
                data: [4,1]
              }]
        },
        options: {
          legend: {display:false},
            responsive: true,
            maintainAspectRatio: false,

        }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}

