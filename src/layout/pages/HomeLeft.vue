<template>
    <div class="home-left">
        <div class="edgegap">
            <el-button class="large" size="small" type="info">一键清除</el-button>
        </div>
        <div class="searchs">
            <el-input placeholder="房号/姓名" v-model="username" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <div class="content">
            <div class="box">
                <p class="title">餐厅</p>
                <el-select v-model="diningRoom" @change="selectDiningRoom">
                    <el-option v-for="(item,index) in diningRoomList" :key="index" :label="item.label" :value="item.value" ></el-option>
                </el-select>
            </div>
            <div class="box">
                <p class="title">区域</p>
                <div class="span">
                    <span v-for="(item,index) in areaList" :key="item.id" :data-id="item.id" :class="item.class" @click="areaListChange(index)">
                       {{ item.text }}
                    </span>
                </div>
            </div>
            <div class="box">
                <p class="title">餐台类型</p>
                <div class="span">
                    <span v-for="(item,index) in diningType" :key="item.id" :data-id="item.id" :class="item.class" @click="diningTypeChange(index)">{{ item.text }}</span>
                </div>
            </div>
            <div class="box">
                <p class="title">台态</p>
                <div class="span">
                    <span v-for="(item,index) in status" :key="item.id" :data-id="item.id" :class="item.class" @click="statusChange(index)">{{ item.text }}</span>
                </div>
            </div>
            <div class="box">
                <p class="title">客态</p>
                <div class="span">
                    <span v-for="(item,index) in status" :key="item.id" :data-id="item.id" :class="item.class" @click="statusChange(index)">{{ item.text }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username: "",
            diningRoom: "zct",
            diningRoomList:[
                {
                    label: '中餐厅',
                    value: 'zct'
                }, {
                    label: '西餐厅',
                    value: 'xct'
                }, {
                    label: '公社一区',
                    value: 'yq'
                }, {
                    label: '公社二区',
                    value: 'eq'
                }
            ],
            areaList:[{
                    id: '0',
                    text: 'A楼',
                    class: ''
                }, {
                    id: '1',
                    text: 'B楼',
                    class: ''
            }],
            diningType:[{
                    id: '0',
                    text: '10人桌',
                    class: ''
                }, {
                    id: '1',
                    text: '卡座',
                    class: ''
                }, {
                    id: '2',
                    text: '包厢',
                    class: ''
                }, {
                    id: '3',
                    text: '散台',
                    class: ''
            }],
            status:[{
                    id: '0',
                    text: '停用',
                    class: ''
                }, {
                    id: '1',
                    text: '空台',
                    class: ''
                }, {
                    id: '2',
                    text: '预定',
                    class: ''
                }, {
                    id: '3',
                    text: '用餐',
                    class: ''
            }]
            
        }
    },
    methods:{
        selectDiningRoom(){
            console.log(this.diningRoom)
        },
        areaListChange(index){
            if(this.areaList[index].class == ''){
                this.areaList[index].class = 'active';
            }else{
                this.areaList[index].class = '';
            }        
        },
        diningTypeChange(index){
            if(this.diningType[index].class == ''){
                this.diningType[index].class = 'active';
            }else{
                this.diningType[index].class = '';
            }  
        },
        statusChange(index){
            if(this.status[index].class == ''){
                this.status[index].class = 'active';
            }else{
                this.status[index].class = '';
            } 
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
.home-left{
    padding: $pd-all;
    .edgegap{
        padding-bottom: $pd-left;
    }
    .content{
        
        .box{
            margin-top: $mr-top;
            p{
                margin: 0;
                margin-bottom: 5px;
            }
            .span{
                span{
                    display: inline-block;
                    font-size: 11px;
                    padding: 5px 8px;
                    background-color: #414952;
                    color: #ffffff;
                    opacity: 0.7;
                    cursor: pointer;
                    margin-right: 2px;
                    margin-bottom: 0;
                    &:hover{
                        background-color: $red;
                    }
                }
                .active{
                    background-color: $red;
                }
            }
        }
    }
}

</style>
