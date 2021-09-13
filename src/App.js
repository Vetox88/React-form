import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './containers/Modal';
import { GlobalStyle } from './globalStyles';
import Form from './components/Form'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
width: 10%;
height: 50px;
margin-top: 10px;
border-radius: 10px;
background: linear-gradient(
  90deg,
  rgb(39, 176, 255) 0%,
  rgb(0, 232, 236) 100%
);
outline: none;
border: none;
color: #fff;
font-size: 1rem;
cursor: pointer;
`;

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container>

        <Button onClick={openModal}>Enter!</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />

        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;