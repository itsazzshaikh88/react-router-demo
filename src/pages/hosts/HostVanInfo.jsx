import { useOutletContext } from "react-router-dom"

const HostVanInfo = () => {
  const { selectedVan } = useOutletContext()
  return (
    <section className="host-van-detail-info">
      <h4>Name: <span>{selectedVan.name}</span></h4>
      <h4>Category: <span>{selectedVan.type}</span></h4>
      <h4>Description: <span>{selectedVan.description}</span></h4>
      <h4>Visibility: <span>Public</span></h4>
    </section>
  )
}

export default HostVanInfo