const ID = Math.floor(Math.random() * 999999);
console.log("shared-worker.js");
const ports = new Set();
self.onconnect = (e) => {
    const port = e.ports[0];
    console.log(port);
    ports.add(port);
    console.log("CONN", ID, ports.size);
    port.onmessage = (e) => {
        console.log("MESSAGE", ID, e.data);
        for(let p of ports) {
            p.postMessage([ID, e.data]);
        }
    }
}