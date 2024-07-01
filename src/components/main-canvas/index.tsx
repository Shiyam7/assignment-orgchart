import React from 'react';
import {DefaultProps, EmployeeNode, findTreeHeight, findTreeWidth} from '../../utils';
import './index.css';
import useEmployee from '../../hooks/useEmployee';
import EmployeeCard from '../employee-card';

export type MainCanvasProps = Partial<DefaultProps> & {}

const MainCanvas: React.FC<MainCanvasProps> = (props) => {
    const { filters: { relation } } = useEmployee()


    const treeWidth = findTreeWidth(relation);
    const treeHeight = findTreeHeight(relation);
    
    return (
    <div className='main-canvas'>
        {
            relation.length > 0 && (
                <div className='org-tree' style={{ width: `${treeWidth * 1.5 * 300}px`, height: `${treeHeight * 120}px`}}>
                    <Card data={relation} />
                </div>
               
            )
        }
    </div>)
}

const Card = (props: { data: EmployeeNode[]}) => {
    return (
      <>
        <ul>
        {props.data.map((item) => (
          <>
            <li className={item.manager === "" ? "root" : ""}>
                <EmployeeCard employee={item} />
              {item.subordinates?.length > 0 ? (<Card data={item.subordinates} />) : null}
            </li>
          </>
        ))}
        </ul>
      </>
    );
  };

export default MainCanvas;