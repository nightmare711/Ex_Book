import React from 'react'
import { Card, Button } from 'react-bootstrap'
export const CardValue = ({title, description, href, imgUrl, email, phoneNumber, onClickViewBook, info, onClickUpdateBook}) => {
    return (
        <div style={{marginLeft: '10px', marginTop:'20px', display:'flex', flexDirection:'column'}}>
            <Card style={{ width: '20rem', height: '100%' }}>
                <Card.Img style={{height:'300px'}} variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title style={{fontSize: '24px', fontWeight: 600, fontFamily: '"Comic Sans MS", "Comic Sans", cursive'}}>{title}</Card.Title>
                    <Card.Text style={{lineHeight: '25px', margin: 0, padding: 0,fontFamily: '"Comic Sans MS", "Comic Sans", cursive'}}><b>Email:</b> {email}</Card.Text>
                    <Card.Text style={{lineHeight: '25px', margin: 0, padding: 0, fontFamily: '"Comic Sans MS", "Comic Sans", cursive'}}><b>Phone:</b> {phoneNumber}</Card.Text>
                    <Card.Text style={{lineHeight: '25px', margin: 0, padding: 0, fontSize: '15px', fontStyle: 'italic',fontFamily: '"Comic Sans MS", "Comic Sans", cursive'}}>
                    {description.substr(0,50)+'...'}
                    </Card.Text>
                    <div style={{
                        display:'flex',
                        flexDirection: 'row',
                        justifyContent:'center',
                        alignItems:'flex-end'
                    }}>
                        <Button onClick={() => onClickViewBook(info)} style={{marginTop: '20px', fontFamily: '"Comic Sans MS", "Comic Sans", cursive'}} variant="primary">View book</Button>
                        <Button onClick={() => onClickUpdateBook(info)} style={{marginTop: '20px',marginLeft: '20px', fontFamily: '"Comic Sans MS", "Comic Sans", cursive'}} variant="success">Update Book</Button>
                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    )
}