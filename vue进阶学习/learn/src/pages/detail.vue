<template>
  <div>
    <div>details-query：{{$route.query.id}}</div>
    <div>details-param：{{$route.params.id}}</div>
  </div>
</template>

<script>
export default {
    name: 'Detail',
    mounted() {
        console.log(this.$route);
        
    },
}
</script>

<style>

</style>