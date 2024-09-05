import React from 'react'

export const Contact = (props) => {
    return (
        <div className="row border border-secondary-subtle p-2 mt-0"  >
            <div className="col-sm-7 col-md-5 col-lg-3 text-center my-auto py-2">
                <img src="https://picsum.photos/150" className="img-fluid rounded-circle mx-2"></img>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 ms-0 text-start ps-5 my-auto mt-0">
                <h2 className="fs-4">{props.name}</h2>
                <br />
                <div className="container d-flex ps-0 ms-0 text-secondary fs-5 fw-bold align-items-end mb-2" style={{ fontSize: '2 rem' }}>
                    <i className="fa-solid fa-location-dot me-2 pb-0"></i>
                    <h6 className="mb-0 fw-bold fs-5">{props.address}</h6>
                </div>
                <div className="container d-flex ps-0 ms-0 text-secondary fs-6 align-items-end mb-2" style={{ fontSize: '0.75 rem' }}>
                    <i className="fa-solid fa-phone me-2 pb-0" ></i>
                    <h6 className="mb-0 fs-6">{props.phone}</h6>
                </div>
                <div className="container d-flex pt-0 ps-0 ms-0 text-secondary fs-6 align-items-end mb-2" style={{ fontSize: '0.75 rem' }}>
                    <i className="fa-solid fa-envelope me-2"></i>
                    <h6 className="mb-0 fs-6">{props.email}</h6>
                </div>
            </div>
            <div className="col-sm-4 col-md-1 col-lg-2 col-xxl-3 ms-0 pe-0 text-end pt-2">
                <i className="fa-solid fa-pencil me-4" name={props.id} onClick={props.onEditClickHandler}></i>
                <i className="fa-solid fa-trash me-2" name={props.id} onClick={props.onDeleteClickHandler}></i>
            </div>
        </div>
    )
}
