const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Dima',
            img: "https://png.pngtree.com/element_our/png_detail/20181206/avatar-vector-icon-png_262117.jpg"
        },
        {
            id: 2,
            name: 'Sasha',
            img: "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png"
        },
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
    ]
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.newMessage}]
            };
        default:
            return state;
    }
}

export const sendMessageAC = (newMessage) => ({type: SEND_MESSAGE, newMessage})

export default dialogReducer;
