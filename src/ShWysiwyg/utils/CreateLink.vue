<template>
  <div class="CreateLink">
    Link
    <input ref="link"
           v-model="link"
           class="CreateLink__link"
           type="text"
           @keyup.enter="addLink"
    >
    <span class="CreateLink__btn"
          @click="addLink"
    >
      >>
    </span>
  </div>
</template>

<script>
export default {
  name: 'CreateLink',

  data() {
    return {
      link: null,
    };
  },

  mounted() {
    this.$refs.link.focus();
  },

  methods: {
    addLink() {
      this.$emit('addAdditionalArgs', this.link);
    },
  },
};
</script>

<style lang="sass">
  .CreateLink
    display: flex
    padding: 2px
    font-size: 12px
    line-height: 28px
    background: #f8f8f8

    &__link
      margin: 0 5px

    &__btn
      background: #e5e5e5
      border: 1px #bcbcbc solid
      padding: 0 10px
      font-weight: bold
</style>
