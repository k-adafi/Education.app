import { Container, Row, Col } from "reactstrap";
// import CountUp from "react-countup";
import aboutImg from "../../assets/images/about-us.png";
import '../About-us/aboutus.css'

function AboutUs () {

    return (
        <section className="mt-5">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="about__img">
                  <img src={aboutImg} alt="" className="w-100" />
                </div>
              </Col>
    
              <Col lg="6" md="6">
                <div className="about__content">
                  <h2>À propos de nous</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Excepturi cupiditate animi deserunt libero nesciunt corporis
                    explicabo nobis ex quo molestiae!
                  </p>
    
                  <div className="about__counter">
                    <div className=" d-flex gap-5 align-items-center">
                      <div className="single__counter">
                        <span className="counter">
                          {/* <CountUp start={0} end={25} duration={2} suffix="K" /> */}
                        </span>
    
                        <p className="counter__title">Completed Projects</p>
                      </div>
    
                      <div className="single__counter">
                        <span className="counter">
                          {/* <CountUp start={0} end={12} duration={2} suffix="M" /> */}
                        </span>
    
                        <p className="counter__title">Patient Around World</p>
                      </div>
                    </div>
    
                    <div className=" d-flex gap-5 align-items-center">
                      <div className="single__counter">
                        <span className="counter">
                          {/* <CountUp start={0} end={95} duration={2} suffix="M" /> */}
                        </span>
    
                        <p className="counter__title">Ideas Raised Funds</p>
                      </div>
    
                      <div className="single__counter">
                        <span className="counter">
                          {/* <CountUp start={0} end={5} duration={2} suffix="K" /> */}
                        </span>
    
                        <p className="counter__title">Categories Served</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      );

}

export default AboutUs