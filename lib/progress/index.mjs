import { defineComponent as s, ref as p, onMounted as l, onActivated as _, resolveComponent as d, openBlock as i, createElementBlock as u, createVNode as m, mergeProps as v } from "vue";
const g = /* @__PURE__ */ s({
  __name: "index",
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    isAnimated: {
      type: Boolean,
      default: !1
    },
    time: {
      type: Number,
      default: 3e3
    }
  },
  setup(n) {
    const t = n, e = p(0);
    l(() => {
      r();
    });
    const r = () => {
      if (t.isAnimated) {
        const o = Math.ceil(t.time / t.percentage), a = setInterval(() => {
          e.value += 1, e.value >= t.percentage && (e.value = t.percentage, clearInterval(a));
        }, o);
      } else
        e.value = t.percentage;
    };
    return _(() => {
      e.value = 0, r();
    }), (o, a) => {
      const c = d("el-progress");
      return i(), u("div", null, [
        m(c, v({ percentage: e.value }, o.$attrs), null, 16, ["percentage"])
      ]);
    };
  }
});
const f = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [r, o] of t)
    e[r] = o;
  return e;
}, x = /* @__PURE__ */ f(g, [["__scopeId", "data-v-dd56b8cc"]]), b = (n) => {
  n.component("q-progress", x);
};
export {
  b as default
};
