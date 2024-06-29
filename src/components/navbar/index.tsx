import {DefaultProps} from '../../utils';
import './index.css';

export type NavBarProps = Partial<DefaultProps> & {
    title: string
};


const NavBar = ({title, TestId, Children}: NavBarProps) => {
    return (
        <div data-testid={TestId} className='nav-bar'>
            <div>
                <h1>{title}</h1>
            </div>
            {Children ? (
                <div>{Children}</div>
            ): null}
        </div>
    )
};



export default NavBar;