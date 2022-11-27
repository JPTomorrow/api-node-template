import logger from "pino";
import dayjs from "dayjs";

// pino-pretty is required to format logs
const streams = [
  { stream: process.stdout },
  { stream: logger.destination(`${__dirname}/log/master.log`) },
];

const log = logger(
  {
    prettifier: true,
    transport: {
      target: "pino-pretty",
    },
    base: {
      pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
  },
  logger.multistream(streams)
);

export default log;
