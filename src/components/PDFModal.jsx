// src/components/PDFModal.jsx

import React from 'react';
import Modal from 'react-modal';
import '../styles/components/PDFModal.scss';

// Establecer el elemento raíz para accesibilidad
Modal.setAppElement('#root');

const PDFModal = ({ isOpen, onRequestClose }) => {
  const pdfUrl = '/TuCV.pdf';

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="CV PDF"
      className="pdf-modal"
      overlayClassName="pdf-modal-overlay"
    >
      <button onClick={onRequestClose} className="pdf-modal__close-button">Cerrar</button>
      <div className="pdf-modal__content">
        <iframe
          src={pdfUrl}
          title="CV PDF"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
        />
        <div className="pdf-modal__actions">
          <a href={pdfUrl} download>
            Descargar PDF
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default PDFModal;
