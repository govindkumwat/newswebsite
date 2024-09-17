import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import Navbar from './component/Navbar';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const theme = createTheme({
  /** Put your mantine theme override here */
});
function App() {
  return (
    <>
    <MantineProvider theme={theme}>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="/detail" element={<DetailPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MantineProvider>
    </>
  );
}

export default App;
