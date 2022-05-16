import {Link} from "react-router-dom"
import '../Navbar.css'
function NavBar(){
    return (
		<div>
     
			<nav className="navbar background"> 
		
			<h1 className="fare"> FARE </h1> <h1 className="dash">DASH </h1>
				<ul class="nav-list">
                    <Link to={'/'}>
						
                <li>HomePage</li>
                    </Link>
                    <Link to={'/explore'}>
					<li>Explore</li>
                    </Link>
                    <Link to={'/login'}>
					<li>Login</li>
                    </Link>
                    <Link to={'/signup'}>
					<li>Sign Up</li>
                    </Link>
				</ul>

			
			</nav>
		</div>
	)

}
export default NavBar 