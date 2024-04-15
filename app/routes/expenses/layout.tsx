import { Outlet } from "@remix-run/react";

export default function ExpensesPage() {
  return (
    <>
      <h1>Expenses page</h1>
      <Outlet />
    </>
  );
}
