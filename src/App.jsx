import { useState } from 'react'
import Banner from './components/Banner'
import Formulario from './components/Formulario'
import Time from './components/Time'

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ]

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastro={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map(({ nome, corPrimaria, corSecundaria }) => (
        <Time
          key={nome}
          nome={nome}
          corPrimaria={corPrimaria}
          corSecundaria={corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === nome,
          )}
        />
      ))}
    </div>
  )
}

export default App
