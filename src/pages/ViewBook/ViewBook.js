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
                <h1><b>Name:</b> {' '} {info?.name}</h1>
                <p><b>Type:</b> {' '} {info?.type}</p>
                <p><b>Email:</b> {' '} {info?.email}</p>
                <p><b>Phone:</b> {' '} {info?.phoneNumber}</p>
                <p><b>Description: </b> {' '} {info?.description}</p>
                <Button onClick={() => data.setIsOpenPassword(true)} variant="danger">Delete</Button>
            </div>
        </div>
    )
}