<template>
  <div id="Content">
       Promo Code: {{this.code}}
  </div>
</template>

<script>

export default {
  props: {
    code: {
      value:String
    }
  }
  }
</script>

<style scoped>
#Content {
    margin-left:5%;
    margin-top:65px;
    width: 90%;
    font-size:30px;
}
</style>