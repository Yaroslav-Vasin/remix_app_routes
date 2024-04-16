import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpenseList";

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

export default function ExpensesPage() {
  return (
    <>
      <Outlet />
      <main className="container grid grid-rows-2 gap-4 mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}
