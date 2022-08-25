import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">e-Commerce</Navbar.Brand>
                    <Nav className="me-auto navbar-wrapper">
                        {
                            localStorage.getItem('user-info') ? (
                                <>
                                    <Link to="/AddProducts">Add Products</Link>
                                    <Link to="/UpdateProducts">Update Products</Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/Login">Login</Link>
                                    <Link to="/Register">Register</Link>
                                </>
                            )
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header 