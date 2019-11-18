<!-- 快捷预订 组件dialog -->
<template>
    <div class="quickly-reserve-dialog">
        <el-dialog
            title="快捷预定"
            width="1000px"
            :visible="quicklyReserveMessage"
            :before-close="handleClose"
        >
            <el-form label-width="90px" class="form-container">
                <el-form-item label="联系人">
                    <el-input v-model="form.linkman"></el-input>
                </el-form-item>
                <el-form-item label="联系方式">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="用餐日期" required>
                    <el-input v-model="form.date"></el-input>
                </el-form-item>
                <el-form-item label="用餐时段" required>
                    <el-select v-model="form.timeframeValue">
                        <el-option v-for="item in timeframe" :key="item.value" :label="item.label" :value="item.label"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="客源" >
                    <el-select v-model="form.sourceValue">
                        <el-option v-for="item in source" :key="item.value" :label="item.label" :value="item.label"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="协议单位" >
                    <el-select v-model="form.unitsValue">
                        <el-option v-for="item in units" :key="item.value" :label="item.label" :value="item.label"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="销售经理" >
                    <el-select v-model="form.salesmanValue">
                        <el-option v-for="item in salesman" :key="item.value" :label="item.label" :value="item.label"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用餐类别" >
                    <el-select v-model="form.diningTypeValue">
                        <el-option v-for="item in diningType" :key="item.value" :label="item.label" :value="item.label"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" v-model="form.remark" class="textarea"></el-input>
                </el-form-item>
            </el-form>
            <hr>
            <el-table
                :data="tableData"
                border
                style="width:100%"    
            >
                <el-table-column label="经营区域">
                    <template slot-scope="scope">
                         <el-select v-model="scope.row.region">
                            <el-option v-for="item in timeframe" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column label="台号类型">
                    <template slot-scope="scope">
                        <el-select v-model="scope.row.type">
                            <el-option v-for="item in diningType" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>    
                    </template>    
                </el-table-column>
                <el-table-column label="可预定台数" prop="maxNumber"></el-table-column>
                <el-table-column label="预定台数">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.number"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="用餐人数">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.people"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="60">
                    <template slot-scope="scope">
                        <el-button type="text" @click="deleteTableRow(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="add-table">
                <el-button type="primary" @click="addTableRows(num)" size="small">增加</el-button>
            </div>
            <hr />
            <el-form 
                v-for="(item,i) in formArr" 
                :key="i" 
                label-width="90px" 
                class="form-container"
            >
                <el-form-item label="支付方式">
                    <el-select v-model="item.payway">
                        <el-option v-for="list in payList" :key="list.value" :label="list.label" :value="list.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="金额">
                    <el-input class="money" v-model="item.money"></el-input>
                </el-form-item>
                <el-form-item label="支付凭证">
                    <el-input v-model="item.voucher"></el-input>
                </el-form-item>
                <el-button type="primary" size="small" @click="addFormArr">+</el-button>
                <el-button type="primary" size="small" v-show="i != 0" @click="deleteFormArr(i)">-</el-button>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleClose(false)">保存</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: ['quicklyReserveMessage'],
    data(){
        return{
            num: 0, //点击加1
            form:{
                linkman: '', //联系人
                phone: '', //联系方式
                date: '',//用餐日期
                timeframeValue: '',//用餐时段
                sourceValue: '',//客源
                unitsValue: '',//协议单位
                salesmanValue: '',//销售经理
                diningTypeValue: '',//用餐类别
                remark: '',//备注
            },
            timeframe: [{
                value: 'zc',
                label: '早餐'
            }, {
                value: 'mc',
                label: '中餐'
            }, {
                value: 'wc',
                label: '晚餐'
            }],
            source: [{
                value: "tuangou",
                label: "团购"
            }, {
                value: "sanke",
                label: "散客"
            }, {
                value: "yanxi",
                label: "宴席"
            }, {
                value: "huiyi",
                label: "会议"
            }],
            units: [],
            salesman: [],
            diningType: [{
                value: 'santai',
                label: '散台'
            }, {
                value: 'yanxi',
                label: '宴席'
            }, {
                value: 'huiyi',
                label: '会议'
            }],
            payList:[{
                value: 'xj',
                label: '现金'
            }, {
                value: 'wx',
                label: '微信'
            }, {
                value: 'zfb',
                label: '支付宝'
            }],
            tableData:[
                // {
                //     id: 0,
                //     region: '',//经营区域
                //     type: '',//台号类型
                //     maxNumber: '10',//可预订台数
                //     number: '',//预订台数
                //     people: '',//用餐人数
                // }
            ],
            formArr:[
                {
                    payway: '',//支付方式
                    money: '',//金额
                    voucher: '',//支付凭证
                }
            ]
        }
    },
    methods:{
        handleClose(bool){
            if(!bool){
                this.$message.success('订台成功咯');
            }else{
                this.$message.info('取消订台');
            }
            this.$emit('quicklyReserValue',false)
        },
        tableValue(row){
            console.log(row);
        },
        deleteTableRow(row){//删除表格
            for(let i in this.tableData){
                this.tableData[i].id == row.id?this.tableData.splice(i,1):'';
            }
        },
        addFormArr(){ //添加 form
            this.formArr.push({
                payway: '',//支付方式
                money: '',//金额
                voucher: '',//支付凭证
            })
        },
        deleteFormArr(index){ //删除 form
            this.formArr.splice(index,1);
        },
        addTableRows(num){ //添加表格
            this.tableData.push({
                id: num,
                region: '',//经营区域
                type: '',//台号类型
                maxNumber: 8,//可预订台数
                number: '',//预订台数
                people: '',//用餐人数
            })
            this.num++;
        }
    }
}
</script>

<style>
.add-table{
    margin-top: 10px;
    text-align: right;
}
</style>
