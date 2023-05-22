import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar } from 'react-bootstrap'

function Pagina() {
    return (
        <div>

            {[false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={``} />
                        <Navbar.Brand href="#" className=''>Navbar Offcanvas</Navbar.Brand>
                        <Navbar.Offcanvas id={``} aria-labelledby={``} placement="start"></Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}

        </div>
    )
}

export default Pagina