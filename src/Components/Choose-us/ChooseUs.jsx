/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assets/images/why-choose-us.png";
import "./choose.css";

// import ReactPlayer from "react-player";

function ChooseUs () {

    const [showVideo, setShowVideo] = useState(false);


    return (
      <section className="mt-5">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="choose__content">
                <h2>Pourquoi nous réjoindre ?</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                    aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                    minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores cupiditate facilis provident quidem accusamus impedit
                    tenetur laboriosam debitis nisi eius!
                </p>
              </div>
            </Col>
  
            <Col lg="6" md="6">
                <div className="choose__img">
                    {showVideo ? (
                        <p>Salut</p>
                    // <ReactPlayer
                    //     url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                    //     controls
                    //     width="100%"
                    //     height="350px"
                    // />
                    ) : (
                    <img src={chooseImg} alt="" className="w-100" />
                    )}
    
                    {!showVideo && (
                    <span className="play__icon">
                        <i
                        class="ri-play-circle-line"
                        onClick={() => setShowVideo(!showVideo)}
                        ></i>
                    </span>
                    )}
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    );

}

export default ChooseUs