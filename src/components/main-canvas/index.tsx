import React from 'react';
import {DefaultProps,} from '../../utils';
import useEmployee from '../../hooks/useEmployee';
import OrgChart from '../org-chart';
import './index.css';

export type MainCanvasProps = Partial<DefaultProps> & {}

const MainCanvas: React.FC<MainCanvasProps> = (props) => {
    const { filters: { relation } } = useEmployee();
    return (
        <div className='main-canvas'>
            {relation && <OrgChart tree={relation} />}
        </div>
    )
}



export default MainCanvas;