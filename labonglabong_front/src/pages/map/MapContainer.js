import React, { useEffect } from 'react';
import Map from '../../components/Map'

const MapContainer = () => {

    useEffect(() => {
       Map();
    }, []);

    return (
        <div id='myMap' style={{
            width: '500px', 
            height: '500px'
        }}></div>
    );
}

export default MapContainer;