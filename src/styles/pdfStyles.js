import { StyleSheet } from "@react-pdf/renderer";

const pdfStyles = StyleSheet.create({
  body: {
    padding: "40 70",
    fontFamily: "Helvetica",
    fontSize: 10,
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  logoLeft: {
    width: "192px", 
    height: 25, 
  },
  logoRight: {
    width: "120px",
    height: 25, 
  },
  mainImageContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  mainImage: {
    maxWidth: "80%",
    height: 300,
  },
  table: {
    width: "100%",
    padding: "10 0",
    borderCollapse: "collapse", 
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tableCell: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
    flexGrow: 1, // Permite que las celdas crezcan para ocupar el espacio disponible
    flexShrink: 1, // Permite que las celdas se encojan
    flexBasis: "0", // Ajusta el ancho de las celdas automáticamente
    minWidth: 50, // Ajusta el ancho mínimo según sea necesario
  },
  footer: {
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerLeft: {
    fontSize: 10,
  },
  footerRight: {
    fontSize: 10,
    textAlign: "right",
  },
  tableCellFullWidth: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
    width: "100%", // Asegura que la celda ocupe todo el ancho
  },
  tableCellNoGrow: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
    flexGrow: 0, // No permite que las celdas crezcan
    flexShrink: 1, // Permite que las celdas se encojan
    flexBasis: "auto", // Ajusta el ancho de las celdas automáticamente
    minWidth: 50, // Ajusta el ancho mínimo según sea necesario
  },
   // Estilo para la línea de separación
   separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
    marginVertical: 10,
  }, 
  centeredText: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginVertical: 10,
  },
  //  PÁGINA 2 
  titleContainer: {
    alignItems: "center", 
    justifyContent: "center",
    textAlign: "center", 
  },
  pageTwoContainer: {
    padding: 20,
    fontSize: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 10,
    textAlign: "justify",
    marginBottom: 5,
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  pageTwoTable: {
    display: "table",
    width: "100%",
    marginVertical: 10,
  },
  pageTwoTableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 3,
  },
  pageTwoTableHeader: {
    backgroundColor: "#e0e0e0",
    fontWeight: "bold",
  },
  pageTwoTableCell: {
    flex: 1,
    padding: 3,
  },
  subTitleContainer: {
    backgroundColor: "#9dbafb", 
    width: "100%", 
    padding: 5, 
    marginVertical: 5,
    borderStyle: "solid",
    borderWidth: 1
  },
  subTitle:{
    textAlign: "center",
  }
});

export default pdfStyles;

