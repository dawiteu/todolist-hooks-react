import { useState } from 'react';
import './Tache.css';

const Tache = ({info, onDel, onCheck}) => {

    //let faux = false; 
    //const [check, setCheck] = useState(false); 

    const checkCheck = (ev) =>{
        let checked = ev.target.checked;  

        //console.log(checked);

        return onCheck(checked);
    }

    return (
        <div className="card d-inline-block">
            <div className="info">
                <input type="checkbox" onChange={(ev) => checkCheck(ev) } /> 
                <button onClick={(ev) => { onDel(info.id)} }>X</button>
            </div>

            <div className="pid">
                Tache id: {info.id}
            </div>
            <h5>Description:</h5>
            <p>{info.nom}</p>
        </div>
    );
}

export default Tache; 