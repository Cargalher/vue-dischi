const app = new Vue ({
    el: '#app',
    data:{
        discs: []
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')                    //calling ajax
        .then((response) => {                                                                   //saving all the discs
            this.discs = response.data.response;
        })
    }
})