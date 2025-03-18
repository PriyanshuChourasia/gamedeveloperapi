# Game Developer API



### PM2 process commands
To use pm2 to run your application:

    1. Install PM2 global
```
    npm install -g pm2
```
To check list of processes
```
    pm2 list
```
To start pm2
```
    pm2 start ecosystem.config.js
```
To kill process
```
    pm2 kill
```

To run pm2 for development:
```
    pm2-dev start ecosystem.config.{js/cjs}
```