#使用需求（假设已经安装npm）

此demo用于展示如何使用fis3来进行配置管理，包括less的编译，npm插件的使用（此处使用wookmark作为例子）

## 1. 安装以下插件
全局安装，或者局部安装都可以。

* [fis3](https://github.com/fex-team/fis3) 
  --fis3作为项目管理,内置插件fis-components作为包管理工具
* [fis3-hook-node_modules]
  --使用npm作为包依赖工具
* [fis3-hook-commonjs](https://github.com/fex-team/fis3-hook-commonjs)
  --fis3-hook-commonjs 作为包加载工具
* [fis3-postpackager-loader](https://github.com/fex-team/fis3-postpackager-loader)
* [fis-optimizer-uglify-js](https://github.com/fex-team/fis-optimizer-uglify-js)



## 2. 安装 npm 依赖包

```bash
$ npm install 
```

## 3. 编译产出 & 预览

```bash
$ fis3 release -d ./output
$ fis3 server start --root ./output
```

## 生成产品代码

```bash
$ fis3 release prod -d ./output
```

## 注意
若fis3 release失败

可试试将package.json的devDependencies全局安装
然后npm install  --production
