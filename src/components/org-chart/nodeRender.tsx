import { useRef } from "react";
import { Employee, EmployeeNode } from "../../utils";
import { useDrag, useDrop } from "react-dnd";
import EmployeeCard from "../employee-card";

const Node = ({ data, onUpdate }: { data: EmployeeNode[],onUpdate: (emp: Employee, newManager: Employee) => void; }) => {
    return (
        <>
            {data.map((item, index) => (
                <NodeRender item={item} index={index} length={data.length} key={`emp_sub_${item.id}`} onUpdate={onUpdate}/>
            ))}
        </>
    )
}

const NodeRender = ({
    item,
    index,
    length,
    onUpdate
}: {
    item: EmployeeNode
    index: number
    length: number,
    onUpdate: (emp: Employee, newManager: Employee) => void;
    
}) => {
    const ref = useRef(null)
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'e-card',
        item: { id: item.id, index, item },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end(_, monitor) {
            const dropTarget = monitor.getDropResult();
            onUpdate(item, dropTarget as Employee);
        },
        
    }))

    const [{ canDrop }, drop] = useDrop({
        accept: 'e-card',
        canDrop: (i: { id: Number, index: number, item : Employee}) => {
            return i.id !== item.id;
        },
        drop: (p) => {
            return item;
        },
        collect: (monitor) =>{
            return {
                canDrop: monitor.canDrop()
            }
        },
    })

    drag(drop(ref));

    let classNames = []
    if (index === 0) classNames.push('first')
    if (length - 1 === index) classNames.push('last')
    if (length === 1) classNames.push('only-child')

    return (
        <>
            <li className={classNames.join(' ')} key={`emp_sub_${item.id}_${index}`}>
                <div
                    className={canDrop ? "leaf can-drop" : "leaf"} 
                    ref={ref}
                    style={{ cursor: isDragging ? 'grab' : 'pointer', borderWidth: isDragging ? '2px' : '1px' }}
                >
                    <EmployeeCard employee={item} />
                </div>
                {item.subordinates?.length > 0 && (
                    <ul className="child">
                        {<Node data={item.subordinates} key={`emp_sub_${item.id}`} onUpdate={onUpdate}/>}
                    </ul>
                )}
            </li>
        </>
    )
}

export default Node;