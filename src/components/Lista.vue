<template>
  <div>
    <img :src="image_path" :alt="title">

    <div class="movie-info">
      <h3>{{title}}</h3>
      <span class="green">{{vote_average}}</span>
    </div>

    <div class="overview">
      <h3>Overview</h3>
      {{overview}}
      <button class="know-more" :id="id">Know More</button>
    </div>
  </div>  
</template>

<script>
export default {
 props: ['overview','id','image_path','vote_average','title'],
}
</script>