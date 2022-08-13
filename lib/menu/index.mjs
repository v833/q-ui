import { defineComponent as A, resolveComponent as a, openBlock as t, createBlock as o, mergeProps as $, withCtx as c, createElementBlock as _, Fragment as d, renderList as v, resolveDynamicComponent as m, unref as x, createElementVNode as y, toDisplayString as h, createVNode as u, isVNode as B } from "vue";
function i(e) {
  return e.replace(/(A-Z)/g, "-$1").toLocaleLowerCase();
}
const C = { style: { marginLeft: "10px" } }, L = /* @__PURE__ */ A({
  __name: "index",
  props: {
    data: {
      type: Array,
      default: () => [],
      required: !0
    },
    defualtActive: {
      type: String,
      default: ""
    },
    router: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (g, f) => {
      const r = a("el-menu-item"), n = a("el-sub-menu"), s = a("el-menu");
      return t(), o(s, $({
        defualtActive: e.defualtActive,
        router: e.router
      }, g.$attrs), {
        default: c(() => [
          (t(!0), _(d, null, v(e.data, (l, k) => (t(), _(d, { key: k }, [
            !l.children || !l.children.length ? (t(), o(r, {
              key: 0,
              index: l.index
            }, {
              default: c(() => [
                (t(), o(m(`el-icon-${x(i)(l.icon)}`))),
                y("span", C, h(l.name), 1)
              ]),
              _: 2
            }, 1032, ["index"])) : (t(), o(n, {
              key: 1,
              index: l.index
            }, {
              title: c(() => [
                (t(), o(m(`el-icon-${x(i)(l.icon)}`))),
                y("span", null, h(l.name), 1)
              ]),
              default: c(() => [
                (t(!0), _(d, null, v(l.children, (p, b) => (t(), o(r, {
                  key: b,
                  index: p.index
                }, {
                  default: c(() => [
                    (t(), o(m(`el-icon-${x(i)(p.icon)}`))),
                    y("span", null, h(p.name), 1)
                  ]),
                  _: 2
                }, 1032, ["index"]))), 128))
              ]),
              _: 2
            }, 1032, ["index"]))
          ], 64))), 128))
        ]),
        _: 1
      }, 16, ["defualtActive", "router"]);
    };
  }
});
function S(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !B(e);
}
const q = A({
  name: "Menu",
  props: {
    data: {
      type: Array,
      default: () => [],
      required: !0
    },
    defualtActive: {
      type: String,
      default: ""
    },
    router: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, g) {
    const f = (r) => r.map((n) => {
      n.i = `el-icon-${i(n.icon)}`;
      const s = {
        title: () => u(d, null, [u(n.i, null, null), u("span", null, [n.name])])
      };
      return n.children && n.children.length ? u(a("el-sub-menu"), {
        index: n.index
      }, {
        default: () => [f(n.children)],
        ...s
      }) : u(a("el-menu-item"), {
        index: n.index
      }, {
        default: () => [u(n.i, null, null), u("span", null, [n.name])]
      });
    });
    return () => {
      let r;
      return u(a("el-menu"), {
        "default-active": e.defualtActive,
        router: e.router
      }, S(r = f(e.data)) ? r : {
        default: () => [r]
      });
    };
  }
}), M = (e) => {
  e.component("q-menu", L), e.component("q-infinite-menu", q);
};
export {
  M as default
};
