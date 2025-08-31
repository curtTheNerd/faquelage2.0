import YouTube from 'react-youtube';

const Media = () => {
  const opts = {
    playerVars: {
      autoplay: 0,
    }
  }
  
  return (
    <section className='relative flex-center flex-col w-[90%]' id="media">
        <h2>Featured Video</h2>
      
        <div className='videoContainer'>
            <YouTube videoId="OXdOKobg5sA" className='absolute pb-[56.25%]' opts={opts} />
        </div>
      
    </section>
  )
}

export default Media

/* <h2></h2>
      <YouTube videoId="RQfjA1pA_FA" opts={opts} className='ytVideo pb-[56.25%]' />
      
      <h2></h2>
      <YouTube videoId="TfyPngj8kUc" opts={opts} className='ytVideo' />
      
      <h2 className='mediaTitle'>More Content Coming Soon...</h2> */