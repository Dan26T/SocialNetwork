import profileReducer, {addPostAC, deletePostAC} from './profileReducer'
import React from 'react'

let state = {
    posts: [
        {id: 1, message: 'Hi', likecount: 11},
        {id: 2, message: 'How are you?', likecount: 20}
    ]
};
let action = addPostAC('test message post')

test('posts length should be incremented', () => {
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)

});

test('message of new post should be correct', () => {
    let newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe('test message post')

});

test('posts length should be decremented', () => {
    let deleteAction = deletePostAC(2)
    let newState = profileReducer(state, deleteAction)
    expect(newState.posts.length).toBe(1)

});