<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ elem.title }}</h5>
        <p class="card-text">{{ elem.body }}</p>
      </div>
      <router-link :to="{name:'Comments',query: { postId: elem.id } }" class="card-link m-2">Comments</router-link>
    </div>
</template>

<script>
export default {
    props:['elem'],
};
</script>

<style>
.card{
    height: 100%;
}
.card-body {
  padding-bottom: 0px !important;

}</style>
