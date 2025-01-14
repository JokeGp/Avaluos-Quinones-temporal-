import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Estilos para el documento PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    marginBottom: 10,
  },
  table: {
    display: 'table',
    width: 'auto',
    margin: '10px 0',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    fontSize: 10,
    textAlign: 'center',
  },
  watermark: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#ddd',
    fontSize: 60,
    opacity: 0.3,
  },
});

// Componente principal del PDF
const PdfDocument = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.watermark}>AVALÚO</Text>

      {/* Encabezado */}
      <Text style={styles.header}>Avalúo Comercial</Text>

      {/* Información general */}
      <View style={styles.section}>
        <Text>Propietario: {formData.owner}</Text>
        <Text>Dirección: {formData.address}</Text>
        <Text>Valor estimado: ${formData.value}</Text>
      </View>

      {/* Tabla */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, { width: '50%' }]}>Descripción</Text>
          <Text style={[styles.tableCell, { width: '25%' }]}>Cantidad</Text>
          <Text style={[styles.tableCell, { width: '25%' }]}>Precio</Text>
        </View>
        {formData.items.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, { width: '50%' }]}>{item.description}</Text>
            <Text style={[styles.tableCell, { width: '25%' }]}>{item.quantity}</Text>
            <Text style={[styles.tableCell, { width: '25%' }]}>${item.price}</Text>
          </View>
        ))}
      </View>

      {/* Pie de página */}
      <Text style={styles.footer}>Generado por el Sistema de Avalúos</Text>
    </Page>
  </Document>
);

export default PdfDocument;
