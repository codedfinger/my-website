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
                    <h3>Highlights</h3>
                    <h6>
                        <p> &#10070; Experienced with principles and best practices of <b>Software Configuration Management (SCM) in Agille, Scrum and Waterfall methodologies</b></p>
                        <p> &#10070; Experience with working with AWS and its services like <b>AWS IAM, VPC, ECS, EBS, RDS, S3, Lambda, ELB, Auto-Scaling, Route 53, CloudFront, CloudWatch, Cloud Trail, SQS, SNS </b> and experienced in Cloud automation using AWS Cloud Formation templates to create custom sized <b> VPC, subnets, NAT, EC2 instances, ELB and Security Groups</b></p>
                        <p> &#10070; Strong experience in using DevOps tools like <b>Terraform, Puppet, Ansible, Docker, Kubernetes, SVN, GIT, and Jenkins</b></p>
                        <p> &#10070; Experience in designing cost effective, fault tolerant and highly available systems thereby enhancing <b> Continuous Integration and Continuous Delivery/Deployment(CI/CD)</b></p>
◊                       <p> &#10070; Strong hands-on experience in building <b>REST APIs, Web Apps and Automation tools</b> with <b>Javascript, Golang and Python.</b></p>
                        
                    </h6>
                    <h6>
                        I build in public and have contributed to open source. 
                        Some of my posts pertain to what I have built and learned while building it. If there are any posts 
                        on here that you would like to know more about, drop me a line. Same goes if you just want to talk 
                        and learn about what I am currently working on. I am open to collaboration as long as our values 
                        align.
                    </h6>

                    <Link className="link" to='/projects'><h3>Projects</h3></Link>
                    <h6>
                        <Link className="link" to='/projects'>Go to my projects page</Link> to learn about what I have worked on in the past.
                    </h6>

                    <h3>Contacts</h3>
                    <h6>
                    My email is alexyikeh@gmail.com

                    My social presence consists of <a className="link" href="https://twitter.com/codedfingers">Twitter</a>, <a className="link" href="https://linkedin.com/in/alexowi">LinkedIn</a> and <a className="link" href="https://github.com/codedfinger">GitHub</a>, Feel free to follow or connect with me and I will reciprocate.
                    </h6>

                    <h3>Support & Help</h3>
                    <h6>
                    If my work has helped you and you would like to help me, feel free to <a className="link" href="https://www.buymeacoffee.com/codedfingers">buy me a coffee</a>. I can also offer more personalized help if that is what you are after.
                    </h6>


                </Col>
            </Row>
        </Container>
    );
}

export default Home;


