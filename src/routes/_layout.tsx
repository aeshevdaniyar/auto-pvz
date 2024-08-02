import { MainLayout } from "@/components/templates/main-layout";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
    component: () => <LayoutComponent />,
});

function LayoutComponent() {
    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    );
}
