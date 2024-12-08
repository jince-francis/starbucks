
function Reccomendations() {
    return (
        <div style={{ backgroundColor: '#edeae8' }} className="mb-5 p-5">
            <div className="d-flex justify-content-between p-3">
                <div><h3 className="ms-4" style={{ color: '#0f392c' }}>Barista Recommends</h3></div>
                <div><p className="me-4"><a style={{ color: '#0f392c' }} href="" className="text-decoration-none">View Menu</a></p></div>
            </div>

            {/* Cards Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <div className="card rounded" style={{ border: 'none' }}>
                            <div className="d-flex align-items-center mt-3 ms-4">
                                <img
                                    src="https://hips.hearstapps.com/hmg-prod/images/starbucks-hangover-drinks-1606246701.png?crop=0.480xw:0.959xh;0.517xw,0.0238xh&resize=640:*"
                                    className="img-fluid rounded-pill"
                                    alt="Drink Image"
                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                />
                                <div className="ms-3">
                                    <h5 className="d-none d-sm-block">Frappichino</h5>
                                    <h6 className="d-block d-sm-none">Frappichino</h6>
                                    <p className="d-none d-sm-block">$4.50</p>
                                    <p className="d-block d-sm-none">$4.50</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end p-4">
                                <button className="btn btn-success rounded-pill">Add Drink</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-3">
                        <div className="card rounded" style={{ border: 'none' }}>
                            <div className="d-flex align-items-center mt-3 ms-4">
                                <img
                                    src="https://hips.hearstapps.com/hmg-prod/images/starbucks-hangover-drinks-1606246701.png?crop=0.480xw:0.959xh;0.517xw,0.0238xh&resize=640:*"
                                    className="img-fluid rounded-pill"
                                    alt="Drink Image"
                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                />
                                <div className="ms-3">
                                    <h5 className="d-none d-sm-block">Frappichino</h5>
                                    <h6 className="d-block d-sm-none">Frappichino</h6>
                                    <p className="d-none d-sm-block">$4.50</p>
                                    <p className="d-block d-sm-none">$4.50</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end p-4">
                                <button className="btn btn-success rounded-pill">Add Drink</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-3">
                        <div className="card rounded" style={{ border: 'none' }}>
                            <div className="d-flex align-items-center mt-3 ms-4">
                                <img
                                    src="https://hips.hearstapps.com/hmg-prod/images/starbucks-hangover-drinks-1606246701.png?crop=0.480xw:0.959xh;0.517xw,0.0238xh&resize=640:*"
                                    className="img-fluid rounded-pill"
                                    alt="Drink Image"
                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                />
                                <div className="ms-3">
                                    <h5 className="d-none d-sm-block">Frappichino</h5>
                                    <h6 className="d-block d-sm-none">Frappichino</h6>
                                    <p className="d-none d-sm-block">$4.50</p>
                                    <p className="d-block d-sm-none">$4.50</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end p-4">
                                <button className="btn btn-success rounded-pill">Add Drink</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Reccomendations