const state = {
    navBarList:1, //每次点击navbar时，默认选中第一个
    slider: sessionStorage.routePath, //aside
    mainsHeight: ''
    
}

const mutations = {
    sliderChange(state,value){
        sessionStorage.routePath = value;
        state.slider = value;
    },
    changeMainsHeight(state,value){
        state.mainsHeight = value;
    }
}

export default {
    state,
    mutations
}