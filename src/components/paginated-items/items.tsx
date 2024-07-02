import useEmployee from "../../hooks/useEmployee"
import { Employee } from "../../utils"
import EmployeeCard from "../employee-card"

type ItemProps = {
    currentItems: Employee[]
}

export const Items = ({ currentItems }: ItemProps) => {
    const {
        mutate: { setSelectedEmployee },
    } = useEmployee()

    const onClickHandler = (value: Employee) => {
        setSelectedEmployee(value)
    }

    return (
        <>
            {currentItems.length > 0 &&
                currentItems.map((value) => (
                    <div
                        key={`empoyee_card_${value.id}`}
                        onClick={() => onClickHandler(value)}
                        style={{ cursor: 'pointer' }}
                    >
                        <EmployeeCard employee={value} />
                    </div>
                ))}
        </>
    )
}

export default Items;