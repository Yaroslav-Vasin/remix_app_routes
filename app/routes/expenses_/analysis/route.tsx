const DUMMY_EXPENSES = [
  {
    id: "el",
    title: "New TV",
    amount: 799.49,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date().toISOString(),
  },
];

import Chart from "~/components/expenses/Char";
import ExpenseStatistics from "~/components/expenses/ExpensStatistics";

// expenses/analysis
export default function AnalysisExpensesPage() {
  return (
    <main className="container grid grid-rows-2 gap-4 mx-auto px-4 py-4 sm:px-6 lg:px-8">
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
}
