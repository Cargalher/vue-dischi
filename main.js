const app = new Vue ({
    el: '#app',
    data:{
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        discs: []
    },
    methods: {

    },
    mounted(){
        axios.get(this.url)
        .then(response =>{
            console.log(response.data.response);
            this.discs.push(response.data.response);
        })
    }
})