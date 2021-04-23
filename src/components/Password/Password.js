import React from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import {useDeleteBook, useUpdateBook} from '../../queries/useGetBooks'
import {DataContext} from '../../context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './Password.css'

export const Password = ({title}) => {
    const {mutate:updateBook} = useUpdateBook()
    const { mutate:deleteBook }= useDeleteBook()
    const data = React.useContext(DataContext)
    const [password, setPassword] = React.useState('')
    const onCheckDelete = () => {
        if(title === 'delete') {
            if(password.trim() === data.info.password.trim()) {
                deleteBook(data.info._id)
            } else {
                alert('wrong password')
            }
        } else if (title === 'update') {
            if(password.trim() === data.infoUpdate.password.trim()) {
                updateBook(data.infoUpdate)
            } else {
                alert('Wrong password')
            }
        }
    }
    return (
        <div className='password-input'>
            <div onClick={() => {
                data.setIsOpenPassword(false)
                data.setIsOpenPasswordUpdate(false)
            }} className='icon-container'>
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
            {title === 'delete' ? <Button onClick={() => onCheckDelete()} variant="danger">Delete</Button> : <Button onClick={() => onCheckDelete()} variant="success">Update</Button>}
        </div>
    )
}