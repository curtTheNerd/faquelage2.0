import { TourAktuell, TourVergangenheit } from '../../components/Data';
import TourCard from '../functionalComponents/TourCard';

const Tour = () => {
  return (
    <div className="flex-container-cols" id="tour">
        <h2>Tour</h2>
            <section className="flex flex-col m-[0_auto] gap-[0.5rem] w-[100%] pb-[2rem]">
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
        <section className="flex flex-col m-[0_auto] gap-[0.5rem] w-[100%]">
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