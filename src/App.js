import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Ramos from './pages/Ramos'
import Notas from './pages/Notas'
import Calendario from './pages/Calendario'
import Perfil from './pages/Perfil'
import Ajustes from './pages/Ajustes'
import { createTheme, ThemeProvider } from '@mui/material'
import Layout from './components/Layout'
import Mate from './pages/ramos/Mate'

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe"
    }
  }
})

const ramos = [
  {
    nombre: 'mate',
    componente: <Mate/>,
    secciones: [
      {
        nombre_seccion: 'Unidad 1',
        componente: <div></div>,
        sub_secciones: []
      },
      {
        nombre_seccion: 'Unidad 2',
        componente: <div></div>,
        sub_secciones: []
      },
      {
        nombre_seccion: 'Certamen 2',
        componente: <div></div>,
        sub_secciones: []
      },
      {
        nombre_seccion: 'Unidad 3',
        componente: <div></div>,
        sub_secciones: []
      },
      {
        nombre_seccion: 'Certamen 3',
        componente: <div></div>,
        sub_secciones: []
      },
      {
        nombre_seccion: 'Unidad 4',
        componente: <div></div>,
        sub_secciones: []
      },
      {
        nombre_seccion: 'Global',
        componente: <div></div>,
        sub_secciones: []
      },
      {
        nombre_seccion: 'Ayudantía',
        componente: <div></div>,
        sub_secciones: []
      }
    ]
  }
]

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="ramos" element={<Ramos/>}>
              {/* {ramos.map(ramo => (
                <Route path={ramo.nombre} element={ramo.componente} >
                  {ramo.secciones.map(secs => (
                    <Route path={secs.nombre_seccion} element={secs.componente} >
                      {secs.sub_secciones.map(sub => (
                        <Route path={sub.nombre_sub} to={sub.componente} />
                      ))}
                    </Route>
                  ))}
                </Route>
              ))} */}
              <Route path="mate" element={<Mate/>} >
            </Route>
            </Route>
            <Route path="calificaciones" element={<Notas/>} />
            <Route path="calendario" element={<Calendario/>} />
            <Route path="perfil" element={<Perfil/>} />
            <Route path="ajustes" element={<Ajustes/>} />
            <Route path="*" element={<Navigate to="/ramos" replace />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
