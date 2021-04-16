import React from 'react'
import { Card, Button } from 'react-bootstrap'
export const CardValue = ({title, description, href, imgUrl, email, phoneNumber}) => {
    return (
        <div style={{marginLeft: '10px', marginTop:'20px'}}>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title style={{fontSize: '24px', fontWeight: 600, fontFamily: '"Comic Sans MS", "Comic Sans", cursive'}}>{title}</Card.Title>
                    <Card.Text style={{lineHeight: '25px', margin: 0, padding: 0,fontFamily: '"Comic Sans MS", "Comic Sans", cursive'}}><b>Email:</b> {email}</Card.Text>
                    <Card.Text style={{lineHeight: '25px', margin: 0, padding: 0, fontFamily: '"Comic Sans MS", "Comic Sans", cursive'}}><b>Phone:</b> {phoneNumber}</Card.Text>
                    <Card.Text style={{lineHeight: '25px', margin: 0, padding: 0, fontSize: '15px', fontStyle: 'italic',fontFamily: '"Comic Sans MS", "Comic Sans", cursive'}}>
                    {description}
                    </Card.Text>
                    <Button style={{marginTop: '20px', fontFamily: '"Comic Sans MS", "Comic Sans", cursive'}} onClick={() => window.open(href, '_blank')}  variant="primary">View book</Button>
                    
                </Card.Body>
            </Card>
        </div>
    )
}