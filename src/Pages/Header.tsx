import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  action: Boolean;
}

export function Header({ action }: HeaderProps) {
  return (
    <header
      className={
        action
          ? "bg-black opacity-90 delay-100 fixed top-0 left-0 right-0"
          : "fixed top-0 left-0 right-0"
      }
    >
      <div className="flex justify-center sm:gap-4 text-white items-center py-8 text-sm lg:gap-8 font-sans font-semibold uppercase">
        <Link to="/">Início</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/sobre-mim">Sobre mim</Link>
      </div>
    </header>
  );
}
