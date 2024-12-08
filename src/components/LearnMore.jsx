// import React from 'react'

function LearnMore() {
    return (
        <div style={{ backgroundColor: '#edeae8' }} className="p-3 mb-4">
            <div className="d-flex justify-content-between p-2">
                <div><h3 style={{ color: "#0f392c" }}><strong>Learn More About The World Of Coffee!</strong></h3></div>
                <div><p><a href="" className="text-decoration-none" style={{ color: "#0f392c" }}>Discover More</a></p></div>
            </div>

            <div className="d-flex justify-content-center p-3">
                <div className="position-relative" style={{ width: '75%' }}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZn-VMe1EJpxKl42PJpzCNcn7r6vW1EuX0A&s"
                        className="img-fluid object-fit-cover rounded"
                        alt=""
                        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute bottom-0 end-0 m-3">
                        <h3 className="text-white">Art and Science of coffee brewing</h3>
                        <button className="btn btn-light">More</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default LearnMore