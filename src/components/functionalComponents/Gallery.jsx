import { useState } from "react";
import { AboutData as Data } from '../../components/Data';

import AboutCard from './AboutCard';
import Modal from "../contentComponents/Modal";


const Gallery = () => {      
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data) => {
    setSelectedData(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleNext = () => {
    const currentIndex = Data.findIndex((d) => d.id === selectedData.id);
    const nextIndex = (currentIndex + 1) % Data.length;
    setSelectedData(Data[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = Data.findIndex((d) => d.id === selectedData.id);
    const prevIndex = (currentIndex - 1 + Data.length) % Data.length;
    setSelectedData(Data[prevIndex]);
  };
 



  return (
    <div className="flex-center gap-[2rem] flex-wrap pb-[4rem]">
        {Data.map((data) => <AboutCard key={data.id} data={data} onClick={openModal}/> )}
        {showModal && ( <Modal data={selectedData} close={closeModal} next={handleNext} prev={handlePrev} />)}
    </div>
  );
};

export default Gallery;
