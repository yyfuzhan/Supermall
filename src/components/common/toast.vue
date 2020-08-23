<template>
  <div class="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'toast',
    props: {
      message: {
        type: String,
        default: ''
      },
      show:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped="scoped">
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    padding: 5px 10px;
    transform: translate(-50%,-50%);
    color: white;
    background-color: rgba(0,0,0,.75);
  }
</style>
