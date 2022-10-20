
let state = {

    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 0 },
            { id: 2, message: 'Its my first post', likesCount: 20 }
        ],
    },
    dialogsPage:{
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Its OK?' },
        { id: 4, message: 'Хэй бро, когда мой гост допишешь?' },
        { id: 5, message: 'Ок' }
    ],
    dialogs: [
        { id: 1, name: 'Алекс Портареску' },
        { id: 2, name: 'Максим Озерский' },
        { id: 3, name: 'Яна Пузына' },
        { id: 4, name: 'Армин Ван Бюрен' },
        { id: 5, name: 'Кто-то' }
    ]
},
    sidebar:{}
}

export let addPost = (postMessage) => {
    
    let newPost = {
        id: 5, 
        message: postMessage, 
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    debugger
}

export default state;