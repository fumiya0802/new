new Vue({
    el:'#app',
    data: {
        message: 'Hello'
    },   
    methods:{
        mouseover: function(){
            this.message = 'over'
        },
        mouseleave: function(){
            this.message = 'leave'

        }
    }
});