/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import 'remixicon/fonts/remixicon.css'
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.css";


const navLinks = [
    {
      display: "Acceuil",
      url: "#",
    },
    {
      display: "A propos",
      url: "#",
    },
  
    {
      display: "Cours",
      url: "#",
    },
    {
      display: "Pages",
      url: "#",
    },
    {
      display: "Blog",
      url: "#",
    },
  ];


function Header () {

    const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

    return (
        <header className="header">
          <Container>
            <div className="navigation d-flex align-items-center justify-content-between">
              <div className="logo">
                <h2 className=" d-flex align-items-center gap-1">
                  <i class="ri-pantone-line"></i> E-Learn.
                </h2>
              </div>
    
              <div className="nav d-flex align-items-center gap-5">
                <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                  <ul className="nav__list">
                    {navLinks.map((item, index) => (
                      <li key={index} className="nav__item">
                        <a href={item.url}>{item.display}</a>
                      </li>
                    ))}
                  </ul>
                </div>
    
                <div className="nav__right">
                  <div className="mb-0 d-flex align-items-center gap-2">   
                    <i class="ri-phone-line"></i> +261 341456679
                    <a href="https://www.linkedin.com/in/kadafi-ben-0312a3265/" target="_blank"><i class="ri-linkedin-box-fill"></i></a>
                    <a href="https://www.facebook.com/kadafy.man.3" target="_blank"><i class="ri-facebook-circle-fill"></i></a>
                    <a href="https://github.com/k-adafi" target="_blank"><i class="ri-github-fill"></i></a>
                  </div>  
                </div>
              </div>
    
              <div className="mobile__menu">
                <span>
                  <i class="ri-menu-line" onClick={menuToggle}></i>
                </span>
              </div>
            </div>
          </Container>
        </header>
      );

}

export default Header