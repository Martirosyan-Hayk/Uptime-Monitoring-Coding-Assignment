import fs from 'fs';

import type { IConfig } from './interfaces/i-config.ts';

export function loadConfig(configFile: string): IConfig {
  const configContent = fs.readFileSync(configFile, 'utf8');
  const config = JSON.parse(configContent);

  return {
    urls: config.urls || [],
    interval: config.interval || 300,
    threshold: config.threshold || 5,
  };
}
