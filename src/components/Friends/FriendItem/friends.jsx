import s from './../friends.module.css';

const Friend = (props) => {
    return <div className={s.friend}>
        <img src={props.img}/>
        <div>{props.name}</div>
    </div>

}

export default Friend;
