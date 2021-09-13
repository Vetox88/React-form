import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Form from '../components/Form'
import { Background } from '../components/Background'

export const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    return (
        <>
            {showModal ? (
                <Background onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <div showModal={showModal}>
                            <Form />
                        </div>
                    </animated.div>
                </Background>
            ) : null}
        </>
    );
};