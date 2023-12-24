import axios from 'axios';
import chalk from 'chalk';

import { Logger } from './logger';

export class WebsiteMonitor {
  private consecutiveFailures: Record<string, number> = {};

  constructor(
    private config: { urls: string[]; interval: number; threshold: number },
  ) {}

  async monitor() {
    Logger.log('Checking websites...');
    await Promise.all(
      this.config.urls.map(async (url) => this.monitorWebsite(url)),
    );
  }

  private async monitorWebsite(url: string) {
    try {
      const startTime: number = Date.now();
      const response = await axios.head(url);
      const endTime: number = Date.now();
      const responseTime: number = endTime - startTime;

      const { status, statusText } = response;

      if (status >= 200 && status < 300) {
        Logger.log(
          `Website ${url} is UP - Status: ${status} ${statusText} - Response Time: ${responseTime} ms`,
          chalk.green,
        );
        this.consecutiveFailures[url] = 0;
      } else {
        Logger.log(
          `Website ${url} is DOWN - Status: ${status} ${statusText} - Response Time: ${responseTime} ms`,
          chalk.red,
        );
        this.incrementFailureCount(url);
      }
    } catch (error) {
      Logger.log(
        `Error accessing ${url} - ${(error as Error).message}`,
        chalk.red,
      );

      this.incrementFailureCount(url);
    }

    if (this.consecutiveFailures[url] >= this.config.threshold) {
      Logger.log(
        `ALERT: ${url} is down. Exceeded consecutive failures threshold.`,
        chalk.redBright,
      );
    }
  }

  private incrementFailureCount(url: string) {
    this.consecutiveFailures[url] = (this.consecutiveFailures[url] || 0) + 1;
  }
}
