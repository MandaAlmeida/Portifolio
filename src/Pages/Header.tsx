import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  action: Boolean;
}

export function Header({ action }: HeaderProps) {
  const [Home, setHome] = useState(true);
  const [Project, setProject] = useState(false);
  const [About, setAbout] = useState(false);

  function getHome() {
    setHome(true), setProject(false), setAbout(false);
  }
  function getProject() {
    setHome(false), setProject(true), setAbout(false);
  }
  function getAbout() {
    setHome(false), setProject(false), setAbout(true);
  }

  return (
    <header
      className={
        action
          ? "bg-black opacity-90 delay-100 fixed top-0 left-0 right-0 z-50"
          : "fixed top-0 left-0 right-0 z-50"
      }
    >
      <nav className="flex justify-center sm:gap-4 text-white items-center py-8 text-sm lg:gap-8 font-sans font-semibold uppercase ">
        <Link
          onClick={getHome}
          className={
            Home
              ? "text-transparent bg-primary bg-clip-text"
              : "text-white hover:text-transparent hover:bg-primary hover:bg-clip-text"
          }
          to="/"
        >
          Início
        </Link>
        <Link
          onClick={getProject}
          className={
            Project
              ? "text-transparent bg-primary bg-clip-text"
              : "text-white hover:text-transparent hover:bg-primary hover:bg-clip-text"
          }
          to="/projetos"
        >
          Projetos
        </Link>
        <Link
          onClick={getAbout}
          className={
            About
              ? "text-transparent bg-primary bg-clip-text"
              : "text-white hover:text-transparent hover:bg-primary hover:bg-clip-text"
          }
          to="/sobre-mim"
        >
          Sobre mim
        </Link>
      </nav>
    </header>
  );
}
