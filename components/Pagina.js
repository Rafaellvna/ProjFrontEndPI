import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'

function Pagina() {
    return (
        <div>

            {[false].map((expand) => (
                <Navbar key={expand} bg="primary" expand={expand} className="mb-3" variant="dark">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={``} />
                        <h3 className="">POLÍTICA TRANSPARENTE</h3>
                        <Navbar.Brand href="#" className=''>PORTAL DOS DEPUTADOS</Navbar.Brand>
                        <Navbar.Brand href="#" className=''></Navbar.Brand>
                        <Navbar.Brand href="#" className=''></Navbar.Brand>
                        <Navbar.Brand href="#" className=''></Navbar.Brand>
                        <Navbar.Brand href="#" className=''></Navbar.Brand>
                        <Navbar.Brand href="#" className=''></Navbar.Brand>
                        <Navbar.Offcanvas id={``} aria-labelledby={``} placement="start">
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Notícias</Nav.Link>
                                    <Nav.Link href="#action2">Deputados</Nav.Link>
                                    <Nav.Link href="#action2">Gastos Parlamentares</Nav.Link>
                                    <Nav.Link href="#action2">Votações</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}

        </div>
    )
}

export default Pagina