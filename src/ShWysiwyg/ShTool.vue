<template>
  <div v-sh-click-outside="handleClickOutside"
       class="ShTool"
  >
    <button class="ShTool__action-button"
            @click="handleClick"
            v-html="command.icon"
    />
    <ShUtils v-if="shouldShowUtils">
      <component :is="command.utils"
                 @addAdditionalArgs="handleAddAdditionalArgs"
      />
    </ShUtils>
  </div>
</template>

<script>
import ShUtils from './ShUtils';
import CreateLink from './utils/CreateLink';
import Heading from './utils/Heading';

export default {
  name: 'ShButton',

  components: {
    ShUtils,
    CreateLink,
    Heading,
  },

  props: {
    command: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      shouldShowUtils: false,
    };
  },

  methods: {
    handleClick() {
      if (this.command.utils) {
        this.shouldShowUtils = true;
      } else {
        this.$emit('execCommand', this.command.cmd);
      }
    },
    handleClickOutside() {
      this.shouldShowUtils = false;
    },
    handleAddAdditionalArgs(arg) {
      this.shouldShowUtils = false;
      this.$emit('execCommand', this.command.cmd, arg);
    },
  },
};
</script>

<style lang="sass" scoped>
  .ShTool
    position: relative

    &__action-button
      margin: 0
      padding: 7px 2px 2px 6px
      border: 1px transparent solid
      background: transparent
      text-decoration: none
      width: 20px
      height: 20px
      line-height: 20px
      vertical-align: baseline
      box-sizing: content-box
      position: static
      transition: none
      border-collapse: collapse
      font: normal normal normal 12px Arial,Helvetica,Tahoma,Verdana,Sans-Serif
      color: #000
      text-align: left
      white-space: nowrap
      cursor: auto

      &:hover
        background: #e5e5e5
        border: 1px #bcbcbc solid
</style>
