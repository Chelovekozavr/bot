<template>
  <div>
    <p>
      {{ bot.description }}
    </p>
    <p>
      {{ bot.author }}
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      bot: Object
    }
  }
</script>

<style lang="stylus" scoped>

</style>