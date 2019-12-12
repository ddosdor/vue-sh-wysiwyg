<template>
  <div class="Heading">
    <h1 class="Heading__header"
        @click="createHeader('h1')"
    >
      Heading
    </h1>
    <h2 class="Heading__header"
        @click="createHeader('h2')"
    >
      Heading
    </h2>
    <h3 class="Heading__header"
        @click="createHeader('h3')"
    >
      Heading
    </h3>
    <h4 class="Heading__header"
        @click="createHeader('h4')"
    >
      Heading
    </h4>
    <h5 class="Heading__header"
        @click="createHeader('h5')"
    >
      Heading
    </h5>
    <h6 class="Heading__header"
        @click="createHeader('h6')"
    >
      Heading
    </h6>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Heading',

  methods: {
    createHeader(headerSize) {
      this.$emit('addAdditionalArgs', headerSize);
    },
  },
};
</script>

<style lang="sass" scoped>
.Heading
  position: relative
  padding: 0 10px

  &__header
    color: #2c3e50
    margin: 15px 0px
    cursor: pointer

    &:hover
      text-decoration: underline
</style>
