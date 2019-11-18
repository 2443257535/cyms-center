import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
Vue.use(Vuex)


//sessionStorage.routePath = '/subbranch';

const state = {
    //slider: sessionStorage.routePath,
    // navBarList:1, //每次点击navbar时，默认选中第一个
    //Tags: [], //标签 tags.vue
    //username: sessionStorage.userName,//  3145e370697742a9adeb94eb2ca1c8c1
    //mainsHeight: ''
    
}

// const mutations = {
//     sliderChange(slider,value){
//         sessionStorage.routePath = value;
//         this.state.slider = value;
//     },
//     TagsList(Tags,value){
//         let exist = true;
//         for(let i in this.state.Tags){
//             if(this.state.Tags[i].title == value.title){
//                 exist = false;
//                 break;
//             }
//         }
//         exist?this.state.Tags.push(value):'';
//     },
//     removeTagsList(Tags,value){
//         for(let i in this.state.Tags){
//             if(this.state.Tags[i].title == value.title){
//                 this.state.Tags.splice(this.state.Tags.splice.indexOf(i),1);
//             }
//         }
//     },
//     changeUserName(username,value){
//         this.state.username = value;
//         sessionStorage.userName = value;
//     },
//     changeMainsHeight(mainsHeight,value){
//         this.state.mainsHeight = value;
//     }
// }

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
    //state,
    //mutations,
    getters,
    modules
})

export default store