"use client";

import AfterLogin from "./after-login/after-login";
import BeforeLogin from "./before-login/before-login";

export default function Header() {
  const userLogin = false;

  return <div>{userLogin ? <AfterLogin /> : <BeforeLogin />}</div>;
}
