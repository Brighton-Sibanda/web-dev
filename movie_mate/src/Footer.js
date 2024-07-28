import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MyFooter() {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <Container>
                <Row>
                    <Col md={6} className="text-white text-center text-md-left">
                        © {new Date().getFullYear()} Movie Mate - All Rights Reserved.
                    </Col>
                    <Col md={6}>
                        <ul className="nav justify-content-center justify-content-md-end">
                            <li className="nav-item">
                                <a href="/privacy" className="nav-link px-2 text-muted">Privacy</a>
                            </li>
                            <li className="nav-item">
                                <a href="/terms" className="nav-link px-2 text-muted">Terms of Use</a>
                            </li>
                            <li className="nav-item">
                                <a href="/contact" className="nav-link px-2 text-muted">Contact Us</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default MyFooter;
