import schedule from 'node-schedule';

import { loadConfig } from './config';
import { Logger } from './logger';
import { WebsiteMonitor } from './monitor';

const config = loadConfig('config.json');
const websiteMonitor = new WebsiteMonitor(config);

const startMonitoring = () => {
  Logger.log(`Monitoring started with interval ${config.interval} seconds`);

  schedule.scheduleJob(`*/${config.interval} * * * *`, async () => {
    await websiteMonitor.monitor();
  });
};

startMonitoring();
