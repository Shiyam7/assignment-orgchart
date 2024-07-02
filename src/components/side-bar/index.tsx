import React from 'react'
import InputText from '../input-text'
import { DefaultProps } from '../../utils'
import PaginatedItems from '../paginated-items'
import CustomSelect from '../select'
import './index.css'
import useEmployee from '../../hooks/useEmployee'

export type SideBarProps = Partial<DefaultProps> & {}

const SideBar: React.FC<SideBarProps> = (props) => {
    const {
        isLoading,
        data,
        options,
        mutate: { setSearchText, setSelctedTeam },
        filters: { filterdData },
    } = useEmployee()

    const searchTextHandler = (value: String) => {
        setSearchText(value.toString())
    }

    const teamHandler = (value?: String) => {
        setSelctedTeam(value?.toString())
    }

    return (
        <div className="side-bar" data-testid={props.TestId}>
            <div className="filters">
                <CustomSelect options={options} onChange={teamHandler} TestId='combo-box' />
                <InputText label="search" onChange={searchTextHandler} />
            </div>

            {!isLoading && (
                <PaginatedItems
                    itemsPerPage={5}
                    items={filterdData.length > 0 ? filterdData : data}
                />
            )}
        </div>
    )
}

export default SideBar
