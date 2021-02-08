<template>
  <div class="posts">
    <div class="col-sm-12 col-mg col-lg-3 m-1" v-for="(elem, index) in posts" :key="index">
      <Post :elem="elem" />
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";

import axios from "axios";
export default {
  data: () => {
    return {
      posts: [],
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts: function () {
      axios
        .get("posts")
        .then((res) => {
          this.posts = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    Post,
  },
};
</script>

<style>
.posts {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

</style>
