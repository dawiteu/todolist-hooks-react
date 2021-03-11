import './Tache.css';

const Tache = ({info, onDel, onCheck}) => {
    return (
        <div className="card d-inline-block">
            <div className="info">
                <button onClick={() => {onCheck(info.fait, info.id) }} className={info.fait ? 'bg-green' : 'bg-orange'}>V</button>
                <button onClick={() => { onDel(info.id)} }>X</button>
            </div>
            <div className="pid">Tache id: {info.id}</div>
            <h5>Description:</h5>
            <p>{info.nom}</p>
        </div>
    );
}

export default Tache; 