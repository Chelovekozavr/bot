<template>
  <div class="add-bot">

    <div class="add-bot__header">
      <h3 class="add-bot__title">
        Edit bot
      </h3>
      <button
        class="add-bot__close-button"
        @click="$emit('cancel-edit')"
      >
        X
      </button>
    </div>

    <form
      action=""
      method="POST"
      class="add-bot__form"
      @submit.prevent="$emit('submit-editing', botToEdit)"
    >
      <input
        type="text"
        class="add-bot__form-item"
        v-model="botToEdit.name"
        @change="addName()"
        required
      >
      <input
        type="text"
        maxlength="50"
        class="add-bot__form-item"
        v-model.trim="botToEdit.description"
        @change="addDescription(description)"
        required
      >
      <input
        type="date"
        class="add-bot__form-item"
        v-model="botToEdit.date"
        @change="addDate(date)"
        required
      >
      <input
        type="image"
        class="add-bot__form-item"
        :name="image"
        @change="addImage(image)"
      >

      <button
        class="add-bot__submit-button"
      >
        Submit
      </button>
    </form>

  </div>
</template>

<script>
  export default {
    props: {
      bot: Object
    },

    data() {
      return {
        botToEdit: { ...this.bot }
      }
    },

    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .add-bot {
    position: absolute;
    top: 50px;
    padding: 30px;

    width: calc(60% - 60px);
    max-width: 1000px;

    background-color: #76787a;
    box-shadow: 0 5px 1000px 1000px rgba(0,0,0, 0.75);

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      text-transform: uppercase;
      font-weight: bold;
      position: relative;
      color: #6Ba2e0;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 3px;
        background-color: whitesmoke;
        z-index: 10;
      }
    }

    &__title {
      position: relative;
      font-size: 20px;


      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 3px;
        color: whitesmoke;
      }
    }

    &__close-button {
      height: 40px;
      width: 40px;
      border-radius: 50%;

      background-color: #76787a;
      color: #fff;
      border: none;
      outline: none;

      font-weight: bold;
      font-size: 20px;
      transition: background-color 0.5s ease,
        transform 0.5s ease;

      &:hover {
        background-color: #6a6c6e;
      }

      &:active {
        transform: scale(0.9);
      }
    }

    &__form {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

    }

    &__form-item {
      height: 40px;
      width: 45%;
      margin-bottom: 10px;
    }

    &__submit-button {
      height: 50px;
      width: 200px;
      margin: 0 auto;

      background-color: #5d5f61;
      color: #fff;
      border: none;

      text-transform: uppercase;
      font-weight: bold;
      font-size: 18px;
      letter-spacing: .1rem;

      transition: background-color 0.5s ease,
        transform 0.5s ease;

      &:hover {
        background-color: #979a9c;
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
</style>
