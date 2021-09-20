import profileReducer from './profileReducer'
import dialogReducer from './dialogReducer'
import sidebarReducer from './sidebarReducer'


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likecount: 11},
                {id: 2, message: 'How are you?', likecount: 20}],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Dima',
                    img: "https://png.pngtree.com/element_our/png_detail/20181206/avatar-vector-icon-png_262117.jpg"
                },
                {id: 2, name: 'Sasha', img: "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png"},
                {
                    id: 3,
                    name: 'Andrey',
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTue0QzcbncaPSxMCpLhzOab4a1Sux6xXpow&usqp=CAU"
                },
                {
                    id: 4,
                    name: 'Masha',
                    img: "https://banner2.cleanpng.com/20180423/stq/kisspng-computer-icons-avatar-icon-design-male-teacher-5ade176c2f4525.7023913115245044281936.jpg"
                }
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'U - loser'}
            ],
            newMessageText: ''
        },


        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Dima',
                    img: "https://png.pngtree.com/element_our/png_detail/20181206/avatar-vector-icon-png_262117.jpg"
                },
                {id: 2, name: 'Sasha', img: "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png"},
                {
                    id: 3,
                    name: 'Andrey',
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTue0QzcbncaPSxMCpLhzOab4a1Sux6xXpow&usqp=CAU"
                },
                {
                    id: 4,
                    name: 'Masha',
                    img: "https://banner2.cleanpng.com/20180423/stq/kisspng-computer-icons-avatar-icon-design-male-teacher-5ade176c2f4525.7023913115245044281936.jpg"
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('123');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;
