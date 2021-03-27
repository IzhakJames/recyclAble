<template>
  <div class="footer">
    <footer>
      <p>@recyclABLE pte ltd</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyRtSymbol: "&copy;BT3103",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  background: url(../assets/footer_background.png);
  margin: 0;
  background-size: cover;
  background-position-x: 6px;
}

footer {
  background-color: white;
  border-radius: 20px;
  float: bottom;
  width: 20%;
  height: 40px;
  bottom: 10px;
  margin-left: 40%;
  min-width: 230px;
  text-align: center;
}
p {
  font-family: Roboto;
  font-style: italic;
  font-weight: 900;
  font-size: 24px;
  line-height: 50%;
  text-align: center;
  color: #57a890;
  display: inline-block;
  margin-top: 10px;
}
</style>
