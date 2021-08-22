import React, {Component} from 'react';
import Datas from '../data/footer/footer.json';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from 'react-bootstrap';
import BackToTop from './common/BackToTop';
import {Styles} from "./styles/footerOne.js";

class Footer extends Component {
    render() {
        return (
            <Styles>
                {/* Footer Area */}
                <footer className="footer1"
                        style={{backgroundImage: `url(assets/images/${process.env.PUBLIC_URL + Datas.backgroundImage})`}}>
                    <Container>
                        <Row>
                            <Col md="4">
                                <div className="footer-logo-info">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/f-logo-200_x_200.jpeg"} alt=""
                                         className="img-fluid"/>
                                    <p>Lorem ipsum dolor sit amet, consectet adipisicing elit. Saepe porro neque a nam
                                        null quos. Adipisci eius unde magnam ad, nisi voluptates.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="las la-map-marker"/>Juja,Kenya</li>
                                        <li><i className="las la-envelope"/>enquery@carhood.com</li>
                                        <li><i className="las la-phone"/>+1 908 875 7678</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="f-links">
                                    <h5>Useful Links</h5>
                                    <ul className="list-unstyled">
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"/>General
                                            Info</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"/>Help
                                            Center</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"/>Our
                                            Services</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"/>Privacy
                                            Policy</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"/>Online
                                            Support</Link></li>
                                    </ul>
                                    <ul className="list-unstyled">
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"/>General
                                            Info</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"/>Help
                                            Center</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"/>Our
                                            Services</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"/>Privacy
                                            Policy</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"/>Online
                                            Support</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="f-post">
                                    <h5>Recent Post</h5>
                                    <div className="post-box d-flex">
                                        <div className="post-img">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/blog-2.jpg"} alt=""/>
                                        </div>
                                        <div className="post-content">
                                            <Link to={process.env.PUBLIC_URL + "/blog-details"}>Lorem ipsum dolor sit
                                                amet consectet adipisicing elit com...</Link>
                                            <span>Mar 30, 2020</span>
                                        </div>
                                    </div>
                                    <div className="post-box d-flex">
                                        <div className="post-img">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/blog-3.jpg"} alt=""/>
                                        </div>
                                        <div className="post-content">
                                            <Link to={process.env.PUBLIC_URL + "/blog-details"}>Lorem ipsum dolor sit
                                                amet consectet adipisicing elit com...</Link>
                                            <span>Mar 30, 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>

                {/* Copyright Area */}
                <section className="copyright-area">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="copy-text">
                                    <p>Copyright &copy; 2020 | Designed With by <a
                                        href="https://georgethedeveloper.tech" target="_blank"
                                        rel="noopener noreferrer"> georgethedeveloper</a></p>
                                </div>
                            </Col>
                            <Col md="6" className="text-right">
                                <ul className="social list-unstyled list-inline">
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i
                                        className="fab fa-facebook-f"/></a></li>
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i
                                        className="fab fa-twitter"/></a></li>
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i
                                        className="fab fa-linkedin-in"/></a></li>
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i
                                        className="fab fa-youtube"/></a></li>
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i
                                        className="fab fa-dribbble"/></a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>

                    {/* Back To Top */}
                    <BackToTop/>
                </section>
            </Styles>
        )
    }
}

export default Footer
