import img from '../assets/Backround.jpg';


const Background = () => {
  return (
    <div className='fixed w-[100%] h-[100%] top-0 left-0 -z-2'>
        <img src={img} alt="#" id="backgroundImage" className='w-[100%] h-[100%] -z-1 object-cover object-center ' />
    </div>
  )
}

export default Background;


/*
    background-color: radial-gradient(circle, rgba(255, 194, 73, 0.284) 0%, rgba(16 ,16 ,16 , 0.75) 75%)

} */