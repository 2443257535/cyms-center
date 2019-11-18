<template>
    <div class="bill-box">
        <el-form ref="form" :model="form" class="form-container">
            <el-form-item label="状态">
                <el-select v-model="form.statusValue">
                    <el-option v-for="item in status" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="经营场所">
                <el-select v-model="form.placeValue">
                    <el-option v-for="item in place" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="台号类别">
                <el-select v-model="form.categoryValue">
                    <el-option v-for="item in category" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="客源">
                <el-select v-model="form.sourceValue">
                    <el-option v-for="item in source" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="销售员">
                <el-select v-model="form.salesValue">
                    <el-option v-for="item in sales" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="用餐类型">
                <el-select v-model="form.diningValue">
                    <el-option v-for="item in dining" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-select v-model="form.selectValue">
                    <el-option v-for="item in lastList" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <el-input v-model="form.selectValue"></el-input>
            </el-form-item>
            <el-button type="primary" >查询</el-button>
        </el-form>
        <el-table 
            :data="tableData"
            border
            :height="$store.getters.mainsHeight-180-36"
            tooltip-effect="dark"
            style="width: 100%"
        >
            <el-table-column
                type="index"
                label="序号"
                width="50px"
            ></el-table-column>
            <el-table-column
                prop="linkman"
                label="状态"
            ></el-table-column>
            <el-table-column
                prop="number"
                label="单号"
                width="150px"
            ></el-table-column>
            <el-table-column
                prop="place"
                label="经营场所"
            ></el-table-column>
            <el-table-column
                prop="category"
                label="台号类别"
            ></el-table-column>
            <el-table-column
                prop="numberName"
                label="台号名称"
            ></el-table-column>
            <el-table-column
                prop="people"
                label="用餐人数"
            ></el-table-column>
            <el-table-column
                prop="amount"
                label="点菜数量"
            ></el-table-column>
            <el-table-column
                prop="money"
                label="消费金额"
            ></el-table-column>
            <el-table-column
                prop="discount"
                label="折扣"
            ></el-table-column>
            <el-table-column
                prop="rebate"
                label="折扣金"
            ></el-table-column>
            <el-table-column
                prop="subtotal"
                label="折后小计"
            ></el-table-column>
            <el-table-column
                prop="startDate"
                label="开台时间"
                width="160px"
            ></el-table-column>
            <el-table-column
                prop="endDate"
                label="结账时间"
                width="160px"
            ></el-table-column>
            <el-table-column
                prop="source"
                label="客源"
            ></el-table-column>
            <el-table-column
                prop="member"
                label="会员/协议/三方单号"
                width="150px"
            ></el-table-column>
            <el-table-column
                prop="salesman"
                label="销售员"
            ></el-table-column>
            <el-table-column
                prop="linkman"
                label="联系人"
            ></el-table-column>
            <el-table-column
                prop="linkmanMsg"
                label="联系人信息"
                width="100px"
            ></el-table-column>
            <el-table-column
                prop="type"
                label="用餐类型"
            ></el-table-column>
        </el-table>
        <div class="fixed-footer">
            <el-button type="primary" size="mini" @click="repeal">撤销结账</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form: {
                statusValue: '', //状态值
                placeValue: '', //经营场所 
                categoryValue: '',//台号类别
                sourceValue: '',//客源
                salesValue: '',//销售员
                diningValue: '',//用餐类型
                selectValue: '',//筛选select
            },
            status: [{
                value: 'wjz',
                label: '未结账'
            }, {
                value: 'px',
                label: 'px账单'
            }, {
                value: 'dryjz',
                label: '单日已结账'
            }],
            place: [{
                value: 'all',
                label: '全部'
            }, {
                value: 'zct',
                label: '中餐厅'
            }, {
                value: 'xct',
                label: '西餐厅'
            }],
            category: [{
                value: 'all',
                label: '全部'
            }, {
                value: 'kz',
                label: '卡座'
            }, {
                value: 'bx',
                label: '包厢'
            }],
            source: [{
                value: 'all',
                label: '全部'
            }, {
                value: 'sk',
                label: '散客'
            }, {
                value: 'hy',
                label: '会员'
            }, {
                value: 'xy',
                label: '协议'
            }, {
                value: 'tg',
                label: '团购'
            }],
            sales: [{
                value: 'all',
                label: '全部'
            }, {
                value: 'zs',
                label: '张三'
            }],
            dining: [{
                value: 'all',
                label: '全部'
            }, {
                value: 'st',
                label: '散台'
            }, {
                value: 'hy',
                label: '会议'
            }, {
                value: 'yx',
                label: '宴席'
            }],
            lastList: [{
                value: 'dh',
                label: '单号'
            }, {
                value: 'hy',
                label: '会员'
            }, {
                value: 'xydw',
                label: '协议单位'
            }, {
                value: 'sfdh',
                label: '三方单号'
            }, {
                value: 'lxr',
                label: '联系人/联系方式'
            }],
            tableData:[] //表格
        }
    },
    created(){
        this.inits();
    },
    methods:{
        inits: async function(){
            this.tableData = [];
            let params = {};
            let res = await this.http.get('/account/bill.json',params);
            this.tableData = res.data.data;
        },
        repeal(){
            this.$confirm('是否确认撤销结账','撤销结账',{
                confirmButtonText: '删除',
                cancelButtonText: '取消',
                type: 'primary'
            }).then(() => {
                this.$message.success('删除成功');
            }).catch(() => {
                this.$message.info('取消删除');
            })
        }
    }
}
</script>

<style>

</style>
