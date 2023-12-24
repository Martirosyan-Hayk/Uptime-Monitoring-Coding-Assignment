# 🚀 Website Uptime Monitoring

This Node.js script monitors the uptime of a list of websites, periodically sending HTTP requests and reporting the response status. It supports both HTTP and HTTPS protocols and provides customizable configuration options.

## 🛠️ Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### 🔄 Clone the Repository

```bash
git clone https://github.com/Martirosyan-Hayk/Uptime-Monitoring-Coding-Assignment.git
cd website-uptime-monitoring
```

### 📦 Install Dependencies

```bash
yarn install  
```

## ▶️ Running the Script

```bash
npm start
```

## 🔧 Customization

Adding URLs to Monitor
Edit the config.json file and add or remove URLs from the urls array.

Adjusting Monitoring Interval
To change the monitoring interval, update the interval value in the config.json file. The default is 300 seconds (5 minutes).

Changing Failure Threshold
Adjust the threshold value in the config.json file to set the maximum allowed consecutive failures before triggering an alert. The default is 5 failures.