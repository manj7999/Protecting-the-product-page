import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:productId' element={<ProductDetails />} />
        <Route path='/profile' element={<UserProfile />} />
      </Routes>
    </Layout>
  );
}

export default App;
