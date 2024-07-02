import { useRef } from 'react'
import {  useDrop } from 'react-dnd'
import {
    DefaultProps,
    Employee,
    EmployeeNode,
    findTreeHeight,
    findTreeWidth,
} from '../../utils'
import EmployeeCard from '../employee-card'
import Node from './nodeRender'
import './index.css'

type OrgChartProps = Partial<DefaultProps> & {
    tree: EmployeeNode;
    onUpdate: (emp: Employee, newManager: Employee) => void;
}

const OrgChart = ({ tree, onUpdate }: OrgChartProps) => {
    const treeWidth = findTreeWidth([tree])
    const treeHeight = findTreeHeight([tree])

    const ref = useRef(null)

    const [{  canDrop }, drop] = useDrop({
        accept: 'e-card',
        canDrop: (i: { id: Number, index: number, item : Employee}) => {
            return i.id !== tree.id;
        },
        drop: (p) => {
            return tree;
        },
        collect: (monitor) =>{
            return {
                canDrop: monitor.canDrop()
            }
        },
    })

    drop(ref)

    return (
        <div
            className="org-chart"
            style={{
                width: `${300 * 2 * treeWidth}px`,
                height: `${120 * 1 * treeHeight}px`,
            }}
        >
            <ul className="root">
                <li className="root-node" key={`emp_sub_${tree.id}_${0}`}>
                    <div className={canDrop ? "leaf can-drop" : "leaf"}  ref={ref}>
                        <EmployeeCard employee={tree} />
                    </div>
                    {tree.subordinates?.length ? (
                        <ul className="child">
                            {<Node data={tree.subordinates} onUpdate={onUpdate}/>}
                        </ul>
                    ) : null}
                </li>
            </ul>
        </div>
    )
}

export default OrgChart
