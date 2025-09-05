import { TourAktuell, TourVergangenheit } from '../../components/Data';
import TourCard from '../functionalComponents/TourCard';

const Tour = () => {
  return (
    <div className="flex-container-cols" id="tour">
        <h2>Aktuell</h2>
            <section className="tour-section">
                {TourAktuell.map(data => {
                    return (
                        <TourCard
                            key={data.id} 
                            ort={data.ort} 
                            datum={data.datum} 
                            location={data.location} 
                            locationLink={data.locationLink} 
                        />
                    )
                })}
            </section>

        <h2>Vergangene Shows</h2>
        <section className="tour-section xl:grid-cols-4">
            {TourVergangenheit.map(data => {
                return (
                    <TourCard
                        key={data.id} 
                        ort={data.ort} 
                        datum={data.datum} 
                        location={data.location} 
                        locationLink={data.locationLink} 
                    />
                )
            })}
        </section>
    </div>
  )
}

export default Tour