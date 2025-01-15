const fs = require('fs')
const os = require('os')

const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(message) {
        this.emit('message', {message})
    }
}

const logger = new Logger()
const logFile = './eventlog.txt'

const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} - ${event.message}`
    fs.appendFileSync(logFile, logMessage)
}

logger.on('message', logToFile)

setInterval(() => {
   const memoryUsage = (os.freemem() / os.totalmem()) * 100
   logger.log(`Memory usage: ${memoryUsage.toFixed(2)}%\n`)
}, 3000)

logger.log('Starting logging\n')
logger.log('Logging every 3 seconds\n')