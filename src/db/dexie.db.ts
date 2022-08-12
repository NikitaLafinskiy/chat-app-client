import Dexie from "dexie";
import { IUser } from "types/db/IUser";

class CosmicDB extends Dexie {
  user!: Dexie.Table<IUser, number>;

  constructor() {
    super("CosmicDB");
    this.version(1).stores({
      user: "++id, refreshToken",
    });
  }
}

export const db = new CosmicDB();

export const { user } = db;
