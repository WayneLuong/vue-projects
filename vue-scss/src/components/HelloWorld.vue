<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>
      Test
      <span>Message</span>
    </h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import "../assets/scss/main";

.hello {
  h1 {
    color: red;
  }
}
</style>
