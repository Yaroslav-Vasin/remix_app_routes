import {
  createHotContext
} from "/build/_shared/chunk-7HCAVLRA.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/expenses_/analysis/route.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/expenses_/analysis/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/expenses_/analysis/route.tsx"
  );
  import.meta.hot.lastModified = "1712064169316.167";
}
function AnalysisExpensesPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Analysis Expenses page" }, void 0, false, {
    fileName: "app/routes/expenses_/analysis/route.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/expenses_/analysis/route.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = AnalysisExpensesPage;
var _c;
$RefreshReg$(_c, "AnalysisExpensesPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AnalysisExpensesPage as default
};
//# sourceMappingURL=/build/routes/expenses_/analysis/route-SXRRQ5UC.js.map