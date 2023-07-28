# vanilla-spa-router

A vanilla js solution to routing for a single-page application

## Try it out

Clone this repo to your machine and start it up in a live server. VSCode has a good extension for this. Then visit the site at localhost on the port your server is running on.

I also created a codesandbox you can try out [here](https://codesandbox.io/s/vanilla-spa-router-59tyx?file=/js/router.js). You'll have to refresh the preview browser on first load, but it will work just the same otherwise.

如果使用url router的方式，在refresh的时候会报404，除非服务端配置为找不到对应路径时返回首页。
使用hash router的方式，refresh不会有问题。
什么叫hash router，我们看下面这个路径 # 左边的是服务端会去解析的路径，而 # 右边则是客户端这边用来解析的路径。
hash router对SEO 搜索引擎优化不够友好
https://note.youdao.com/web/#/file/WEB134686e7d68097cbbb3163866534e1ea/note/WEB7169fed0819b17f889eb6e0585b06246/
