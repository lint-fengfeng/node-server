'use strict';

/**
 *  ctx.query：URL 中的请求参数（忽略重复 key）
 *  ctx.quries：URL 中的请求参数（重复的 key 被放入数组中）
 *  ctx.params：Router 上的命名参数
 *  ctx.request.body：HTTP 请求体中的内容
 *  ctx.request.files：前端上传的文件对象
 *  ctx.getFileStream()：获取上传的文件流
 *  ctx.multipart()：获取 multipart/form-data 数据
 *  ctx.cookies：读取和设置 cookie
 *  ctx.session：读取和设置 session
 *  ctx.service.xxx：获取指定 service 对象的实例（懒加载）
 *  ctx.status：设置状态码
 *  ctx.body：设置响应体
 *  ctx.set：设置响应头
 *  ctx.redirect(url)：重定向
 *  ctx.render(template)：渲染模板
**/
