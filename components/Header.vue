<template>
  <div>
    <div class="title">
      <NuxtLink to="/">{{title}}</NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        title: "ANGYUMI",
      }
    }
  }

</script>

<style lang="less" scoped>
  .title {
    font-size: 24px;
    color: black;

    a {
      color: black;
      text-decoration: none;
    }
  }

</style>
