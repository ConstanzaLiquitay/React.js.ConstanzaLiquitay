import React, { useState, useEffect } from 'react';
import Modal from "./Modal"

const Modalcontainer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && <Modal closeModal={closeModal} />}

    </div>
  );
};



export default Modalcontainer;