import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/home/index:id', controller.home.index);

  /**
   * autoWeb
   */
  router.get('/autoWeb/getList', controller.autoWeb.getList);

  router.get('/autoWeb/getContentById', controller.autoWeb.getContentById);

  router.post('/autoWeb/delConfig', controller.autoWeb.delConfig);

  /**
   * spider
   */
  router.get('/home/spider', controller.home.spider);

  /**
   * html
   */
  router.get('/home/view/:type', controller.home.renderStaticHtml);
};
