import { Pie } from 'vue-chartjs'
import database from '../../firebase.js'
import firebase from "firebase/app";
import "firebase/auth";

export default {
  extends: Pie,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: []
              }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        var totalItems = {"Glass":0,"Metal":0,"Paper":0,"Plastic":0,"Others":0}
        firebase.auth().onAuthStateChanged(() => {
        
          var userid = firebase.auth().currentUser.uid;
        database.collection('Temp Trip Form').where("uid", "==",userid).get().then(querySnapShot => {
          querySnapShot.forEach(doc => { 
              var trip = doc.data()
              if (trip.uid == userid ) {
                totalItems[trip.item_category]++;
              }
          })
          for (var item of Object.keys(totalItems).sort()) {
            this.datacollection.labels.push(item)
            this.datacollection.datasets[0].data.push(totalItems[item])
          }
          this.renderChart(this.datacollection, this.options)
        })
       }) }
  },
  created() {
    this.fetchItems();
  }
}
