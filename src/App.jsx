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
import HotelDetail from "./pages/HotelDetail/HotelDetal"
import Hoteles from "./pages/Hoteles/Hoteles"
import Restaurants from "./pages/Restaurants/Rerstaurants"
import RestaurantDetail from "./pages/RestaurantDetail/RestaurantDetail"
import Pdis from "./pages/Pdis/Pdis"
import PdiDetail from "./pages/PdiDetail/PdiDetail"




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
          <Route path="/travel" element={<Travels />}  />
          <Route path="/travel/:id" element={<TravelDetail />}   />   
          <Route path="/hoteles" element={<Hoteles />}  />
          <Route path="/hoteles/:id" element={<HotelDetail />}   />   
          <Route path="/restaurants" element={<Restaurants />}  />
          <Route path="/restaurants/:id" element={<RestaurantDetail />}   />   
          <Route path="/pdis" element={<Pdis />} />
          <Route path="/pdis/:id" element={<PdiDetail />}   />
            
          

        </Routes>
      
      </Router>
      
      <Footer />
      </div>
      </JwtContextProvider>
  )
}

export default App
