import React from "react";

class Navbars extends React.Component {
  render() {
    return (
      <nav
        class="navbar pt-1 pb-1 is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand ">
          <a class="navbar-item" href="https://bulma.io">
            <h3 class="is-size-3 navtext has-text-dark">PRANIT's</h3>
          </a>

          <a
            role="button"
            class="navbar-burger burger "
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample " class="navbar-menu lg:ml-64 navtextone">
          <div class="navbar-start">
            <a class="navbar-item ">
              <h4 class=" is-size-4  is-size-5-mobile has-text-dark navtext ">
                Home
              </h4>
            </a>

            <a class="navbar-item ">
              <h4 class="is-size-4  is-size-5-mobile has-text-dark navtext">
                {" "}
                About Me
              </h4>
            </a>

            <a class="navbar-item ">
              <h4 class="has-text-dark navtext"> Projects</h4>
            </a>

            <a class="navbar-item ">
              <h4 class=" has-text-dark navtext">Experience</h4>
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item ">
              <div class="buttons  ">
                <a class="button is-primary ">
                  <strong>Sign up</strong>
                </a>
                <a class="button it-dark">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbars;
