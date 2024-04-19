import {
  FaHandshake,
  FaTrophy
} from "/build/_shared/chunk-54WDYQHG.js";
import {
  createHotContext
} from "/build/_shared/chunk-7HCAVLRA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/marketing/PricingPlan.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/marketing/PricingPlan.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/marketing/PricingPlan.tsx"
  );
  import.meta.hot.lastModified = "1713269775440.1777";
}
function PricingPlan({
  title,
  price,
  perks,
  icon
}) {
  const Icon = icon;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "w-16 h-16 text-lg flex justify-center items-center text-black border-2 border-white rounded-full mx-auto my-4" }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: title }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: price }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/marketing/PricingPlan.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "plan-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { children: perks.map((perk) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: perk }, perk, false, {
        fileName: "app/components/marketing/PricingPlan.tsx",
        lineNumber: 38,
        columnNumber: 30
      }, this)) }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "", href: "/not-implemented", children: "Learn More" }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/marketing/PricingPlan.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/marketing/PricingPlan.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = PricingPlan;
var PricingPlan_default = PricingPlan;
var _c;
$RefreshReg$(_c, "PricingPlan");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/pricing/route.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/pricing/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/pricing/route.tsx"
  );
  import.meta.hot.lastModified = "1713256123100.0195";
}
var PRICING_PLANS = [{
  id: "p1",
  title: "Basic",
  price: "Free forever",
  perks: ["1 User", "Up to 100 expenses/year", "Basic analytics"],
  icon: FaHandshake
}, {
  id: "p2",
  title: "Pro",
  price: "$9.99/month",
  perks: ["Unlimited Users", "Unlimited expenses/year", "Detailed analytics"],
  icon: FaTrophy
}];
function PricingPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "text-center", id: "pricing", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "Great Product, Simple Pricing" }, void 0, false, {
      fileName: "app/routes/pricing/route.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { className: "w-96 mx-auto flex justify-center gap-8 mt-12", children: PRICING_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "bg-white rounded-lg overflow-hidden shadow-md text-gray-500 w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PricingPlan_default, { title: plan.title, price: plan.price, perks: plan.perks, icon: plan.icon }, void 0, false, {
      fileName: "app/routes/pricing/route.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this) }, plan.id, false, {
      fileName: "app/routes/pricing/route.tsx",
      lineNumber: 40,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/routes/pricing/route.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/pricing/route.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c2 = PricingPage;
var _c2;
$RefreshReg$(_c2, "PricingPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  PricingPage
};
//# sourceMappingURL=/build/_shared/chunk-Z3VWMORG.js.map
