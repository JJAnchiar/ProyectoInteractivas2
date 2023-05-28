app.component('recipe-details', {
    props:{
        name:{
            type:String
        },
        image:{
            type:String
        },
        ingredients:{
            type:String
        },
        instructions:{
            type:String
        }
    },
    mounted(){
    },
    methods:{
        onClickViewRecipe(){
        },
    },
    template:
        /*html*/
        `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
               <div class="modal-content bg-dark">
                    <div class="modal-header">
                      <h2 class="modal-title fs-5 text-danger" id="staticBackdropLabel">{{ name }}</h2>
                      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <img class="img-fluid" v-bind:src="image"
                      alt="{{ name }}">
                      <p class="text-center fs-6 text-white">{{ ingredients }}</p>
                      <p class="fs-5 fst-italic fw-light fs-4 text-white">{{ instructions }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
         </div>`
})