import { NewsData as Data } from "../Data";
import NewsCard from "../functionalComponents/NewsCard";

const News = () => {
    return (
        <div className="flex-container-cols" id="news">
            <h2>News</h2>
            <div className="flex-container gap-[2rem] flex-wrap">
                {Data.map((data) => <NewsCard key={data.id} data={data} /> )}
            </div>
        </div>
  );
}

export default News