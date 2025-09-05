
const TourCard = (data) => {
    return (
        <a className='flex-center flex-col w-full p-[1rem_0_1rem_0] m-[0_auto] text-center bg-[var(--bgColor2)] hover:scale-[1.025] hover:bg-[var(--bgColor1)] hover:shadow-[0_0_2px_2px_rgb(19,19,19)] transition-all duration-500' href={data.locationLink} key={data.id} target='_blank' rel="noreferrer noopener">
            <div className="flex flex-col justify-center items-center w-full m-[0_auto]">
                <div className="flex-center flex-col">
                    <h4 className="">{data.datum}</h4>
                    <h4 className="">{data.ort}</h4>
                </div>
                <h4 className="transition-all duration-500 hover:text-[var(--sColor)]">{data.location}</h4>
            </div>
        </a>
    )
}

export default TourCard