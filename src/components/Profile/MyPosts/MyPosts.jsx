import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utilits/validation/validation";
import {Textarea} from "../../common/FieldControl/FieldControl";


const maxLength50 = maxLengthCreator(50)

const AddPost = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={'newPost'} validate={[required, maxLength50]} placeholder={'PostText'}/>
        <button>Add Post</button>
    </form>
}
const AddPostRedux = reduxForm({
    form: 'post'
}) (AddPost)

const MyPosts = (props) => {
    let posts = props.state.posts.map(post => <Post message={post.message} likecount={post.likecount}
                                                    smallPhoto={props.smallPhoto}/>)

    let onAddPost = (values) => {
        props.addPostClick(values.newPost);
    }


    return <div><h3>My posts</h3>
        <div>New post
            <AddPostRedux onSubmit={onAddPost}/>
        </div>
        <br></br>
        <br></br>
        <div>
            {posts}
        </div>
    </div>
}

export default MyPosts;
