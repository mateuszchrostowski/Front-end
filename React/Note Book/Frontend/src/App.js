import './App.css';
import './LoginForm.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Notes from './Components/Notes';
import Login from './Components/Login';
import SignUp from './Components/Signup';



function App() {  
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (    
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="navbar-brand">
              NoteBook App by Mateusz Chrostowski
            </div>            
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarToggler">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>            
          </div>
        </nav>

        <div className="main">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={isLoggedIn === "true" ? <Notes /> : <Login />}/>          
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/Notes" element={<Notes />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;
