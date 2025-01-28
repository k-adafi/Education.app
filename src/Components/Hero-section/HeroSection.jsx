/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import 'remixicon/fonts/remixicon.css'
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./herosection.css";

function HeroSection () {

    return (
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero__content">
                  <h2 className="mb-4 hero__title">
                    Tous le temps partout <br /> Etudier avec<br />  votre propre rythme
                  </h2>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                    Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                    quas officiis et repellat!
                  </p>
                </div>
                <div className="search">
                  <input type="text" placeholder="Recherche" />
                  <button className="btn btn-primary">Recherche</button>
                </div>
              </Col>
    
              <Col lg="6" md="6">
                <img src={heroImg} alt="" width={50} className="w-100 hero__img" />
              </Col>
            </Row>
          </Container>
        </section>
      );

}

export default HeroSection