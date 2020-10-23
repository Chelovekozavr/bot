export default {
  state: {
    bots: [
      {id: 1, name: 'First bot', description: 'Lorem, ipsum dolor', author: 'Andrew', email:'andrew@gmail.com'},
      {id: 2, name: 'Second bot', description: 'Lorem, ipsum dolor', author: 'John'},
      {id: 3, name: 'Third bot', description: 'Lorem, ipsum dolor', author: 'Bob', email:'nazar@gmail.com'},
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
    ADD_CONTACT_TO_STATE(state, newContact) {
      state.contacts.push(newContact);
    },

    DELETE_CONTACT_FROM_STATE(state, id) {
      state.contacts = state.contacts.filter(bot => bot.id !== id);
    },
  }
}
