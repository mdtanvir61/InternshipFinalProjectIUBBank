import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./components/Context/Context.jsx";
import Layout from './components/layout/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import AccountsPage from './pages/AccountsPage.jsx';
import CardsPage from './pages/CardsPage.jsx';
import LoansPage from './pages/LoansPage.jsx';
import RemittancePage from './pages/RemittancePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import PrivateRoute from './components/Private/PrivateRoute.jsx';
import PublicRoute from './components/Private/PublicRoute.jsx';
import ResetPassword from './pages/ResetPassword.jsx';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="accounts" element={<AccountsPage />} />
            <Route path="cards" element={<CardsPage />} />
            <Route path="loans" element={<LoansPage />} />
            <Route path="remittance" element={<RemittancePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="login" element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } />
            <Route path="register" element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            } />
            <Route path="reset" element={
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            } />
            <Route path="dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;