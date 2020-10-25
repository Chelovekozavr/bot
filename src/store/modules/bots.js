export default {
  state: {
    bots: [
      {id: 1, name: 'First bot', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.', author: 'Andrew', email:'andrew@gmail.com'},
      {id: 2, name: 'Second bot', description: 'Lorem, ipsum dolor', author: 'John', email:'andrew@gmail.com'},
      {id: 3, name: 'Third bot', description: 'Lorem ipsum dolor sit amet.', author: 'Bob', email:'nazar@gmail.com'},
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
    ADD_CONTACT_TO_STATE(state, newBot) {
      state.bots.push(newBot);
    },

    DELETE_CONTACT_FROM_STATE(state, id) {
      state.bots = state.bots.filter(bot => bot.id !== id);
    },
  }
}
