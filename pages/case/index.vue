<template>
    <div>
      <div>
        测试
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">logo</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>

            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#">产品</b-nav-item>
              <b-nav-item href="#">产品</b-nav-item>
              <b-nav-item href="#">产品</b-nav-item>
              <b-nav-item href="#">产品</b-nav-item>
              <b-nav-item href="#">产品</b-nav-item>
              <b-nav-item href="#">产品</b-nav-item>
              <b-nav-item href="#" disabled>案例</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
</template>

<script>
    export default {
        name: "case"
    }
</script>

<style scoped>

</style>
