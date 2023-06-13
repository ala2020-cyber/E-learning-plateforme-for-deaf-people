import logo from './logo.svg';
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";

import './App.css';
import Home from './views/Home/Home';
import Formateurs from './views/Formateurs/Formateurs';
import AddLivreurFrom from './views/Formateurs/AddLivreurFrom';
import Formations from './views/Formations/Formations';
import AddCommandeFrom from './views/Formations/AddCommandeFrom';
import Etudiants  from './views/Etudiants/Etudiants';
import AddClientFrom from "./views/Etudiants/AddClientFrom"; 
import Login from './views/Login/Login';
import EditLivreur from './views/Formateurs/EditLivreur';
import Notification from "./views/Notification/Notification";
import Error from './views/Error/Error';
import EditCommande from './views/Formations/EditCommande';
function App() {
   const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
     return isAuthenticated ? children : <Navigate to="/login" />;
   };
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route path="/"
          element={
            <PrivateRoute auth={{ isAuthenticated: true }}>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route index path="/formateurs" element={<Formateurs />} />
        <Route index path="/etudiant" element={<Etudiants />} />
        <Route index path="/formations" element={<Formations />} />
        <Route index path="/notification" element={<Notification />} />

        
        <Route path="*" element={<Error />} />
        <Route index path="/addlivreurfrom" element={<AddLivreurFrom />} />
        <Route index path="/addcommandefrom" element={<AddCommandeFrom />} />
        <Route index path="/addclientfrom" element={<AddClientFrom />} />
        <Route index path="/updatelivreur/:id" element={<EditLivreur />} />
        <Route index path="/updatecommande/:id" element={<EditCommande />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
