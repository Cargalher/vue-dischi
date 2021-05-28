const app = new Vue ({
    el: '#app',
    data:{
        discs: [],
        genres: []
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')                    //calling ajax
        .then((response) => {   
            // Mandatory_part stampiamo a schermo una card per ogni album.                     //saving all the discs
            this.discs = response.data.response;
            console.log(this.discs);
            //bonus1_ Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
            this.discs.forEach(disk =>{
                this.genres.push(disk.genre);
                console.log(genres);
            });
        })
    }
})