import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"

const HostVanDetails = () => {
  const [selectedVan, setSelectedVan] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setSelectedVan(data.vans))
  }, [])

  if (!selectedVan) {
    return <h1>Loading...</h1>
  }
  return (
    <section>
      <Link
        to=".."
        relative="path"
        className="back-button"
      >&larr; <span>Back to all vans</span></Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={selectedVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i
              className={`van-type van-type-${selectedVan.type}`}
            >
              {selectedVan.type}
            </i>
            <h3>{selectedVan.name}</h3>
            <h4>${selectedVan.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            className={({ isActive }) =>  isActive ? 'active-link' : null }
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) =>  isActive ? 'active-link' : null }
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) =>  isActive ? 'active-link' : null }
          >
            Photos
          </NavLink>
        </nav>

        <Outlet context={{selectedVan}}/>
      </div>
    </section>
  )
}

export default HostVanDetails