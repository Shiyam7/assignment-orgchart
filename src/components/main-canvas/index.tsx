import React from 'react';
import {DefaultProps, Employee,} from '../../utils';
import useEmployee from '../../hooks/useEmployee';
import OrgChart from '../org-chart';
import './index.css';

export type MainCanvasProps = Partial<DefaultProps> & {}

const MainCanvas: React.FC<MainCanvasProps> = (props) => {
    const { filters: { relation } , mutate: { updateManger }} = useEmployee();

    const handlerUpdateManager = (emp: Employee, newManager: Employee) => {
        updateManger(emp, newManager)
    }
    return (
        <div className='main-canvas' data-testid={props.TestId}>
            {relation && <OrgChart tree={relation} onUpdate={handlerUpdateManager} />}
        </div>
    )
}



export default MainCanvas;