import {DefaultProps} from '../../utils';

export type NavBarProps = Partial<DefaultProps>;

const defaultProps: NavBarProps = {
     TestId: "nav-bar"
}

const NavBar = (props: NavBarProps) => {
    return (
        <div data-testid={props.TestId}>NavBar</div>
    )
};

NavBar.defaultProps = defaultProps


export default NavBar;