import React, { Component, useState } from 'react';
import { Button, Modal } from "react-bootstrap";

const Addmovie = (props) => {
    const [show,setShow]= useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[NewMovie,SetNewMovie] = useState({
        id:"",
        title:"",
        description:"",
        posterURL:"",
        rating:"",
    })

const handelChange = (e) => {
    SetNewMovie({...NewMovie,[e.target.name]:e.target.value})
}
const handelSave = () =>{
    props.handelMovieAdd(NewMovie)
    SetNewMovie({
        id:"",
        title:"",
        description:"",
        posterURL:"",
        rating:"",
    })
    setShow(false)

}




    
        return (
            <div>
                <Button variant="primary" onClick={handleShow}>
                    Add Movie
                </Button>

                <Modal show={show}  onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div>
                            <label style={{width:'40%'}}>Movie id </label>
                            <input type="text" name="id" onChange={handelChange} value={NewMovie.id} ></input>
                        </div>
                        <div>
                            <label style={{width:'40%'}}>Movie title </label>
                            <input type="text" name="title" onChange={handelChange} value={NewMovie.title} ></input>
                        </div>
                        <div>
                            <label style={{width:'40%'}}>Movie description </label>
                            <input type="text" name="description" onChange={handelChange} value={NewMovie.description}></input>
                        </div>
                        <div>
                            <label style={{width:'40%'}}>Movie image </label>
                            <input type="text" name="posterURL" onChange={handelChange} value={NewMovie.posterURL}></input>
                        </div>
                        <div>
                            <label style={{width:'40%'}}>Movie rating </label>
                            <input type="text" name="rating" onChange={handelChange} value={NewMovie.rating}></input>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handelSave}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>


            </div>
        )
    }

export default Addmovie;
