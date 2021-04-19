import { Doughnut } from 'vue-chartjs'
import database from '../../firebase.js'
import firebase from "firebase/app";
import "firebase/auth";

export default {
  extends: Doughnut,
  data: function () {
    return {
        user:[],
        datacollection: {
            labels: ["Your Contributions","Other Users' Contributions"],
            datasets: [{
                label: "%",
                backgroundColor: ["#3e95cd", "#8e5ea2"],
                data: [],
              }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend : {
              display: true,
          }
           

        }
    }
  },
  methods:{
 
    fetchItems:function(){
        firebase.auth().onAuthStateChanged(() => {
       var uid = firebase.auth().currentUser.uid;
       database.collection('Users').doc(uid).get().then((doc) => {
        var userdata= doc.data().recyclingTripCounter
        this.datacollection.datasets[0].data = [userdata]
  
        database.collection('Users').doc('Admin').get().then((doc2) => {
          this.datacollection.datasets[0].data.push(doc2.data().TotalCounter - userdata)
          this.renderChart(this.datacollection, this.options)    
        });
       
    })
  
  
  })
   
  
    
    }}, created() {
    this.fetchItems();
  }
 
}

