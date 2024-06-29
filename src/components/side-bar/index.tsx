import React from 'react';
import {DefaultProps} from '../../utils';
import './index.css';

export type SideBarProps = Partial<DefaultProps> & {}

const SideBar: React.FC<SideBarProps> = (props) => {
    return (<div className='side-bar'>Side Bar</div>)
}

export default SideBar;