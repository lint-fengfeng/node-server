// app/service/version.js
const { Service } = require('egg').Service;

class VersionService extends Service {
    async find(uid) {
        const user = await this.ctx.db.query('select * from user where uid = ?', uid);
        return user;
    }
}

module.exports = VersionService