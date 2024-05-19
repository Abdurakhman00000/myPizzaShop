import React, { useState } from 'react';

const Login = ({ addProduct }) => {

    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    function handleSubmit () {
        let newObject = {
            img: img,
            name: name,
            description: description,
            price: price,
            id: Date.now(),
        };
        addProduct(newObject)
    }


    return (
        <div>
            <div className="container">
                <div className="main-inputs">
                    <h1>Add Product</h1>
                    <input onChange={(e) => setImg(e.target.value)} type="text" placeholder='Place for img URL'/>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Food Name'/>
                    <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Description'/>
                    <input onChange={(e) => setPrice(e.target.value)} type="text" placeholder='Price'/>
                    <button onClick={handleSubmit}>CREATE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;