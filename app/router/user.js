"use strict";

module.exports = app => {
    const { router, controller, middleware } = app;
    router.get('/api/user/login', controller.home.index);
    router.get('/api/user/logout', controller.home.index1);
    router.get('/404', controller.home.aaa)
    router.get('/*', ctx => {
        ctx.redirect('/index.html');
        ctx.status = 302;
    });


}
