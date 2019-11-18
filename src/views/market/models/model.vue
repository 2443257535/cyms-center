<template>
    <div class="page-content">
        <h4>双向绑定 Object.defineProperty('对象','属性值',function(){<br />
            get: () =>{<br />
                return 对象.属性值<br />
            },<br />
            set: (newvalue) =>{<br />
                this.value = newvalue;<br />
            }<br />
        })</h4>
        <input type="text" id="number">
        <div id="change"></div>

        <h4 style="margin-top: 20px;">computed</h4>
        <input type="text" v-model="message">
        {{ reversedMessage }}
        <h4 style="margin-top: 20px;">watch</h4>
        <div>{{ fullName }}</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            number: '',
            message: '',
            fullName: '',
        }
    },
    created(){
        this.obj();
    },
    computed:{
        reversedMessage(){
            return this.message.split('').reverse().join(',');
        }
    },
    methods:{
        obj(){
            
            let obj = {};
            Object.defineProperty(obj,'txt',{
                get: function(){
                    return obj;
                },
                set: function(newValue){
                    document.querySelector('#number').value = newValue;
                    document.querySelector('#change').textContent = newValue;
                }
            })
            document.addEventListener('keyup',function(e){
                obj.txt = e.target.value;
            })

        }
    }
}
</script>

<style>

</style>
