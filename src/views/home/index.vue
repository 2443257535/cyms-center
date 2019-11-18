<template>
    <div class="container page-content">
       <div class="area-content" v-if="dialogVisible">
           <div class="wrap">
                <div v-for="(item,index) in floorList" :key="index" class="floors">
                    <div class="floor">
                        <span>{{ item.name }}</span>
                    </div>
                    <ul class="rooms">
                        <li class="room active" v-for="(list,i) in item.rooms" :key="index+i" @dblclick="dialogShow(index,i)" @contextmenu="notClick" @mouseup="handleChange">
                            <div class="left">
                                    <div class="room-num">{{ list.number }}</div>
                                    <div class="type">{{ list.seat}}</div>
                            </div>
                            <div class="right">
                                <i :class="list.icon"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bottom wrap">
                <div class="tags">
                    <span class="tag" v-for="(item,index) in tags" :key="index">
                        <el-tag :type="item.type" size="mini" effect="dark" >
                            {{ item.label }}
                        </el-tag>
                        <span class="span">{{index}}</span>
                        <small>台</small>
                    </span>
                    <el-button type="danger" size="mini" @click="reload">刷新房态</el-button>
                </div>
                <div class="back">
                    当前选中餐台数：{{ tags.length }}
                    <el-button size="mini" type="primary">返回</el-button>
                </div>
            </div>
        </div>
        <div v-else class="orders-boxs">
            <div class="top">
                <h1 class="title">订单</h1>
            </div>
            <div class="content">
                    <div class="left">
                        <div class="left-top">
                            <div class="room-order">
                                <p class="num">台号：<span>A1001</span></p>
                                <span class="order">房单：L0909098934782</span>
                            </div>
                            <div class="tabs">
                                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                                    <el-tab-pane label="明细账" name="mxz"></el-tab-pane>
                                    <el-tab-pane label="订单信息" name="ddxx"></el-tab-pane>
                                    <el-tab-pane label="操作日志" name="czrz"></el-tab-pane>
                                    <el-tab-pane label="异常账务" name="yczw"></el-tab-pane>
                                </el-tabs>
                            </div>
                        </div>
                        <div class="left-tables">
                            <div v-if="activeName=='mxz'">
                                <el-table highlight-current-row :data="rightTable" @selection-change="handleSelectionChange" style="width:100%;">
                                        <el-table-column
                                            type="selection"
                                            width="55"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="break"
                                            label="折"
                                            width="50"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="number"
                                            label="单号"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="name"
                                            label="菜名"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="unit"
                                            label="单位"
                                            width="50"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="price"
                                            label="价格"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="save"
                                            label="库存"
                                            width="50"
                                        ></el-table-column>
                                    </el-table>
                            </div>
                            <div v-else-if="activeName == 'ddxx'">
                                订单信息
                            </div>
                            <div v-else-if="activeName == 'czrz'">
                                操作日志
                            </div>
                            <div v-else>
                                异常账务
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="right-top">
                            <div class="order-input">
                                <span>菜单</span>
                                <div>
                                    <el-input placeholder="请输入内容" v-model="input3">
                                        <el-button slot="append" icon="el-icon-search"></el-button>
                                    </el-input>
                                </div>
                            </div>
                        </div>
                        <div class="right-tabs">
                            <el-tabs class="tab" tab-position="left" v-model="menusValue">
                                <el-tab-pane
                                    v-for="(item,index) in menus" 
                                    :key="index" 
                                    :label="item.name"
                                    :name="item.label"
                                ></el-tab-pane>
                            </el-tabs>
                            <div class="right-tabs-pane">
                                <div v-if=" menusValue == 'all'">
                                    <el-table :data="rightTable" style="width:100%;">
                                        <el-table-column
                                            prop="break"
                                            label="折"
                                            width="50"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="number"
                                            label="单号"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="name"
                                            label="菜名"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="unit"
                                            label="单位"
                                            width="50"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="price"
                                            label="价格"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="save"
                                            label="库存"
                                            width="50"
                                        ></el-table-column>
                                    </el-table>
                                </div>
                                <div v-else-if=" menusValue == 'xc'">
                                    {{ menus[1].name }}
                                </div>
                                <div v-else-if=" menusValue == 'bedhj'">
                                    {{ menus[2].name }}
                                </div>
                                <div v-else-if=" menusValue == 'xcf'">
                                    {{ menus[3].name }}
                                </div>
                                <div v-else-if=" menusValue == 'gmf'">
                                    {{ menus[4].name }}
                                </div>
                                <div v-else-if=" menusValue == 'yl'">
                                    {{ menus[5].name }}
                                </div>
                                <div v-else>
                                    {{ menus[6].name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="bottom">
                <div class="left">
                    <el-button type="primary" size="mini" v-for="(item,index) in btns" :key="index" @click="openBox(item)">{{ item }}</el-button>
                    <el-button type="primary" size="mini">打印对账单</el-button>
                </div>
                <div class="right">
                    <el-button type="primary" size="mini" @click="dialogVisible = !dialogVisible">返回</el-button>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dialogVisible: true,
            floorList:[
                {
                    name: 'A楼',
                    rooms: [
                        {
                            number: 'A101',
                            seat: '卡座',
                            icon: 'el-icon-delete'
                        }, {
                            number: 'A102',
                            seat: '包厢',
                            icon: 'el-icon-delete'
                        }
                    ]
                }, {
                    name: 'B楼',
                    rooms: [
                        {
                            number: 'A101',
                            seat: '散台',
                            icon: 'el-icon-delete'
                        }
                    ]
                }
            ],
            tags:[
                {type:'success',label:'停用'},
                {type:'info',label:'空台'},
                {type:'danger',label:'预订'},
                {type:'warning',label:'用餐'}
            ],
            activeName: 'mxz',
            input3: '',
            menusValue: 'all',
            menus:[
                {label: 'all', name: '全部'},
                {label: 'xc', name: '西餐'},
                {label: 'bedhj', name: '波尔多红酒'},
                {label: 'xcf', name: '小炒'},
                {label: 'gmf', name: '盖码饭'},
                {label: 'yl', name: '饮料'},
                {label: 'lf', name: '拉菲'},
            ],
            rightTable:[{
                break: '折',
                number: '001002',
                name: '辣椒炒肉',
                unit: '个',
                price: '48',
                save: '99'
            }, {
                break: '折',
                number: '001003',
                name: '橙汁',
                unit: '瓶',
                price: '15',
                save: '99'
            }, {
                break: '折',
                number: 'C00100484564',
                name: '酸菜鱼',
                unit: '份',
                price: '148',
                save: '99'
            }, {
                break: '折',
                number: '001005',
                name: '辣椒炒鱼',
                unit: '份',
                price: '68',
                save: '99'
            },{
                break: '折',
                number: '001002',
                name: '辣椒炒肉',
                unit: '个',
                price: '48',
                save: '99'
            }, {
                break: '折',
                number: '001003',
                name: '橙汁',
                unit: '瓶',
                price: '15',
                save: '99'
            }, {
                break: '折',
                number: 'C00100484564',
                name: '酸菜鱼',
                unit: '份',
                price: '148',
                save: '99'
            }, {
                break: '折',
                number: '001005',
                name: '辣椒炒鱼',
                unit: '份',
                price: '68',
                save: '99'
            }],
            multipleSelection: [],
            btns: ['传菜','即起','加急','叫起','退单','催菜','做法','折扣','赠送','转台','并台','部分结账','整单PX','结账']
        }
    },
    created(){
        this.open();
    },
    methods:{
        open(){
            const h = this.$createElement;
            this.$notify({
                title: '管理员：'+this.$store.getters.username,
                message: '欢迎 '+this.$store.getters.username+' 光临一曼酒店订餐系统',
                type: 'success'
            })
        },
        dialogShow(index,i){
            this.dialogVisible = false;
            console.log(this.floorList[index].rooms[i].number)
        },
        notClick(e){
            e.preventDefault();
        },
        handleChange(event){
            if(!event){
                event = window.event;
            }
            if(event.button == 2){
                console.log('鼠标点击了')
            }
        },
        reload(){
            history.go(0);
        },
        handleClick(tab,event){
            console.log(tab,event)
        },
        handleSelectionChange(val){
            this.multipleSelection = val;
        },
        openBox(val){
            if(this.multipleSelection.length != 0){
                let items = [];
                this.multipleSelection.forEach((item) =>{
                    items.push(item.name);
                })
                this.$alert(items,val)
            }else{
                this.$alert('请选择菜品',val)
            }
        }
        
    }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
.area-content{
    height:100%;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-between;
    .floors{
        .floor{
            background-color: $primary;
            color: #fff;
            padding-left: $pd-left;
        }
        .rooms{
            padding-bottom: 10px;
            display: flex;
            flex-direction: row;
            .room{
                margin-top: 10px;
                background-color: $warning;
                width: 160px;
                height: 88px;
                display: inline-block;
                margin-right: 10px;
                box-shadow: 2px 2px 9px #666;
                border-radius: 5px;
                color: #fff;
                display: flex;
                padding: 5px;
                font-size: .8rem;
                &:hover{
                    background-color: $menuBg;
                    cursor: pointer;
                }
                .left{
                    flex: 1;
                    .room-num{
                        font-size: 1.2rem;
                    }
                }
                .right{
                    flex: 1;
                    text-align: right;
                }
            }
        }
    }
    .bottom{
        //background-color: #f2f2f2;
        background-color: #f2f2f2;
        padding: 3px 5px;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .tags{
            .tag{
                margin-right: $mr-right;
                .span{
                    color: $red;
                    margin-left: 3px;
                }
                small{
                    color: $primary;
                }
            }
        }
        .back{
            color: $red;
        }
    }
}
.orders-boxs{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    .title{
        padding: 20px 20px 10px;
        line-height: 24px;
        font-size: 18px;
        color: #fff;
        font-weight: normal;
        background: $primary;
    }
    .content{
        padding: $pd-all;
        display: flex;
        flex-direction: row;
        height: 100%;
        .left{
            flex: 2;
            width: 0;
            height: 100%;
            
            display: flex;
            flex-direction: column;
            .left-top{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .room-order{
                    .num{
                        display: inline-block;
                        margin-right: $mr-right;
                        span{
                            color: $red;
                            font-size: 1.4rem;
                        }
                    }
                }
                .el-tabs__header{
                    margin: 0;
                }
            }
            .left-tables{
                padding: $pd-all;
                height: 100%;
                border: 1px solid $border-color;
            }
        }
        .right{
            flex: 1;
            width: 0;
            height: 100%;
            display: flex;
            border: 1px solid $border-color;
            flex-direction: column;
            margin-left: $pd-left;
            .right-top{
                background: $primary;
                height:40px;
                .order-input{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 3px $pd-left;
                    color: #fff;
                    .el-input__inner{
                        height: 35px;
                    }
                }
            }
            .right-tabs{
                padding: $pd-all;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                
                .el-tabs__item{
                    padding: 0;
                    padding-right: 20px;
                }
                .right-tabs-pane{
                    flex:1;
                    width: 0;
                }
            }
        }
    }
    .bottom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .el-button{
            margin-left: 0;
            margin-right: 10px;
        }
    }
}
</style>
