// eslint-disable-next-line unicorn/import-style
import chalk, { type Chalk } from 'chalk';

export class Logger {
  static log(message: string, color: Chalk = chalk.blue) {
    const timestamp = new Date().toISOString();

    console.info(color(`[${timestamp}] ${message}`));
  }
}
