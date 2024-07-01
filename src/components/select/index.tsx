import { Option } from '../../utils';
import './index.css'

import Select, { ActionMeta, SingleValue } from 'react-select'

type CustomSelectProps = {
    options: Option[];
    onChange: (e?: String) => void;
}

const CustomSelect = ({options, onChange}: CustomSelectProps) => {
    const onChangeHandler = (newValue: SingleValue<Option>, actionMeta: ActionMeta<Option>) => {
        onChange(newValue?.value)
    }

    return (
        <Select 
            options={options} 
            className='custom-select-container'
            classNamePrefix="custom-select" 
            escapeClearsValue={true}
            isSearchable={true}
            placeholder="Teams"
            isClearable={true}
            onChange={onChangeHandler}
            styles={{
                control: (baseStyles, _) => ({
                    ...baseStyles,
                    borderColor: '#EEEEEE',
                    boxShadow: 'none',
                    backgroundColor: '#222831',
                    borderRadius: '35px'
                }),
                menu: (base, props) => ({
                    ...base,
                    backgroundColor: '#393E46'
                }),
                option: (base, props) => ({
                    ...base,
                    backgroundColor: props.isFocused ? '#222831' : "#393E46"
                }),
                singleValue: (base, props) => ({
                    ...base,
                    color: '#EEEEEE'
                })
                    
                
            }}
        />
    )
}

export default CustomSelect;