<template>
    <div>
         <div id="Header"> RecylABLE or NOT!
                <p> Try our our most unique feature, RECYCLABLE OR NOT? A feature that allows you 
                    to find out if your item is recycable approved!</p>
              </div>
               <br><br>
        <div class="dropdown">
        <label>Item Category:</label><br/>
        <select class="select-css" v-model="cat_selected" v-on:change="handleChange()">
            <option>Glass</option>
            <option>Metal</option>
            <option>Paper</option>
            <option>Plastic</option>
            <option>Others</option>
        </select>
        </div>
        <div class="dropdown">
     
        <label v-show="this.cat_selected !== ''">Item: </label><br>
        <select class="select-css" v-show="this.cat_selected !== ''" v-model="item_selected">
            <option v-for="ele in itemOptions" v-bind:key="ele.item" v-bind:value="ele">
                {{ele.item}}
            </option>
        </select>
         <div id="can" v-if="item_selected !== '' && item_selected.value">
           <p> Your item is recyclable!</p>
            <img class="tick" :src="require(`../../assets/tick.png`)"/>
        </div>
        <div id="can" v-if="item_selected !== '' && !item_selected.value">
            <p>Your item is not recyclable!</p>
            <img class="tick" :src="require(`../../assets/cross.png`)"/>
        </div>
        </div>
    </div>
</template>

<script>
import database from "../../firebase.js";

    export default {
        data: function() {
            return {
                cat_selected:"",
                item_selected:"",
                show:false,
                data:[],
                itemOptions:[]
        }
        },
        methods: {
        fetchItems:function(){
          database.collection('RecyclableItem').get().then(snapshot => { 
          snapshot.docs.forEach(doc => {
            var obj = doc.data()
            this.data.push(obj);
          })
          }) 
        },

        handleChange:function() {
            this.itemOptions = [];
            for (var ele of this.data) {
                if (ele.category == this.cat_selected) {
                    this.itemOptions.push(ele);
                }
            }
            this.itemOptions.sort((a,b) => {return (a.item > b.item) ? 1 : -1});
            this.item_selected = "";
        }
        },
        created() {
            this.fetchItems();
        }
    }
</script>

<style scoped>
#can p {
     margin-top:30px;
    font-size:35px;
    

}
.tick {
    margin-top:1%;
    width:15%;
}
#Header {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:40px;
  font-weight: 600;
  letter-spacing: 2px; 
  margin-top:5%;
  width:150%;
  margin-left:-20%;
  
}
#Header p{
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:14px;
  font-weight: 600;
  letter-spacing: 2px; 
  margin-top:5%;
  color: #255029;
  
}

.dropdown:first-of-type {
    margin-top:15px;    
}

.dropdown {
    text-align:center;
    margin-bottom:30px;
    margin-left:-20%;
    width:150%;
}


.dropdown label {

    font-size:18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
}

.dropdown p {
    margin-top:50px;
    font-size:35px;
}

.select-css {
	display: block;
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 700;
	color: #444;
	line-height: 1.3;
	padding: .6em 1.4em .5em .8em;
	width: 80%;
    margin-left:10%;
    margin-top:10px;
	box-sizing: border-box;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .5em;
    text-align-last: center; 
    text-align: center;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
	background-size: .65em auto, 100%;
    opacity:0.6;
}

.select-css::-ms-expand {
	display: none;
}
.select-css:hover {
	border-color: #888;
}
.select-css:focus {
	border-color: #aaa;
	box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
	box-shadow: 0 0 0 3px -moz-mac-focusring;
	color: #222;
	outline: none;
}
.select-css option {
	font-weight:normal;
}

</style>

