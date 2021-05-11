import { Service } from 'egg';

/**
 * Test Service
 */
export default class autoWeb extends Service {
  /**
   * 获取列表
   */
  public async getList() {
    return await this.app.mysql.query('SELECT a.*, u.nickname as name FROM autoWeb a LEFT JOIN user u ON a.user_id = u.user_id WHERE a.is_delete = 0;');
  }


  /**
   * 获取内容
   * @param id
   */
  public async getContentById(id: number) {
    return await this.app.mysql.get('autoWeb', { id });
  }

  /**
   * 删除配置
   * @param id
   */
  public async delConfig(id: number) {
    return await this.app.mysql.update('autoWeb', { id, 'is_delete': 1 });
  }
}
