import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import "reflect-metadata";
import "dotenv/config";

const dataSouceConfig = (): DataSourceOptions => {
  return {
    type: "postgres",
    url: process.env.DATABASE_URL!,
    synchronize: false,
    logging: true,
    entities: [path.join(__dirname, "./models/**.{js,ts}")],
    migrations: [path.join(__dirname, "./migrations/**.{js,ts}")],
  };
};

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: [path.join(__dirname, "./models/**.{js,ts}")],
      }
    : dataSouceConfig()
);

export default AppDataSource;
