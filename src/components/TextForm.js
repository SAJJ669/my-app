import React, { useState } from 'react'

export default function TextForm(props) {
    const [temp1, setTemp1] = useState('');
    const [temp2, setTemp2] = useState('');
    const [temp3, setTemp3] = useState('');
    const [temp4, setTemp4] = useState('');
    const [temp5, setTemp5] = useState('');
    const [temp6, setTemp6] = useState('');

    const FtoC = () => {
        var celcius = temp1 - 32;
        setTemp1(celcius.toFixed(2));
    }

    const CtoF = () => {
        var fahrenheit = temp2 * (9 / 5) + 32;
        setTemp2(fahrenheit.toFixed(2));
    }

    const FtoK = () => {
        var fahrenheit = (temp3 - 32) * 5 / 9 + 273.15;
        setTemp3(fahrenheit.toFixed(2));
    }

    const KtoF = () => {
        var kelvin = (temp4 - 273.15) * 9 / 5 + 32;
        setTemp4(kelvin.toFixed(2));
    }

    const CtoK = () => {
        var celcius = temp5 + 273.15;
        setTemp5(Number(celcius).toFixed(2));
    }

    const KtoC = () => {
        var kelvin = temp6 - 273.15;
        setTemp6(kelvin.toFixed(2));
    }

    // const clearText = () => {
    //     setTemp1('');
    //     setTemp2('');
    //     setTemp3('');
    //     setTemp4('');
    //     setTemp5('');
    //     setTemp6('');
    // }

    const handleOnChange = (event) => {
        setTemp1(event.target.value);
    }

    const handleOnChange2 = (event) => {
        setTemp2(event.target.value);
    }

    const handleOnChange3 = (event) => {
        setTemp3(event.target.value);
    }

    const handleOnChange4 = (event) => {
        setTemp4(event.target.value);
    }

    const handleOnChange5 = (event) => {
        setTemp5(event.target.value);
    }

    const handleOnChange6 = (event) => {
        setTemp6(event.target.value);
    }

    return (
        <div>
            <div className="mb-3">
                <h1 className='my-5' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>

                <div className="input-group mb-3">
                    <div className="col-25">
                        <input type="number" className="form-control" onChange={handleOnChange} placeholder="Enter Temprature in F&#176;" aria-label="Temprature" aria-describedby="button-addon2" />
                    </div>
                    <h2 className="ms-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>=</h2>
                    <div className="col-25 mx-2">
                        <input type="number" className="form-control" value={temp1} onChange={handleOnChange} aria-label="Temprature" aria-describedby="button-addon2" disabled/>
                    </div>
                </div>
                    <button className={`btn btn-${props.mode === 'dark' ? 'success' : 'outline-success'} mb-3`} type="button" onClick={FtoC} id="button-addon2">Fahrenheit to Celcius</button>

                <div className="input-group mb-3">
                    <div className="col-25">
                        <input type="number" className="form-control" onChange={handleOnChange2} placeholder="Enter Temprature in C&#176;" aria-label="Temprature" aria-describedby="button-addon2" />
                    </div>
                    <h2 className="ms-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>=</h2>
                    <div className="col-25 mx-2">
                        <input type="number" className="form-control" value={temp2} onChange={handleOnChange2} aria-label="Temprature" aria-describedby="button-addon2" disabled/>
                    </div>
                </div>
                    <button className={`btn btn-${props.mode === 'dark' ? 'success' : 'outline-success'} mb-3`} type="button" onClick={CtoF} id="button-addon2">Celcius to Fahrenheit</button>

                <div className="input-group mb-3">
                    <div className="col-25">
                        <input type="number" className="form-control" onChange={handleOnChange3} placeholder="Enter Temprature in F&#176;" aria-label="Temprature" aria-describedby="button-addon2" />
                    </div>
                    <h2 className="ms-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>=</h2>
                    <div className="col-25 mx-2">
                        <input type="number" className="form-control" value={temp3} onChange={handleOnChange3} readOnly='defaultValue' aria-label="Temprature" aria-describedby="button-addon2" disabled/>
                    </div>
                </div>
                    <button className={`btn btn-${props.mode === 'dark' ? 'success' : 'outline-success'} mb-3`} type="button" onClick={FtoK} id="button-addon2">Fahrenheit to Kelvin</button>

                <div className="input-group mb-3">
                    <div className="col-25">
                        <input type="number" className="form-control" onChange={handleOnChange4} placeholder="Enter Temprature in K&#176;" aria-label="Temprature" aria-describedby="button-addon2" />
                    </div>
                    <h2 className="ms-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>=</h2>
                    <div className="col-25 mx-2">
                        <input type="number" className="form-control" value={temp4} onChange={handleOnChange4} readOnly='defaultValue' aria-label="Temprature" aria-describedby="button-addon2" disabled/>
                    </div>
                </div>
                    <button className={`btn btn-${props.mode === 'dark' ? 'success' : 'outline-success'} mb-3`} type="button" onClick={KtoF} id="button-addon2">Kelvin to Fahrenheit</button>

                <div className="input-group mb-3">
                    <div className="col-25">
                        <input type="number" className="form-control" onChange={handleOnChange5} placeholder="Enter Temprature in C&#176;" aria-label="Temprature" aria-describedby="button-addon2" />
                    </div>
                    <h2 className="ms-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>=</h2>
                    <div className="col-25 mx-2">
                        <input type="number" className="form-control" value={temp5} onChange={handleOnChange5} readOnly='defaultValue' aria-label="Temprature" aria-describedby="button-addon2" disabled/>
                    </div>
                </div>
                    <button className={`btn btn-${props.mode === 'dark' ? 'success' : 'outline-success'} mb-3`} type="button" onClick={CtoK} id="button-addon2">Celcius to Kelvin</button>

                <div className="input-group mb-3">
                    <div className="col-25">
                        <input type="number" className="form-control" onChange={handleOnChange6} placeholder="Enter Temprature in K&#176;" aria-label="Temprature" aria-describedby="button-addon2" />
                    </div>
                    <h2 className="ms-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>=</h2>
                    <div className="col-25 mx-2">
                        <input type="number" className="form-control" value={temp6} onChange={handleOnChange6} aria-label="Temprature" aria-describedby="button-addon2" disabled/>
                    </div>
                </div>
                    <button className={`btn btn-${props.mode === 'dark' ? 'success' : 'outline-success'} mb-3`} type="button" onClick={KtoC} id="button-addon2">Kelvin to Celcius</button>
            </div>

            {/* <button type="button" onClick={clearText} className="btn btn-outline-dark col-3">Reset</button> */}
        </div>
    )
}
