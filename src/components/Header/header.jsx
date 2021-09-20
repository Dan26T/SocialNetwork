import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.h}>
        <img src="https://cdn.worldvectorlogo.com/logos/dallas-mavericks.svg"/>
        <div className={s.loginBlock}> {props.isAuth ?
            <div><div><img src={props.logPhoto != null ? props.logPhoto :
                'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg'}/>
                <NavLink to={`/profile/${props.userId}`}>{props.login}</NavLink></div>
                <div><button onClick={props.logout}>LogOut</button></div>
            </div>

            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>;
}

export default Header;
