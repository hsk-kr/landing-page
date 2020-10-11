import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const About: React.FC = () => {
  return <div className={cx('about')}>element</div>;
};

export default About;
