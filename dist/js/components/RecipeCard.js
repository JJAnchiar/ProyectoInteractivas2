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
            type: Number
        }
    },
    methods:{
        onClickLike(){
            this.$emit('recipelike', this.index);
        },
        onClickUnlike(){
            this.$emit('recipeunlike', this.index);
        },
        onClickViewRecipe(){
            this.$test.emit('foo', "works!");
        },
    },
    data(){
        return{
            counter: 0
        }
    },
    template:
    /*html*/
    ` <div class="card p-3 mb-5">
    <img class="card-img-top rounded" v-bind:src="image" alt="featured-recipe">
    <div class="card-body p-0">
        <p class="mt-2">{{ category }}</p>
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">{{ description }}</p>
        <p>{{ time }}</p>
        <p>{{ level }}</p>
        <p>{{ likes }}</p>
            <button class="btn btn-danger me-2" v-on:click="onClickLike()">Like</button>
            <button class="btn btn-warning me-2" v-on:click="onClickUnlike()">Unlike</button>
            <button class="btn btn-dark" v-on:click="onClickViewRecipe()" data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">View Recipe</button>
    </div>
</div>`
})