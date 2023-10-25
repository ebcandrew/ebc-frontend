
import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const MapboxMap = ({ address }) => {
    const [map, setMap] = useState(null);

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWhtYWQtYWoiLCJhIjoiY2xrdDZlem5jMGJqODNkcGNwZGJ1YTU2biJ9.K-RqzjiErhwMUmvh3YCNEA';
        const longitude = 74.3587;
        const latitude = 31.5204;

        const map = new mapboxgl.Map({
            container: 'map', // Replace 'map' with the id of the div where you want to render the map
            style: 'mapbox://styles/mapbox/streets-v11', // Replace with your preferred map style
            center: [longitude, latitude],
            zoom: 12, // Replace with the initial zoom level
        });
        setMap(map);

        return () => map.remove(); // Cleanup the map when the component unmounts
    }, []);

    const handleAddressInput = (address) => {
        // Use the Mapbox Geocoding API to get latitude and longitude for the address
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                address
            )}.json?access_token=${mapboxgl.accessToken}`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data && data.features && data.features.length > 0) {
                    const [longitude, latitude] = data.features[0].center;
                    map.setCenter([longitude, latitude]);
                }
            })
            .catch((error) => {
                console.error('Error fetching geocoding data:', error);
            });
    };

    useEffect(() => {
        if (address && map) {
            // If the address prop is provided, update the map location
            handleAddressInput(address);
        }
    }, [address, map]);

    return <div id="map" style={{ width: '35vw', height: '50vh' }}></div>;
};

export default MapboxMap;