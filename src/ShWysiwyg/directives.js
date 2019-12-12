
// source: https://stackoverflow.com/questions/36170425/detect-click-outside-element
export const shClickOutside = {
  bind(el, binding, vnode) {
    const _el = el;
    _el.clickOutsideEvent = function (event) {
      if (!(_el === event.target || _el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', _el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};
