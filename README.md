# try-testingbot
Try to use https://testingbot.com/. Playground project.

## Install

```
git clone https://github.com/Zmoki/try-testingbot.git
npm install
```

## Usage

### Start local web server.

```
npm start
```

Open `http://localhost:4444/`.

### Set up TestingBot credentials

#### *nix

```
TP_KEY=YOUR_TESTINGBOT_KEY
export TP_KEY
TP_SECRET=YOUR_TESTINGBOT_SECRET
export TP_SECRET
```

#### Windows

```
set TP_KEY=YOUR_TESTINGBOT_KEY
set TP_SECRET=YOUR_TESTINGBOT_SECRET
```

### Run tests

```
npm run test
```

### Generate and open reports

```
npm run build:reports
npm run start:reports
```
