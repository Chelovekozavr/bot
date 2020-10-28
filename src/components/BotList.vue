<template>
  <div class="bot-list">
    <header class="bot-list__header">
      <h1 class="bot-list__title">
        Bot list
      </h1>
      <button
        @click="addBot"
        class="bot-list__add-button"
      >
        Add bot
      </button>
    </header>
    <ul>
      <li
        v-for="bot in getBots"
        :key="bot.id"
        class="bot-list__item"
        @click="handleEditBot(bot)"
      >
      <span class="bot-list__item-title">
        {{ bot.name }}
      </span>
      <span>
        {{ bot.description }}
      </span>
      <span>
        {{ bot.date }}
      </span>

        <button
          @click.stop="deleteBot(bot.id)"
          class="bot-list__delete-bot"

        >
          X
        </button>

      </li>
    </ul>

    <BotListItemEdit
      v-if="editFormVisibility"
      :bot="bot"
      @cancel-edit="editBot"
      @submit-editing="submitEditing"
    />

    <BotListItemAdd
      v-if="botAddFormVisibility"
      @cancel-add="addBot"
      @add-bot="submitAdding"
    />
  </div>

</template>

<script>
  import { mapGetters, mapMutations } from "vuex";
  import BotListItemEdit from "./BotListItemEdit";
  import BotListItemAdd from "./BotListItemAdd";

  export default {
    data() {
      return {
        botAddFormVisibility: false,
        editFormVisibility: false,
        bot: null
      }
    },

    computed: mapGetters(["getBots"]),

    components: {
      BotListItemEdit,
      BotListItemAdd
    },

    methods: {
      ...mapMutations([
        'ADD_BOT_TO_STATE',
        'DELETE_BOT_FROM_STATE',
        'EDIT_BOT_IN_STATE'
      ]),

      addBot() {
        this.botAddFormVisibility = !this.botAddFormVisibility;
      },

      deleteBot(id) {
        this.DELETE_BOT_FROM_STATE(id)
      },

      submitAdding(newBot) {
        this.addBot();
        this.ADD_BOT_TO_STATE(newBot);
      },

      editBot() {
        this.editFormVisibility = !this.editFormVisibility;
      },

      handleEditBot(bot) {
        this.editBot();
        this.bot = bot;
      },

      submitEditing(editedBot) {
        this.DELETE_BOT_FROM_STATE(editedBot.id)
        this.ADD_BOT_TO_STATE(editedBot);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bot-list {
    width: 60%;
    max-width: 1000px;

    padding: 30px;
    margin-top: 20px;

    box-shadow: 0 5px 50px 25px rgba(0,0,0, 0.75);
    background-color: #454647;

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      text-transform: uppercase;
      font-weight: bold;
      font-size: 18px;
      letter-spacing: .1rem;
    }

    &__title {
      position: relative;

      text-transform: uppercase;
      font-weight: bold;
      font-size: 30px;
      letter-spacing: .1rem;

      &::after {
        position: absolute;
        content: '';
        bottom: -10px;
        left: 0;
        width: 80%;
        height: 3px;
        background-color: whitesmoke;

      }
    }

    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      margin-top: 20px;
      padding: 15px;
      height: 50px;

      background-color: #5d5f61;
      transition: background-color 0.5s ease;


      &:hover {
        background-color: #888a8b;
      }
    }

    &__item-title {
      text-transform: uppercase;
      color: #6Ba2e0;
      font-weight: bold;
    }

    &__add-button {
      height: 50px;
      width: 200px;

      background-color: #76787a;
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

    &__delete-bot {
      height: 30px;
      width: 30px;
      border-radius: 50%;

      background-color: #76787a;
      color: #fff;
      border: none;
      outline: none;

      transition: background-color 0.5s ease,
        transform 0.5s ease;

      &:hover {
        background-color: #6a6c6e;
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
</style>