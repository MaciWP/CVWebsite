import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import PDFModal from "./PDFModal";

describe("PDFModal", () => {
  test("shows error message and retry button on load error", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PDFModal isOpen onRequestClose={() => {}} />
      </I18nextProvider>,
    );

    const iframe = screen.getByTitle(i18n.t("pdfModal.title"));
    fireEvent.error(iframe);

    expect(
      screen.getByText(i18n.t("pdfModal.errorLoading")),
    ).toBeInTheDocument();
    expect(screen.getByText(i18n.t("pdfModal.retry"))).toBeInTheDocument();
  });

  test("retries loading when retry button clicked", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PDFModal isOpen onRequestClose={() => {}} />
      </I18nextProvider>,
    );

    const iframe = screen.getByTitle(i18n.t("pdfModal.title"));
    fireEvent.error(iframe);

    const retryButton = screen.getByText(i18n.t("pdfModal.retry"));
    fireEvent.click(retryButton);

    expect(
      screen.queryByText(i18n.t("pdfModal.errorLoading")),
    ).not.toBeInTheDocument();
    expect(screen.getByTitle(i18n.t("pdfModal.title"))).toBeInTheDocument();
  });
});
