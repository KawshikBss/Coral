import React from "react";
function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <div className={`w-full h-full`}>{children}</div>;
}

export default DashboardLayout;
