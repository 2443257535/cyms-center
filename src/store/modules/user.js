const state = {
    username: sessionStorage.userName,//  3145e370697742a9adeb94eb2ca1c8c1
}

const mutations = {
    changeUserName: (state,value) =>{
        state.username = value;
        sessionStorage.userName = value;
    }
}

export default {
    state,
    mutations
}