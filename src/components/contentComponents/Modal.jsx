
const AboutModal = ({ data, close, next, prev }) => {
  if (!data) return null;

  return (
    <div className="fixed flex-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.9)] z-3 overflow-hidden" id="modal">
      <div className="flex-center gap-[5%] flex-col md:flex-row">
        <div>
        <img className="max-w-[600px] max-h-[600px] pb-[1rem]" src={data.imgSrc_m} alt={data.name} />
        </div>
        <div>
          <h4 className="text-[1.65rem] text-[var(--pColor)] ">{data.name}</h4>
          <h5 className="text-[1.1rem] text-[var(--sColor)]">Instrument: {data.instrument}</h5>
          <h5 className="text-[1.1rem] text-[var(--sColor)]">Skill: {data.skill}</h5>
          <h5>
            <a
              href={data.instaLink}
              className="text-[1.25rem] text-[var(--pColor)] hover:text-[var(--textColor)]"
              rel="noreferrer noopener"
              target="_blank"
            >
              Follow on Instagram: {data.linkName}
            </a>
          </h5>
        </div>
      </div>
      <span className="text-[3.5rem] top-[1rem] right-[2.5rem] absolute text-[rgb(100,100,100)] hover:text-[antiquewhite] hover:scale-[1.1] font-bold cursor-pointer" onClick={close}>&times;</span>
      <span className="text-[2.5rem] top-[50%] left-[2rem] absolute text-[rgb(100,100,100)] hover:text-[antiquewhite] hover:scale-[1.1] font-bold cursor-pointer" onClick={prev}>&#10094;</span>
      <span className="text-[2.5rem] top-[50%] right-[3rem] absolute text-[rgb(100,100,100)] hover:text-[antiquewhite] hover:scale-[1.1] font-bold cursor-pointer" onClick={next}>&#10095;</span>
    </div>
  );
};

export default AboutModal;
