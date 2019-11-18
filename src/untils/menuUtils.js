import lazyLoading from './lazyLoading';
import router from '@/router/index'

export default (routers,data) => {
    //获取服务端路由数据，component是个字符串， 所以需要转换
    generMenu(routers,data)
}
function generMenu(routers,data){
    if(data != undefined){
        data.forEach((item) =>{
            let menu = Object.assign({},item)
            menu.component = lazyLoading(menu.component)
            if(!item.leaf){
                menu.children = [];
                generMenu(menu.children,item.children)
            }
            routers.push(menu);
        })
    }
}