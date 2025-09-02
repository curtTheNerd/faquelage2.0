import YouTube from 'react-youtube';

const Media = () => {
  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
    }
  }
  
  return (
    <section className='flex-container-cols' id="media">
        
      <h2>Featured Videos</h2>

      <div className='vid-wrapper' key='OXdOKobg5sA' >
        <YouTube videoId="OXdOKobg5sA" className='' opts={opts} />
      </div>

      <div className='vid-wrapper' key='TfyPngj8kUc' >
        <YouTube videoId="TfyPngj8kUc" className='' opts={opts} />
      </div>

      <div className='vid-wrapper' key='v9a6Xwo9MFM' >
        <YouTube videoId="v9a6Xwo9MFM" className='' opts={opts} />
      </div>

      <h2 className='py-6'>More Content Coming Soon...</h2>

    </section>
  )
}

export default Media

/* <h2></h2>
      <YouTube videoId="RQfjA1pA_FA" opts={opts} className='ytVideo pb-[56.25%]' />
      
      <h2></h2>
      <YouTube videoId="TfyPngj8kUc" opts={opts} className='ytVideo' />
      
      <h2 className='mediaTitle'>More Content Coming Soon...</h2> */