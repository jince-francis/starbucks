// import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function HandCrafted() {
    return (
        <>
            <h3 className="ms-md-5 text-center">Handcrafted Curations</h3>
            <div className="mt-5 mb-5">
                <Container>
                    <Row className="gy-4">
                        <Col xs={12} sm={6} md={3} className="d-flex justify-content-center">
                            <Image
                                src="https://hips.hearstapps.com/hmg-prod/images/starbucks-hangover-drinks-1606246701.png?crop=0.480xw:0.959xh;0.517xw,0.0238xh&resize=640:*"
                                className="img-fluid"
                                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                roundedCircle
                            />
                        </Col>
                        <Col xs={12} sm={6} md={3} className="d-flex justify-content-center">
                            <Image
                                src="https://www.fsfreepressonline.com/wp-content/uploads/2023/08/Pro-Fall-Drink-Review-2023_1928-1-1200x947.jpg"
                                className="img-fluid"
                                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                roundedCircle
                            />
                        </Col>
                        <Col xs={12} sm={6} md={3} className="d-flex justify-content-center">
                            <Image
                                src="https://www.vcstar.com/gcdn/authoring/authoring-images/2024/10/23/PSAS/75808196007-starbucks-wicked-glinda-pink-potion.jpg"
                                className="img-fluid"
                                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                roundedCircle
                            />
                        </Col>
                        <Col xs={12} sm={6} md={3} className="d-flex justify-content-center">
                            <Image
                                src="https://www.eatingwell.com/thmb/kU-CZYNC82FSi5h9v5qgJBRh0ro=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4-lower-sugar-starbucks-drinks-options-3b66114d4546414fa4c5809eaa145f00.jpg"
                                className="img-fluid"
                                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                roundedCircle
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default HandCrafted