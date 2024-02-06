import './index.css' ;
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/login';
import Search from './pages/search';
import SearchResultPage from './pages/searchResult';
import ResultsPage from './components/Results';
import Navbar from './components/Navbar';
import Navbaradmin from './components/nabvaradmin';
import Navbarmdrtr from './components/navbarmdrtr';
import Signin from './pages/signin';
import Pageprncpl from './pages/pageprncpl';
import Options from './components/optionrech';
import SearchResult from './pages/searchResult';
import ArticleDetails from './pages/articleDetailles'
import EditProfil from './pages/editProfil'
import ProfilSettings from './pages/profileSettings'
import UserAccount from './pages/userAccount'
import Favourites from './components/Favorites';
import ModifierArticle from "./pages/modifierArticle"
import Uploadbar from './components/uploadbar' ; 
import Homeadmin from './pages/homeadmin'
import Homemdrtr from './pages/homemdrtr'
import Userinfo from './pages/userinfo';
import  Error from "./components/errorMessage";
import Accountsidebar2 from "./components/accountsidebar2";
import Cookies from "js-cookie";
import { useLocation } from 'react-router-dom';



const testarticle = {
  title: "Understanding Machine Learning Algorithms",
  author: "John Smith",
  institutions :"Ecole superieur d'informatique",
  keyword:"Machine Learning, Algorithms, Data Science, Artificial Intelligence",
  références:"",
  sumup:"This article by John Smith provides an insightful overview of various machine learning algorithms commonly used in data science and artificial intelligence" ,
  date:"12/12/2023",
  details:"Le machine learning, ou apprentissage automatique, est une branche de l'intelligence artificielle qui révolutionne de nombreux domaines. Il permet aux ordinateurs d'apprendre et de s'améliorer à partir de données, sans être explicitement programmés pour chaque tâche. Ce champ d'étude repose sur des algorithmes et des modèles qui permettent aux machines de détecter des modèles dans les données et de prendre des décisions intelligentes en se basant sur ces modèles. Les Types de Machine Learning 1. Apprentissage Supervisé :Ce type implique des données étiquetées, où l'algorithme apprend à prédire des résultats basés sur des exemples fournis. Par exemple, la classification d'emails en spam ou non spam.                                                     2. Apprentissage Non Supervisé :Les données non étiquetées sont utilisées ici. L'algorithme trouve des structures et des modèles par lui-même. Un exemple est la segmenta                                           afficher plus...."
}
const user = {
  name:"MEOW123",
  email:"Meaox123@gmail.com",
  password:"123456789",
};
/*import Uploadbar from './components/uploadbar' ; 
import Homeadmin from './pages/homeadmin' ;
import Homemdrtr from './pages/homemdrtr'; */

const App = () => {
  const  [admin,setAdmin] = useState(false)  ;   const  [user,setUser] = useState(false)  ;   const  [moderateur,setModerateur] = useState(false)  ; 
 const  [none,setNone] = useState(false)  ; 
  useEffect( () =>{
      if ( Cookies.get("NAME")=== undefined ||   Cookies.get("NAME")=== null  ||   Cookies.get("NAME")=== '') 
      {
        setNone(true) ; 
      }
      else
      {
        if(Cookies.get("USER") == "user")  setUser(true) ; 
        else if (Cookies.get("USER") == "administrateur")  setAdmin(true); 
        else if (Cookies.get("USER") == "modetateur")  setModerateur(true) ;
      }
})   

const mdrtrData = {
  name: "John Doe",
  email: "john.doe@example.com",
  password: "password123",
};
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  password: "password123",
};

return (
  <div className="App">
 {/*          {   none && <Router>
   
   <Routes>
     <Route path="/" element={<Pageprncpl />} />
     <Route path="/signin" element={<Signin />} />
     <Route path="/login" element={<Login />} />
   </Routes>

</Router>
} */}
  {/* {  user && <Router>
        <Navbar />
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/userAccount" element={<UserAccount/>} />
    </Routes>
  </Router> } */}  
  {/* {   admin && <Router>
        <Navbaradmin />
    <Routes>
      <Route path="/" element={<Homeadmin/>} />
      <Route path="/editProfil" element={<EditProfil/>} />
    </Routes>
  </Router>    } */}
  {   /* moderateur &&   */<Router>
  
        <Navbarmdrtr />
    <Routes>
      <Route path="/" element={<Homemdrtr/>} />
      <Route path="/Accountsidebar2" element={<Accountsidebar2/>} />
      <Route path="/userinfo" element={<Userinfo mdrtr={mdrtrData }/>} />
      <Route path="/modifrtcl/:pk" element={<ModifierArticle />} />
      <Route path="/login" element={<Login />} />
    </Routes>  
  </Router> 
   
  
  } 


 
  </div>
);
};

export default App;
