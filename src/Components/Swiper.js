import React from 'react';
import Swiper from 'react-id-swiper';
import css from './Main/Main.module.scss';
import 'swiper/swiper.scss'

const SliderForText = () => {
    let params = {
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
          },
    };
    
    let arr = [
        {
            'key': 1,
            'text': 'Ink Lingerie',
            'nameclass': 'content__left-text'
        },
        {
            'key': 2,
            'text': 'Ink Lingerie',
            'nameclass': 'content__middle-text'
        },
        {
            'key': 3,
            'text': 'Ink Lingerie',
            'nameclass': 'content__right-text'
        }
    ]
    
    return (
        <Swiper {...params}>
            {arr.map( item => <div key={item.key} className={css[item.nameclass]}>{item.text}</div>)}
        
            {/* <div key='1' className={css['content__left-text']}>Ink Lingerie</div>
            <div key='2' className={css['content__middle-text']}>Ink Lingerie</div>
            <div key='3' className={css['content__right-text']}>Ink Lingerie</div> */}
        </Swiper>
    );
}

export default SliderForText;
