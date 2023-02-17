import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout';
import { NavLink } from 'react-router-dom';
import logo from "../logo.svg";


const Home = () => {
  return (
    <MainLayout>
        <h1 className="mt-3">Home</h1>
        <hr />
    </MainLayout>
  )
}

export default Home