import type React from "react";
import AccountSidebar from "@/components/containers/store/accounts/account-sidebar";

interface AccountLayoutProps {
  children: React.ReactNode;
}

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <div className="@container container mx-auto px-4 py-8">
      <div className="flex @2xl:flex-row flex-col gap-8">
        <AccountSidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
