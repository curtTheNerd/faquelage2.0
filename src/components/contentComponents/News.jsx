import { NewsData as Data } from "../Data";
import NewsCard from "../functionalComponents/NewsCard";

const News = () => {
    return (
        <div className="flex-container gap-[2rem] flex-wrap p-[8rem_0_4rem_0]">
            {Data.map((data) => <NewsCard key={data.id} data={data} /> )}
        </div>
  );
}

export default News