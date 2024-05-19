import Pizza1 from '..//images/pizza1.png'
import Pizza2 from '../images/pizza2.png'
import Pizza3 from '../images/pizza3.png'
import Pizza4 from '../images/pizza4.png'
import Pizza5 from '../images/pizza5.png'
import Pizza6 from '../images/pizza6.png'
import Pizza7 from '../images/pizza7.png'
import Pizza8 from '../images/pizza8.png'
import likeDiv from '../image/pizza like.png'
import basketDiv from '../image/pizza basket.png'
import React from 'react';

const Pizza = () => {
    return (
        <div>
            <div className="container">
                <h1>Пицца:</h1>
                <div className="pizza-main">

                    <div className="block">
                        <div className="underImg">
                            <img src={Pizza1} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Папа Микс Рэнч</h2>
                        <p>Четыре любимых пиццы в одной: <br /> Цыпленок Рэнч, Ветчина и грибы, <br /> Четыре Сыра, Спайси Рэнч</p>

                        <div className="active-block">
                            <div className="span">
                            <span>118 сом</span>
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
                            <img src={Pizza2} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Греческая</h2>
                        <p>Фирменный томатный соус, <br /> Моцарелла, мягкий молодой сыр, <br /> маслины, лук, сочные томаты, <br /> острый халапеньо и орегано</p>

                        <div className="active-block">
                            <div className="span">
                            <span>365 сом</span>
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
                            <img src={Pizza3} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Сырная</h2>
                        <p>Фирменный томатный соус, <br /> Моцарелла</p>

                        <div className="active-block">
                            <div className="span">
                            <span>250 сом</span>
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
                            <img src={Pizza4} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Маргарита</h2>
                        <p>Фирменный томатный соус, Томаты, <br /> Орегано, Моцарелла</p>

                        <div className="active-block">
                            <div className="span">
                            <span>300 сом</span>
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
                            <img src={Pizza5} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Пепперони</h2>
                        <p>Фирменный томатный соус, <br /> Пепперони, Моцарелла. Пикантная!</p>

                        <div className="active-block">
                            <div className="span">
                            <span>365 сом</span>
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
                            <img src={Pizza6} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Чикен Блю Чиз</h2>
                        <p>Нежное куриное филе с кусочками <br /> сыра блю чиз, соусом Пармеджано, <br /> смесью итальянских сыров и сыром <br /> Моцарелла</p>

                        <div className="active-block">
                            <div className="span">
                            <span>115 сом</span>
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
                            <img src={Pizza7} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>10 Сыров</h2>
                        <p>Моцарелла, классический <br /> Чильеджини, мягкий молодой сыр, <br /> смесь 3х копченых итальянских <br /> сыров, сыр с голубой плесенью, <br /> Реджанито, Пармезан, Фонтин</p>

                        <div className="active-block">
                            <div className="span">
                            <span>485 сом</span>
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
                            <img src={Pizza8} alt="" />
                        </div>

                        <div className="main-text-content">
                        <h2>Хот Папа</h2>
                        <p>Фирменный томатный соус, <br /> Пепперони, Ароматная говядина, <br /> Халапеньо, Моцарелла</p>

                        <div className="active-block">
                            <div className="span">
                            <span>400 сом</span>
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

export default Pizza;