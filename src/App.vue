<template>
  <!doctype html>
  <html lang="en">
  <head>
    <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1">
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <router-view></router-view>
    </div>
  </body>
  </html>
 
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body{
  padding: 0px;
  margin:0px;
  font-size: 25.75px;
}
</style>
