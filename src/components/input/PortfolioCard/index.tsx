/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLink } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

interface Props {
  img?: string;
}

const cx = classNames.bind(styles);

const PortfolioCard: React.FC<Props> = ({ img }) => {
  return (
    <div className={cx('portfolio-card')} >
      <img src={img} alt='Portfolio' />
      <div className={cx('overlay')}>
        <span>CATEGORY</span>
        <label>Portfolio Title</label>
        <div className={cx('btns')}>
        <a className={cx('btn')} href='#'>
          <FontAwesomeIcon color='white' icon={faLink} />
        </a>
        <a className={cx('btn')} href='#'>
          <FontAwesomeIcon color='white' icon={faSearch} />
        </a>
      </div>
      </div>
    </div>
  )
}

export default PortfolioCard;