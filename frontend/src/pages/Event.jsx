import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { EventCard } from "../components/EventCard";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import '../assets/styles/Event.css';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Events = () => {

  const events = [
    {
      title: "Hackathon",
      description: "Coding & Ideathon",
      imgUrl: projImg1,
    },
    {
      title: "Electro-Motion",
      description: "Guest lecture ",
      imgUrl: projImg2,
    },
  ];

  const Past_events = [
    {
      title: "Electro-Vlsi 2023",
      description: "Guest lecture",
      imgUrl: projImg1,
    },
    {
      title: "Q-ROISITY",
      description: "Quiz Competition",
      imgUrl: projImg2,
    },

  ];

  return (
    <section className="event" id="events">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Events</h2>
                <p>IEEE VIT Bhopal hosts workshops, hackathons, and guest lectures to foster innovation and professional growth in engineering and technology. Stay tuned to join these events.</p>
                <Tab.Container id="events-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Upcoming Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Past Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Highlights</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          events.map((event, index) => {
                            return (
                              <EventCard
                                key={index}
                                {...event}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          Past_events.map((event, index) => {
                            return (
                              <EventCard
                                key={index}
                                {...event}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}
