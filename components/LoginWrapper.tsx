import style from "../styles/LoginWrapper.module.css";
import React from "react";

export type LoginWrapperProps = {
  children: React.ReactNode;
  page: "login" | "forgot";
};
export const LoginWrapper = ({
  children,
  page,
}: LoginWrapperProps): JSX.Element => {
  return (
    <div className={style.layout}>
      {children}
      <img src={page === "login" ? "/login.svg" : "/forgotPassword.svg"} />
    </div>
  );
};
