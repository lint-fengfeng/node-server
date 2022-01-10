'use strict'

const Controller = require('egg').Controller
const fse = require("fs-extra")
const path = require("path")
const _ = require('lodash')

async function IO(ctx) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

class HomeController extends Controller {
    async aaa() {
        this.ctx.throw(404, 'not found');
    }

    async index() {
        // 接受
        // 校验
        // 处理http请求参数
        // 向下掉用service服务
        // 通过http将结果响应给用户
        await IO(this.ctx)
        this.ctx.body = "helloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWordhelloWord"
    }
    async index1() {
        // 接受
        // 校验
        // 处理http请求参数
        // 向下掉用service服务
        // 通过http将结果响应给用户
        await IO(this.ctx)
        this.ctx.body = "helloWord"
    }

    async compare() {
        const { ctx } = this
        const projectA = fse.readdirSync(path.join(ctx.app.baseDir, '../', 'directory/projectA'))
        const projectB = fse.readdirSync(path.join(ctx.app.baseDir, '../', 'directory/projectB-131'))
        const projectB101 = fse.readdirSync(path.join(ctx.app.baseDir, '../', 'directory/projectB-101'))
        const projectB101bak = fse.readdirSync(path.join(ctx.app.baseDir, '../', 'directory/projectB-101.bak'))
        ctx.app.logger.info('projectA', projectA)
        ctx.app.logger.info('projectB', projectB)
        const temp = _.difference(projectB101, projectB101bak)
        ctx.app.logger.info('temp', temp)
        ctx.body = "hahahahaha"
    }

    // async assets() {
    //     await this.ctx.render('index.js');
    // }
}

module.exports = HomeController;
