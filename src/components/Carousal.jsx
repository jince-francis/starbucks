// import React from 'react'
// import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import Card from 'react-bootstrap/Card';

function Carousal() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
                <Card className="bg-dark text-white w-100" style={{ maxWidth: "600px" }}>
                    <Card.Img
                        src="https://static.vecteezy.com/system/resources/previews/028/326/973/non_2x/cappuccino-on-a-black-horizontal-background-ai-generated-photo.jpg"
                        className="img-fluid"
                        style={{ height: '100%', objectFit: 'cover' }}
                        alt="NO IMAGE"
                    />
                    <Card.ImgOverlay className="d-flex flex-column justify-content-between">
                        <div>
                            <Card.Title className="text-center">Holiday Cheers</Card.Title>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary">See more</button>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>

        </>
    )
}

export default Carousal