import Pagina from '@/components/Pagina'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function dpt() {
    return (
        <Pagina titulo="Deputados">

            <div className='d-flex flex-row-reverse'>
                <Form className="d-flex">
                    <Form.Control type="search" placeholder="Search" className="me-auto" aria-label="Search" />
                    <Button variant="outline-primary ms-1">Search</Button>
                </Form>
            </div>

        </Pagina>
    )
}

export default dpt