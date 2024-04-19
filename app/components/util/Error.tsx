interface ErrorProps {
  title: string;
  children: React.ReactNode;
}

import { FaExclamationCircle } from "react-icons/fa";

function Error({ title, children }: ErrorProps) {
  return (
    <div className="error">
      <div className="icon">
        <FaExclamationCircle />
      </div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Error;
