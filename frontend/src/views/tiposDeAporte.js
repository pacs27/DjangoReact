import React,{useEffect, useState} from 'react';
import Tabla from '../components/tabla';
import apiService from '../config/apiService';

const TiposDeAporte = () => {
    const ENDPOINT = 'tipos-de-aporte';

    const columnas = ['ID', 'Nombre', 'Cantidad de aportes'];
    const refColumnas = ['id', 'nombre', 'aportes'];
    const refPropsColumnas = ['', '', 'length'];
    const linkBase = '/tipos-de-aporte';
    const alineacionesColumnas = ['c', 'l', 'c'];

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await apiService(ENDPOINT, 'GET');
            setData(response);
        }
        getData();
    }, [])

    return(
        <div className="main container">
            <header className="sectionHeader">
                <h3>Tipos de aporte</h3>
            </header>
            <Tabla  columnas={columnas}
                    data={data}
                    refColumnas={refColumnas}
                    refPropsColumnas={refPropsColumnas}
                    linkBase={linkBase}
                    alineacionesColumnas={alineacionesColumnas}/>
        </div>
    );
};

export default TiposDeAporte;