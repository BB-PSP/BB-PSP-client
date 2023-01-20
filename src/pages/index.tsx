import classNames from 'classnames/bind';

import RightArrow from '@/assets/svg/icons/right_arrow.svg';
import Background from '@/shared/Layout/Background';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <main className={cx('main')}>
      <Background />
      <h1 className={cx('title')}>bb:</h1>
      <h2 className={cx('sub_title')}>
        BB:PSP(Baseball: Player Stats Prediction)
      </h2>
      <nav className={cx('nav')}>
        <button className={cx('button')}>
          Professional team
          <RightArrow />
        </button>
        <button className={cx('button')}>
          Choose it yourself
          <RightArrow />
        </button>
      </nav>
    </main>
  );
}
