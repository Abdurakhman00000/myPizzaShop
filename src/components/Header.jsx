import PointImg from './/image/pizza point.png'
import PhoneImg from './/image/pizza phone.png'
import UserImg from './/image/pizza user.svg'
import Search from './/image/pizza search.png'
import Basket from './/image/pizza basket.png'
import slidPizza from './/image/slider pizza.png'
import adSushi from './/image/ad sushi.png'
import adPizza from './/image/ad pizza.png'
import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header id='header'>
            <div className="container">
                <div className="header">

                    <div className="header-logo">
                        <h1>Pizza <span>Shop</span></h1>
                    </div>

                    <div className="header-address">
                        <div className="address1">
                            <img src={PointImg} alt="" />
                            <p>Турусбекова 109\3</p>
                        </div>

                        <div className="address2">
                            <img src={PhoneImg} alt="" />
                            <p> +996 559 70 85 15</p>
                        </div>
                    </div>


                    <div className="header-active">
                        <Link to='/login'>
                        <div className="icon1">
                            <img src={UserImg} alt="" />
                        </div>
                        </Link>

                        <Link to='/search'>
                        <div className="icon2">
                            <img src={Search} alt="" />
                        </div>
                        </Link>

                        <Link to='/basket'>
                        <button className="icon3">
                            <img src={Basket} alt="" />
                        </button>
                        </Link>

                        <Link to='/list'>
                        <div className="icon4">
                            <p>List</p>
                        </div>
                        </Link>
                    </div>

                </div>


                <div className="pod-header">
                    <div className="btn1">
                       <Link to='/pizza'>
                       <button>Пицца</button>
                       </Link>
                    </div>

                    <div className="btn2">
                       <Link to='/sushi'>
                       <button>Суши</button>
                       </Link>
                    </div>

                    <div className="btn3">
                        <Link to='/combo'>
                        <button>Комбо</button>
                        </Link>
                    </div>

                    <div className="btn4">
                        <Link to='/desert'>
                        <button>Десерты</button>
                        </Link>
                    </div>

                    <div className="btn5">
                        <Link to='/zakuski'>
                        <button>Закуски</button>
                        </Link>
                    </div>

                </div>


                {/* <div className="ad-blog-main">
                <div className="ad-block">
                    <img src={slidPizza} alt="" />
                </div>


                <div className="ad-sushi">
                    <img src={adSushi} alt="" />
                </div>


                <div className="ad-pizza">
                    <img src={adPizza} alt="" />
                </div>
                </div> */}
            </div>
        </header>
    );
};

export default Header;