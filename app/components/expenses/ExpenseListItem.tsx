interface ExpenseListItemProps {
  title: string;
  amount: number;
  // id: string;
}

function ExpenseListItem({ title, amount }: ExpenseListItemProps) {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <article className="my-6 px-4 py-2 bg-primary-300 rounded-lg flex justify-between items-center text-gray-10">
      <div>
        <h2 className="m-0">{title}</h2>
        <p className="m-0">${amount.toFixed(2)}</p>
      </div>
      <menu className="m-0 p-0 flex items-center gap-4">
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        <a href="tbd">Edit</a>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
