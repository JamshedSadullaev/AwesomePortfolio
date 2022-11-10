import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../img/logo.jpg';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home'}
          href='#home'
        >
          <img
            src={Logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='html element mockup of letter m'
          />{' '}
          Jamshed Sadullaev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home'}
              href='#home'
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact'}
              href='#contact'
            >
              Contact
            </Nav.Link>
            <Nav.Link
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume'}
              href='#Resume'
            >
              Resume
            </Nav.Link>
            <NavDropdown
              title='Project'
              menuVariant='dark'
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item
                onClick={() => handlePageChange('Front')}
                className={currentPage === 'Front'}
                href='#Front'
              >
                Projects
              </NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;