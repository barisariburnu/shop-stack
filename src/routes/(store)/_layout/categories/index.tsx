import { createFileRoute } from "@tanstack/react-router";
import CategoryTemplate from "@/components/templates/store/category/category-template";

export const Route = createFileRoute("/(store)/_layout/categories/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CategoryTemplate />;
}
