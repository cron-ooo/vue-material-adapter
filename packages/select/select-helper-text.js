import { MDCSelectHelperTextFoundation } from '@material/select/helper-text/foundation.js';
import { onBeforeUnmount, onMounted, reactive, toRefs, watch } from 'vue';
export default {
  name: 'select-helper-text',
  props: {
    helptextPersistent: Boolean,
    helptextValidation: Boolean,
    helptext: String,
  },
  setup(props) {
    const uiState = reactive({
      classes: {
        'mdc-select-helper-text': true,
        'mdc-select-helper-text--persistent': props.helptextPersistent,
        'mdc-select-helper-text--validation-msg': props.helptextValidation,
      },
      attrs: { 'aria-hidden': 'true' },
      myHelptext: props.helptext,
      foundation: {},
    });

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      hasClass: className => Boolean(uiState.classes[className]),

      setAttr: (attr, value) =>
        (uiState.attrs = { ...uiState.attrs, [attr]: value }),

      removeAttr: attr => {
        // eslint-disable-next-line no-unused-vars
        const { [attr]: removed, ...rest } = uiState.attrs;
        uiState.attrs = rest;
      },

      setContent: content => {
        uiState.myHelptext = content;
      },
    };

    watch(
      () => props.helptextPersistent,
      nv => uiState.foundation.setPersistent(nv),
    );

    watch(
      () => props.helptextValidation,
      nv => uiState.foundation.setValidation(nv),
    );

    watch(
      () => props.helptext,
      nv => (uiState.myHelptext = nv),
    );

    onMounted(() => {
      uiState.foundation = new MDCSelectHelperTextFoundation(adapter);
      uiState.foundation.init();
    });

    onBeforeUnmount(() => {
      uiState.foundation.destroy();
    });

    return { ...toRefs(uiState) };
  },
};
