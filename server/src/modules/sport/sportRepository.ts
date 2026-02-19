import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

class SportRepository {
  async readAllBy(sportName: string) {
    let query = "";
    if (sportName) {
      query += "WHERE name LIKE ?";
    }

    const [rows] = await databaseClient.query<Rows>(
      `SELECT id, name FROM sport ${query} ORDER BY name`,
      [`${sportName}%`],
    );
    return rows as Sport[];
  }
}

export default new SportRepository();
