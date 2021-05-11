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

  public async spider() {
    const { ctx } = this;

    let result: any = await ctx.curl('http://tuijian.hao123.com/hotrank', {
      content: 'json',

      dataType: 'json'
    });

    console.log(result);

    ctx.body = {
      code: 200,
      data: result.data,
      message: ""
    }
  }

  public async renderStaticHtml() {
    const { ctx } = this;

    await ctx.render(`/${ctx.params.type}`);
  }
}
