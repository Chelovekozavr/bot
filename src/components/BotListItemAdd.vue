<template>
  <div class="add-bot">

    <div class="add-bot__header">
    </div>

    <form
      action=""
      method="POST"
      v-on:submit.prevent=""
      class="add-bot__form"
    >
      <input type="text">
      <input type="text">
      <input type="image">
      <input type="date">

      <button>Submit</button>
    </form>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .add-bot {
    position: absolute;
    top: 50px;

    background-color: #000;

    &__form {
      display: flex;
      flex-direction: column;
    }
  }
</style>