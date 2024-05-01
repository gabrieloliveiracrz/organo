import React from 'react'
import './Time.css'
import Colaborador from '../Colaborador'

export const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
  const css = { backgroundColor: corSecundaria }
  const titulo = { borderColor: corPrimaria }
  return (
    <div>
      {colaboradores.length > 0 && (
        <section className="time" style={css}>
          <h3 style={titulo}>{nome}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                key={index}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corDeFundo={corPrimaria}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
