import { ProductProvider } from './context/Product';
import { AppRouter } from './routes';
import { ToastContainer } from 'react-toastify'

import './styles/global.scss';

function App() {

  return (
    <>
      <ProductProvider>
        <AppRouter />
        <ToastContainer />
      </ProductProvider>
    </>
  )
}

export default App
