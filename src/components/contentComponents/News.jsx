import { NewsData as Data } from "../Data";
import NewsCard from "../functionalComponents/NewsCard";

const News = () => {
    return (
        <div className="flex-center gap-[2rem] flex-wrap pb-[4rem]">
            {Data.map((data) => <NewsCard key={data.id} data={data} /> )}
        </div>
  );
}

export default News