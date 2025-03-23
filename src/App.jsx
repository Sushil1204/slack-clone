import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Navbar from "./components/Navbar"
import NotificationBanner from "./components/NotificationBanner"


function App() {

  return (
    <div className="min-h-screen">
      <div className="w-full">
        <div className="mx-auto max-w-screen-2xl h-full">
          <Navbar />
          <NotificationBanner />
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
