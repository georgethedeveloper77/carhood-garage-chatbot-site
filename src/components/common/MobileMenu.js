import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from 'react-bootstrap';
import {Styles} from "./styles/mobileMenu.js";

function MobileMenu() {
    useEffect(() => {
        // Mobile Menu
        const hmBtn = document.getElementById("mb-sidebar-btn");

        if (hmBtn) {
            const mdSidebarOverlay = document.getElementById("mb-sidebar-overlay");
            const mdSidebarBody = document.getElementById("mb-sidebar-body");
            const mdSidebarExit = document.getElementById("close-mb-sidebar");

            hmBtn.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.toggle("visible");
                mdSidebarBody.classList.toggle("opened");
            });

            mdSidebarOverlay.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.remove("visible");
                mdSidebarBody.classList.remove("opened");
            });

            mdSidebarExit.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.remove("visible");
                mdSidebarBody.classList.remove("opened");
            });
        }

        // Menu Accordion -----------------
        const menuButton = document.querySelectorAll(".mb-menu-button");
        menuButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "mb-menu-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "mb-menu-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });

    return (
        <Styles>
            {/* Mobile Menu */}
            <section className="mobile-menu-area">
                <Container>
                    <Row>
                        <Col md="0" sm="12">
                            <div className="mb-topbar d-flex justify-content-between">
                                <div className="topbar-item">
                                    <p><i className="las la-phone"></i>+1 (396) 486 4709</p>
                                </div>
                                <div className="topbar-item">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/login"}>Log
                                            In</Link></li>
                                        <li className="list-inline-item">/</li>
                                        <li className="list-inline-item"><Link
                                            to={process.env.PUBLIC_URL + "/registration"}>Register</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-logo-area d-flex justify-content-between">
                                <div className="mb-logo-box d-flex">
                                    <div className="hm-button">
                                        <a href={process.env.PUBLIC_URL + "/"} id="mb-sidebar-btn">
                                            <i className="las la-bars"/>
                                        </a>
                                    </div>
                                    <div className="mb-logo">
                                        <Link to={process.env.PUBLIC_URL + "/"}><img
                                            src={process.env.PUBLIC_URL + "/assets/images/f-logo-200_x_200.jpeg"}
                                            alt=""/></Link>
                                    </div>
                                </div>
                                <div className="mb-search-box">
                                    <form action="#">
                                        <input type="text" name="search" placeholder="Search Here"/>
                                        <button type="submit"><i className="las la-search"/></button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mobile Menu Sidebar */}
            <section className="mb-sidebar" id="mb-sidebar-body">
                <div className="mb-sidebar-heading d-flex justify-content-between">
                    <div><h5>Menu</h5></div>
                    <div><a href={process.env.PUBLIC_URL + "/"} id="close-mb-sidebar"><i className="las la-times"/></a>
                    </div>
                </div>
                <div className="mb-sidebar-menu">
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p>Home <i className="las la-plus"/></p>
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/"}>Home</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/home-two"}>Vision</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/home-two"}>Mission</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p>About<i className="las la-plus"/></p>
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/about"}>About Us</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/gallery"}>Gallery</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/faq"}>Faq</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p>Services <i className="las la-plus"/></p>
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>All
                                    Services</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>Our Mechanics <i className="las la-plus"/></p>
                        </button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li className="nav-item"><Link className="nav-link"
                                                               to={process.env.PUBLIC_URL + "/"}>Mechanics</Link></li>
                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Mechanics
                                    Details</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>Our Events <i className="las la-plus"/></p>
                        </button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/events"}>Events</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/event-details"}>Event Details</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>News <i className="las la-plus"/></p>
                        </button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li className="nav-item"><Link className="nav-link"
                                                               to={process.env.PUBLIC_URL + "/blog-classic"}>News
                                    Classic</Link></li>
                                <li className="nav-item"><Link className="nav-link"
                                                               to={process.env.PUBLIC_URL + "/blog-grid"}>News
                                    Grid</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>Shop <i className="las la-plus"/></p>
                        </button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li className="nav-item"><Link className="nav-link"
                                                               to={process.env.PUBLIC_URL + "/products"}> Car
                                    Parts</Link></li>
                                <li className="nav-item"><Link className="nav-link"
                                                               to={process.env.PUBLIC_URL + "/product-details"}>Product
                                    Details</Link></li>
                                <li className="nav-item"><Link className="nav-link"
                                                               to={process.env.PUBLIC_URL + "/cart"}>Cart</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mb-sidebar-overlay" id="mb-sidebar-overlay"/>
        </Styles>
    )
}

export default MobileMenu