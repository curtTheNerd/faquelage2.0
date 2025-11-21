import { TourDates } from "../../components/Data";
import TourCard from "../functionalComponents/TourCard";

const Tour = () => {
  const parseDate = (date) => {
    const [day, month, year] = date.split(".");
    return new Date(`${year}-${month}-${day}T23:59:59`);
  };
  const today = new Date();
  const tourCurrent = TourDates.filter(
    (show) => parseDate(show.datum) >= today
  );
  const tourPast = TourDates.filter((show) => parseDate(show.datum) < today);

  return (
    <div className="flex-container-cols" id="tour">
      <h2>Aktuell</h2>
      <section className="tour-section">
        {tourCurrent.length > 0 ? (
          tourCurrent.map((data) => {
            return (
              <TourCard
                key={data.id}
                ort={data.ort}
                datum={data.datum}
                location={data.location}
                locationLink={data.locationLink}
              />
            );
          })
        ) : (
          <h3 className="text-[var(--textColor)] text-[1.5rem] text-center">
            Noch keine Termine
          </h3>
        )}
      </section>

      <h2>Vergangene Shows</h2>
      <section className="tour-section xl:grid-cols-4">
        {tourPast.map((data) => {
          return (
            <TourCard
              key={data.id}
              ort={data.ort}
              datum={data.datum}
              location={data.location}
              locationLink={data.locationLink}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Tour;
