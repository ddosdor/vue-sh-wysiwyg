import { shClickOutside } from './directives';
import ShWysiwyg from './ShWysiwyg';

export default {
  install: (Vue) => {
    Vue.component('ShWysiwyg', ShWysiwyg);
    Vue.directive('sh-click-outside', shClickOutside);
  },

  components: ShWysiwyg,
};
