<template>
  <div>
      <ul>
      <li>
        <button>
          Add bot
        </button>
      </li>
      <li
        v-for="bot in getBots"
        :key="bot.id"
      >
        {{bot.name}}
        <button>x</button>
        <BotListItemEdit
          :bot="bot"
        />
      </li>
    </ul>
    <BotListItemAdd />


  </div>

</template>

<script>
  import { mapGetters } from "vuex";
  import BotListItemEdit from "./BotListItemEdit";
  import BotListItemAdd from "./BotListItemAdd";

  export default {
    /*data() {
      return {
        bots: [
          {id: 1, name: 'First bot', author: 'Andrew', email:'andrew@gmail.com'},
          {id: 2, name: 'Second bot', author: 'John'},
          {id: 3, name: 'Third bot', author: 'Bob', email:'nazar@gmail.com'},
        ]
      }
    },*/

    computed: mapGetters(["getBots"]),

    components: {
      BotListItemEdit,
      BotListItemAdd
    }

  }
</script>

<style lang="stylus" scoped>

</style>