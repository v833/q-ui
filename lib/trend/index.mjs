import { defineComponent as y, useCssVars as _, useSlots as f, onMounted as p, resolveComponent as c, openBlock as t, createElementBlock as s, createElementVNode as d, unref as v, renderSlot as m, toDisplayString as C, createBlock as a, normalizeStyle as u } from "vue";
const x = { class: "trend" }, w = { class: "text" }, S = { key: 1 }, g = { class: "icon" }, k = /* @__PURE__ */ y({
  __name: "index",
  props: {
    type: {
      type: String,
      default: "up"
    },
    text: {
      type: String,
      default: "\u6587\u5B57"
    },
    upIconColor: {
      type: String,
      default: "#f5222d"
    },
    downIconColor: {
      type: String,
      default: "#52c41a"
    },
    reverseColor: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    _((o) => ({
      "0f0f6b1a": e.color
    }));
    const n = f();
    return p(() => {
    }), (o, r) => {
      const l = c("el-icon-arrowup"), i = c("el-icon-arrowdown");
      return t(), s("div", x, [
        d("div", w, [
          v(n).default ? m(o.$slots, "default", { key: 0 }, void 0, !0) : (t(), s("div", S, C(e.text), 1))
        ]),
        d("div", g, [
          e.type === "up" ? (t(), a(l, {
            key: 0,
            style: u({ color: e.reverseColor ? e.upIconColor : e.downIconColor })
          }, null, 8, ["style"])) : (t(), a(i, {
            key: 1,
            style: u({ color: e.reverseColor ? e.downIconColor : e.upIconColor })
          }, null, 8, ["style"]))
        ])
      ]);
    };
  }
});
const I = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [r, l] of n)
    o[r] = l;
  return o;
}, h = /* @__PURE__ */ I(k, [["__scopeId", "data-v-4e574631"]]), E = (e) => {
  e.component("q-trend", h);
};
export {
  E as default
};
