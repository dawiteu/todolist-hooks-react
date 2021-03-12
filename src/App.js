import { useEffect, useState } from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import TacheForm from './component/TacheForm'; 
import Tache from './component/Tache'; 


let compteurTaches = 0; // au debut c'est a zero. 

const App = () => {

  const [taches, setTaches] = useState([]);
  const pages = ["all", "do", "to do"]; 
  let [pageContent, setPageContent] = useState(""); 

  let nbTaches = taches.length;


  const handleAdd = (nom) => {
    const updateTaches = [...taches];
    const idTache = compteurTaches+1; // id de la tache 
    compteurTaches++;
    const noTache = nom;  // nom de la tache;  
    const tache = {id: idTache, nom: noTache, fait: false}; // par defaut elle ne sont pas faites ;  
    updateTaches.push(tache); 
    setTaches(updateTaches);
  }

  const handDel = (id) => {
    const updateTaches = [...taches]; 
    let idTache = updateTaches.findIndex((tache) => tache.id === id); 
    updateTaches.splice(idTache, 1); 
    setTaches(updateTaches);
  }

  const handCheck = (check, id) => {
    let updateTaches = [...taches]; 
    let idOb = updateTaches.findIndex((tache) => tache.id === id);  
    let objT = updateTaches[idOb];
    check ? objT.fait = false : objT.fait = true;
    setTaches(updateTaches);
  }

  const upPage = (name) => {
    const tabTaches = [...taches]; 
    switch(name){

      default: case "all":
        pageContent = nbTaches > 0 ? tabTaches.map( (tache, i) => <Tache key={i} info={tache} onDel={handDel} onCheck={handCheck} /> ) : "Pas de taches pour l'instant";
        setPageContent(pageContent);
      break;

      case 'do':
        pageContent = nbTaches > 0 ? tabTaches.filter((tache) => tache.fait === true).map((tache, i) => <Tache key={i} info={tache} onDel={handDel} onCheck={handCheck}  /> ) : "Pas de taches.";  
        setPageContent(pageContent);
      break;

      case 'to do':
        pageContent = nbTaches > 0 ? tabTaches.filter((tache) => tache.fait === false).map((tache, i) => <Tache key={i} info={tache} onDel={handDel} onCheck={handCheck}  /> ) : "Pas de taches.";
        setPageContent(pageContent);
      break;
    }
   }

    const btnpage = (e) => {
      const parametr = e.target.outerText;
      const tabPage = [...pages];

      let result = tabPage.indexOf(parametr); 
      let pageName = tabPage[result];

      upPage(pageName);
    }

    useEffect( () => upPage(pageContent), [taches]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 d-flex flex-column"> 
            <h5>Tâches TOTAL: {nbTaches}</h5>
            <h5>Tâches <span className="text-danger">à faire:</span> 
            {taches.filter(tache => tache.fait===false).length}
            </h5>
            <h5>Tâches <span className="text-success">terminées:</span>  
            {taches.filter(tache => tache.fait===true).length}
            </h5>
        </div>
        <div className="col-6 d-flex flex-column justify-content-center">
            <TacheForm onAdd={handleAdd} />
            <ul className="d-flex m-2 justify-content-center list-unstyled">
              <li><button className="btn btn-secondary mx-2" onClick={(e) => btnpage(e)}>all</button></li>
              <li><button className="btn btn-secondary mx-2" onClick={(e) => btnpage(e)}>do</button></li>
              <li><button className="btn btn-secondary mx-2" onClick={(e) => btnpage(e)}>to do</button></li>
            </ul>
        </div>
      </div>
      <hr />
      <div className="container">
      { 
        //nbTaches > 0 ? taches.map( (tache, i) => <Tache key={i} info={tache} onDel={handDel} onCheck={handCheck} /> ) : "Pas de taches pour l'instant"
      }
      </div>

      <hr/>

      <div className="container">
        {pageContent ? pageContent : "Vous n'avez encore rien demadner"}
      </div>
       
    </div>
  );
}

export default App;


