import {
  createHotContext
} from "/build/_shared/chunk-7HCAVLRA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/expenses/ExpensesForm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/expenses/ExpensesForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/expenses/ExpensesForm.tsx"
  );
  import.meta.hot.lastModified = "1713268990255.3425";
}
function ExpenseForm() {
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", className: "grid grid-row-2 p-4 gap-8", id: "expense-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "grid grid-row-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", children: "Expense Title" }, void 0, false, {
        fileName: "app/components/expenses/ExpensesForm.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "bg-gray-200 py-4 px-8 rounded-3xl", type: "text", id: "title", name: "title", required: true, maxLength: 30 }, void 0, false, {
        fileName: "app/components/expenses/ExpensesForm.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpensesForm.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full grid-cols-2 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "grid grid-row-2 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "amount", children: "Amount" }, void 0, false, {
          fileName: "app/components/expenses/ExpensesForm.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "bg-gray-200 py-4 px-8 rounded-3xl", type: "number", id: "amount", name: "amount", min: "0", step: "0.01", required: true }, void 0, false, {
          fileName: "app/components/expenses/ExpensesForm.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpensesForm.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "grid grid-row-2 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "date", children: "Date" }, void 0, false, {
          fileName: "app/components/expenses/ExpensesForm.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "bg-gray-200 py-4 px-8 rounded-3xl", type: "date", id: "date", name: "date", max: today, required: true }, void 0, false, {
          fileName: "app/components/expenses/ExpensesForm.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpensesForm.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpensesForm.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row-reverse items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-black text-white py-2 px-8 rounded-3xl hover:bg-gray-600", children: "Save Expense" }, void 0, false, {
        fileName: "app/components/expenses/ExpensesForm.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "text-gray-400 hover:text-gray-500", href: "tbd", children: "Cancel" }, void 0, false, {
        fileName: "app/components/expenses/ExpensesForm.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpensesForm.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/ExpensesForm.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = ExpenseForm;
var ExpensesForm_default = ExpenseForm;
var _c;
$RefreshReg$(_c, "ExpenseForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ExpensesForm_default
};
//# sourceMappingURL=/build/_shared/chunk-GXUIL5I4.js.map
