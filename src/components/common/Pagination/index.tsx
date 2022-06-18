import { Pagination } from 'antd';
import React from 'react';
import style from './Pag.module.scss';

const Pag: React.FC = () => <Pagination className={style.pag} defaultCurrent={1} total={50} />;

export default Pag;
