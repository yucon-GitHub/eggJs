import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;

    let result: string = 'ss1';

    ctx.body = {
      code: 1,
      data: await ctx.service.test.getUser(ctx.params.id),
      message: result,
    };
  }
}
