<template>
<div>
    <div :class="'progress-circle progress-' + this.trip">
        <span>{{this.trip}}/5</span>
    </div>
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

.progress-circle {
  position: relative;
  display: inline-block;
  margin-top:48px;
  left: 90%;
  transform: translateX(-44%);
  width: 200px; 
  height:200px;
  border-radius: 50%;
  background-color: #ebebeb; }

.progress-circle:after {
  content: '';
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  -webkit-animation: colorload 2s;
  animation: colorload 2s; }

.progress-circle span {
  font-size: 2rem;
  color: black;
  position: absolute;
  left: 50%;
  top: 50%;
  display: block;
  width: 80px;
  height: 80px;
  line-height: 80px;
  margin-left: -40px;
  margin-top: -40px;
  text-align: center;
  border-radius: 50%;
  background: #fff;
  z-index: 1; }

.progress-circle span:after {
  font-weight: 600;
  color: #8b8b8b; }

.progress-circle.progress-0:after {
  background-image: linear-gradient(90deg, #ebebeb 50%, transparent 50%, transparent), linear-gradient(90deg, #41c741 50%, #ebebeb 50%, #ebebeb); }

.progress-circle.progress-1:after {
  background-image: linear-gradient(90deg, #ebebeb 50%, transparent 50%, transparent), linear-gradient(151.2deg, #41c741 50%, #ebebeb 50%, #ebebeb); }

.progress-circle.progress-2:after {
  background-image: linear-gradient(90deg, #ebebeb 50%, transparent 50%, transparent), linear-gradient(234deg, #41c741 50%, #ebebeb 50%, #ebebeb); }

.progress-circle.progress-3:after {
  background-image: linear-gradient(-54deg, #66b8ff 50%, transparent 50%, transparent), linear-gradient(270deg, #41c741 50%, #ebebeb 50%, #ebebeb); }

.progress-circle.progress-4:after {
  background-image: linear-gradient(18deg, #66b8ff 50%, transparent 50%, transparent), linear-gradient(270deg, #41c741 50%, #ebebeb 50%, #ebebeb); }
</style>