export default {
  state: {
    bots: [
      {id: 1, name: 'First bot', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.', date: '2010-10-10', image: 'qwerty'},
      {id: 2, name: 'Second bot', description: 'Lorem, ipsum dolor', date: '2011-11-11', image: 'qwerty'},
      {id: 3, name: 'Third bot', description: 'Lorem ipsum dolor sit amet.', date: '2012-12-12', image: 'qwerty'},
    ]
  },

  getters: {
    getBots(state) {
      return state.bots
    },

    getBotById: (state) => (id) => {
      return state.contacts.find(contact => contact.id === id);
    }
  },

  mutations: {
    ADD_BOT_TO_STATE(state, newBot) {
      state.bots.push(newBot);
    },

    DELETE_BOT_FROM_STATE(state, id) {
      state.bots = state.bots.filter(bot => bot.id !== id);
    },
  }
}
