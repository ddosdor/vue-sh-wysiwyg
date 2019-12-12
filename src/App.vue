<template>
  <div id="App">
    <h1>Demo example</h1>
    <ShWysiwyg v-model="someHtml"
               @focus="handleFocus"
               @blur="handleBlur"
    />

    <h3>
      Preview
      <small>State: {{ state }}</small>
    </h3>
    <div v-html="someHtml" />
    <hr>
    <pre>{{ someHtml }}</pre>
  </div>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      someHtml: `
      <div><b>Bold</b></div><div><br></div><div><i>Italic</i></div><div><br></div><div>
      <a href="https://google.pl">Link</a></div><div><br></div><div align="center">Center<br></div>
      `,
      state: null,
    };
  },

  methods: {
    handleFocus() {
      this.state = 'focus';
    },
    handleBlur() {
      this.state = 'blur';
    },
  },
};
</script>

<style lang="scss">
#App {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
