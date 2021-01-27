# webpack_demo
webpack_demo

# 这是webpack入门的一个小demo

在外层目录安装一些库

详细用法见博文 https://blog.csdn.net/weixin_44972008/article/details/113249761

# 1. 初始化package.json
```
npm init
```
# 2. 下载并安装webpack
```
npm install webpack webpack-cli -g
npm install webpack webpack-cli -D
```

# 3. 运行指令
开发环境
```
 webpack --entry ./src/index.js -o ./build --mode=development

```
生产环境
```
webpack ./src/index.js -o ./build/built.js --mode=production
```

# 4. 其他的一些loader 具体见上面给的博文链接里的内容
```
npm i css-loader style-loader -D
npm i less-loader -D
npm i less -D
npm i html-webpack-plugin@next -D
npm i url-loader file-loader -D
npm i html-loader -D
npm i webpack-dev-server -D
```
