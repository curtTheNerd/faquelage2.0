import { useState, useEffect } from "react";

import img1 from '../../../assets/HomeBanner_the_boys.jpg';
import img2 from '../../../assets/HomeBanner_the_boys_at_work.jpg';
import img3 from '../../../assets/HomeBanner_the_boys_thinking.jpg';
import img4 from '../../../assets/HomeBanner_the_boys_knowing.jpg';
import img5 from '../../../assets/HomeBanner_the_boys_dictating.jpg';
import img6 from '../../../assets/HomeBanner_the_boys_wooden_floor.jpg';
import img7 from '../../../assets/HomeBanner_the_boys_checking_equipment.jpg';

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
        <div className="relative w-full h-[50vw] mb-[3rem] py-[6rem] md:py-[7rem]" >
            {images.map((image, index) => (
                <img key={index} src={image} className={`${index === imageIndex ? 'opacity-100' : 'opacity-0'} absolute top-[6rem] md:top-[7rem] w-full h-[50vw] bg-cover bg-no-repeat bg-center transition-opacity duration-2500`} />
            ))}

        </div>
    )
}

export default HomeBanner;