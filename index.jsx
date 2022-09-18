const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("animeDB.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.use((err, req, res, next) => {
   res.status(500).send({message: err.message});
});

server.get("/", (req, res) =>{
   res.send("Server Is Ready");
});

//server port listening on/ serving on.//
const port = process.env.PORT || 54441;
server.listen(port, () => {
    console.log(`Server Is Ready At http://localhost:${port}`);
});

module.exports = server;