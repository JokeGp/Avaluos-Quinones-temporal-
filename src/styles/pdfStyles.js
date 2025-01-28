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
  logo: {
    width: 50,
    height: 50,
  },
  logoLeft: {
    width: 50, 
    height: 50, 
  },
  logoRight: {
    width: 50, 
    height: 50, 
  },
  mainImageContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  mainImage: {
    width: 200,
    height: 300,
  },
  table: {
    width: "100%",
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  tableCell: {
    width: "50%",
    border: "1px solid black",
    padding: 5,
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
  smallImage: {
    width: 100,
    height: 100,
    objectFit: "contain",
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
});

export default pdfStyles;

