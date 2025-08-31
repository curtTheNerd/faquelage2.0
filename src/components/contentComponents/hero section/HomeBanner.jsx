import { useState, useEffect } from "react";
import img1 from '../../assets/HomeBanner_the_boys.jpg';
import img2 from '../../assets/HomeBanner_the_boys_at_work.jpg';
import img3 from '../../assets/HomeBanner_the_boys_thinking.jpg';
import img4 from '../../assets/HomeBanner_the_boys_knowing.jpg';
import img5 from '../../assets/HomeBanner_the_boys_dictating.jpg';
import img6 from '../../assets/HomeBanner_the_boys_wooden_floor.jpg';
import img7 from '../../assets/HomeBanner_the_boys_checking_equipment.jpg';

const images = [ img1, img2, img3, img4, img5, img6, img7 ];

const HomeBanner = () => {
    const [imageIndex, setImageIndex] = useState(0);
    
    useEffect(() => {

        const interval = setInterval(() => {
            setImageIndex((prev) => (prev + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <>
            <div className={ `image ${imageIndex === 0 ? 'fadeIn' : 'fadeOut'}` } style={{backgroundImage: `url(${img1})` }}></div>
            <div className={ `image ${imageIndex === 1 ? 'fadeIn' : 'fadeOut'}` } style={{backgroundImage: `url(${img2})` }}></div>
            <div className={ `image ${imageIndex === 2 ? 'fadeIn' : 'fadeOut'}` } style={{backgroundImage: `url(${img3})` }}></div>
            <div className={ `image ${imageIndex === 3 ? 'fadeIn' : 'fadeOut'}` } style={{backgroundImage: `url(${img4})` }}></div>
            <div className={ `image ${imageIndex === 4 ? 'fadeIn' : 'fadeOut'}` } style={{backgroundImage: `url(${img5})` }}></div>
            <div className={ `image ${imageIndex === 5 ? 'fadeIn' : 'fadeOut'}` } style={{backgroundImage: `url(${img6})` }}></div>
            <div className={ `image ${imageIndex === 6 ? 'fadeIn' : 'fadeOut'}` } style={{backgroundImage: `url(${img7})` }}></div>
            fu 
        </>
    )
}

export default HomeBanner;