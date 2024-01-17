import React, {useState} from 'react';

function Home() {
    const [num, setNum] = useState([]);

    const generatenumbers = [];
    const genClick = ()=> {
        for(let i = 0; i<5; i++){
            generatenumbers.push(Math.floor(Math.random() * 15) +1);
        }
        setNum(generatenumbers);
        console.log(generatenumbers);
    };

    const checkClick = ()=> {
        fetch("http://localhost:8000/api/checkticket", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({numbers: generatenumbers})
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    };


    return (
        <>
            <div>
              <h3>Welcome to Erics Lottery</h3>
            </div>
            <div>
                <ul>
                    {num.map((number, index) => (
                        <li key={index}>{number}</li>
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={genClick}>Generate Numbers</button>
            </div>
            <div>
                <h3>Prize: </h3>
            </div>
            <div>
                <button onClick={checkClick}>Check Ticket</button>
            </div>
        </>
    );
}

export default Home;