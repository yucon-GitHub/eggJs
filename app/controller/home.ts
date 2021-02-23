import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;

    ctx.body = {
      code: 200,
      data: await ctx.service.test.getUser(ctx.params.id),
      message: '',
    };
  }
}
