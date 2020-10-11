import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  type?: 'default' | 'primary';
  children?: React.ReactNode | string;
}

const cx = classNames.bind(styles);

const Button: React.FC<Props> = ({ className, children, type = 'default' }) => {
  const btnStyle: any = {};

  if (type === 'default') {
    btnStyle.backgroundColor = '#ffffff';
    btnStyle.color = '#000000';
  } else if (type === 'primary') {
    btnStyle.backgroundColor = '#6195FF';
    btnStyle.color = '#ffffff';
  }

  return (
    <div className={cx('btn', className)} style={btnStyle}>
      {children}
    </div>
  );
};

export default Button;
