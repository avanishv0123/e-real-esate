import '../index.css'
import $ from 'jquery';
import React, { useState } from 'react';
// import MyContext from "../context/MyContext";
// import { useContext } from 'react';

function HousePricePrediction() {

    const [area, setArea] = useState('');
    const [rooms, setRooms] = useState('');
    const [location, setLocation] = useState('');
    const [predictedPrice, setPredictedPrice] = useState('');


    const getPrediction = async () => {
        let response = await fetch('http://127.0.0.1:8000/prediction', {
            method: 'POST',
            body: JSON.stringify({ area, rooms, location }),
        });
        let data = await response.json()
        console.log(data)
        if (response.status === 200) {
            console.log('Prediction', data);
            setPredictedPrice(data['Prediction']);
        }

        $('.predictarea').css('display', 'block')
    };

    // const { username } = useContext(MyContext);

    return (
        <div className='predict'>
            <h1 className="pt-2 pb-2"> House Price Prediction</h1>
            <form onSubmit={(event) => event.preventDefault()}>
                <div id="filters" className='mt-2'>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <select name="location" id="location" className="form-control mb-2" onChange={(e) => setLocation(e.target.value)}>
                                    <option value="All">choose Location</option>
                                    <option value="Vasai">Vasai</option>
                                    <option value="virar"> virar</option>
                                    <option value="dahisar"> dahisar</option>
                                    <option value="borivali"> borivali</option>
                                    <option value="naigaon"> naigaon</option>
                                    <option value="bhayandar"> bhayandar</option>
                                    <option value="nallasopara"> nallasopara</option>
                                    <option value="mira road"> mira road</option>



                                </select>
                            </div>
                            <div class="form-group">
                                <select name="RoomSize" id="RoomSize" className="form-control mb-2" onChange={(e) => setRooms(e.target.value)}>
                                    <option value="All">choose Room Size </option>
                                    <option value="1BhK">1BhK</option>
                                    <option value="2Bhk"> 2Bhk</option>
                                    <option value="3Bhk+"> 3Bhk+</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type='number' step='any' className="form-control" placeholder='Enter Area between 1100 to 5000 (in sqft)' name='room_size' onChange={(e) => setArea(e.target.value)} />
                            </div>
                            <div class="form-group">

                            </div>


                            <button
                                className="btn btn-success mt-2 findbtn"
                                onClick={getPrediction}>
                                Get Predicted Price
                            </button>

                        </div>
                    </div>
                    <div className="mt-3 alert alert-success predictarea col-md-6 ">
                        {predictedPrice && (<label className='text-success font-weight-bolder'>Expected Price of House:&nbsp;&nbsp;&#x20B9; {predictedPrice}</label>)}
                        {/* <span>so {username} your dream home price expected as  {predictedPrice} </span> */}
                    </div>
                </div>
            </form >
        </div >
    );
}

export default HousePricePrediction;
