/* eslint-disable react/jsx-key */
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/images/web-design.png";
import courseImg2 from "../../assets/images/graphics-design.png";
import courseImg3 from "../../assets/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";


const coursesData = [
    {
      id: "01",
      title: "Web Design BootCamp-2022 for Beginners",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg1,
    },
  
    {
      id: "02",
      title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg2,
    },
  
    {
      id: "03",
      title: "UI/UX BootCamp for Beginners in 2022",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg3,
    },
    {
      id: "04",
      title: "UI/UX BootCamp for Beginners in 2022",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg3,
    },

];


function Courses () {

    return (
        <section className="mt-5">
          <Container>
            <Row>
                <Col lg="12" className="mb-1">
                    <div className="course__top d-flex justify-content-between align-items-center">
                    <div className="course__top__left w-50">
                        <h2>Our Popular Courses</h2>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                        consequatur libero quod voluptatibus ullam quia quas, vitae
                        voluptatem recusandae reprehenderit!
                        </p>
                    </div>
                    <div className="w-50 text-end">
                        <button className="btn btn-primary">Voir tout</button>
                    </div>
                    </div>
                </Col>
                {coursesData.map((item) => (
                    <Col lg="4" md="6" sm="6">
                        <CourseCard key={item.id} item={item} />
                    </Col>
                ))}
            </Row>
          </Container>
        </section>
      );

}

export default Courses