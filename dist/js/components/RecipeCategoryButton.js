app.component('recipe-category-button', {
    props:{
        name:{
            type:String
        }
    },
    methods: {
        onClickCategoryButton(){
            this.$emit('selectedcategory', this.name)
        }
    },
    template:
    /*html*/
    `<button class="dropdown-item text-danger bg-gradient"  v-on:click="onClickCategoryButton">{{ name }}</button>`
})