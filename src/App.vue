<template>
  <router-view name="ityHeaderBeforeLogin"></router-view>
  <router-view name="ityConsumerHeader"></router-view>
  <router-view name="itySellerHeader"></router-view>
  <router-view name="ityOrganizationHeader"></router-view>
  <router-view></router-view>
  <router-view name="ityFooter"></router-view>
  <router-view name="chatItem"></router-view>
  <router-view name="backTop"></router-view>
  <router-view name="placeOrderButton"></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b988;
}
</style>
