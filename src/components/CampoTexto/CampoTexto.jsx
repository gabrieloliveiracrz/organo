import React from 'react'
import './CampoTexto.css'

export const CampoTexto = ({
  obrigatorio,
  label,
  placeholder,
  valor,
  aoAlterado,
}) => {
  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value)
  }

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}
