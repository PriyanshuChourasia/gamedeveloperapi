module.exports = {
  apps : [{
    name   : "Game Developer",
    script : "./src/index.js",
    output : "./src/logs/out.log",
    watch: true,
    ignore_watch:["./src/logs/out.log"],
  }]
}
