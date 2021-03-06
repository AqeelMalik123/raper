import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const Modalpost = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <input placeholder="enter the name "/>
        <input placeholder="Email"/>
        <input type="file" placeholder="picure"/>
        
      </Modal>
    </>
  );
};
export default Modalpost;


