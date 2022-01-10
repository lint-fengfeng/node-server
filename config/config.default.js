/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
const slow = require('../app/middleware/slow');
/**
 * @param 服务配置
 */
module.exports = appInfo => {

    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1111aaaa';

    // add your middleware config here
    config.pkg = appInfo.pkg

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    }

    // config.assets = {
    //     publicPath: '/',
    //     devServer: {
    //         port: 8000,
    //     }
    // }
    config.static = {
        prefix: '/',
        dir: [path.join(appInfo.baseDir, '/app/public')],
        dynamic: true,
        preload: false,
        buffer: true,
        maxFiles: 1000,
        maxAge: 31536000,
    }

    config.middleware = ['slow', 'gzip'];
    config.slow = {
        enable: true,
        match: '/api', // 匹配哪些接口
        threshold: 500 // 最大时长
    }

    config.gizp = {
        size: 10240000
    }



    config.logger = {
        dir: path.join(appInfo.baseDir, './logs'),
        appLogName: 'bhfae-server-web.log',
        // coreLogName: 'bhfae-server-core.log',
        // agentLogName: 'bhfae-server-agent.log',
        // scheduleLogName: 'bhfae-server-schedule.log',
        // errorLogName: 'error.log',
        // encoding: 'gbk' 修改日志编码格式
        // outputJSON: true, // 设置输出格式为JSON,方便日志监控系统分析
    }
    // config.view = {
    //     mapping: {
    //         '.html': 'nunjucks',
    //         '.css': 'nunjucks',
    //         '.js': 'nunjucks'
    //     }
    // }

    return {
        ...config,
        ...userConfig,
        // assets: {
        //     templatePath: path.join(appInfo.baseDir, 'app/public/index.html'),
        //     templateViewEngine: 'nunjucks',
        // },
    }
};
