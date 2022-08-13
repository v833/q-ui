import { defineComponent as m, ref as u, resolveComponent as l, openBlock as f, createBlock as v, mergeProps as p, isRef as b, withCtx as i, createVNode as y, renderSlot as O } from "vue";
const x = /* @__PURE__ */ m({
  __name: "index",
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      default: () => [],
      required: !0
    },
    onChange: {
      type: Function
    },
    beforeUpload: {
      type: Function
    },
    onPreview: {
      type: Function
    },
    onRemove: {
      type: Function
    },
    beforeRemove: {
      type: Function
    },
    onSuccess: {
      type: Function
    },
    onExceed: {
      type: Function
    }
  },
  emits: ["update:visible"],
  setup(e, { emit: r }) {
    const o = u(null), a = () => {
      r("update:visible", !1);
    };
    return (n, t) => {
      const s = l("q-form"), c = l("el-dialog");
      return f(), v(c, p({
        modelValue: e.visible,
        "onUpdate:modelValue": t[0] || (t[0] = (d) => b(visible) ? visible.value = d : null),
        onClose: a
      }, n.$attrs, { width: "900px" }), {
        default: i(() => [
          y(s, {
            options: e.options,
            "label-width": "80px",
            ref_key: "form",
            ref: o,
            onOnChange: e.onChange,
            onBeforeUpload: e.beforeUpload,
            onOnPreview: e.onPreview,
            onOnRemove: e.onRemove,
            onBeforeRemove: e.beforeRemove,
            onOnSuccess: e.onSuccess,
            onOnExceed: e.onExceed
          }, null, 8, ["options", "onOnChange", "onBeforeUpload", "onOnPreview", "onOnRemove", "onBeforeRemove", "onOnSuccess", "onOnExceed"])
        ]),
        footer: i(() => [
          O(n.$slots, "footer", { form: o.value })
        ]),
        _: 3
      }, 16, ["modelValue"]);
    };
  }
}), R = (e) => {
  e.component("q-model-form", x);
};
export {
  R as default
};
