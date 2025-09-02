
const NewsCard = ({ data }) => {
    return (
        <a href={data.link} key={data.id} rel="noreferrer noopener" target="_blank">
            <div className="flex-center flex-col w-[300px] lg:w-[350px] xl:w-[375px] h-[auto] border-[1px_solid_rgb(24,20,12)] rounded-[4px] bg-[var(--bgColor1)] cursor-pointer hover:scale-[1.05] hover:shadow-[0_0_5px_2px_black] transition-all duration-500">
                <div className="aboutImageDiv">
                    <img className="w-[300px] lg:w-[350px] xl:w-[375px] object-cover" src={data.src} alt={data.title} />
                </div>
                <div className="p-[1.5rem_0_2rem_0] text-center">
                    <h4 className="text-[1.6rem] text-[var(--pColor)] pb-[1rem]">{data.title}</h4>
                    <h5 className="text-[1.15rem] text-[rgb(182,136,22)] p-[0.15rem]">{data.text}</h5>
                    <h5 className="p-[1rem] text-[1.4rem] text-[var(--pColor)] hover:text-[var(--textColor)] transition-[1s]">
                        {data.linkName}
                    </h5>
                </div>
            </div>
        </a>
    )
}

export default NewsCard
