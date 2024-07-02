import './index.css'
import { DefaultProps, Employee } from '../../utils'

type EmployeeCardProps = Partial<DefaultProps> & {
    employee: Employee
}

const EmployeeCard = ({ employee, TestId }: EmployeeCardProps) => {
    return (
        <div data-testid={TestId} className="employee-card">
            <img
                src={`https://randomuser.me/api/portraits/men/${employee.id}.jpg`}
                alt="avatar"
                className='avatar'
            />
            <div className="details">
                <p className="name">{employee.name}</p>
                <p>{employee.designation}</p>
                <p>
                    {' '}
                    <span className="team"><i>{employee.team}</i></span>
                </p>
            </div>
        </div>
    )
}

export default EmployeeCard
