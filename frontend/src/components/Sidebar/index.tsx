import React from "react";
import MenuAdmin from "../MenuAdmin";
import MenuComum from "../MenuComum";

export default function Sidebar() {
  const usertype: any = JSON.parse(`${sessionStorage.getItem("data")}`)?.type;

  return <>{usertype === "admin" ? <MenuAdmin /> : <MenuComum />}</>;
}
