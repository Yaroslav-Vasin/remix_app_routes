import { FaLock } from "react-icons/fa";

function RegistrationForm() {
  return (
    <form
      method="post"
      className="p-20 bg-gray-300 rounded-3xl fex flex-col gap-4"
      id="auth-form"
    >
      <div className="icon-img">
        <FaLock />
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <p>
        <label htmlFor="password">Password Confirmation</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button>Register</button>
        <a href="/login">Log in with existing user</a>
      </div>
    </form>
  );
}

export default RegistrationForm;
