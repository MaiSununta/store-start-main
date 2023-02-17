import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout';
import RoomService from '../services/RoomService';
import { NavLink } from 'react-router-dom';
import logo from "../logo.svg";

const Room = () => {
  const [rooms, setRooms ] = useState([]);

  useEffect(()=>{
    fetchRooms()
  },[]);

  const fetchRooms = () =>{
    RoomService.getAll()
      .then((res)=>{
        setRooms(res.data.data)
        console.log(res.data.data);
      }).catch((e)=>{
        console.log(e);
      })
  }

  return (
    <MainLayout>
        <h1 className="mt-3">Room</h1>
        <hr />
        <div className="row">
        <div className="col d-flex justify-content-end">
          <NavLink to="/room/new" className="btn btn-success">
            Add a Room
          </NavLink>
        </div>
      </div>
      <div className="row mt-2 row-cols-lg-4 row-cols-3 g-2">
        {rooms.map((p) => (
          <RoomList room={p}/>
        ))}
      </div>
    </MainLayout>
  );
};

const RoomList = (props) => {
  console.log(props)
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <img src={logo} alt="" />
          <div className="card-text">
            <h5>{props.room.room_number}</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, saepe!</p>
            <h5>${props.room.price}</h5>
            <NavLink to={'/room/' + props.room.
            _id} className="btn btn-primary">
              Learn More
            </NavLink>{' '}
            <NavLink to={'/room/' + props.room._id} className="btn btn-success">
              Buy Now
            </NavLink>{' '}
            <NavLink to={'/room/edit/' + props.room._id} className="btn btn-warning">
              Edit
            </NavLink>{' '}
            <NavLink to={'/room/delete/' + props.room._id} className="btn btn-danger">
              Delete
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room