import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';




const Home = () => {

    return (
        <Container>
            <Row className="home-content">
                    <Col xs="2">
                    </Col>

                    <Col xs="3">
                        <Link className="link" to='/'><h3>Alexander Swiss</h3></Link>
                    <h6>This is where I share my thoughts and experiences that I encounter developing software.</h6>
                    <Link className="link" to='/'><h6>home</h6></Link>
                    <Link className="link" to='/blog'><h6>blog</h6></Link>
                    </Col>
                    <Col xs="1">
                    </Col>
                <Col xs="6" >
                    <h3>Projects</h3>
                    <h6>
                        list project here
                    </h6>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;


