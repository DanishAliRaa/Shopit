import React, { Component} from "react";
import { Link } from "react-router-dom";
import * as styles from "./Header.module.scss";
class Header extends Component {
  render() {
    return (
      <div>
        <nav class={`navbar navbar-light bg-light `}>
          <a class="navbar-brand" href="#">
            <img src="piclogo.png" width="80" height="50" alt="" />
          </a>
          <ul class={`nav ${styles.hello2}`}>
            <li class="nav-item">
              <Link class="nav-link " to="/cart">
                Cart
              </Link>
            </li>
            <li class={`nav-item dropdown `}>
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account</a>
              <div class={`dropdown-menu `} aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something 1
                </a>
                <a class="dropdown-item" href="#">
                  Something 2 
                </a>
                <a class="dropdown-item" href="#">
                  Something 3
                </a>
                <a class="dropdown-item" href="#">
                  Something 4
                </a>
                <a class="dropdown-item" href="#">
                  Something 5
                </a>
                <a class="dropdown-item" href="#">
                  Something 6
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <hr style={{ margin: "1px" }} />
        <div >


          <nav class={`navbar navbar-light bg-light`}>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <form class={`form-inline ${styles.hello3}`}>
              <input class={`form-control `} style={{ width: "800px" }} type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success ml-2 my-2 my-sm-0 pl-4 pr-4" type="submit">Search</button>
            </form>
          </nav>

          <div class="collapse" style={{ width: "250px",position:"absolute", top:"130px",zIndex:"1"}} id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
              <a class="dropdown-item" href="#">
                Action
                </a>
              <a class="dropdown-item" href="#">
                Another action
                </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              
                
            </div>
          </div>

          <nav class="navbar navbar-light bg-light">
            <ul class={`nav ${styles.hello5} `}>
              <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
            </ul>
          </nav>


        </div>
      </div>
    );
  }
}

export default Header;
