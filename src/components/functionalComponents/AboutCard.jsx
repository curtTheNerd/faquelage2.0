
const AboutCard = ({ data, onClick }) => {
    return (
        <div className="flex-center flex-col w-[300px] lg:w-[350px] xl:w-[375px] h-[100%] border-[1px_solid_rgb(24,20,12)] rounded-[4px] bg-[var(--bgColor1)] pb[1.5rem] cursor-pointer hover:scale-[1.05] hover:shadow-[0_0_5px_2px_var(--sColor)] transition-all duration-500" onClick={() => onClick(data)}>
            <div className="aboutImageDiv">
                <img className="w-[300px] lg:w-[350px] xl:w-[375px] object-cover" src={data.imgSrc} alt={data.name} />
            </div>
            <div className="p-[1.5rem_0_2rem_0] text-center">
                <h4 className="text-[1.6rem] text-[var(--pColor)] pb-[1rem]">{data.name}</h4>
                <h5 className="text-[1.15rem] text-[rgb(182,136,22)] p-[0.15rem]">Instrument: {data.instrument}</h5>
                <h5 className="text-[1.15rem] text-[rgb(182,136,22)] p-[0.15rem]">Skill: {data.skill}</h5>
                <h5 className="text-[1.15rem] text-[rgb(182,136,22)] p-[0.15rem]">Follow on Instagram:</h5>
                <h5 className="p-[1rem]">
                    <a href={data.instaLink} className="text-[1.4rem] text-[var(--pColor)] hover:text-[var(--textColor)] transition-[1s]" rel="noreferrer noopener" target='_blank'>
                        {data.linkName}
                    </a>
                </h5>
            </div>
        </div>
    )
}

export default AboutCard;