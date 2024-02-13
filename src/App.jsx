import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Vans from "./pages/vans/Vans.jsx"
import HostVans from "./pages/hosts/HostVans.jsx"
import "../server.js"
import VanDetail from "./pages/vans/VanDetail.jsx"
import Layout from "./components/Layout.jsx"
import HostLayout from "./components/HostLayout.jsx"
import Dashboard from "./pages/hosts/Dashboard.jsx"
import Income from "./pages/hosts/Income.jsx"
import Reviews from "./pages/hosts/Reviews.jsx"
import HostVanDetails from "./pages/hosts/HostVanDetails.jsx"
import HostVanInfo from "./pages/hosts/HostVanInfo.jsx"
import HostVanPricing from "./pages/hosts/HostVanPricing.jsx"
import HostVanPhotos from "./pages/hosts/HostVanPhotos.jsx"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App