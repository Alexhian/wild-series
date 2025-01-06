import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

type Category = {
    id: number;
    name: string;
};

class ProgramRepository {
    async readAll () {
        const [rows] = await databaseClient.query<Rows>("SELECT * FROM program");

        return rows as Category[];
    }
}

export default new ProgramRepository();