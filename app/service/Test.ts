import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   */
  public async getUser(id: number) {
    return await this.app.mysql.get('autoWeb', { id });
  }
}
