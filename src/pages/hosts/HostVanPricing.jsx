import { useOutletContext } from "react-router-dom"

const HostVanPricing = () => {
  const { selectedVan } = useOutletContext()
    return (
        <h3 className="host-van-price">${selectedVan.price}<span>/day</span></h3>
    )
}

export default HostVanPricing