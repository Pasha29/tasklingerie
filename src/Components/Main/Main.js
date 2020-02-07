import React from 'react';
import css from './Main.module.scss';
import SliderForText from '../Swiper';

const Main = () => {
  return (
    <main className={css['main']}>
      <section className={css['content']}>
        <div className={css['content__image']}>
          <div className={css['content__left-img']} />
          <div className={css['content__middle-img']} />
          <div className={css['content__right-img']} />          
        </div>
      </section>
      
      <section className={css['content__slider']}>
        <SliderForText />
      </section>

      <section className={css['main__soc-net']}>
          <div className={css['main__sn-text']}>Inst ----------- Fb</div>
      </section>
    </main>
  );
}

export default Main;