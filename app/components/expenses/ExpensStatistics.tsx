import { useMemo } from "react";
import Cell from "./cell/Cell";

interface Expense {
  id: string;
  title: string;
  amount: number;
  date: string;
}

interface ExpenseStatisticsProps {
  expenses: Expense[];
}

function calculateSummaryStatistics(expenses: Expense[]) {
  const amounts = expenses.map((expense) => +expense.amount);
  const maxAmount = Math.max(...amounts);
  const minAmount = Math.min(...amounts);
  const sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0);
  const mean = sum / expenses.length;

  return { minAmount, maxAmount, sum, mean };
}

function ExpenseStatistics({ expenses }: ExpenseStatisticsProps) {
  const { minAmount, maxAmount, sum, mean } = useMemo(
    () => calculateSummaryStatistics(expenses),
    [expenses]
  );

  return (
    <section>
      <h2>Summary Statistics</h2>
      <dl
        className="grid grid-cols-2 grid-rows-2 gap-8 "
        id="expense-statistics"
      >
        <Cell number={sum} label={"Total"} />
        <Cell number={mean} label={"Average"} />
        <Cell number={minAmount} label={"Min. Amount"} />
        <Cell number={maxAmount} label={"Max. Amount"} />
      </dl>
    </section>
  );
}

export default ExpenseStatistics;
