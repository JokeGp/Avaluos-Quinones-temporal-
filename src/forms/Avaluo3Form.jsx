import React from "react";

export const Avaluo3Form = ({ formData, onInputChange, onImageChange }) => (
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
              onChange={onInputChange}
              required
            />
          </td>
          <td>
            <label>Tamaño del Terreno:</label>
            <input
              type="number"
              name="tamanoTerreno"
              value={formData.tamanoTerreno}
              onChange={onInputChange}
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
    <label>Subir Imagen:</label>
    <input type="file" onChange={onImageChange} />
  </>
);
