<template>
    <div>
        <div v-if="childhide == 'one'">
            <Child :hide="hide" @handleClick="changeClose">
                <p slot="header">{{ title }}</p>
                <div slot="body">
                    <ul v-for="(item,index) in list" :key="index">
                        <li>{{ item.title }}</li>
                        <li>{{ item.text }}</li>
                        <li>{{ item.end }}</li>
                    </ul>
                </div>
            </Child>
        </div>
        <div v-else-if="childhide == 'two'">
            <Child :hide="hide" @handleClick="changeClose">
                <p slot="header">{{ title }}</p>
                <div slot="body">
                    '我比较低调'
                </div>
            </Child>
        </div>
        <div v-else>
            <Child :hide="hide" @handleClick="changeClose">
                <p slot="header">{{ title }}</p>
                <div slot="body">
                    <h1>{{msg3}}</h1>
                </div>
            </Child>
        </div>
        <el-button type="primary" @click="shows('one')">{{ msg }}</el-button>
        <el-button type="primary" @click="shows('two')">{{ msg2 }}</el-button>
        <el-button type="primary" @click="shows('three')">{{ msg3 }}</el-button>
    </div>
</template>

<script>
import Child from '../component/child.vue';
export default {
    components:{
        Child
    },
    data(){
        return{
            hide: false,
            childhide: 'one',
            title:'同一个弹框',
            msg: '我是第一个练习生slot',
            msg2: '我是第二个练习生cxk',
            msg3: '我是第三个练习生 current',
            list:[
                {
                    title: '标题一',
                    text: '这是标题一的内容',
                    end: '结尾一'
                }, {
                    title: '标题二',
                    text: '这是标题二的内容',
                    end: '结尾二'
                }
            ]
        }
    },
    created(){
        
    },
    methods:{
        changeClose(show){
            console.log(show)
            this.hide = show;
        },
        shows(text){
            if(text == 'one'){
                this.childhide = 'one';
            }else if(text == 'two'){
                this.childhide = 'two';
            }else{
                this.childhide = 'three';
            }
            this.hide = true;
        }
    }
}
</script>

<style>

</style>
