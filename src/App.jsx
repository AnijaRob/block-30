import {Routes, Route, Link} from 'react-router-dom'
import Books from './books.jsx'
import Home from './home.jsx'
import Auth from './auth.jsx'
const App = () => {
 
  

  return (
    <>
    <div id="containter">
   
    <div id ="navbar">
    <Link to='/'>Home</Link>
    <Link to ='/books'>Books</Link>
    <Link to = 'auth'>Login</Link>

    </div>
    <div id="main-section">
    <Routes>
    <Route path= "/books" element = {<Books/>}/>
    <Route path="/auth" element = {<Auth/>}/>
    <Route path="/" element = {<Home/>}/>
    </Routes>
    
    </div>
    </div>
   {/* <h1>Welcome to Book Buddy!</h1> */}
   
    </>
  )
  
}


export default App
