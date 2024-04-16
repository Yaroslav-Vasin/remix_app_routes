import {
  createHotContext
} from "/build/_shared/chunk-7HCAVLRA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/expenses/ChartBar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/expenses/ChartBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/expenses/ChartBar.tsx"
  );
  import.meta.hot.lastModified = "1713188448147.5713";
}
var ChartBar = ({
  maxValue,
  value,
  label
}) => {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round(value / maxValue * 100) + "%";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "chart-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-40 flex flex-col flex-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-800 rounded-md", style: {
      height: barFillHeight
    } }, void 0, false, {
      fileName: "app/components/expenses/ChartBar.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/expenses/ChartBar.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: label }, void 0, false, {
      fileName: "app/components/expenses/ChartBar.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/ChartBar.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c = ChartBar;
var ChartBar_default = ChartBar;
var _c;
$RefreshReg$(_c, "ChartBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/expenses/Char.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/expenses/Char.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/expenses/Char.tsx"
  );
  import.meta.hot.lastModified = "1713190528235.5872";
}
function Chart({
  expenses
}) {
  const chartDataPoints = [{
    label: "Jan",
    value: 0
  }, {
    label: "Feb",
    value: 0
  }, {
    label: "Mar",
    value: 0
  }, {
    label: "Apr",
    value: 0
  }, {
    label: "May",
    value: 0
  }, {
    label: "Jun",
    value: 0
  }, {
    label: "Jul",
    value: 0
  }, {
    label: "Aug",
    value: 0
  }, {
    label: "Sep",
    value: 0
  }, {
    label: "Oct",
    value: 0
  }, {
    label: "Nov",
    value: 0
  }, {
    label: "Dec",
    value: 0
  }];
  for (const expense of expenses) {
    const expenseMonth = new Date(expense.date).getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "Monthly Expenses" }, void 0, false, {
      fileName: "app/components/expenses/Char.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { className: "grid grid-cols-12 justify-items-center gap-3 p-6 rounded-md border-2 border-black", children: chartDataPoints.map((dataPoint) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChartBar_default, { value: dataPoint.value, maxValue: totalMaximum, label: dataPoint.label }, dataPoint.label, false, {
      fileName: "app/components/expenses/Char.tsx",
      lineNumber: 71,
      columnNumber: 43
    }, this)) }, void 0, false, {
      fileName: "app/components/expenses/Char.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/Char.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_c2 = Chart;
var Char_default = Chart;
var _c2;
$RefreshReg$(_c2, "Chart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/expenses/ExpensStatistics.tsx
var import_react = __toESM(require_react(), 1);

// app/components/expenses/cell/Cell.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/expenses/cell/Cell.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/expenses/cell/Cell.tsx"
  );
  import.meta.hot.lastModified = "1713189837115.2886";
}
function Cell({
  number,
  label
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dt", { className: "text-xl", children: label }, void 0, false, {
      fileName: "app/components/expenses/cell/Cell.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dd", { className: "m-0 text-4xl", children: [
      "$",
      number.toFixed(2)
    ] }, void 0, true, {
      fileName: "app/components/expenses/cell/Cell.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/cell/Cell.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c3 = Cell;
var _c3;
$RefreshReg$(_c3, "Cell");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/expenses/ExpensStatistics.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/expenses/ExpensStatistics.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/expenses/ExpensStatistics.tsx"
  );
  import.meta.hot.lastModified = "1713189870622.5608";
}
function calculateSummaryStatistics(expenses) {
  const amounts = expenses.map((expense) => +expense.amount);
  const maxAmount = Math.max(...amounts);
  const minAmount = Math.min(...amounts);
  const sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0);
  const mean = sum / expenses.length;
  return {
    minAmount,
    maxAmount,
    sum,
    mean
  };
}
function ExpenseStatistics({
  expenses
}) {
  _s();
  const {
    minAmount,
    maxAmount,
    sum,
    mean
  } = (0, import_react.useMemo)(() => calculateSummaryStatistics(expenses), [expenses]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { children: "Summary Statistics" }, void 0, false, {
      fileName: "app/components/expenses/ExpensStatistics.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dl", { className: "grid grid-cols-2 grid-rows-2 gap-8 ", id: "expense-statistics", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Cell, { number: sum, label: "Total" }, void 0, false, {
        fileName: "app/components/expenses/ExpensStatistics.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Cell, { number: mean, label: "Average" }, void 0, false, {
        fileName: "app/components/expenses/ExpensStatistics.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Cell, { number: minAmount, label: "Min. Amount" }, void 0, false, {
        fileName: "app/components/expenses/ExpensStatistics.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Cell, { number: maxAmount, label: "Max. Amount" }, void 0, false, {
        fileName: "app/components/expenses/ExpensStatistics.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpensStatistics.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/ExpensStatistics.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s(ExpenseStatistics, "p2xC83GiILF2qC9FD1C02JEZGaY=");
_c4 = ExpenseStatistics;
var ExpensStatistics_default = ExpenseStatistics;
var _c4;
$RefreshReg$(_c4, "ExpenseStatistics");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/expenses_/analysis/route.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1713190601749.9841";
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
function AnalysisExpensesPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { className: "container grid grid-rows-2 gap-4 mx-auto px-4 py-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Char_default, { expenses: DUMMY_EXPENSES }, void 0, false, {
      fileName: "app/routes/expenses_/analysis/route.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ExpensStatistics_default, { expenses: DUMMY_EXPENSES }, void 0, false, {
      fileName: "app/routes/expenses_/analysis/route.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/expenses_/analysis/route.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c5 = AnalysisExpensesPage;
var _c5;
$RefreshReg$(_c5, "AnalysisExpensesPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AnalysisExpensesPage as default
};
//# sourceMappingURL=/build/routes/expenses_/analysis/route-EHQEJVXQ.js.map
