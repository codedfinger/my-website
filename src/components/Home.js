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
                    <h6>home</h6>
                    <h6>blog</h6>
                    </Col>
                    <Col xs="1">
                    </Col>
                <Col xs="6" >
                    <h3>Introduction</h3>
                    <h6>
                        Hello there. My name is Thomas Step. I am a software engineer and creator of many projects. 
                        I mainly work on backend and devops projects, but I have been teaching myself the frontend 
                        side of web development lately. I mostly code in Javascript/Node (because, you know, full stack), 
                        but I also know Python, C/C++, Ruby, and some other lower level languages. My motivation to create
                        and maintain this site is so that I can translate what I am learning into my own words. One of my 
                        mentors from an internship brought this thought up to me, I decided to run with it, and now here 
                        we are. The topics that I write about are heavily influenced on what I am currently working on and 
                        interested in. The content will probably change throughout time, but at a high level I am interested 
                        in full stack web development and devops. I build in public and have contributed to open source. 
                        Some of my posts pertain to what I have built and learned while building it. If there are any posts 
                        on here that you would like to know more about, drop me a line. Same goes if you just want to talk 
                        and learn about what I am currently working on. I am open to collaboration as long as our values 
                        align.
                    </h6>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;


