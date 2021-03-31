import { HorizontalBar } from 'vue-chartjs'

export default {
    extends: HorizontalBar,
    data: function () {
      return {
          datacollection: {
              labels: ["Construction & Demolition","Ferrous Metal","Paper/Cardboard","Plastics",
            "Food","Wood","Horticultural","Ash & Sludge","Textile/Leather","Used Slag","Non-ferrous Metal","Glass",
          "Scrap Tyres","Others(Stones,Ceramics,Rubber etc.)"],
              datasets: [
                {
                  label: "Waste Disposed (Mil Tonnes)",
                  backgroundColor: 'rgba(255, 99, 132, 0.7)',
                  data: [0.01,0.01,0.56,0.89,0.60,0.15,0.11,0.22,0.16,0,0.01,0.07,0,0.19]
                },
                {
                  label: "Waste Recycled (Mil Tonnes)",
                  backgroundColor: 'rgba(27, 248, 49, 0.7)',
                  data: [1.43,1.27,0.45,0.04,0.14,0.29,0.29,0.03,0.01,0.13,0.12,0.01,0.03,0.02]
                }
              ]
          },
          options: {
              legend: { display: true},
              title: {
                display: true,
                text: 'Waste Disposal by Category'
              },
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                xAxes: [{
                  stacked: true,
                  categoryPercentage: 0.5,
                  barPercentage: 1
                }],
                yAxes: [{
                  stacked: true
                }]
              }
          }
      }
    },
    mounted() {
      this.renderChart(this.datacollection, this.options);
    }
  }