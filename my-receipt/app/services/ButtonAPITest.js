// ButtonAPITest.js
import React from 'react';

export default function ButtonAPITest() {

    const fetchData = async () => {
        try {
          const url = 'https://localhost:8080/v1/send_receipt';
          const data = {
            "totalAmount": 120,
            "dateNTime": "2024",
            "category": "Clothes",
            "companyName": "Nike",
            "myReceiptEmail": "sample@reciept.com"
          };
          const options = {
            method: 'POST', // or 'GET'.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          };
    
          const response = await fetch(url, options);
          const json = await response.json();
          //setResponse(json);
        } catch (error) {
          //setError('Error fetching data from the API');
        }
    };
      
    return (
        <button onClick={fetchData()}>API Test</button>
    );
}