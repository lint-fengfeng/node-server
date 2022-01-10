
module.exports = (options, app) => {
    return async function (ctx, next) {

        const startTime = Date.now();
        await next();
        const consume = Date.now() - startTime;
        const { threshold = 0 } = options || {};
        if (consume > threshold) {
            ctx.logger.info(`${ctx.url}请求耗时${threshold}毫秒`);
        }
    };
};
