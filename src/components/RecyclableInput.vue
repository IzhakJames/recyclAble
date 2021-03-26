<template>
    <div>
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
        <label v-show="this.cat_selected !== ''">Item: </label><br/>
        <select class="select-css" v-show="this.cat_selected !== ''" v-model="item_selected">
            <option v-for="ele in itemOptions" v-bind:key="ele.item" v-bind:value="ele">
                {{ele.item}}
            </option>
        </select>
        <p v-if="item_selected !== '' && item_selected.value">
            Your item is recyclable!
        </p>
        <p v-if="item_selected !== '' && !item_selected.value">
            Your item is not recyclable!
        </p>
        </div>
    </div>
</template>

<script>
import database from "../firebase.js";

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
            this.item_selected = "";
        }
        },
        created() {
            this.fetchItems();
        }
    }
</script>

<style scoped>

.dropdown:first-of-type {
    margin-top:90px;    
}

.dropdown {
    color:white;
    text-align:center;
    margin-bottom:30px;
}

.dropdown label {
    font-size:30px;
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
    opacity:60%;
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

