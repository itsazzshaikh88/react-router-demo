import { useOutletContext } from "react-router-dom"

const HostVanPhotos = () => {
  const { selectedVan } = useOutletContext()
    return (
        <img src={selectedVan.imageUrl} className="host-van-detail-image" />
    )
}

export default HostVanPhotos