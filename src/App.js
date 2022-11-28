import { Routes, Route } from 'react-router-dom'
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

function App() {
  return (
  <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route exact path="ramos" element={<Ramos/>}>
            <Route path="mate" element={<Mate/>}/>
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
          </Route>
          <Route path="calificaciones" element={<Notas/>} />
          <Route path="calendario" element={<Calendario/>} />
          <Route path="perfil" element={<Perfil/>} />
          <Route path="ajustes" element={<Ajustes/>} />
          {/* <Route path="*" element={<Navigate to="/ramos" replace />} /> */}
        </Routes>
      </Layout>
  </ThemeProvider>
  );
}

export default App;
