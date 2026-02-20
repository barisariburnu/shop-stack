import { createFileRoute, Outlet } from "@tanstack/react-router";
import Header from "@/components/base/common/header";

export const Route = createFileRoute("/(store)/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
