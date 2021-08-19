import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from 'react-bootstrap';
import {Styles} from "./styles/stickyMenu.js";

function StickyMenu() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const stickyMenu = document.querySelector(".sticky-menu");

            if (window.scrollY > 160) {
                stickyMenu.classList.add("sticky");
            } else {
                stickyMenu.classList.remove("sticky");
            }
        });
    });

    return (
        <Styles>
            {/* Sticky Menu */}
            <section className="sticky-menu">
                <Container>
                    <Row>
                        <Col md="9">
                            <div className="menu-box d-flex justify-content-end">
                                <ul className="nav menu-nav">
                                    <li className="nav-item dropdown active">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"}
                                              data-toggle="dropdown">Home <i className="las la-angle-down"/></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link"
                                                                           to={process.env.PUBLIC_URL + "/"}>Vision</Link>
                                            </li>
                                            <li className="nav-item active"><Link className="nav-link"
                                                                                  to={process.env.PUBLIC_URL + "/home-two"}>Mision</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"}
                                              data-toggle="dropdown">About <i className="las la-angle-down"/></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link"
                                                                           to={process.env.PUBLIC_URL + "/about"}>About
                                                Us</Link></li>
                                            <li className="nav-item"><Link className="nav-link"
                                                                           to={process.env.PUBLIC_URL + "/gallery"}>Gallery</Link>
                                            </li>
                                            <li className="nav-item"><Link className="nav-link"
                                                                           to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
                                            </li>
                                            <li className="nav-item"><Link className="nav-link"
                                                                           to={process.env.PUBLIC_URL + "/faq"}>Faq</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"}
                                              data-toggle="dropdown">Services <i className="las la-angle-down"/></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link"
                                                                           to={process.env.PUBLIC_URL + "/"}>All
                                                Services</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"}
                                              data-toggle="dropdown"> Our Mechanics <i
                                            className="las la-angle-down"/></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link"
                                                                           to={process.env.PUBLIC_URL + "/"}>Mechanics</Link>
                                            </li>
                                            <li className="nav-item"><Link className="nav-link"
                                                                           to={process.env.PUBLIC_URL + "/"}>Mechanics
                                                Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"}
                                              data-toggle="dropdown">Shop <i className="las la-angle-down"/></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link"
                                                                           to={process.env.PUBLIC_URL + "/products"}> Car
                                                Parts</Link></li>
                                            <li className="nav-item"><Link className="nav-link"
                                                                           to={process.env.PUBLIC_URL + "/product-details"}>Product
                                                Details</Link></li>
                                            <li className="nav-item"><Link className="nav-link"
                                                                           to={process.env.PUBLIC_URL + "/cart"}>Cart</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="apply-btn">
                                    <Link to={process.env.PUBLIC_URL + "/contact"}><i
                                        className="las la-clipboard-list"/>Contact</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default StickyMenu