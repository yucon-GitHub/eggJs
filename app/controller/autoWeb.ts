import { Controller } from 'egg';

export default class autoWebController extends Controller {
  /**
   * 获取列表
   */
  public async getList() {
    const { ctx } = this;

    ctx.body = {
      code: 200,
      data: await ctx.service.autoWeb.getList(),
      message: '',
    };
  }

  public async getContentById() {
    const { ctx } = this;

    let { value } = await ctx.service.autoWeb.getContentById(Number(ctx.query.id));

    ctx.body = {
      code: 200,
      data: value,
      message: '',
    };
  }

  public async delConfig() {
    const { ctx } = this;

    await ctx.service.autoWeb.delConfig(Number(ctx.request.body.id)).catch(e => console.log(e));

    ctx.body = {
      code: 200,
      data: true,
      message: '',
    };
  }
};
