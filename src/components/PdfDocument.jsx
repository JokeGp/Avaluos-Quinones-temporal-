import React from "react";
import { Page, Text, View, Image, Document } from "@react-pdf/renderer";
import pdfStyles from "../styles/pdfStyles";

// Importamos las imágenes directamente
import logoLeft from "../assets/Avaluo comercial logo.png";
import logoRight from "../assets/Avaluo quinones logo.png";

const PDFDocument = ({ mainImage, formValues }) => {
  return (
    <Document>
      {/* Primera Página */}
      <Page style={pdfStyles.body} size="A4" orientation="portrait">
        {/* Logos en las esquinas */}
        <View style={pdfStyles.logoContainer}>
          <Image style={pdfStyles.logoLeft} src={logoLeft} />
          <Image style={pdfStyles.logoRight} src={logoRight} />
        </View>

        {/* Imagen principal centrada */}
        {mainImage && (
          <View style={pdfStyles.mainImageContainer}>
            <Image style={pdfStyles.mainImage} src={mainImage} />
          </View>
        )}

        {/* formulario o no se xd */}
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

        {/* Título y lista de contenidos */}
        <View style={pdfStyles.titleContainer}>
          <Text style={pdfStyles.mainTitle}>AVALÚO COMERCIAL</Text>
          <view style={pdfStyles.subTitleContainer}>
          <Text style={pdfStyles.subTitle}>Contenido</Text>
          </view>
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

        <view style={pdfStyles.subTitleContainer}>
          <Text style={pdfStyles.subTitle}>I. Certificación del valuador</Text>
          </view>

        <Text>
          El presente avalúo está hecho bajo las siguientes premisas: el estudio de valuación tiene como objeto
          fundamental determinar el valor neto de reposición y el monto de venta mensual del inmueble.
        </Text>

        {/* Tabla de información adicional */}
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

       {/* Tercera Pagina */}
       <Page style={pdfStyles.body} size="A4" orientation="portrait">
        {/* Logos en las esquinas */}
        <View style={pdfStyles.logoContainer}>
          <Image style={pdfStyles.logoLeft} src={logoLeft} />
          <Image style={pdfStyles.logoRight} src={logoRight} />
        </View>

        {/* Título y lista de contenidos */}
        <View style={pdfStyles.titleContainer}>
          <view style={pdfStyles.subTitleContainer}>
          <Text style={pdfStyles.subTitle}>III. Resumen General</Text>
          </view>
        </View>

        <View style={pdfStyles.table}>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Valor de Inmueble con uso de:</Text>
            <Text style={pdfStyles.tableCell}>{formValues.calle}</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Ubicado en (calle):</Text>
            <Text style={pdfStyles.tableCell}>{formValues.calle}</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Colonia (fraccionamiento):</Text>
            <Text style={pdfStyles.tableCell}>{formValues.fraccionamiento}</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Ciudad:</Text>
            <Text style={pdfStyles.tableCell}>formValues.ciudad</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Propiedad de:</Text>
            <Text style={pdfStyles.tableCell}>formValues.Propiedad de</Text>
          </View>
        </View>

        <view style={pdfStyles.subTitleContainer}>
          <Text style={pdfStyles.subTitle}>BANCO DEL BAJIO SA Y COND</Text>
          </view>

          <View style={pdfStyles.table}>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Valor Fisico Directo:</Text>
            <Text style={pdfStyles.tableCell}>Valor fisico directo = ( Costo de reposicion − Depreciacion acumulada ) + Valor del terreno</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Valor de Mercado:</Text>
            <Text style={pdfStyles.tableCell}>∑ ( Precio de Venta de Propiedades Comparables )/ Numero de Propiedades Comparables</Text>
          </View>
        </View>

         {/* Línea de separación */}
         <View style={pdfStyles.separator} />

         <View style={pdfStyles.table}>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Valor por capitalización de Rentas:</Text>
            <Text style={pdfStyles.tableCell}>No Aplica</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Nota: Referencia de Valor por rentabilidad</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Valor Comercial:</Text>
            <Text style={pdfStyles.tableCell}>∑ ( Precio de Venta de Propiedades Comparables )/ Numero de Propiedades Comparables</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Nota: En caso de venta Valor minimo recomendado para cierre.</Text>
          </View>
        </View>

        {/* Línea de separación */}
        <View style={pdfStyles.separator} />

        <View style={pdfStyles.centeredText}>
            <Text style={{marginBottom: 10}}>Colima, Colima a 02 de Enero 2025</Text>
            <Text>Formuló:</Text>
            <Text>Avlúos Profesionales Quiñonez</Text>
            <Text>M. en Val. Ing. Samuel Apolonio Saucedo Quiñonez</Text>
            <Text>Cedula Maestria en Valuación 9460223</Text>
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

       {/* Cuarta Pagina */}
       <Page style={pdfStyles.body} size="A4" orientation="portrait">
        {/* Logos en las esquinas */}
        <View style={pdfStyles.logoContainer}>
          <Image style={pdfStyles.logoLeft} src={logoLeft} />
          <Image style={pdfStyles.logoRight} src={logoRight} />
        </View>

        {/* Título */}
        <View style={pdfStyles.titleContainer}>
          <view style={pdfStyles.subTitleContainer}>
          <Text style={pdfStyles.subTitle}>NOMENCLATURA EMPLEADA</Text>
          </view>
        </View>

          {/* Lista */}
          <View>
          <Text style={pdfStyles.listItem}>V.U.R.: Vida útil remanente</Text>
          <Text style={pdfStyles.listItem}>F.D.T.: Factor de depreciación total, determinado en base a su vida útil, estado de conservación y grado de obsolescencia.</Text>
          <Text style={pdfStyles.listItem}>V.R.N.: Valor de reposición nuevo o de mercado.</Text>
          <Text style={pdfStyles.listItem}>V.N.R: Valor neto de reposición o valor estimado actual</Text>
          <Text style={pdfStyles.listItem}>N.R.: Números redondos.</Text>
          </View>
          <View style={pdfStyles.footerRight}>
              <Text>{formValues.fechaAvaluo}</Text>
            </View>

            {/* Subtitulos */}
          <View style={pdfStyles.titleContainer}>
          <view style={pdfStyles.subTitleContainer}>
          <Text style={pdfStyles.subTitle}>IV.AVALÚO TERRENO, EDIFICIO Y ELEMENTOS ACCESORIOS.</Text>
          </view>
          <view style={pdfStyles.subTitleContainer}>
          <Text style={pdfStyles.subTitle}>IV.I. ANTECEDENTES</Text>
          </view>
         </View>

         <View style={pdfStyles.table}>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Solicitante:</Text>
            <Text style={pdfStyles.tableCell}>form.Values.BANCO DEL BAJIO SA Y COND</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Inmueble que se valúa:</Text>
            <Text style={pdfStyles.tableCell}>
              formValu.H2-U Habitacional 
              Ubicada en: {formValues.calle}
              N°0 
              Colonia: {formValues.fraccionamiento}
              Ciudad: formValues.ciudad
              Estado: {formValues.estado} 
              Codigo Postal: {formValues.codigoPostal}
              </Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Propietario:</Text>
            <Text style={pdfStyles.tableCell}>form.values. BANCO DEL BAJIO</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Perito valuador:</Text>
            <Text style={pdfStyles.tableCell}>form.values. M. en Val. Ing. Samuel Apolonio Saucedo Quiñonez 
              Cedulas: Maestria en valuación 9460223 Profesional 4032601
            </Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Objeto del avalúo:</Text>
            <Text style={pdfStyles.tableCell}>form.Values.Conocer el valor comercial del inmueble</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Linderos y colindancias:</Text>
            <Text style={pdfStyles.tableCell}>
              form.Values.Norte: en 11.mts con la calle Kalahari 
              form.Values.Oriente: en 30.mts con lote 26 
              form.Values.Sur: en 11.mts con lote 21 
              form.Values.Poniente: en 30.mts con lote 23
              </Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Area total según:</Text>
            <Text style={pdfStyles.tableCell}>form.Values.Escrituras form.values.330.m2</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Cuenta catastral:</Text>
            <Text style={pdfStyles.tableCell}>form.Values.Cuenta catastral</Text>
            <Text style={pdfStyles.tableCell}>Clave Catastral:</Text>
            <Text style={pdfStyles.tableCell}>form.Values.02-01-13-017-025-000</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Latitud:</Text>
            <Text style={pdfStyles.tableCell}>form.Values.1926919</Text>

            <Text style={pdfStyles.tableCell}>Longitud:</Text>
            <Text style={pdfStyles.tableCell}>form.Values.-10370049</Text>

            <Text style={pdfStyles.tableCell}>Altitud:</Text>
            <Text style={pdfStyles.tableCell}>form.Values.596</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Descripción del inmueble:</Text>
            <Text style={pdfStyles.tableCell}>form.Values.Descripcion del inmueble.exe</Text>
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

        {/* Quinta Pagina */}
        <Page style={pdfStyles.body} size="A4" orientation="portrait">
        {/* Logos en las esquinas */}
        <View style={pdfStyles.logoContainer}>
          <Image style={pdfStyles.logoLeft} src={logoLeft} />
          <Image style={pdfStyles.logoRight} src={logoRight} />
        </View>

        {/* Título */}
        <View style={pdfStyles.titleContainer}>
          <view style={pdfStyles.subTitleContainer}>
          <Text style={pdfStyles.subTitle}>IV.II CROQUIS DE LOCALIZACIÓN</Text>
          </view>
        </View>


        <View style={pdfStyles.table}>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>MACRO</Text>
            <Text style={pdfStyles.tableCell}>MICRO</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Image style={pdfStyles.mainImage} src={mainImage} />
            <Image style={pdfStyles.mainImage} src={mainImage} />
          </View>
          <view style={pdfStyles.subTitleContainer}>
            <Text style={pdfStyles.subTitle}>IV.III. INFORMACIÓN DE ZONA</Text>
          </view>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Clasificación por zona:</Text>
            <Text style={pdfStyles.tableCell}>form.values.H2-U Habitacional Unifamiliar Densidad baja</Text>
            <Text style={pdfStyles.tableCell}>Vias de acceso:</Text>
            <Text style={pdfStyles.tableCell}>form.values.Vias de acceso</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Índice de saturación de zona:</Text>
            <Text style={pdfStyles.tableCell}>form.values.90%</Text>
            <Text style={pdfStyles.tableCell}>Carac. panoramicas:</Text>
            <Text style={pdfStyles.tableCell}>form.values.paisaje urbano</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Contaminación ambiental:</Text>
            <Text style={pdfStyles.tableCell}>form.Values.Ninguna</Text>
            <Text style={pdfStyles.tableCell}>tipo de construcción:</Text>
            <Text style={pdfStyles.tableCell}>form.Values.Casa habitación</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Uso de suelo:</Text>
            <Text style={pdfStyles.tableCell}>form.Values.habitacional</Text>
            <Text style={pdfStyles.tableCell}>Intensidad de construccion:</Text>
            <Text style={pdfStyles.tableCell}>form.Values.0.00%</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Población:</Text>
            <Text style={pdfStyles.tableCell}>form.Values.densidad baja</Text>
            <Text style={pdfStyles.tableCell}>Servidumbres:</Text>
            <Text style={pdfStyles.tableCell}>form.Values.Con construccion al frente</Text>
          </View>

          <Text style={pdfStyles.tableCellFullWidth}>Servicio público y equipamiento urbano:</Text>
          <Text style={pdfStyles.tableCellFullWidth}>form.values.Servicio publico agua potbale drenajes etc</Text>

          <Text style={pdfStyles.tableCellFullWidth}>Tramo de calle, calles transversales limitrofes y orientación:</Text>
          <Text style={pdfStyles.tableCellFullWidth}>form.values.Norte: Kalahari Sur: El vizcaino Oriente: Poniente:</Text>

          <view style={pdfStyles.subTitleContainer}>
          <Text style={pdfStyles.subTitle}>IV.IV. DATOS DE LAS CONSTRUCCIONES</Text>
          </view>

          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>N° de pisos:</Text>
            <Text style={pdfStyles.tableCell}>Edad aproximada:</Text>
            <Text style={pdfStyles.tableCell}>Vida potable:</Text>
            <Text style={pdfStyles.tableCell}>Calidad de proyecto</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>form.values.numero de pisos</Text>
            <Text style={pdfStyles.tableCell}>form.values.edad aproximada</Text>
            <Text style={pdfStyles.tableCell}>form.values.vida potable</Text>
            <Text style={pdfStyles.tableCell}>form.values.calidad de proyecto</Text>
          </View>

          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>Calidad de construcción</Text>
            <Text style={pdfStyles.tableCell}>Unidades rentables</Text>
            <Text style={pdfStyles.tableCell}>Estado de conservación</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={pdfStyles.tableCell}>form.values.calidad de construcción</Text>
            <Text style={pdfStyles.tableCell}>form.values.unidades rentables</Text>
            <Text style={pdfStyles.tableCell}>form.values.estado de conservación</Text>
          </View>

          <view style={pdfStyles.subTitleContainer}>
          <Text style={pdfStyles.subTitle}>IV.V. TIPOS DE CONSTRUCCIÓN APRECIADOS</Text>
          </view>
          <View style={pdfStyles.tableRow}>
            <Text style={[pdfStyles.tableCell, pdfStyles.tableCellNoGrow]}>Tipo I:</Text>
            <Text style={pdfStyles.tableCell}>form.values.Tipo I</Text>
          </View>
          <View style={pdfStyles.tableRow}>
            <Text style={[pdfStyles.tableCell, pdfStyles.tableCellNoGrow]}>Tipo II</Text>
            <Text style={pdfStyles.tableCell}>form.values.Tipo II</Text>
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
    </Document>
  );
};

export default PDFDocument;
