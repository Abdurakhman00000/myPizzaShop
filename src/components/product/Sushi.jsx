import Sushi1 from '../images/sushi1.png'
import Sushi2 from '../images/sushi2.png'
import Sushi3 from '../images/sushi3.png'
import Sushi4 from '../images/sushi4.png'
import Sushi5 from '../images/sushi5.png'
import Sushi6 from '../images/sushi6.png'
import Sushi7 from '../images/sushi7.png'
import Sushi8 from '../images/sushi8.png'
import likeDiv from '../image/pizza like.png'
import basketDiv from '../image/pizza basket.png'
import React from 'react';

const Sushi = () => {
    return (
        <div>
              <div className="container">
                <h1>Суши:</h1>
                <div className="pizza-main">

                    <div className="block">
                        <div className="underImg">
                            <img src={Sushi1} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Филадельфия классик</h2>
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
                            <img src={Sushi2} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Калифорния с лососем</h2>
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
                            <img src={Sushi3} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Норвежский</h2>
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
                            <img src={Sushi4} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Чиз лосось</h2>
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
                            <img src={Sushi5} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Чиз угорь</h2>
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
                            <img src={Sushi6} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Ямайка</h2>
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
                            <img src={Sushi7} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Мексиканский</h2>
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



                    <div className="block">
                        <div className="underImg">
                            <img src={Sushi8} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Окинава</h2>
                        <p>Тобико оранжевая, креветка, мягкий <br /> сыр, огурец, нори, рис</p>

                        <div className="active-block">
                            <div className="span">
                            <span>290 сом</span>
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

export default Sushi;