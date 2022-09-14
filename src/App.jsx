import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import { JwtContextProvider } from "./context/jwtContext"
import RequireAuth from "./components/RequireAuth/RequireAuth"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Form from "./components/RegisterComp/Form/RegisterComp"
import Login from "./pages/Login/Login"
import Profile from "./pages/Profile/Profile"
import Travels from "./pages/Travels/Travels"
import TravelDetail from "./pages/TravelDetail/TravelDetail"





const App =() => {
  

  return (
      <JwtContextProvider >
      <div className="App">
      <Router>

        <Header />
      
          <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={ <RequireAuth> <Profile /> </RequireAuth>} />
          <Route path="/travels" element={<Travels />}  />
          <Route path="/travels/:id" element={<TravelDetail />}   />   
               
              
            
          

        </Routes>
      
      </Router>
      
      <Footer />
      </div>
      </JwtContextProvider>
  )
}

export default App
