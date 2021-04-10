import { Doughnut } from 'vue-chartjs'
import database from '../../firebase.js'
import firebase from "firebase/app";
import "firebase/auth";

export default {
  extends: Doughnut,
  data: function () {
    return {
        datacollection: {
            labels: ["Your Contributions","Other Users' Contributions"],
            datasets: [{
                label: "%",
                backgroundColor: ["#3e95cd", "#8e5ea2"],
                data: []
              }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,

        }
    }
  },
  methods:{
    fetchItems:function(){

        firebase.auth().onAuthStateChanged(() => {
       var uid = firebase.auth().currentUser.uid;
       database.collection('Users').doc(uid).get().then((doc) => {
        this.datacollection.datasets[0].data.push(doc.data().recyclingTripCounter)
        
        database.collection('TotalCounter').doc('zDNR308gXbNgZkBQs3Gy').get().then((docRef) => { 
           this.datacollection.datasets[0].data.push(docRef.data().TotalCounter - this.datacollection.datasets[0].data[0])
           })  
         
    })})
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  },
  created () {
    this.fetchItems()
  }
}

