import React, { useState } from 'react';
import Login from '../components/product/Login';
import Searches from '../components/product/Searches';
import Pizza from '../components/product/Pizza';
import Sushi from '../components/product/Sushi';
import Combo from '../components/product/Combo';
import Desert from '../components/product/Desert';
import Zakuski from '../components/product/Zakuski';
import Basket from '../components/product/Basket';
import { Route, Routes } from 'react-router-dom';
import List from '../components/product/List';

const MainRoutes = () => {


    //! TODO LIST

    const [product, setProduct] = useState([]);
    function addProduct (newProduct) {
        let data = JSON.parse(localStorage.getItem('product')) || [];
        data.push(newProduct)
        localStorage.setItem('product', JSON.stringify(data))
    }

    function readProduct () {
        let data = JSON.parse(localStorage.getItem('product')) || [];
        setProduct(data)
    }


    function deleteProduct (id) {
        let data = JSON.parse(localStorage.getItem('product')) || [];
        let result = data.filter((el) => el.id !== id)
        localStorage.setItem('product', JSON.stringify(result))
        readProduct()
    }
    //! TODO LIST

    const ROUTERS = [
        {
            link: '/login',
            element: <Login addProduct={addProduct} />,
            id: 1,
        },

        {
            link: '/search',
            element: <Searches />,
            id: 2,
        },

        {
            link: '/basket',
            element: <Basket />,
            id: 3,
        },

        {
            link: '/list',
            element: <List readProduct={readProduct} product={product} deleteProduct={deleteProduct}/>,
            id: 4,
        },

        {
            link: '/pizza',
            element: <Pizza />,
            id: 5,
        },

        {
            link: '/sushi',
            element: <Sushi />,
            id: 6,
        },

        {
            link: '/combo',
            element: <Combo />,
            id: 7,
        },

        {
            link: '/desert',
            element: <Desert />,
            id: 8,
        },

        {
            link: '/zakuski',
            element: <Zakuski />,
            id: 9,
        },

      
    ];
    return (
        <Routes>
            {
                ROUTERS.map((item) => (
                    <Route path={item.link} element={item.element} key={item.id}/>
                ))
            }
        </Routes>
    );
};

export default MainRoutes;