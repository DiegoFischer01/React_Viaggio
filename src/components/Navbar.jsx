import { useEffect, useRef } from "react";
import "../css/navbar.css";
import logo from "../assets/home/logo.svg"

export default function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    // -------- NAVBAR SCROLL EFFECT --------
    let lastScrollTop = 0;
    const navbar = document.getElementById("mainNavbar");

    window.addEventListener("scroll", function () {
      const scrollTop = window.scrollY;

      if (scrollTop > 50) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-dark");
      } else {
        navbar.classList.remove("bg-dark");
        navbar.classList.add("bg-transparent");
      }

      if (scrollTop > lastScrollTop && scrollTop > 550) {
        navbar.style.top = "-80px";
      } else {
        navbar.style.top = "0";
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }, []);

  return (
        <nav
            className="navbar-contenedor container-fluid navbar-expand-lg navbar-dark bg-transparent fixed-top"
            id="mainNavbar"
        >
            <div className="navbar container">
            <a className="a-logo navbar-brand" href="#">
                <img src="/src/assets/home/logo.svg" alt="logo" />
            </a>
            <button
                className="navbar-toggler"
                id="navbarToggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="navbar-ul-contenedor collapse navbar-collapse"
                id="navbarNav"
            >
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Destinos
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Sobre Viaggio
                    </a>
                </li>
                <li className="nav-item">
                    <a className="btn-registrate nav-link text-white" href="#">
                    Registrarse
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>

  );
}
