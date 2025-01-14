import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from "./PdfDocument";
import { useState } from "react"; // Asegúrate de importar useState
import { PDFViewer, Document, Page, Text, View, StyleSheet,Image } from "@react-pdf/renderer";

// Estilos para el PDF
const pdfStyles = StyleSheet.create({
    page: { padding: 30, position: 'relative' },
    section: { marginBottom: 20 },
    header: { fontSize: 20, marginBottom: 10 },
    label: { fontSize: 12, marginBottom: 5 },
    input: { fontSize: 12, marginBottom: 10 },
    image: { width: 100, height: 100, marginTop: 10 }, // Estilo para la imagen
    table: { width: '100%', border: '1px solid #000', marginBottom: 10 },
    tableRow: { flexDirection: 'row', borderBottom: '1px solid #000', paddingVertical: 5 },
    tableCell: { flex: 1, padding: 5, textAlign: 'center', borderRight: '1px solid #000' },
    tableHeader: { fontWeight: 'bold', backgroundColor: '#f2f2f2', textAlign: 'center' },
    tableFooter: { fontWeight: 'bold', backgroundColor: '#f2f2f2', textAlign: 'center' },
    tableCellText: { textAlign: 'center', padding: 5 },
    tableRowLast: { flexDirection: 'row', paddingVertical: 5 },
    tableCellLast: { flex: 1, padding: 5, textAlign: 'center' },
    imageSection: { marginTop: 20, marginBottom: 20, textAlign: 'center' }, // Estilo para la sección de la imagen
    footer: {
      position: 'absolute',
      bottom: 30,
      left: 30,
      right: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontSize: 10,
    },
    footerLeft: {
      textAlign: 'left',
      width: '50%',
    },
    footerRight: {
      textAlign: 'right',
      width: '50%',
    },
  });
  
  // Datos fijos para el pie de página
  const footerData = {
    contacto: {
      nombre: "Juan Pérez",
      direccion: "Calle Ficticia 123",
      colonia: "Colonia Centro",
      ciudad: "Ciudad Ficticia",
      celular: "(555) 123-4567",
      email: "contacto@empresa.com",
    },
  };
  
  // Componente para generar el PDF dinámico
  const PDFDocument = ({ tipo, formData }) => (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.header}>
            Nuevo Avalúo: {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
          </Text>
        </View>
  
        {/* Imagen fuera de la tabla */}
        {formData.imagen && (
          <View style={pdfStyles.imageSection}>
            <Image src={formData.imagen} style={pdfStyles.image} />
          </View>
        )}
  
        {/* Tabla en el PDF */}
        <View style={pdfStyles.table}>
          <View style={pdfStyles.tableRow}>
            <Text style={[pdfStyles.tableCell, pdfStyles.tableHeader]}>Campo</Text>
            <Text style={[pdfStyles.tableCell, pdfStyles.tableHeader]}>Valor</Text>
          </View>
  
          {Object.keys(formData).map((key, index) => (
            key !== 'imagen' && (
              <View
                style={index === Object.keys(formData).length - 1 ? pdfStyles.tableRowLast : pdfStyles.tableRow}
                key={key}
              >
                <Text style={[pdfStyles.tableCell, pdfStyles.tableCellText]}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Text>
                <Text style={[pdfStyles.tableCell, pdfStyles.tableCellText]}>
                  {formData[key]}
                </Text>
              </View>
            )
          ))}
        </View>
  
        {/* Pie de página */}
        <View style={pdfStyles.footer}>
          {/* Pie de página izquierda */}
          <View style={pdfStyles.footerLeft}>
            <Text>{footerData.contacto.nombre}</Text>
            <Text>{footerData.contacto.direccion}</Text>
            <Text>{footerData.contacto.colonia}</Text>
            <Text>{footerData.contacto.ciudad}</Text>
          </View>
  
          {/* Pie de página derecha */}
          <View style={pdfStyles.footerRight}>
            <Text>{footerData.contacto.celular}</Text>
            <Text>{footerData.contacto.email}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
  
  const NuevoAvaluo = () => {
    const { tipo } = useParams();
    const [formData, setFormData] = useState({
      valorMercado: "",
      ubicacion: "",
      tamanoTerreno: "",
      calcularTotal: 0,
      imagen: null, // Para almacenar la imagen cargada
    });
    const [showPDF, setShowPDF] = useState(false);
  
    // Función para manejar el cambio de valores en el formulario
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => {
        const newData = { ...prevData, [name]: value };
        // Recalcular el total si se cambian los campos de cálculo
        if (name === "valorMercado" || name === "tamanoTerreno") {
          const valorMercado = parseFloat(newData.valorMercado) || 0;
          const tamanoTerreno = parseFloat(newData.tamanoTerreno) || 0;
          newData.calcularTotal = valorMercado * tamanoTerreno;
        }
        return newData;
      });
    };
  
    // Manejar la carga de la imagen
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        imagen: URL.createObjectURL(file), // Cargar la imagen seleccionada
      }));
    };
  
    // Manejar el envío del formulario
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowPDF(true); // Mostrar el PDF después de enviar el formulario
    };
  
    return (
      <div>
        <h1>Nuevo Avalúo: {tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h1>
  
        {/* Formulario de tipo tabla pequeña */}
        {!showPDF && (
          <form onSubmit={handleSubmit}>
            {tipo === "comercial" && (
              <>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label>Valor de Mercado:</label>
                        <input
                          type="number"
                          name="valorMercado"
                          value={formData.valorMercado}
                          onChange={handleInputChange}
                          required
                        />
                      </td>
                      <td>
                        <label>Tamaño del Terreno:</label>
                        <input
                          type="number"
                          name="tamanoTerreno"
                          value={formData.tamanoTerreno}
                          onChange={handleInputChange}
                          required
                        />
                      </td>
                      <td>
                        <label>Total Estimado:</label>
                        <input
                          type="text"
                          name="calcularTotal"
                          value={formData.calcularTotal}
                          readOnly
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* Campo para cargar imagen */}
                <label>Subir Imagen:</label>
                <input type="file" onChange={handleImageChange} />
              </>
            )}
            {tipo !== "comercial" && (
              <p>Formulario para el tipo de avalúo "{tipo}" aún no implementado.</p>
            )}
            <button type="submit">Generar PDF</button>
          </form>
        )}
  
        {/* Visualizador de PDF */}
        {showPDF && (
          <PDFViewer style={{ width: "100%", height: "90vh" }}>
            <PDFDocument tipo={tipo} formData={formData} />
          </PDFViewer>
        )}
      </div>
    );
  };
  
  export default NuevoAvaluo;