import fs from "fs";
import path from "path";
import { createLogger, transports, format } from "winston";

const logsDir = path.resolve(process.cwd(), "logs");
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

const logger = createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message, ...meta }) =>
      `${timestamp} [${level}] ${message} ${Object.keys(meta).length ? JSON.stringify(meta) : ""}`
    )
  ),
  transports: [
    new transports.File({ filename: path.join(logsDir, "error.log"), level: "error" }),
    new transports.File({ filename: path.join(logsDir, "app.log") }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(new transports.Console({ format: format.simple() }));
}

export default logger;