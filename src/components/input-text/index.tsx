import {DefaultProps} from '../../utils';
import { SearchIcon } from '../Icon';
import './index.css';

export type InputTextProps = Partial<DefaultProps> & {
    label: string;
    onChange: (e: string) => void;
}

const InputText: React.FC<InputTextProps> = ({label, onChange}) => {
    const name = "input_text_"+label.toLocaleLowerCase()

    const changeHandler = (e: any) => {
        onChange(e.target.value);
    }
    return (
        <div className="input-text"> 
            <input type='text' name={name} placeholder={label} onChange={changeHandler} autoComplete='off' />
            <SearchIcon color="#EEEEEE"/>
        </div>
    )
}

export default InputText;