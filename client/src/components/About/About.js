import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1>Learn More</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <p>
                            The Productivity Tracker App is about achieving your desired goals through customizable tasks and activities that you track with ease daily. 
                        </p>
                        <p>
                            Establishing daily goals in a visible format is scientifically proven to provide an enhanced focus that leads to increased productivity (and likely increased earnings!).  In 1979, researchers at "The Harvard MBA Business School" conducted a study highlighting the importance of goal setting.  Furthermore, writing down those desired goals is essential to the likelihood of achieving your goals.   

                            https://www.forbes.com/sites/annabelacton/2017/11/03/how-to-set-goals-and-why-you-should-do-it/?sh=199f3e97162d 
                        </p>
                        <p>
                            The Productivity Tracker App is an amazing and convenient tool to stay on-task, get more done, and enjoy the personal rewards of accomplishment!  Sign-up now and start getting more done in your life today!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
