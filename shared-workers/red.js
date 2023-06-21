console.log("red.js");
const worker = new SharedWorker("shared-worker.js");
worker.port.onmessage = ({data}) => {
    console.log("EVENT", data);
}