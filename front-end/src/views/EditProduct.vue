<template>
  <div class="width-box">
    <form @submit="editProduct">
      <h3 class="text-center">Edit Product</h3>
      <div class="form-group">
        <label for="exampleInputEmail1">Id</label>
        <input
          type="number"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          :value="ambilUrl"
          disabled
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Name</label>
        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Image</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Category</label>
        <select class="form-control" id="exampleFormControlSelect1" v-model="categoryId">
          <option
            v-for="list in category"
            v-bind:value="list.id"
            v-bind:key="list.id"
          >{{list.category}}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "editProduct",
  data: function () {
    return {
      idQuery: "",
      nameQuery: "",
      imageQuery: "",
      priceQuery: "",
      categoryQuery: "",
      category: [],
      ambilUrl: this.$route.query.id,
    };
  },
  methods: {
    getCategory() {
      axios.get("http://localhost:8000/category").then((res) => {
        this.category = res.data;
        console.log(res.data);
      });
    },
  },
  mounted() {
    this.getCategory();
  },
};
</script>

<style scoped>
.width-box {
  width: 500px;
  margin: auto;
}
</style>