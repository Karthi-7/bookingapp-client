import React,{useState} from 'react'
import {Link} from "react-router-dom"
import "./room.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

function Room({room,checkin,checkout}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='container '>
    <div className="row  mt-5 box-shadow p-3 ">
        <div className="col-md-5 ">
            <img src={room.imgUrl[0]} className="smallImg" alt="room-img" />
        </div>
        <div className="col-md-7 ">
        <h1 className='text-center'>{room.name}</h1>
        <p className='text-muted text-center'>{room.amenties}</p>
        <div className='d-flex justify-content-around'>
        <div>
        <p className='text-dark'><span>Phone number:</span>{room.phoneNumber}</p>
        <p><span>Min Stay :</span>{room.minimumStay}</p>
        <p> <span>Max Stay :</span>{room.maximumStay}</p>
        <p><span>Type</span>{room.type}</p>
        </div>
        <div>
            <p><span>Size of Room :</span>{room.size_of_room}</p>
            <p><span>No of Rooms :</span>{room.no_of_rooms}</p>
            <p><span>Number of Bed</span>{room.number_of_beds}</p>
            <p><span>Rent per Day :</span>{room.rentperday}</p>
            <p><span></span></p>
        </div>

        </div>
      
         <div style={{float:"right"}} className="book-btn">
         {(checkin && checkout) && (
          <Link to={`/book/${room._id}/${checkin}/${checkout}`} >
            <button className='btn btn-danger me-3'>Book Now</button>
            </Link> 
            )

         }       
            <button className='btn btn-dark '  onClick={handleShow}>View Details</button>
         
        
         </div>

        </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header >
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel>
        {room.imgUrl.map((url)=>(
            <Carousel.Item>
        <img
          className="d-block w-100 bigImg "
          src={url}
          alt="First slide"
        />
        <Carousel.Caption>
          
          <p>{room.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        ))}
  
    </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
     
    </div>
  )
}

export default Room
