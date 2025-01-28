import React, { useState } from "react";
import ComercialForm from "../forms/ComercialForm";
import PDFDocument from "../components/PdfDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";

const NuevoAvaluo = () => {
  const [formValues, setFormValues] = useState(null);
  const [mainImage, setMainImage] = useState(null); // Solo una imagen principal

  const handleGeneratePDF = ({ mainImage, ...formData }) => {
    setMainImage(mainImage);
    setFormValues(formData);
  };

  return (
    <div>
      <h1>Nuevo Avalúo</h1>
      <ComercialForm handleGeneratePDF={handleGeneratePDF} />

      {/* Enlace para descargar el PDF generado */}
      {formValues && (
        <PDFDownloadLink
          document={<PDFDocument mainImage={mainImage} formValues={formValues} />}
          fileName="avaluo_comercial.pdf"
        >
          {({ loading }) => (loading ? "Generando PDF..." : "Descargar PDF")}
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default NuevoAvaluo;
