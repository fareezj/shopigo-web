import React from "react";
import AppHeader from "./AppHeader";

const AppLayout = ({ children }: { children: any }) => {
  return (
    <div>
      <AppHeader />
      {children}
    </div>
  );
};

export default AppLayout;
