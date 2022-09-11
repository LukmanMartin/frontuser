import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import { JwtContextProvider } from "./context/jwtContext"
import RequireAuth from "./components/RequireAuth/RequireAuth"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Profile from "./pages/Profile/Profile"





const App =() => {
  

  return (
      <JwtContextProvider >
      <div className="App">
      <Router>

        <Header />
      
          <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={ <RequireAuth> <Profile /> </RequireAuth>} />
                
                  
               
              
            
          

        </Routes>
      
      </Router>
      
      <Footer />
      </div>
      </JwtContextProvider>
  )
}

export default App
