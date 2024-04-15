import { Outlet } from "@remix-run/react";

export default function AuthPage() {
  return (
    <>
      <h1>Auth page</h1>
      <Outlet />
    </>
  );
}
