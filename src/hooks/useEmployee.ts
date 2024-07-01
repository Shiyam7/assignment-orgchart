import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import useFectchData from "./useFetchData"
import { SelectedTeamAtom, employeeFilteredAtom, searchAtom } from "../services/atoms";
import { Option, Employee, matchFilter } from "../utils";

const useEmployee = () => {

    const [searchText, setSearchText] = useAtom(searchAtom);
    const [selectedTeam, setSelctedTeam] = useAtom(SelectedTeamAtom);

    const [options, setOptions] = useState<Option[]>([]);

    
    const {isLoading, data, error } = useFectchData();

    const [filterdData, setFilteredData] = useAtom(employeeFilteredAtom);

    useEffect(() => {
        if(data.length > 0){
            const mappedOptions = data.reduce((prev: Option[], current: Employee) => {
                const values = prev.map(vl => vl.value.toLocaleLowerCase())
                if(values.indexOf(current.team.toLocaleLowerCase()) === -1){
                    prev.push({ value: current.team.toLocaleLowerCase(), label: current.team})
                }
                return prev;
            }, []);
            setOptions(mappedOptions);
        }
    }, [data])

    useEffect(() => {
        if(data.length > 0) {
            let copyData = [...data];

            if(selectedTeam !== null && selectedTeam !== ''){
                copyData = copyData.filter((vl) => vl.team.toLocaleLowerCase() === selectedTeam);
            }

            if(searchText !== null && searchText !== ''){
                copyData = matchFilter(copyData, searchText);
            }

            setFilteredData(copyData);
        }

    }, [ searchText, selectedTeam,data, setFilteredData])

    return {
        isLoading, error, data, options, 
        filters: {
            searchText,
            selectedTeam,
            filterdData
        },
        mutate: {
            setSearchText,
            setSelctedTeam
        }
    }
}

export default useEmployee;