import likeDiv from '../image/pizza like.png'
// import basketDiv from '../image/pizza basket.png'
// import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect } from 'react';

const List = ({ readProduct, product, deleteProduct }) => {

    useEffect(() => {
        readProduct()
    }, [])
    return (
        <div>
            <div className="container">
                <div className="pizza-main">
                {
                product.map((el, index) => (
                    <div key={index} className="cart">
                    <div className="cartImage">
                        <img src={el.img} alt="image" />
                    </div>

                    <div className="cart-text-content">
                    <h2>{el.name}</h2>
                    <p>{el.description}</p>

                    <div className="active-cart">
                        <div className="cart-span">
                        <span>{el.price} сом</span>
                        </div>

                        <div className="cart-content">
                            <div className="cart-like-div">
                                <img src={likeDiv} alt="" />
                            </div>

                            <button onClick={() => deleteProduct(el.id)} className="cart-delete-div">
                                <p>D</p>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
                ))
            }
                </div>
            </div>
        </div>
    );
};

export default List;