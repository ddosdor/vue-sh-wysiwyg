<template>
  <div class="ShWysiwyg">
    <div class="ShWysiwyg__reset">
      <div class="ShWysiwyg__toolbar">
        <div v-for="(command, index) in toolbar"
             :key="index"
        >
          <ShTool v-if="commands[command]"
                  :command="commands[command]"
                  @execCommand="handleExecCommand"
          >
            {{ command.title }}
          </ShTool>
          <span v-else
                class="toolbar__divider"
          />
        </div>
      </div>
      <ShEditor ref="ShEditor" />
    </div>
  </div>
</template>

<script>
// docs: https://developer.mozilla.org/pl/docs/Web/API/Document/execCommand

import commands from './commands';
import ShTool from './ShTool';
import ShEditor from './ShEditor';

export default {
  name: 'ShWysiwyg',

  components: {
    ShTool,
    ShEditor,
  },

  model: {
    prop: 'content',
    event: 'change',
  },

  props: {
    content: {
      type: String,
      default: '',
    },
    toolbar: {
      type: Array,
      default: () => [
        'bold', 'italic', '|', 'justifyLeft', 'justifyCenter', 'justifyRight', '|', 'createLink', '|', 'removeFormat', 'undo',
      ],
    },
  },

  data() {
    return {
      editorContent: null,
      selectedRegion: null,
      commands,
    };
  },

  mounted() {
    this.editorContent = this.$refs.ShEditor.$el;
    this.editorContent.innerHTML = this.content;
    this.editorContent.addEventListener('blur', this.handleContentBlur, { capture: true });
    this.editorContent.addEventListener('focus', this.handleContentFocus);
    this.editorContent.addEventListener('input', this.handleInput);
  },

  methods: {
    getSelectedRegion() {
      if (window.getSelection !== undefined) {
        this.selectedRegion = window.getSelection();
        if (this.selectedRegion.getRangeAt && this.selectedRegion.rangeCount) {
          return this.selectedRegion.getRangeAt(0);
        }
      } else if (document.selection && document.selectedRegion.createRange) {
        return document.selection.createRange();
      }
      return null;
    },
    restoreSelectedRegion() {
      const orgSelectedRegion = this.selectedRegion;
      if (orgSelectedRegion) {
        if (window.getSelection !== undefined) {
          this.selectedRegion = window.getSelection();
          this.selectedRegion.removeAllRanges();
          this.selectedRegion.addRange(orgSelectedRegion);
        } else if (document.selection && orgSelectedRegion.select) {
          orgSelectedRegion.select();
        }
      }
    },
    handleContentFocus() {
      document.execCommand('defaultParagraphSeparator', false, 'div');
      this.$emit('focus');
    },
    handleContentBlur() {
      this.selectedRegion = this.getSelectedRegion();
      this.$emit('blur');
    },
    handleInput() {
      this.emitChanges();
    },
    emitChanges() {
      this.$emit('change', this.editorContent.innerHTML);
    },

    handleExecCommand(cmd, args) {
      if (args) this.restoreSelectedRegion();
      document.execCommand(cmd, false, args || null);
      this.$nextTick(this.emitChanges);
    },
  },
};
</script>

<style lang="sass" scoped>
.ShWysiwyg
  padding: 0
  background: #fff
  border: 1px solid #d1d1d1

  &__reset
    margin: 0
    padding: 0
    border: 0
    background: transparent
    text-decoration: none
    width: auto
    height: auto
    vertical-align: baseline
    box-sizing: content-box
    position: static
    transition: none

  &__toolbar
    display: flex
    border-bottom: 1px solid #d1d1d1
    background: #f8f8f8
    padding: 2px 8px
    white-space: normal
    line-height: 20px

    .toolbar__divider
      display: block
      height: 100%
      width: 1px
      background: #d1d1d1
      margin: 0 2px
</style>
