import {Link} from "react-router-dom"
function NavBar(){
    return (
		<div>
      <h1> FARE DASH </h1>
			<nav class="navbar background">
				<ul class="nav-list">
                    <Link to={'/'}>
                <li><a href="">HomePage</a></li>
                    </Link>
                    <Link to={'/explore'}>
					<li><a href="">Explore</a></li>
                    </Link>
                    <Link to={'/login'}>
					<li><a href="">Login</a></li>
                    </Link>
                    <Link to={'/signup'}>
					<li><a href="">Sign Up</a></li>
                    </Link>
				</ul>

				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
			</nav>
		</div>
	)

}
export default NavBar 