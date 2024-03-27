//components/ShowList.js

import React, { useEffect, useState } from 'react';

export default function ShowList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/db-test');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Data from Database:</h1>
            <ul>
                {data.length > 0 ? (
                    data.map(item => (
                        <li key={item.category_id}>{item.category_name}</li>
                    ))
                ) : (
                    <li>No data available</li>
                )}
            </ul>
        </div>
    );
}
