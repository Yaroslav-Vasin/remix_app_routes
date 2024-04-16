import ExpenseListItem from "./ExpenseListItem";

interface Expense {
  id: string;
  title: string;
  amount: number;
}

interface ExpensesListProps {
  expenses: Expense[];
}

function ExpensesList({ expenses }: ExpensesListProps) {
  return (
    <ol className="w-1/2 mx-auto flex flex-col gap-4" id="expenses-list">
      {expenses.map((expense: Expense) => (
        <li
          key={expense.id}
          className="bg-gray-200 hover:bg-gray-300 px-8 rounded-full"
        >
          <ExpenseListItem
            // id={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
