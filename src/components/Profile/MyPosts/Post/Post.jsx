import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.item}>
    <div><img src={props.smallPhoto !=null ? props.smallPhoto:
        'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg'} className={s.image} /></div>
    <div className={s.message}>{props.message}</div>
    <div>
    <span>Like {props.likecount}</span>
    </div>
    </div>
}

export default Post;
