import {
  Outlet
} from "/build/_shared/chunk-NEH4KA36.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-7HCAVLRA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/expenses/ExpenseListItem.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/expenses/ExpenseListItem.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/expenses/ExpenseListItem.tsx"
  );
  import.meta.hot.lastModified = "1713215257857.5286";
}
function ExpenseListItem({
  title,
  amount
}) {
  function deleteExpenseItemHandler() {
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "my-6 px-4 py-2 bg-primary-300 rounded-lg flex justify-between items-center text-gray-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "m-0", children: title }, void 0, false, {
        fileName: "app/components/expenses/ExpenseListItem.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "m-0", children: [
        "$",
        amount.toFixed(2)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseListItem.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseListItem.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("menu", { className: "m-0 p-0 flex items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: deleteExpenseItemHandler, children: "Delete" }, void 0, false, {
        fileName: "app/components/expenses/ExpenseListItem.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tbd", children: "Edit" }, void 0, false, {
        fileName: "app/components/expenses/ExpenseListItem.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseListItem.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/ExpenseListItem.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = ExpenseListItem;
var ExpenseListItem_default = ExpenseListItem;
var _c;
$RefreshReg$(_c, "ExpenseListItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/expenses/ExpenseList.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/expenses/ExpenseList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/expenses/ExpenseList.tsx"
  );
  import.meta.hot.lastModified = "1713268957790.1316";
}
function ExpensesList({
  expenses
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { className: "w-1/2 mx-auto flex flex-col gap-4", id: "expenses-list", children: expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "bg-gray-200 hover:bg-gray-300 px-8 rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    ExpenseListItem_default,
    {
      title: expense.title,
      amount: expense.amount
    },
    void 0,
    false,
    {
      fileName: "app/components/expenses/ExpenseList.tsx",
      lineNumber: 27,
      columnNumber: 11
    },
    this
  ) }, expense.id, false, {
    fileName: "app/components/expenses/ExpenseList.tsx",
    lineNumber: 26,
    columnNumber: 32
  }, this)) }, void 0, false, {
    fileName: "app/components/expenses/ExpenseList.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = ExpensesList;
var ExpenseList_default = ExpensesList;
var _c2;
$RefreshReg$(_c2, "ExpensesList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/expenses/layout.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/expenses/layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/expenses/layout.tsx"
  );
  import.meta.hot.lastModified = "1713268900163.915";
}
var DUMMY_EXPENSES = [{
  id: "el",
  title: "New TV",
  amount: 799.49,
  date: (/* @__PURE__ */ new Date()).toISOString()
}, {
  id: "e2",
  title: "Car Insurance",
  amount: 294.67,
  date: (/* @__PURE__ */ new Date()).toISOString()
}];
function ExpensesPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/expenses/layout.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "container grid grid-rows-2 gap-4 mx-auto px-4 py-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ExpenseList_default, { expenses: DUMMY_EXPENSES }, void 0, false, {
      fileName: "app/routes/expenses/layout.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/expenses/layout.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/expenses/layout.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c3 = ExpensesPage;
var _c3;
$RefreshReg$(_c3, "ExpensesPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ExpensesPage as default
};
//# sourceMappingURL=/build/routes/expenses/layout-5LEQXVXI.js.map
