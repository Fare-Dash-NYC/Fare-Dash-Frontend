import React from "react"
import SignUp from "./Components/SignUp";
import HomePage from "./Components/HomePage";
import Explore from "./Components/Explore";
import Login from "./Components/Login"
import {Routes, Route, Router} from 'react-router-dom'
import './App.css';
import NavBar from "./Components/NavBar";

function App() {
	return (
		<div>
			<NavBar/>

			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/signup" element={<SignUp/>}/>
				<Route path="/explore" element={<Explore/>}/>
				<Route path="login" element={<Login/>}/> 


			</Routes>




		</div>
	)
}

export default App
