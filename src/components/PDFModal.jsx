import React, { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import '../styles/components/PDFModal.scss';

Modal.setAppElement('#root');

const PDFModal = ({ isOpen, onRequestClose }) => {
  const [pdfError, setPdfError] = useState(false);
  const pdfUrl = '/OriolMaciasBadosa_CV.pdf';
  const { t } = useTranslation();

  const handlePdfError = () => {
    setPdfError(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={t('pdfModal.title')}
      className="pdf-modal"
      overlayClassName="pdf-modal-overlay"
    >
      <div className="pdf-modal__content">
        <button onClick={onRequestClose} className="pdf-modal__close-button">
          &times;
        </button>
        {pdfError ? (
          <p>{t('pdfModal.errorLoading')}</p>
        ) : (
          <iframe
            src={pdfUrl}
            title={t('pdfModal.title')}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            onError={handlePdfError}
          />
        )}
      </div>
    </Modal>
  );
};

export default PDFModal;