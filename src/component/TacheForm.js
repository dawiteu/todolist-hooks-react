import { useState } from "react";

const TacheForm = ({ onAdd }) => {
    let [tache, setTache]  = useState(""); 

    const onChange = (ev) => {
        const nvVal = ev.currentTarget.value;
        setTache(nvVal);
    }

    const handleAdd = () => {
        const val = tache; 
        tache = "";
        setTache(tache);
        return onAdd(val); 
    }

    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">Nom (tache): </span>
            </div>
            <input value={tache} type="text" className="form-control" onChange={onChange} />
            <button className="mx-2 btn btn-secondary" onClick={handleAdd}> Ajouter une tache </button>
        </div>
    );
}

export default TacheForm; 