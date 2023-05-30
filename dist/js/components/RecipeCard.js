app.component('recipe-card', {
    props:{
        image:{
            type: String
        },
        category:{
            type: String,
            default: "recipe category"
        },
        name:{
            type: String,
            default: "recipe name"
        },
        time:{
            type: String,
            default: "recipe time"
        },
        level:{
            type: String,
            default: "recipe level"
        },
        likes:{
            type: Number,
            default: 10
        },
        index:{
            type: String
        }
    },
    methods:{
        onClickLike(){
            console.log("like");
            this.addLikes++;
        },
        onClickUnlike(){
            console.log("unlike");
            if(this.addLikes > 0) this.addLikes--;
        },
        onClickViewRecipe(){
            console.log("view recipe");
            this.$emit('recipedetails', this.index);
        },
    },
    data(){
        return{
            counter: 0,
            addLikes : this.likes
        }
    },
    template:
    /*html*/
    ` <div class="card p-3 mb-5 bg-secondary">
    <img class="card-img-top rounded" v-bind:src="image" alt="featured-recipe">
    <div class="card-body p-0">
        <p class="mt-2 text-warning">{{ category }}</p>
        <h5 class="card-title text-light">{{ name }}</h5>
        <p class="text-white">{{ time }}</p>
        <p class="text-white">{{ level }}</p>
        <p class="text-white">{{ likes }}</p>
            <button class="btn btn-danger me-2" v-on:click="onClickLike()">Like</button>
            <button class="btn btn-warning me-2" v-on:click="onClickUnlike()">Unlike</button>
            <button class="btn btn-dark" v-on:click="onClickViewRecipe()" data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">View Recipe</button>
    </div>
</div>`
})