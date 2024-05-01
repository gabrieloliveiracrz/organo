import React from 'react'
import './Colaborador.css'

export const Colaborador = ({ nome, cargo, imagem, corDeFundo }) => {
  const css = { backgroundColor: corDeFundo }
  return (
    <div className="colaborador">
      <div className="cabecalho" style={css}>
        <img src={imagem} alt="" />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}
