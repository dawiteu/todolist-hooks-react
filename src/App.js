import { useState } from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import TacheForm from './component/TacheForm'; 
import Tache from './component/Tache'; 

const App = () => {
  const [taches, setTaches] = useState([]); 
  let nbTaches = taches.length; 
      //const [tachesFinies, setTachesFinies] = useState([]);
      //let nbTacheF = tachesFinies.length;  
      //const [tacheAfaire, setTachesAfaire] = useState([]); 
      //let nbTacheA = tacheAfaire.length; 

  const handleAdd = (nom) => {
    const updateTaches = [...taches]; 
    //const idTache = nbTaches; // id de la tache 
    const noTache = nom;  // nom de la tache; 

        //const updateTacheAF = [...tacheAfaire]; 
          //console.log('Tu essaje dajoputer une tache !'+tache); 
    const tache = {nom: noTache}; // par defaut elle ne sont pas faites ;  

    //updateTaches.push(tache); 
    //updateTacheAF.push(tache);

    setTaches(updateTaches);
    //setTachesAfaire(updateTacheAF);
  }

  const handDel = (id) => {
    const updateTaches = [...taches]; 
    //const updateTachesFinies = [...tachesFinies]; 
    //const updateTachesAFaire = [...tacheAfaire]; 

    let idTache = updateTaches.findIndex((tache) => tache.id === id); 
    const objTache = updateTaches[idTache]; 

    if(objTache.fait === false){
        //updateTachesAFaire.splice(idTache, 1);
        //setTachesAfaire(updateTachesAFaire); 
    }else{
      //updateTachesFinies.splice(idTache, 1); 
      //setTachesFinies(updateTachesFinies); 
    }

    updateTaches.splice(idTache, 1); 
    setTaches(updateTaches);
  }

  const handCheck = (check) => {
    console.log(check); 

    /*
    const updateTaches = [...taches]; 
    const updateTachesFinies = [...tachesFinies]; 
    const updateTachesAFaire = [...tacheAfaire]; 
    
    let idTache = updateTaches.findIndex((tache) => tache.id === id); 
    let objTache = updateTaches[idTache]; 

    console.log(id);

    console.log(idTache);


    if(objTache.fait === false){
      objTache.fait = true;
      updateTachesFinies.push(objTache);
      updateTachesAFaire.splice(idTache, 1);
    }else{
      objTache.fait = false;
      updateTachesAFaire.push(objTache); 
      updateTachesFinies.splice(idTache, 1); 
    }   

    console.log(updateTachesAFaire);
    console.log(updateTachesFinies);

    setTachesAfaire(updateTachesAFaire);
    setTachesFinies(updateTachesFinies); 
    */
  }

  return (
    <div className="container">
      
      <div className="row">
        <div className="col-6 d-flex flex-column"> 
            <h5>Tâches TOTAL: {nbTaches}</h5>
            <h5>Tâches <span className="text-danger">à faire:</span> </h5>
            <h5>Tâches <span className="text-success">terminées:</span> </h5>
        </div>
        <div className="col-6 d-flex flex-column justify-content-center">
            <TacheForm onAdd={handleAdd} />
        </div>
      </div>
      <hr />
      <div className="container">

      { 
        nbTaches > 0 ? taches.map( (tache, i) => <Tache key={i} info={tache} onDel={handDel} onCheck={handCheck} /> ) : "Pas de taches pour l'instant"
      }
      
      </div>

      

      

    </div>
  );
}

export default App;
