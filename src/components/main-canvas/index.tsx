import React from 'react';
import {DefaultProps} from '../../utils';
import './index.css';

export type MainCanvasProps = Partial<DefaultProps> & {}

const MainCanvas: React.FC<MainCanvasProps> = (props) => {
    return (<div className='main-canvas'>Main Canvas</div>)
}

export default MainCanvas;