function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10

  return (
    <form method="post" className="grid grid-row-2 p-4 gap-8" id="expense-form">
      <p className="grid grid-row-2">
        <label htmlFor="title">Expense Title</label>
        <input
          className="bg-gray-200 py-4 px-8 rounded-3xl"
          type="text"
          id="title"
          name="title"
          required
          maxLength={30}
        />
      </p>

      <div className="flex w-full grid-cols-2 gap-8">
        <p className="grid grid-row-2 w-full">
          <label htmlFor="amount">Amount</label>
          <input
            className="bg-gray-200 py-4 px-8 rounded-3xl"
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            required
          />
        </p>
        <p className="grid grid-row-2 w-full">
          <label htmlFor="date">Date</label>
          <input
            className="bg-gray-200 py-4 px-8 rounded-3xl"
            type="date"
            id="date"
            name="date"
            max={today}
            required
          />
        </p>
      </div>
      <div className="flex flex-row-reverse items-center gap-4">
        <button className="bg-black text-white py-2 px-8 rounded-3xl hover:bg-gray-600">
          Save Expense
        </button>
        <a className="text-gray-400 hover:text-gray-500" href="tbd">
          Cancel
        </a>
      </div>
    </form>
  );
}

export default ExpenseForm;
