const state = {
    tagsShow: true,
    logoShow: true
}

const mutations = {
    tagsChange(state,value){
        state.tagsShow = value
    },
    logoChange(state,value){
        state.logoShow = value;
    }
}

export default {
    state,
    mutations
}