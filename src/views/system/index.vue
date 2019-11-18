<template>
    <div class="app-system">
        <el-row>
            <el-col :span="4" class="tree-box" v-show="treeHide">
                <span class="tree-title">集团酒店 <i class="el-icon-refresh" @click="currentNode"></i></span>
                <el-tree
                    :data="data"
                    node-key="id"
                    ref="tree"
                    default-expand-all
                    highlight-current
                    :expand-on-click-node="false"
                    @node-click="treeChange"
                    :props="defaultProps"
                    style="'height':$store.getters.mainsHeight-40-16"
                ></el-tree>
            </el-col>
            <el-col :span="20">
                <span class="closeTree" @click="closeTree">></span>
                <el-table
                    :data="tableData"
                    border
                    :height="$store.getters.mainsHeight-40-16"
                    style="width: 100%;"
                >
                    <el-table-column type="expand">
                        <template slot-scope>
                            表格
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="companyName"
                        label="公司名称"                    
                    >
                    </el-table-column>
                    <el-table-column
                        prop="companyCode"
                        label="公司编码"
                    ></el-table-column>
                    <el-table-column
                        prop="compnayType"
                        label="公司类型"
                        width="150"
                    ></el-table-column>
                    <el-table-column
                        prop="linkMan"
                        label="联系人"
                    ></el-table-column>
                    <el-table-column
                        prop="number"
                        label="联系电话"
                    ></el-table-column>
                    <el-table-column
                        label="操作"
                    >
                        <template slot-scope="scope">
                            <el-button type="text" @click="updateRows(scope.row)">修改</el-button>
                            <el-button type="text" @click="deleteRows(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        width="300px"
                        label="地址"
                    ></el-table-column>
                    <el-table-column
                        prop="creationTime"
                        label="创建时间"
                    ></el-table-column>
                </el-table>
                <div class="fixed-footer">
                    <PaginTion :total="pageLength"></PaginTion>
                    
                </div>
            </el-col>
        </el-row>
        
        
    </div>
</template>

<script>
import PaginTion from '@/components/pagintion.vue';
export default {
    components:{
        PaginTion
    },
    data(){
        return{
            treeHide: true,
            isCurrent: false,
            tableData:[],
            pageLength:0,
            data:[
                {
                    id:1,
                    label: '测试酒店集团',
                    children:[
                        {
                            id: 4,
                            label: '西北区',
                            children:[
                                {
                                    id: 9,
                                    label: '西安火车站店'
                                }, {
                                    id: 10,
                                    label: '太原火车站店'
                                }
                            ]
                        }, {
                            id: 5,
                            label: '华中区',
                            children:[
                                {
                                    id: 11,
                                    label: '河南洛阳火车站店'
                                }, {
                                    id: 12,
                                    label: '邵阳市五彩今天酒店'
                                }
                            ]
                        }
                    ]
                }, {
                    id: 2,
                    label: '测试加盟酒店',
                    children: [
                        {
                            id: 14,
                            label: '华南区'
                        }, {
                            id: 15,
                            label: '华东区'
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    created(){
        this.initAxios()
    },
    methods:{
        currentNode(node){ //清空筛选
            if(this.isCurrent){
                this.$refs.tree.setCurrentKey(null);
            }
            this.isCurrent = false;
        },
        treeChange(node,data,value){ //点击树渲染对应的数据
            this.isCurrent = true;
            this.$message.success(node.label)
            console.log(node)
        },
        updateRows(row){
            console.log(row);
        },
        deleteRows(row){
            for(let i in this.tableData){
                if(row.companyCode == this.tableData[i].companyCode){
                    this.tableData.splice(i,1);
                }
            }
        },
        closeTree(){
            this.treeHide = !this.treeHide;
            
        },
        initAxios: async function(){
            let params={};
            const res = await this.http.get('systemIndex');
            this.tableData = res.data.list;
            this.pageLength = this.tableData.length;
            console.log(res)
        }
    }
}
</script>

<style scoped lang="scss">
.app-system{
    height: 100%;
    .el-row{
        height: 100%;
        .el-col{position:relative;}
        .tree-box{
            border: 1px solid #ddd;
            padding: 5px;
            height: 100%;
            .tree-title{
                padding-left: 6px;
                i{
                    float: right;
                    padding-right: 6px;
                }
            }
        }
        .closeTree{
            position: absolute;
            left: 0;
            top: 50%;
            z-index: 9;
            cursor: pointer;
        }
        .el-table{
            margin-left: 10px;
        }
    }
    .fixed-footer{
        bottom: -36px;
        left: 10px;
    }
}

</style>
