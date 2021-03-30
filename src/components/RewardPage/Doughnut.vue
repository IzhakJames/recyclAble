<template>
<div>
    <p id="title">4/5</p>
 <svg class="progress" width="200" height="250">
		<circle class="progress__meter" cx="110" cy="130" r="70" stroke-width="14" />
		<circle class="progress__value" v-bind:style="{strokeDasharray:477.5 - 42.5 * this.trip}" cx="110" cy="130" r="70" stroke-width="14" />
    </svg>

</div>
</template>

<script>
export default {
    props:{
        trip:{
            type:Number
        }
    }
}
</script>

<style scoped>
.progress {
	transform: rotate(-90deg);
    margin-left:20%;
}

#title {
    text-align:center;
    padding-top:30px;
    font-family: Roboto;
    font-style: italic;
    font-weight: bold;
    font-size: 40px;
}

.progress__meter,
.progress__value {
	fill: none;
}

.progress__meter {
	stroke: #e6e6e6;
}
/* 350 4/5*/
/* 392.5 3/5*/

/* 435 2/5*/
/* 477.5 1/5*/
.progress__value {
	stroke: #5fda6a;
	stroke-linecap: round;
    stroke-dashoffset:600;
}
</style>