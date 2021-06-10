import React from 'react';
import burger from '../images/burger.jpg'
import burger2 from '../images/burger2.jpg'
const Content = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
                <img src={burger} alt="" className='h-full rounded mb-20 shadow' />
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl mb-2'>Burger Muffins</h2>
                    <p className='mb-2'>Cripsy, delicious, and nutritious</p>
                    <span>$55</span>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
                <img src={burger2} alt="" className='h-full rounded mb-20 shadow' />
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl mb-2'>Hawaiian Burgers</h2>
                    <p className='mb-2'>This is one of Ree's favorite recipes from one of her cookbooks.</p>
                    <span>$43</span>
                </div>
            </div>
        </>
    );
};

export default Content;