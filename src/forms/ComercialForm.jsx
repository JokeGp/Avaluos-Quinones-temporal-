import React, { useState } from "react";

const ComercialForm = ({ handleGeneratePDF, initialData = null }) => {
  const isEditMode = Boolean(initialData);

  const [mainImage, setMainImage] = useState(null);
  const [formValues, setFormValues] = useState(
    initialData || {
      calle: "",
      numero: "",
      fraccionamiento: "",
      municipio: "",
      codigoPostal: "",
      estado: "",
      valorMercado: "",
      fechaAvaluo: "",
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setMainImage(reader.result); // Guardar la imagen en base64
      };
    } else {
      alert("Por favor selecciona una imagen válida.");
    }
  };

  return (
    <div>
      <h2>{isEditMode ? "Editar Avalúo Comercial" : "Nuevo Avalúo Comercial"}</h2>

      <div>
        <label>
          Imagen Principal:
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Calle:</label>
                <input
                  type="text"
                  name="calle"
                  value={formValues.calle}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <label>Número:</label>
                <input
                  type="text"
                  name="numero"
                  value={formValues.numero}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Fraccionamiento:</label>
                <input
                  type="text"
                  name="fraccionamiento"
                  value={formValues.fraccionamiento}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <label>Municipio:</label>
                <input
                  type="text"
                  name="municipio"
                  value={formValues.municipio}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Código Postal:</label>
                <input
                  type="text"
                  name="codigoPostal"
                  value={formValues.codigoPostal}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <label>Estado:</label>
                <input
                  type="text"
                  name="estado"
                  value={formValues.estado}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Valor de Mercado:</label>
                <input
                  type="text"
                  name="valorMercado"
                  value={formValues.valorMercado}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <label>Fecha de Avalúo:</label>
                <input
                  type="date"
                  name="fechaAvaluo"
                  value={formValues.fechaAvaluo}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <button
        onClick={() =>
          handleGeneratePDF({ mainImage, ...formValues })
        }
      >
        {isEditMode ? "Guardar Cambios" : "Generar PDF"}
      </button>
    </div>
  );
};

export default ComercialForm;
