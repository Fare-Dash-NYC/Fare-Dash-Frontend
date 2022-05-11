import React from "react"
import './App.css';

function App() {
	return (
		<div>
      <h1> FARE DASH </h1>
			<nav class="navbar background">
				<ul class="nav-list">
					<li><a href="#explore">Explore</a></li>
					<li><a href="#login">Login</a></li>
					<li><a href="#signup">Sign Up</a></li>
				</ul>

				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
			</nav>
		</div>
	)
}

export default App
