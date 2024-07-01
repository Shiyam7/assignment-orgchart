import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import useFectchData from './useFetchData'
import {
    SelectedTeamAtom,
    employeeAtom,
    employeeFilteredAtom,
    relationAtom,
    searchAtom,
} from '../services/atoms'
import {
    Option,
    Employee,
    matchFilter,
    buildEmployeeTree,
    findEmployee,
} from '../utils'

const useEmployee = () => {
    const [searchText, setSearchText] = useAtom(searchAtom)
    const [selectedTeam, setSelctedTeam] = useAtom(SelectedTeamAtom)
    const [filterdData, setFilteredData] = useAtom(employeeFilteredAtom)
    const [selectedEmployee, setSelectedEmployee] = useAtom(employeeAtom)
    const [relation, setRelation] = useAtom(relationAtom)

    const [options, setOptions] = useState<Option[]>([])

    const { isLoading, data, error } = useFectchData()

    useEffect(() => {
        if (data.length > 0) {
            const mappedOptions = data.reduce(
                (prev: Option[], current: Employee) => {
                    const values = prev.map((vl) =>
                        vl.value.toLocaleLowerCase()
                    )
                    if (
                        values.indexOf(current.team.toLocaleLowerCase()) === -1
                    ) {
                        prev.push({
                            value: current.team.toLocaleLowerCase(),
                            label: current.team,
                        })
                    }
                    return prev
                },
                []
            )

            setOptions(mappedOptions)
            const [first] = data
            setSelectedEmployee(first)
        }
    }, [data, setSelectedEmployee, setRelation])

    useEffect(() => {
        if (data.length > 0 && selectedEmployee) {
            const relation = buildEmployeeTree(data)
            const [root] = relation
            const node = findEmployee(root, Number(selectedEmployee.id))
            if (node) {
                setRelation(node)
            }
        }
    }, [data,selectedEmployee, setRelation])

    useEffect(() => {
        if (data.length > 0) {
            let copyData = [...data]

            if (selectedTeam !== null && selectedTeam !== '') {
                copyData = copyData.filter(
                    (vl) => vl.team.toLocaleLowerCase() === selectedTeam
                )
            }

            if (searchText !== null && searchText !== '') {
                copyData = matchFilter(copyData, searchText)
            }

            setFilteredData(copyData)
        }
    }, [searchText, selectedTeam, data, setFilteredData])

    return {
        isLoading,
        error,
        data,
        options,
        filters: {
            searchText,
            selectedTeam,
            selectedEmployee,
            filterdData,
            relation,
        },
        mutate: {
            setSearchText,
            setSelctedTeam,
            setSelectedEmployee,
        },
    }
}

export default useEmployee
