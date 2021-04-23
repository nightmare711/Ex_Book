import React from 'react'
import { Button } from 'react-bootstrap'
import { DataContext } from '../../context/Context'
import './ViewBook.css'

export const ViewBook = ({info}) => {
    const data = React.useContext(DataContext)
    return (
        <div className='view-book'>
            <img src={info?.imgUrl} alt="img"  />
            <div  className='txt-frame'>
                <h1>Name: {' '} {info?.name}</h1>
                <p>Type: {' '} {info?.type}</p>
                <p>Email: {' '} {info?.email}</p>
                <p>Phone: {' '} {info?.phoneNumber}</p>
                <p>Description: {' '} {info?.description}</p>
                <Button onClick={() => data.setIsOpenPassword(true)} variant="danger">Delete</Button>
            </div>
        </div>
    )
}