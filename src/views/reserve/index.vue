<template>
    <div class="app-reserve">
        <el-form ref="form" :model="form" class="form-container">
            <el-form-item label="用餐日期：" class="dates">
                <el-date-picker
                    v-model="value"
                    type="datetimerange"
                    range-separator=" - "
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    format="yyyy-MM-dd HH:mm:ss"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    :default-time="['00:00:00','23:59:59']"
                ></el-date-picker>
            </el-form-item>
            <el-form-item label="用餐时段：">
                <el-select v-model="timeBucketValue">
                    <el-option v-for="item in timeBucket" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="状态：">
                <el-select v-model="statusValue">
                    <el-option v-for="item in status" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="客源：">
                <el-select v-model="passengerSourceValue">
                    <el-option v-for="item in passengerSource" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="销售员：">
                <el-select v-model="passengerSourceValue">
                    <el-option v-for="item in passengerSource" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="台位类型：">
                <el-select v-model="sameTypeValue">
                    <el-option v-for="item in sameType" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-input v-model="inputValue" placeholder="输入台位编号/台位名称/预定单查询" style="width:250px"></el-input>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form>
        <el-table
            :data="tableData"
            border
            :height="$store.getters.mainsHeight-180-36"
            style="width: 100%"
            tooltip-effect="dark"
            @selection-change="handleSelectChange"
        >
            <el-table-column
                type="selection"
                width="55"
            ></el-table-column>
            <el-table-column
                prop="status"
                label="状态"
            ></el-table-column>
            <el-table-column
                prop="order"
                label="预订单"
                width="100"
            ></el-table-column>
            <el-table-column
                prop="time"
                label="预订时间"
            ></el-table-column>
            <el-table-column
                prop="linkman"
                label="联系人"
            ></el-table-column>
            <el-table-column
                prop="phone"
                label="联系方式"
                width="110"
            ></el-table-column>
            <el-table-column
                prop="site"
                label="预定台名"
            ></el-table-column>
            <el-table-column
                prop="date"
                label="用餐日期"
                width="100"
            ></el-table-column>
            <el-table-column
                prop="timeFrame"
                label="用餐时段"
            ></el-table-column>
            <el-table-column
                prop="numberOfPeople"
                label="用餐人数"
            ></el-table-column>
            <el-table-column
                prop="source"
                label="客源"
            ></el-table-column>
            <el-table-column
                prop="other"
                label="协议/会员/三方单位"
                width="150"
            ></el-table-column>
            <el-table-column
                prop="salesman"
                label="销售员"
            ></el-table-column>
            <el-table-column
                prop="type"
                label="用餐类型"
            ></el-table-column>
            <el-table-column
                prop="money"
                label="预定订金"
            ></el-table-column>
            <el-table-column
                prop="billNo"
                label="账单号"
                width="180"
            ></el-table-column>
            <el-table-column
                label="操作"
                width="120"
                fixed="right"
            >
                <template slot-scope="scope">
                    <el-button type="text" @click="updateRows(scope.row)">修改</el-button>
                    <el-button type="text" @click="deleteRows(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="fixed-footer">
            <el-button type="primary" size="mini" @click="handleReserve(true)">预定</el-button>
            <el-button type="primary" size="mini" @click="handleOpenTable(true)">开台</el-button>
            <el-button type="primary" size="mini" @click="handleCashPledge(true)">订金</el-button>
            <el-button type="primary" size="mini" @click="handleCancel">取消预定</el-button>
            <el-button type="primary" size="mini" disabled>提前点餐</el-button>
            <el-button type="warning" size="mini" @click="handleQuicklyReser(true)">预定</el-button>
            <el-button type="warning" size="mini" disabled>分台</el-button>
            <span class="reserve-length">预定{{ tableData.length }}条</span>
        </div>
        <reserveDialog :dialogVisible="reserveDialogShow" @handleDialogValue="handleReserve"></reserveDialog>
        <openTableDialog :openMessage="openTableDialogShow" @openTableDialogValue="handleOpenTable"></openTableDialog>
        <cashPledgeDialog :cashPledgeMessage="cashPledgeShow" @cashPledgeValue="handleCashPledge"></cashPledgeDialog>
        <quicklyReserveDialog :quicklyReserveMessage="quicklyReserveShow" @quicklyReserValue="handleQuicklyReser"></quicklyReserveDialog>
    </div>
</template>

<script>
import reserveDialog from '@/components/reserveDialog';
import openTableDialog from '@/components/openTableDialog';
import cashPledgeDialog from '@/components/cashPledgeDialog';
import quicklyReserveDialog from '@/components/quicklyReserveDialog';
export default {
    components:{
        reserveDialog, //预定
        openTableDialog, //开台
        cashPledgeDialog, //订金
        quicklyReserveDialog //快捷预定
    },
    data(){
        return{
            timeBucketValue: '', // 用餐时段值
            timeBucket: [{
                value: 'wucan',
                label: '午餐'  
            }, {
                value: 'wancan',
                label: '晚餐'
            }],
            statusValue: '',//状态值
            status: [{
                value: 'all',
                label: '全部'
            }, {
                value: 'yuding',
                label: '预定'
            }, {
                value: 'yongcanzhong',
                label: '用餐中'
            }, {
                value: 'jiezhang',
                label: '已结账'
            }, {
                value: 'cancel',
                label: '已取消'
            }, {
                value: 'yuqi',
                label: '已逾期'
            }],
            passengerSourceValue: '',//客源值
            passengerSource: [{
                value: "all",
                label: "全部"
            }, {
                value: "sk",
                label: "散客"
            }, {
                value: "member",
                label: "会员"
            }, {
                value: "xydw",
                label: "协议单位"
            }],
            sameTypeValue: '',//台位类型值
            sameType: [{
                value: "all",
                label: "全部"
            }, {
                value: "seat",
                label: "散座"
            }, {
                value: "card",
                label: "卡台"
            }, {
                value: "box",
                label: "包厢"
            }],
            inputValue: '',//input输入框搜索
            form:{
                time: ''
            },
            multipleSelection: [],// 选中的table的selection
            citys:[],
            value:'',
            tableData:[],
            reserveDialogShow: false,  //预定弹框组件值
            openTableDialogShow: false, //开台弹框
            cashPledgeShow: false,//订金
            quicklyReserveShow: false,//快捷预定
        }
    },
    created(){
        //this.initList();
    },
    methods:{
        onSubmit(){
            console.log(this.timeBucketValue,this.statusValue);    
        },
        updateRows(row){
            console.log('修改当前行');
        },
        deleteRows(row){
            for(let i in this.tableData){
                this.tableData[i].id == row.id?this.tableData.splice(i,1):'';
            }
            console.log('删除当前行');
        },
        handleReserve(bool){ //预定框
            this.reserveDialogShow = bool;
        },
        handleOpenTable(val){ //开台
            this.openTableDialogShow = val;
        },
        handleCashPledge(val){ //订金
            this.cashPledgeShow = val;
        },
        handleQuicklyReser(val){ //快捷预订
            this.quicklyReserveShow = val;
        },
        handleSelectChange(val){ //选中 表格 多选框
            this.multipleSelection = val;
            console.log(val+'当前选中的',this.multipleSelection);
        },
        handleCancel(){ //取消预定
            this.$confirm('是否取消预定？','预定取消',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message.success('删除成功');
            }).catch(() => {
                this.$message.info('已取消删除');
            })
        },
        initList: async function(text){
            this.tableData = [];
            let parmary = {};
            const res = await this.http.get('/reserve',parmary)    
            this.tableData = res.data.data;
            console.log(res)
        }
    }
}
</script>

<style>
.reserve-length{
    color: red;
}
</style>
