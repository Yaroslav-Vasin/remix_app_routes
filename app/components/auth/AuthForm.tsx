import { FaLock } from "react-icons/fa";

function AuthForm() {
  return (
    <form
      method="post"
      className="w-1/2 h-1/2 p-20 bg-gray-300 rounded-3xl grid grid-cols-1 gap-4 "
      id="auth-form"
    >
      <div className="w-full flex justify-center">
        <div className="p-4 rounded-full bg-white w-20 h-20 flex justify-center items-center">
          <FaLock className="w-full h-full" />
        </div>
      </div>
      <p className="flex flex-col gap-2">
        <label htmlFor="email">Email Address</label>
        <input
          className="p-2 rounded"
          type="email"
          id="email"
          name="email"
          required
        />
      </p>
      <p className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          className="p-2 rounded"
          type="password"
          id="password"
          name="password"
          minLength={7}
        />
      </p>
      <div className="flex flex-col gap-2">
        <button className="bg-black text-white p-2 rounded hover:bg-gray-600">
          Login
        </button>
        <a className="mx-auto" href="/register">
          Registration
        </a>
      </div>
    </form>
  );
}

export default AuthForm;
