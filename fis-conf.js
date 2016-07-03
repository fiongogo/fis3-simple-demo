// 配置按需编译：设置编译范围为 html 文件，不过 html 文件中使用到的资源也会参与编译。
fis.set('project.files', '*.html');

// npm install [-g] fis3-hook-commonjs
fis.hook('commonjs');

fis.match('/comp/**/*.js', {
    isMod: true, // 设置 comp 下都是一些组件，组件建议都是匿名方式 define
    release: '/static/$0'
});

// 改用 npm 方案，而不是用 fis-components
fis.unhook('components');
fis.hook('node_modules');

// 设置成是模块化 js
fis.match('/node_modules/**.js', {
  isMod: true
});

fis.match('**/*.less', {
    rExt: '.css', // from .less to .css
    parser: fis.plugin('less', {}) //属性 parser 表示了插件的类型
});

// 因为是纯前段项目，依赖不能自断被加载进来，所以这里需要借助一个 loader 来完成，
// 注意：与后端结合的项目不需要此插件!!!
fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true // 资源映射表内嵌
    })
})


// fis3 release prod 产品发布，进行合并
fis.media('prod')
    .match('*.{js,css,png}', {
        useHash: true
    })
    .match('*.js', {
        // 将所有用到的 js all in one 打包
        packTo: '/static/aio.js',
        
        // 通过 uglify 压缩 js
        // 记得先安装：
        // npm install [-g] fis-optimizer-uglify-js
        optimizer: fis.plugin('uglify-js')
    })
    .match('*.css', {

        // 将用到的 css all in one 打包。
        packTo: '/static/aio.css'
    })
