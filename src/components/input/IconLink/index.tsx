import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  icon: any;
  href?: string;
}

const cx = classNames.bind(styles);

const IconLink:React.FC<Props> = ({ className, icon, href }) => {
  return (
    <a className={cx('btn', className)} href={href}>
      <FontAwesomeIcon color='white' icon={icon} />
    </a>
  )
};

export default IconLink;
