const state = {
    Tags: [], //标签 tags.vue
}
const mutations = {
    TagsList(state,value){
        let exist = true;
        for(let i in state.Tags){
            if(state.Tags[i].title == value.title){
                exist = false;
                break;
            }
        }
        exist?state.Tags.push(value):'';
    },
    removeTagsList: (state,value) =>{
        for(let i in state.Tags){
            if(state.Tags[i].title == value.title){
                state.Tags.splice(state.Tags.splice.indexOf(i),1);
            }
        }
    }
}

export default {
    state,
    mutations
}