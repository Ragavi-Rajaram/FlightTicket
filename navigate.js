import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import '../Assests/styles/navbar.css'
import '../Assests/styles/home.css'
import Home from './home'
import RegisterPage from './register'
function Navbar(){
    return(
        <BrowserRouter>
            <nav>
                <ul>
                    <li className='active'>
                        <Link to='/' className='Link'>Home</Link>
                    </li>
                    <li className='active'>
                        <Link to='/register' className='Link'>Register</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/register' element={<RegisterPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Navbar;