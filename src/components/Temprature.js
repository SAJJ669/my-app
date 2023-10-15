import React, { useState } from 'react'

export default function Temprature(props) {
    const [temp1, setTemp1] = useState('');

    const FtoC = () => {
        var celcius = temp1 - 32;
        setTemp1(celcius.toFixed(2));
    }

    const handleOnChange = (event) => {
        setTemp1(event.target.value);
        var celcius = temp1 - 32;
        setTemp1(celcius.toFixed(2));
    }

    return (
        <div>
            <div className="input-group mb-3">
                <div className="col-25">
                    <input type="number" className="form-control" value={temp1} onChange={handleOnChange} placeholder="Enter Temprature in F&#176;" aria-label="Temprature" aria-describedby="button-addon2" />
                </div>
                <h2 className="ms-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>=</h2>
                <div className="col-25 mx-2">
                    <input type="number" className="form-control" value={handleOnChange} aria-label="Temprature" aria-describedby="button-addon2" disabled />
                </div>
            </div>
            <button className={`btn btn-${props.mode === 'dark' ? 'success' : 'outline-success'} mb-3`} type="button" onClick={FtoC} id="button-addon2">Fahrenheit to Celcius</button>
        </div>
    )
}
