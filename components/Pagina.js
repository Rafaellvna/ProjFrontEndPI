import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { FaMoneyBill, FaNewspaper, FaUser, FaVoteYea } from 'react-icons/fa'
import Link from 'next/link'

function Pagina(props) {
    return (
        <div>

            {[false].map((expand) => (
                <Navbar key={expand} bg="primary" expand={expand} className="mb-3" variant="dark">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={``} />
                        <Navbar.Brand href="" className='ms-3'>POLÍTICA TRANSPARENTE</Navbar.Brand>
                        <Navbar.Brand href="" className='me-auto'>| PORTAL DOS DEPUTADOS</Navbar.Brand>
                        <Navbar.Offcanvas id={``} aria-labelledby={``} placement="start">
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Link href="/deputados" className='btn btn-primary m-1 text-light'><FaNewspaper className="me-3" size={28} color="29569B" />Notícias</Link>
                                    <Link href="/deputados/dpt" className='btn btn-primary m-1 text-light'> <FaUser className="me-3" size={28} color="29569B" />Deputados</Link>
                                    <Link href="#action3" className='btn btn-primary m-1 text-light'> <FaMoneyBill className="me-3" size={28} color="29569B" />Gastos Parlamentares</Link>
                                    <Link href="#action4" className='btn btn-primary m-1 text-light'> <FaVoteYea className="me-3" size={28} color="29569B" />Votações</Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}

            <Container className='py-3 mt-5'>
                <h1>{props.titulo}</h1>
            </Container>

            <Container>
                {props.children}
            </Container>

        </div>
    )
}

export default Pagina