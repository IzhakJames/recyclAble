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
  background: #57a890;
  margin: 0;
}

footer {
  background-color: white;
  border-radius: 20px;
  position: fixed;
  width: 20%;
  height: 40px;
  bottom: 10px;
  margin-left: 40%;
  min-width: 230px;
}
p {
  font-family: Roboto;
  font-style: italic;
  font-weight: 900;
  font-size: 24px;
  line-height: 50%;
  text-align: center;
  color: #57a890;
  margin: 0;
}
</style>
