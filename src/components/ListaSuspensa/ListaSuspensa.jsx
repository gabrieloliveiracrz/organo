import React from 'react'
import './ListaSuspensa.css'

export const ListaSuspensa = ({
  label,
  itens,
  aoAlterado,
  obrigatorio,
  valor,
}) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={obrigatorio}
        value={valor}
      >
        <option value=""></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}
