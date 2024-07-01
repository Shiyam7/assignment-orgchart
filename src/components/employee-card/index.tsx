import './index.css'
import { DefaultProps, Employee } from '../../utils';

type EmployeeCardProps = Partial<DefaultProps> & {
    employee: Employee
}

const EmployeeCard = ({ employee, TestId } : EmployeeCardProps) => {
    return (
        <div data-testid={TestId} className='employee-card'>
            <h3>{employee.name}</h3>
            <p>{employee.designation}</p>
            <p>{employee.team}</p>
        </div>
    )
}

export default EmployeeCard