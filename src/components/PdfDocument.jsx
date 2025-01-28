import React from "react";
import { Page, Text, View, Image, Document } from "@react-pdf/renderer";
import pdfStyles from "../styles/pdfStyles";

// Importamos las imágenes directamente
import logoLeft from "../assets/Avaluo comercial logo.png";
import logoRight from "../assets/Avaluo quinones logo.png";

const PDFDocument = ({ mainImage, formValues }) => {
  return (
    <Document>
      <Page style={pdfStyles.body} size="A4" orientation="portrait">
        {/* Logos en las esquinas */}
        <View style={pdfStyles.logoContainer}>z
          <Image style={pdfStyles.logoLeft} src={logoLeft} />
          <Image style={pdfStyles.logoRight} src={logoRight} />
        </View>

        {/* Imagen principal centrada */}
        {mainImage && (
  <View style={pdfStyles.mainImageContainer}>
    <Image style={pdfStyles.mainImage} src={mainImage} />
  </View>
)}

        {/* Tabla de datos */}
        <View style={pdfStyles.table}>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Calle:</Text>
            <Text style={pdfStyles.tableCell}>{formValues.calle}</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Número:</Text>
            <Text style={pdfStyles.tableCell}>{formValues.numero}</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Fraccionamiento:</Text>
            <Text style={pdfStyles.tableCell}>{formValues.fraccionamiento}</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Municipio:</Text>
            <Text style={pdfStyles.tableCell}>{formValues.municipio}</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Código Postal:</Text>
            <Text style={pdfStyles.tableCell}>{formValues.codigoPostal}</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Estado:</Text>
            <Text style={pdfStyles.tableCell}>{formValues.estado}</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Valor de Mercado:</Text>
            <Text style={pdfStyles.tableCell}>{formValues.valorMercado}</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Fecha de Avalúo:</Text>
            <Text style={pdfStyles.tableCell}>{formValues.fechaAvaluo}</Text>
          </View>
        </View>

        {/* Pie de página */}
        <View style={pdfStyles.footer}>
          <View style={pdfStyles.footerLeft}>
            <Text>(555) 123-4567</Text>
            <Text>contacto@empresa.com</Text>
          </View>
          <View style={pdfStyles.footerRight}>
          <Text>Juan Pérez</Text>
            <Text>Calle Ficticia 123</Text>
            <Text>Colonia Centro</Text>
            <Text>Ciudad Ficticia</Text>
          </View>
        </View>
      </Page>

       {/* Segunda Página */}
       <Page style={pdfStyles.body} size="A4" orientation="portrait">
        {/* Logos en las esquinas */}
        <View style={pdfStyles.logoContainer}>
          <Image style={pdfStyles.logoLeft} src={logoLeft} />
          <Image style={pdfStyles.logoRight} src={logoRight} />
        </View>
      
      <View style={pdfStyles.titleContainer}>
      <Text style={pdfStyles.mainTitle}>AVALÚO COMERCIAL</Text>
      <Text style={pdfStyles.subTitle}>Contenido</Text>
      </View>

      <View>
        <Text style={pdfStyles.listItem}>I. Certificación del valuador</Text>
        <Text style={pdfStyles.listItem}>II. Resumen general</Text>
        <Text style={pdfStyles.listItem}>III. Nomenclatura empleada</Text>
        <Text style={pdfStyles.listItem}>IV. Avalúo del terreno y edificación</Text>
        <Text style={pdfStyles.listItem}>IV.I. Antecedentes</Text>
        <Text style={pdfStyles.listItem}>IV.II. Croquis de localización</Text>
        <Text style={pdfStyles.listItem}>IV.III. Información de la zona</Text>
        <Text style={pdfStyles.listItem}>IV.IV. Datos de las construcciones</Text>
        <Text style={pdfStyles.listItem}>IV.V. Tipos de construcción apreciados</Text>
        <Text style={pdfStyles.listItem}>IV.VI. Esquema de áreas</Text>
        <Text style={pdfStyles.listItem}>IV.VII. Características de las construcciones</Text>
        <Text style={pdfStyles.listItem}>IV.VIII. Consideraciones previas al avalúo del inmueble</Text>
        <Text style={pdfStyles.listItem}>IV.IX. Valor físico directo</Text>
        <Text style={pdfStyles.listItem}>IV.X. Valor por capitalización de rentas</Text>
        <Text style={pdfStyles.listItem}>IV.XI. Conclusiones del valor del inmueble</Text>
        <Text style={pdfStyles.listItem}>IV.XII. Notas generales del avalúo del inmueble</Text>
        <Text style={pdfStyles.listItem}>Anexo: Reporte fotográfico</Text>
      </View>

      <Text style={pdfStyles.smallTitle}>I. Certificación del valuador</Text>
      <Text>
        El presente avalúo está hecho bajo las siguientes premisas: el estudio de valuación tiene como objeto
        fundamental determinar el valor neto de reposición y el monto de venta mensual del inmueble.
      </Text>

      {/* Tabla */}
      <View style={pdfStyles.table}>
        <View style={[pdfStyles.tableRow, pdfStyles.tableHeader]}>
          <Text style={pdfStyles.tableCell}>H2-U Habitacional Unifamiliar Densidad Baja</Text>
        </View>
        <View style={pdfStyles.tableRow}><Text style={pdfStyles.tableCell}>Ubicada en:</Text><Text style={pdfStyles.tableCell}>Kalahari</Text></View>
        <View style={pdfStyles.tableRow}><Text style={pdfStyles.tableCell}>Colonia:</Text><Text style={pdfStyles.tableCell}>Colinas de Santa Fe</Text></View>
        <View style={pdfStyles.tableRow}><Text style={pdfStyles.tableCell}>Ciudad:</Text><Text style={pdfStyles.tableCell}>Colima, Colima</Text></View>
        <View style={pdfStyles.tableRow}><Text style={pdfStyles.tableCell}>Propiedad de:</Text><Text style={pdfStyles.tableCell}>BANCO DEL BAJÍO SA Y COND</Text></View>
      </View>

      {/* Lista adicional */}
      <View>
        <Text style={pdfStyles.listItem}>- En este estudio de valor se incluyen terreno y construcciones.</Text>
        <Text style={pdfStyles.listItem}>- No es objeto de este avalúo dictaminar el valor de instalaciones especiales, equipo, ni mobiliario.</Text>
        <Text style={pdfStyles.listItem}>- No es objeto de este avalúo dictaminar el valor en base a un uso diferente al actual o al futuro que se dé al inmueble.</Text>
        <Text style={pdfStyles.listItem}>- El objeto de este avalúo es dictaminar el valor justo del inmueble con independencia de la deseabilidad de compra o venta.</Text>
        <Text style={pdfStyles.listItem}>- Que la propiedad es legal y no tiene ningún problema en cuanto a sus linderos, superficie y posesión.</Text>
        <Text style={pdfStyles.listItem}>- Que los datos aportados por terceras personas son ciertos y correctos.</Text>
        <Text style={pdfStyles.listItem}>- Que el valuador no tiene ningún interés manifiesto sobre los bienes valuados.</Text>
        <Text style={pdfStyles.listItem}>- Que no se han descartado ni sobrestimado datos importantes.</Text>
        <Text style={pdfStyles.listItem}>- Que el procedimiento para encontrar el valor y los parámetros usados son los comunes para este tipo de avalúos.</Text>
        <Text style={pdfStyles.listItem}>- La existencia y características de los bienes descritos fueron constatados por el perito valuador durante la visita al domicilio de su ubicación.</Text>
      </View>

       {/* Pie de página */}
       <View style={pdfStyles.footer}>
          <View style={pdfStyles.footerLeft}>
            <Text>(555) 123-4567</Text>
            <Text>contacto@empresa.com</Text>
          </View>
          <View style={pdfStyles.footerRight}>
          <Text>Juan Pérez</Text>
            <Text>Calle Ficticia 123</Text>
            <Text>Colonia Centro</Text>
            <Text>Ciudad Ficticia</Text>
          </View>
        </View>
    </Page>
    </Document>
  );
};

export default PDFDocument;
