import LinkElement from "./elements/Link";

export default function Header({ isHome = false, children }) {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <LinkElement className={"navbar-brand"} isHome={isHome} href={"/"}>
            Foto Carpa
          </LinkElement>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li className="active">
              <LinkElement
                className={"smooth-scroll"}
                isHome={isHome}
                href={"#home"}
              >
                Inicio
              </LinkElement>
            </li>
            <li>
              <LinkElement
                className={"smooth-scroll"}
                isHome={isHome}
                href={"#about"}
              >
                Nosotros
              </LinkElement>
            </li>
            <li>
              <LinkElement
                className={"smooth-scroll"}
                isHome={isHome}
                href={"#service"}
              >
                Servicios
              </LinkElement>
            </li>
            <li className="dropdown">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Productos <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <LinkElement href={"producto/fotografia-y-videografia"}>
                    Fotografía y
                    <br />
                    Videografía
                  </LinkElement>
                </li>
                <li>
                  <LinkElement href={"producto/marketing"}>
                    Publicidad
                  </LinkElement>
                </li>
                <li>
                  <LinkElement href={"producto/souvenir"}>
                    Souvenirs
                  </LinkElement>
                </li>
                <li role="separator" className="divider hidden-lg"></li>
              </ul>
            </li>
            <li>
              <LinkElement href={"paquetes-de-graduacion"}>
                Paquetes de Graduación
              </LinkElement>
            </li>
            <li>
              <LinkElement
                className={"smooth-scroll"}
                isHome={isHome}
                href={"#work"}
              >
                Trabajos
              </LinkElement>
            </li>
            <li>
              <LinkElement
                className={"smooth-scroll"}
                isHome={isHome}
                href={"#contact"}
              >
                Contacto
              </LinkElement>
            </li>
          </ul>
        </div>
        {children}
      </div>
    </nav>
  );
}
