<template>
    <div class="page-content">
        <h1>深浅拷贝</h1>
        <div class="">
            <h4>浅拷贝</h4>
            <h6>es6的 ...object可直接进行浅拷贝</h6>
            <p>let object1 = {
                a: 1,
                b: 2,
                c: 3
            };</p>
            <p>let object2 = Object.assign({c:4,d:5},object1);</p>
            <p>object3: {{ object3 }}</p>
            <h4>深拷贝</h4>
            <h6>通过 JSON对象的parse和stringify 进行深拷贝</h6>
            <p>object5: {{ object5 }}</p>
        </div>
        <h1 style="margin-top: 20px;">闭包</h1>
    </div>
</template>

<script>
export default {
    data () {
        return {
            object3: '',
            object5: '',
        }
    },
    created(){
        this.clone();
        this.func();
    },
    methods:{
        clone(){
            let object1 = {
                a: 1,
                b: 2,
                c: 3
            };
            let object2 = {...object1};
            let object3 = Object.assign({c:4,d:5},object1);
            let object5 = JSON.parse(JSON.stringify(object1));
            object5.b = 666;
            object5.d = 777;
            object1.a = 11;
            object2.a = 1111;
            this.object3 = object3;
            this.object5 = object5;
            console.log(object1)
            console.log(object3)
            console.log(object5);
        },
        func(){
            var name = 'the window';
            var object = {
                name: 'my object',
                getNameFunc: function(){
                    let that = this;
                    return function(){
                        return that.name;
                    }
                }
            }
            console.log(object.getNameFunc()())
        }
    }
}
</script>

<style>

</style>
