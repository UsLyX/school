import './globalStyles/globalStyle.scss';

import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route, Navigate,
} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Main from './pages/Main/Main.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Photogalery from './pages/photoPage/Photogalery.jsx';
import Videogalery from './pages/videoPage/Videogalery.jsx';
import Plan from './pages/plan/Plan.jsx';
import NewPage from './pages/newPage/NewPage.jsx';
import Login from './pages/login/Login.jsx';
import Authorization from './pages/login/authorization/Authorization.jsx';
import Registration from './pages/login/registration/Registration.jsx';
import AdminPage from './pages/admin/AdminPage.jsx';
import AdminNews from './pages/admin/adminNews/AdminNews.jsx';
import AdminPlane from './pages/admin/adminPlane/AdminPlane.jsx';
import AdminMaterials from './pages/admin/adminMaterials/AdminMaterials.jsx';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path='/photogalery' element={<Photogalery />} />
          <Route path='/videogalery' element={<Videogalery />} />
          <Route path='/plane' element={<Plan />} />
          <Route path='/news/:id' element={<NewPage />} />
          <Route path="/login" element={<Login />}>
            <Route index element={<Navigate to='/authorization' replace/>} />
            <Route path="authorization" element={<Authorization />} />
            <Route path="registration" element={<Registration />} />
          </Route>
          <Route path="/admin" element={<AdminPage />}>
              <Route index element={<Navigate to="news" replace />} />
              <Route path="news" element={<AdminNews/>} />
              <Route path="plane" element={<AdminPlane/>} />
              <Route path="materials" element={<AdminMaterials/>} />
          </Route>
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
