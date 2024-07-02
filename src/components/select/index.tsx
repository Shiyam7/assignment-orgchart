import { DefaultProps, Option } from '../../utils'
import './index.css'

import Select, { SingleValue } from 'react-select'

type CustomSelectProps = Partial<DefaultProps> & {
    options: Option[]
    onChange: (e?: String) => void
}

const CustomSelect = ({ options, onChange, TestId }: CustomSelectProps) => {
    const onChangeHandler = (newValue: SingleValue<Option>) => {
        onChange(newValue?.value)
    }

    return (
        <div data-testid={TestId} className='custom-select-container'>
            <Select
                options={options}
                // className="custom-select-container"
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
                        borderRadius: '35px',
                        height: '3em',
                    }),
                    menu: (base, props) => ({
                        ...base,
                        backgroundColor: '#393E46',
                    }),
                    option: (base, props) => ({
                        ...base,
                        backgroundColor: props.isFocused
                            ? '#222831'
                            : '#393E46',
                    }),
                    singleValue: (base, props) => ({
                        ...base,
                        color: '#EEEEEE',
                    }),
                    input(base, props) {
                        return {
                            ...base, 
                            color: '#EEEEEE'
                        }
                    },
                }}
            />
        </div>
    )
}

export default CustomSelect
