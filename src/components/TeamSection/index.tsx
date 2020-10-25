import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

// Components
import SectionTitle from 'compoentns/SectionTitle';

const cx = classNames.bind(styles);

const Team: React.FC = () => {
  return (
    <div className={cx('container')}>
      <SectionTitle>Our Team</SectionTitle>
      <div className={cx('team-cards')}>
        
      </div>
    </div>
  );
};

export default Team;
