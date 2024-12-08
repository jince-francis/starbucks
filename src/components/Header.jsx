import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavbarToggle from 'react-bootstrap/Navbar.Toggle';
// import NavbarCollapse from 'react-bootstrap/Navbar.Collapse';

function Header() {
    const [isOpen, setIsOpen] = useState(false); // State for controlling collapse

    const handleToggle = () => setIsOpen(!isOpen); // Toggle collapse state

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light" expand="md">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="https://www.logogenie.net/images/articles/starbucks-logo1.jpg" style={{ height: '60px' }} alt="" />
                    </Navbar.Brand>

                    {/* Navbar toggle button for smaller screens */}
                    <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />

                    {/* Collapsible Navbar items */}
                    <Navbar.Collapse id="navbar-nav" in={isOpen}>
                        <Nav className="me-auto w-100">
                            <div className="d-flex flex-column flex-md-row justify-content-between w-100 align-items-center">
                                <div className="d-flex flex-wrap mb-2 mb-md-0">
                                    <Nav.Link href="#home" className="me-3">HOME</Nav.Link>
                                    <Nav.Link href="#features" className="me-3">GIFT</Nav.Link>
                                    <Nav.Link href="#pricing" className="me-3">ORDER</Nav.Link>
                                    <Nav.Link href="#pricing" className="me-3">PAY</Nav.Link>
                                    <Nav.Link href="#pricing" className="me-3">STORE</Nav.Link>
                                </div>
                                <div className="mt-2 mt-md-0 d-none d-md-block">
                                    <input
                                        type="text"
                                        className="form-control rounded"
                                        placeholder="Search drinks"
                                        style={{ maxWidth: '300px' }}
                                    />
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
