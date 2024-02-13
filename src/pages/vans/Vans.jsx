import { useEffect, useState } from "react";
import VanItem from "../../components/VanItem";

const Vans = () => {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then((data) => (
                setVans(data.vans)
            ));
    }, []);
    return (
        <div className="van-list-container">
        <h1>Explore Our Van Options</h1>
            <div className="van-list">
                {
                    vans.map((van) => <VanItem key={van.id} van={van} />)
                }
            </div>
        </div>
    );
};

export default Vans;
