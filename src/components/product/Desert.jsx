import Desert1 from '../images/desert1.png'
import Desert2 from '../images/desert2.png'
import Desert3 from '../images/desert3.png'
import Desert4 from '../images/desert4.png'
import Desert5 from '../images/desert5.png'
import Desert6 from '../images/desert6.png'
import Desert7 from '../images/desert7.png'
import likeDiv from '../image/pizza like.png'
import basketDiv from '../image/pizza basket.png'
import React from 'react';

const Desert = () => {
    return (
        <div>
              <div className="container">
                <h1>Десерты:</h1>
                <div className="pizza-main">

                    <div className="block">
                        <div className="underImg">
                            <img src={Desert1} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Донат Клубничный</h2>
                        <p>Лосось, мягкий сыр, огурец, нори, <br /> рис</p>

                        <div className="active-block">
                            <div className="span">
                            <span>360 сом</span>
                            </div>

                            <div className="active-content">
                                <div className="like-div">
                                    <img src={likeDiv} alt="" />
                                </div>

                                <div className="basket-div">
                                    <img src={basketDiv} alt="" />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>



                    <div className="block">
                        <div className="underImg">
                            <img src={Desert2} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Донат Кокосовый</h2>
                        <p>Лосось, майонез, тобико красная, <br /> огурец, нори, рис</p>

                        <div className="active-block">
                            <div className="span">
                            <span>340 сом</span>
                            </div>

                            <div className="active-content">
                                <div className="like-div">
                                    <img src={likeDiv} alt="" />
                                </div>

                                <div className="basket-div">
                                    <img src={basketDiv} alt="" />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>



                    <div className="block">
                        <div className="underImg">
                            <img src={Desert3} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Донат Тройной <br /> шоколад</h2>
                        <p>Хлопья нори, лосось, мягкий сыр, <br /> огурец, нори, рис</p>

                        <div className="active-block">
                            <div className="span">
                            <span>280 сом</span>
                            </div>

                            <div className="active-content">
                                <div className="like-div">
                                    <img src={likeDiv} alt="" />
                                </div>

                                <div className="basket-div">
                                    <img src={basketDiv} alt="" />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>



                    <div className="block">
                        <div className="underImg">
                            <img src={Desert4} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Маффин с <br /> кусочкамишоколада</h2>
                        <p>Лосось, мягкий сыр, нори, рис</p>

                        <div className="active-block">
                            <div className="span">
                            <span>350 сом</span>
                            </div>

                            <div className="active-content">
                                <div className="like-div">
                                    <img src={likeDiv} alt="" />
                                </div>

                                <div className="basket-div">
                                    <img src={basketDiv} alt="" />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>


                    <div className="block">
                        <div className="underImg">
                            <img src={Desert5} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Печенье кукис с <br /> Шоколадной Глазурью</h2>
                        <p>Угорь, кунжут, мягкий сыр, нори, рис</p>

                        <div className="active-block">
                            <div className="span">
                            <span>425 сом</span>
                            </div>

                            <div className="active-content">
                                <div className="like-div">
                                    <img src={likeDiv} alt="" />
                                </div>

                                <div className="basket-div">
                                    <img src={basketDiv} alt="" />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>



                    <div className="block">
                        <div className="underImg">
                            <img src={Desert6} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Шоколадный фондан</h2>
                        <p>Лосось, масаго оранжевая, мягкий <br /> сыр, огурец, нори, рис</p>

                        <div className="active-block">
                            <div className="span">
                            <span>370 сом</span>
                            </div>

                            <div className="active-content">
                                <div className="like-div">
                                    <img src={likeDiv} alt="" />
                                </div>

                                <div className="basket-div">
                                    <img src={basketDiv} alt="" />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>



                    <div className="block">
                        <div className="underImg">
                            <img src={Desert7} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Шоко скролс</h2>
                        <p>Спайси соус, тобико оранжевая, <br /> креветка, огурец, нори, рис</p>

                        <div className="active-block">
                            <div className="span">
                            <span>425 сом</span>
                            </div>

                            <div className="active-content">
                                <div className="like-div">
                                    <img src={likeDiv} alt="" />
                                </div>

                                <div className="basket-div">
                                    <img src={basketDiv} alt="" />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>



                 



                </div>
            </div>
        </div>
    );
};

export default Desert;