import { useEffect, useState } from "react"
import HostVanListItem from "../../components/HostVanListItem"

const HostVans = () => {
  const [vans, setVans] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => { setVans(data.vans); setLoading(false) })

  }, [])

  return (
    <>
      <section>
        <h1 className="host-vans-title">Your listed vans</h1>
        <div className="host-vans-list">
          {
            !isLoading ? (
              <section>
                {

                  vans.length > 0 ? (
                    (
                      vans.map((van) => <HostVanListItem key={van.id} van={van} />)
                    )
                  ) :
                    <h2>Vans Not Found</h2>

                }
              </section>

            ) : (
              <h2>Loading...</h2>
            )
          }
        </div>
      </section>
    </>
  )
}

export default HostVans