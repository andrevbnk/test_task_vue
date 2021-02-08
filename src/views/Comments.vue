<template>
  <div v-if="comments.length > 0 || !comments">
    <div class="comments">
      <div class="allComments" v-for="(elem, index) in comments" :key="index">
          <Comment :elem="elem"/>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="alert alert-warning" role="alert">Что-то не нашло =-(<br>
    <a class="badge badge-primary" @click.prevent="$router.go(-1)">Вернуться назад?</a></div>
  </div>
</template>

<script>
import Comment from '../components/Comment.vue';
import axios from "axios";
export default {
  props: ["post"],
  data: () => {
    return {
      comments: null,
    };
  },
  created() {
    this.getComms();
  },
  components:{
      Comment,
  },
  methods: {
    getComms: function () {
      axios
        .get("comments?postId=" + this.$route.query.postId)
        .then((res) => {
          this.comments = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.comments {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
.allComments {
  width: 25%;
  margin: 10px;
}
</style>
