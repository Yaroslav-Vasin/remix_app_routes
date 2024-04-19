// expenses/<some id>
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpensesForm";
import Modal from "~/components/util/Modal";

export default function UpdateExpensesPage() {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("..");
  };

  return (
    <>
      <Modal onClose={closeHandler}>
        <ExpenseForm />
      </Modal>
      {/* <ExpenseForm />
      <h1>Update Expenses page</h1> */}
    </>
  );
}
