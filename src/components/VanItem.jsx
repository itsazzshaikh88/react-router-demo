import { Link } from "react-router-dom";

const VanItem = (props) => {
    const { id, imageUrl, name, type, price } = props.van;
    return (
        <div className="van-tile">
            <Link to={`/vans/${id}`}>
                <img src={imageUrl} alt="" />
                <div className="van-info">
                    <h3>{name}</h3>
                    <p>${price}<span>/Day</span></p>
                    <i className={`van-type ${type} selected`}>{type}</i>
                </div>
            </Link>
        </div>
    )
}

export default VanItem