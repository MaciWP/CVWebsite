import React, { useState } from "react";
import Modal from "react-modal";
import { useTranslation } from "react-i18next";
import "../styles/components/PDFModal.scss";

Modal.setAppElement("#root");

const PDFModal = ({ isOpen, onRequestClose }) => {
  const [pdfError, setPdfError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const pdfUrl = "/OriolMaciasBadosa_CV.pdf";
  const { t } = useTranslation();

  const handlePdfError = () => {
    setPdfError(true);
  };

  const handleRetry = () => {
    setPdfError(false);
    setRetryKey((prev) => prev + 1);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={t("pdfModal.title")}
      className="pdf-modal"
      overlayClassName="pdf-modal-overlay"
    >
      <div className="pdf-modal__content">
        <button onClick={onRequestClose} className="pdf-modal__close-button">
          &times;
        </button>
        {pdfError ? (
          <div>
            <p>{t("pdfModal.errorLoading")}</p>
            <button onClick={handleRetry}>{t("pdfModal.retry")}</button>
          </div>
        ) : (
          <iframe
            key={retryKey}
            src={pdfUrl}
            title={t("pdfModal.title")}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            onError={handlePdfError}
          />
        )}
      </div>
    </Modal>
  );
};

export default PDFModal;
