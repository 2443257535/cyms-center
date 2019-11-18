<!-- 开台 组件dialog -->
<template>
    <div class="open-table-dialog">
        <el-dialog
            title="开台"
            width="1000px"
            class="dialog"
            :visible.sync="openMessage"
            :before-close="handleClick"
        >
            <el-form 
                class="form-container"
                ref="form"
                :model="form"
                :rules="rules"
                label-width="90px"
            >
                <el-form-item label="台号" prop="tableNumberValue">
                    <el-select v-model="form.tableNumberValue">
                        <el-option v-for="item in tableNumber" :key="item.label" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用餐人数" prop="peopleNumber" required>
                    <el-input v-model="form.peopleNumberValue"></el-input>
                </el-form-item>
                <el-form-item label="联系人" prop="linkman">
                    <el-input v-model="form.linkman"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" prop="phone">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="客源" prop="sourceValue">
                    <el-select v-model="form.sourceValue">
                        <el-option v-for="item in source" :key="item.label" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="协议单位" prop="unitsValue">
                    <el-select v-model="form.unitsValue">
                        <el-option v-for="item in units" :key="item.label" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="销售经理" prop="salesmanValue">
                    <el-select v-model="form.salesmanValue">
                        <el-option v-for="item in salesman" :key="item.label" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用餐类别" prop="diningTypeValue">
                    <el-select v-model="form.diningTypeValue">
                        <el-option v-for="item in diningType" :key="item.label" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注" prop="remark">
                    <el-input type="textarea" v-model="form.remark" class="textarea"></el-input>
                </el-form-item>
                
                
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleClick">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props:['openMessage'],
    data(){
        var validatePeopleNumber = (rule2, value, callback) => {
        console.log(value)
        if (value === '') {
          callback(new Error('请输入用餐人数'));
        } else {
          callback();
        }
      };
        return{
            form: {
                tableNumberValue: '',//台号
                peopleNumber: '',//用餐人数
                linkman: '',//联系人
                phone: '',//联系方式
                sourceValue: '',//客源
                unitsValue: '',//协议单位
                salesmanValue: '',//销售经理
                diningTypeValue: '',//用餐类别
                remark: '',//备注
            },
            rules:{
                peopleNumber: [
                    {validator: validatePeopleNumber,trigger: 'blur'}
                ]
            },
            tableNumber:[{
                value: '4',
                label: '4号台'
            }, {
                value: '5',
                label: '5号台'
            }, {
                value: '6',
                label: '6号台'
            }],
            source: [{
                value: 'tuangou',
                label: '团购'
            }, {
                value: 'sanke',
                label: '散客'
            }, {
                value: 'yanxi',
                label: '宴席'
            }, {
                value: 'huiyi',
                label: '会议'
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
            }]
            
            //openMessage: '',
        }
    },
    methods:{
        handleClose(){
            this.$emit('openTableDialogValue',false);
        },
        handleClick(){
            this.$emit('openTableDialogValue',false);
        },
    }
}
</script>

<style>

</style>
