import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { default as BNavbar } from 'react-bootstrap/Navbar';

// Styles
import './navbar.css';

const Navbar = () => {
    return (
        <BNavbar
            bg='dark'
            data-bs-theme='dark'
            expand='lg'
            className='bg-body-tertiary navbar-container'
            fixed='top'
            collapseOnSelect={true}
        >
            <Container>
                <BNavbar.Brand>Blockchain React Node</BNavbar.Brand>

                <BNavbar.Toggle aria-controls='basic-navbar-nav' />

                <BNavbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#about'>About</Nav.Link>
                    </Nav>
                </BNavbar.Collapse>

                <BNavbar.Collapse className='justify-content-end'>
                    <BNavbar.Text>
                        Developed by:{' '}
                        <a href='https://www.linkedin.com/in/eduardo-hurtado-g/' target='blank'>
                            Eduardo Hurtado
                        </a>
                    </BNavbar.Text>
                </BNavbar.Collapse>
            </Container>
        </BNavbar>
    );
};

export default Navbar;
