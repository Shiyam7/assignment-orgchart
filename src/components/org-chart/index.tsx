import { DefaultProps, EmployeeNode, findTreeHeight, findTreeWidth } from "../../utils"
import EmployeeCard from "../employee-card";
import './index.css'

type OrgChartProps = Partial<DefaultProps> & {
    tree: EmployeeNode
}

const Node = ({ data}: { data: EmployeeNode[]}) => {
    return (
      <>
       {data.map((item,index) => {
            let classNames = [];
            if(index === 0) classNames.push('first');
            if(data.length -1 === index) classNames.push('last');
            if(data.length === 1) classNames.push('only-child');
            return(
            <>
                <li className={classNames.join(' ')}>
                <div className="leaf">
                        <EmployeeCard employee={item} />
                    </div>
                    {item.subordinates?.length > 0 && (
                        <ul className="child">{<Node data={item.subordinates} />}</ul>
                    )}
                </li>
            </>
        )})}
      </>
    );
};


const OrgChart = ({tree}: OrgChartProps) => {
    const treeWidth = findTreeWidth([tree]);
    const treeHeight = findTreeHeight([tree]);

    return (
        <div className='org-chart' style={{ width: `${300 * 2 * treeWidth}px`, height: `${120 * 1 * treeHeight}px`}}>
            <ul className='root'>
                <li className="root-node">
                    <div className="leaf">
                        <EmployeeCard employee={tree} />
                    </div>
                    {tree.subordinates?.length ?  (
                        <ul className="child">{<Node data={tree.subordinates} />}</ul>
                    ):  null}
                </li>
            </ul> 
        </div>
    )
}

export default OrgChart;