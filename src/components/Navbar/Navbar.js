import React from 'react'
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'
import { useSearchBook } from '../../queries/useGetBooks'
import Logo from '../../assets/lsb.png'

export const NavBar = () => {
    const [searchInput, setSearchInput] = React.useState('')
    const searchBook = useSearchBook()
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><img style={{width: '70px'}} src={Logo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/add-book">Add book</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl  onChange={e => setSearchInput(e.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
                <Button onClick={(e) => {
                    searchBook(e, searchInput)
                    setSearchInput('')
                }} variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}