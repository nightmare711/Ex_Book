import React from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import {useDeleteBook} from '../../queries/useGetBooks'
import {DataContext} from '../../context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './Password.css'

export const Password = () => {
    const { mutate:deleteBook }= useDeleteBook()
    const data = React.useContext(DataContext)
    const [password, setPassword] = React.useState('')
    const onCheckDelete = () => {
        if(password.trim() === data.info.password) {
            deleteBook(data.info._id)
        }  else {
            alert('Enter wrong password')
        }
    }
    return (
        <div className='password-input'>
            <div onClick={() => data.setIsOpenPassword(false)} className='icon-container'>
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Password</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                onChange={e => setPassword(e.target.value)} 
                type="password"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <Button onClick={() => onCheckDelete()} variant="danger">Delete</Button>
        </div>
    )
}