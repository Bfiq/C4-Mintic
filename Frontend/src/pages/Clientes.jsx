import React from 'react'
import NavBar from '../components/NavBar'
import TableCliente from '../components/TableCliente'
import * as ReactBootStrap from "react-bootstrap";

const Clientes = () => {
    return (
        <div>
            <NavBar/>
            <ReactBootStrap.Form>
                <ReactBootStrap.Row>

                    <ReactBootStrap.Col xs="auto" className="my-1">
                        <ReactBootStrap.Form.Control placeholder="Ingresa Busqueda"/>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col xs="auto" className="my-1">
                        <ReactBootStrap.Form.Select>
                            <option value="0"></option>
                            <option value="1">Id</option>
                            <option value="2">Nombre</option>
                            <option value="3">Apellido</option>
                        </ReactBootStrap.Form.Select>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col xs="auto" className="my-1">
                        <ReactBootStrap.Button>Buscar</ReactBootStrap.Button>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col className="my-1 d-md-flex justify-content-md-end">
                        <ReactBootStrap.Button className="btn-success" href="/nuevo_cliente">Nuevo Cliente</ReactBootStrap.Button>
                    </ReactBootStrap.Col>

                </ReactBootStrap.Row>
            </ReactBootStrap.Form>
            <TableCliente/>
        </div>
    )
}

export default Clientes
