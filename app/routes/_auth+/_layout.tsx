import { Outlet } from "@remix-run/react";

export default function AuthPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-dvh">
      <h1>Auth page</h1>
      <Outlet />
    </div>
  );
}
