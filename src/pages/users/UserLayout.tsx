import useAuthStore from "@/store/authStore";
import React from "react";
import { Navigate, Outlet } from "react-router";

function UserLayout() {
  const checkLogin = useAuthStore((state) => state.checkLogin);
 

  if (checkLogin())
    return (
      <div>
        <Outlet />
      </div>
    );
    else
      return <Navigate to={"/login"}  />;
}

export default UserLayout;
