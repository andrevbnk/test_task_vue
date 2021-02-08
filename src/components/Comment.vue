<template>
          <div class="card">
          <div class="card-header">{{ elem.name }}</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>
                {{ elem.body }}
              </p>
            </blockquote>
          </div>
          <footer class="blockquote-footer m-1">
            {{ elem.email }}
          </footer>
        </div>
</template>

<script>
export default {
    props:['elem'],
}
</script>

<style>

</style>