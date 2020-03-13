<template>
    <div>
  id == {{msg}}
    </div>
</template>

<script>

    export default {
        name: "product",
      // 配置
      head: {
        titleTemplate: '产品介绍1w',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Meta 产品介绍1' },
          { name: 'keywords', content: 'Meta 产品介绍2222222222222222222222221' },
        ]
      },
      data () {
        return {
          msg: '',
          auto_fixed: {
            fixed: false
          }
        }
      },
      methods: {
      },
      mounted(){
        console.log(this.$route.query.id)
        this.msg = this.$route.query.id
      }


    }
</script>

<style scoped>

</style>
