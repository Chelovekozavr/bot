<template>
  <div id="app">
    <BotList />
  </div>
</template>

<script>
import BotList from './components/BotList';
  export default {
    name: 'App',

    components: {
      BotList
    }
  }
</script>

<style>
  body {
    margin: 0;
    background-color: #19191a;
    color: whitesmoke;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  #app {
    display: flex;
    justify-content: center;
    font-family: Arial,Helvetica,sans-serif
  }
</style>
