import { Link } from "react-router-dom";
import Logo from "../../../assets/low-res-logo .png"
import ShapeComponent from "../shape-component/shapecomponent";
import { Title, Display } from "./styles";

export default function HeaderCarreira() {

  const divStyle = {
    backgroundColor: "#f4ebc3",
  };

  const styleLink = {
    textDecoration: "none",
    fontFamily: "Signika Negative",
    fontWeight: "400",
  };

  return (
    <>
      <ShapeComponent />
      <nav class="navbar navbar-expand-lg" style={divStyle}>
        <div class="container-fluid">
          <img src={Logo} alt="Bootstrap" width="40" height="auto" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" style={styleLink}>
                  <a class="nav-link active" aria-current="page" href=" ">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/carreira" style={styleLink}>
                  <a class="nav-link" href=" ">
                    Carreira
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/voluntario" style={styleLink}>
                  <a class="nav-link" href=" ">
                    Voluntário
                  </a>
                </Link>
              </li>
              <li class="nav-item" >
                <Link to="/hobbies" style={styleLink} >
                  <a class="nav-link" href=" ">
                    Hobbies
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Title>
        <Display class="display-1">Tela de Conquistas</Display>
      </Title>
    </>
  );
}
