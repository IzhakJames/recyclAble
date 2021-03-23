import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data: function () {
    return {
        datacollection: {
            labels: ["RecyclAble's Contributions ", "Your Contributions"],
            datasets: [{
                label: "%",
                backgroundColor: ["#3e95cd", "#8e5ea2"],
                data: [5267,2478]
              }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,

        }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}

