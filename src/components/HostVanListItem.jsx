import { Link } from "react-router-dom"

const HostVanListItem = ({ van }) => {
    return (
        <Link
            to={`/host/vans/${van.id}`}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    )
}

export default HostVanListItem