import { NewsData as Data } from "../Data";
import NewsCard from "../functionalComponents/NewsCard";

const News = () => {
    return (
        <div className="flex-center flex-col w-full" id="news">
            <h2 className="pt-[3rem] " >News</h2>
            <div className="flex-container gap-[2rem] flex-wrap">
                {Data.map((data) => <NewsCard key={data.id} data={data} /> )}
            </div>
        </div>
  );
}

export default News