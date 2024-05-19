import Zakuski1 from '../images/zakuski1.png'
import Zakuski2 from '../images/zakuski2.png'
import Zakuski3 from '../images/zakuski3.png'
import Zakuski4 from '../images/zakuski4.png'
import Zakuski5 from '../images/zakuski5.png'
import Zakuski6 from '../images/zakuski6.png'
import likeDiv from '../image/pizza like.png'
import basketDiv from '../image/pizza basket.png'
import React from 'react';

const Zakuski = () => {
    return (
        <div>
              <div className="container">
                <h1>Закуски:</h1>
                <div className="pizza-main">

                    <div className="block">
                        <div className="underImg">
                            <img src={Zakuski1} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Картофельные Дольки</h2>
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
                            <img src={Zakuski2} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Хлебные Ломтики</h2>
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
                            <img src={Zakuski3} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Кальзоне Мясной</h2>
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
                            <img src={Zakuski4} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Халапеньо ролл <br /> 8шт</h2>
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
                            <img src={Zakuski5} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Картофель-фри</h2>
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
                            <img src={Zakuski6} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Куриные <br /> Крылышки</h2>
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



                  




                </div>
            </div>
        </div>
    );
};

export default Zakuski;