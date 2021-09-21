import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import style from "./styles.module.css";

const mapStateToProps = (state) => {
  return { user: state };
};

const Navbar = ({ user }) => {
  const history = useHistory();
  return (
    <div className={style.Container}>
      <div className={style.Navbar}>
        <div>
          <h4 className={style.NameWeb}>
            <a
              onClick={() => history.push("/")}
              style={{ color: "#ff4c29", textDecoration: "none" }}
            >
              AyHa
            </a>
          </h4>
        </div>
        <div className={style.Option}>
          <a
            onClick={() => history.push("/armar_pc")}
            style={{ textDecoration: "none" }}
          >
            <h4 className={style.HREF}>Armar PC</h4>
          </a>
        </div>
        <div className={style.Option}>
          <a
            onClick={() => history.push("/noticias")}
            style={{ textDecoration: "none" }}
          >
            <h4 className={style.HREF}>Noticias</h4>
          </a>
        </div>
        <div className={style.Option}>
          {user.name && (
            <a
              onClick={() => history.push("/pc_armadas")}
              style={{ textDecoration: "none" }}
            >
              <h4 className={style.HREF}>PC Armadas</h4>
            </a>
          )}
        </div>
        <div className={style.Option}>
          {!user.name && (
            <a
              onClick={() => history.push("/login")}
              style={{ textDecoration: "none" }}
            >
              <h4 className={style.HREF}>Ingresar</h4>
            </a>
          )}

          {user.name && (
            <a
              onClick={() => history.push("/profile")}
              style={{ textDecoration: "none" }}
            >
              <h4 className={style.HREF}>Perfil</h4>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(Navbar);
