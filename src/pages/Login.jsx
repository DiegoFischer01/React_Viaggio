import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import "../css/login.css";
import imgRegistro from "../assets/registrarse/img-registrarse.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !contraseña) {
      Swal.fire("Campos vacíos", "Por favor complete todos los campos", "warning");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/usuarios");
      const usuarios = await response.json();

      const usuario = usuarios.find(
        (u) => u.email === email && u.password === contraseña
      );

      if (!usuario) {
        Swal.fire("Error", "Correo o contraseña incorrectos", "error");
        return;
      }

      Swal.fire({
        icon: "success",
        title: `¡Bienvenido/a, ${usuario.nombre}!`,
        text: "Inicio de sesión exitoso",
        confirmButtonText: "Entrar",
      }).then(() => {
        navigate("/perfil");
      });
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Hubo un problema al conectar con el servidor", "error");
    }
  };

  return (
    <div className="login-contenedor">
      <div className="login-box">
        <div className="login-inputs">
          <div className="login-circle-contenedor">
            <div className="login-circle login-circle1"></div>
            <div className="login-circle login-circle2"></div>
            <div className="login-circle login-circle3"></div>
            <div className="login-circle login-circle4"></div>
            <h2 className="login-title">Inicia sesión</h2>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-inputBox">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="login-label">Correo electrónico</label>
            </div>

            <div className="login-inputBox">
              <input
                type="password"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                required
              />
              <label className="login-label">Contraseña</label>
            </div>

            <div className="login-btn-contenedor">
              <button type="submit" className="login-btn">
                Iniciar sesión
              </button>
            </div>
          </form>

          <div className="login-links">
            <Link to="/">&lt; Volver a inicio</Link>
            <Link className="login-link" to="/register">
              Crear una cuenta &gt;
            </Link>
          </div>
        </div>

        <div className="login-img-contenedor">
          <img src={imgRegistro} alt="Viajeros" />
        </div>
      </div>
    </div>
  );
};

export default Login;
