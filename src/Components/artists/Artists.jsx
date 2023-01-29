import React from 'react'
import './style.css'
import { Button, Modal } from "antd";
import { useState, useEffect, useContext } from "react";
import a1 from '../../assets/honey_singh.jpg'
import a2 from '../../assets/ketty_perry.jpg'
import a3 from '../../assets/justin.jpg'
import a4 from '../../assets/WhatsApp Image 2023-01-29 at 17.47.21.jpeg'
import a5 from '../../assets/WhatsApp Image 2023-01-29 at 17.47.21 (1).jpeg'

const btnStyle = {
  border: "none",
  cursor: "pointer",
  marginRight: "-50px",
  marginLeft: "30px",
  fontSize: "12px",
  borderBottom: "1px solid red",
  padding: "0 10px 0 10px",
};

const Artists = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container2">
      
      <div>
        <div className="wrapper" onClick={() => showModal()}>
          <div className="card">
            <img src={a5} alt="" />
          </div>
        </div>
        <Modal
          title="Album"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ width: "90vw" }}
          width={1200}
        >
        </Modal>
      </div>
      <div>
        <div className="wrapper" onClick={() => showModal()}>
          <div className="card">
            <img src={a4} alt="" />
          </div>
        </div>
        <Modal
          title="Album"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ width: "90vw" }}
          width={1200}
        >
        </Modal>
      </div>
      <div>
      
        <div className="wrapper" onClick={() => showModal()}>
          <div className="card">
            <img src={a1} alt="" />
          </div>
        </div>
        <Modal
          title="Album"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ width: "90vw" }}
          width={1200}
        >
        </Modal>
      </div>
      <div>
        <div className="wrapper" onClick={() => showModal()}>
          <div className="card">
            <img src={a2} alt="" />
          </div>
        </div>
        <Modal
          title="Album"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ width: "90vw" }}
          width={1200}
        >
        </Modal>
      </div>
      <div>
        <div className="wrapper" onClick={() => showModal()}>
          <div className="card">
            <img src={a3} alt="" />
          </div>
        </div>
        <Modal
          title="Album"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ width: "90vw" }}
          width={1200}
        >
        </Modal>
      </div>
  </div>
  )
}

export default Artists