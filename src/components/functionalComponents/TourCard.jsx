
const TourCard = (data) => {
    return (
        <a className='flex-center flex-col w-[90%] p-[1rem_0_1rem_0] m-[0_auto] bg-[var(--bgColor2)] hover:scale-[1.025] hover:bg-[var(--bgColor1)] hover:shadow-[0_0_2px_2px_rgb(19,19,19)]' href={data.locationLink} key={data.id} target='_blank' rel="noreferrer noopener">
            <div className="flex flex-col justify-center items-center w-[60%] m-[0_auto]">
                <div className="flex-center flex-col">
                    <h4 className="">{data.datum}</h4>
                    <h4 className="">{data.ort}</h4>
                </div>
                <h5 className="hover:text-[var(--sColor)]">{data.location}</h5>
            </div>
        </a>
    )
}

export default TourCard