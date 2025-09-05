
const AboutModal = ({ data, close, next, prev }) => {
  if (!data) return null;

  return (
    <div className="fixed flex-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.9)] z-3 overflow-hidden" id="modal">
      <div className="flex flex-col items-center justify-center w-full h-full md:flex-row md:gap-[5%] ">
        
        <img className="w-[90%] max-w-[300px] mb-[1rem] sm:my-[1.5rem] md:max-w-[375px] lg:max-w-[30%]" src={data.imgSrc_m} alt={data.name} />
        
        <div className="text-center md:text-left ">
          <h4 className="text-[1.4rem] lg:text-[1.75rem] pb-[0.25rem] text-[var(--pColor)] ">{data.name}</h4>
          <h4 className="text-[1.1rem] lg:text-[1.4rem] text-[var(--sColor)]">Instrument: {data.instrument}</h4>
          <h4 className="text-[1.1rem] lg:text-[1.4rem] pb-[0.5rem] text-[var(--sColor)]">Skill: {data.skill}</h4>
          <h4>
            <a
              href={data.instaLink}
              className="text-[1.2rem] lg:text-[1.5rem] text-[var(--pColor)] hover:text-[var(--textColor)]"
              rel="noreferrer noopener"
              target="_blank"
            >
              Follow on Instagram: <br/> {data.linkName}
            </a>
          </h4>
        </div>
      </div>
      <span className="text-[4rem] lg:text-[5rem] top-0 right-[2rem] absolute text-[rgb(100,100,100)] hover:text-[antiquewhite] hover:scale-[1.1] font-bold cursor-pointer" onClick={close}>&times;</span>
      <span className="text-[2.75rem] lg:text-[3.75rem] top-[50%] left-[1rem] absolute text-[rgb(100,100,100)] hover:text-[antiquewhite] hover:scale-[1.1] font-bold cursor-pointer" onClick={prev}>&#10094;</span>
      <span className="text-[2.75rem] lg:text-[3.75rem] top-[50%] right-[1rem] absolute text-[rgb(100,100,100)] hover:text-[antiquewhite] hover:scale-[1.1] font-bold cursor-pointer" onClick={next}>&#10095;</span>
    </div>
  );
};

export default AboutModal;
