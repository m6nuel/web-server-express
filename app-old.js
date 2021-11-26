
var http = require('http');
  
const PORT = process.env.PORT || 8080;
  
var httpServer = http.createServer(
        (req, res) => {
  
  const salida = {
      nombre: 'Jesus',
      edad: '31',
      url: req.url
  };
    
  res.writeHead(200, {
    'Content-Length': Buffer.byteLength( JSON.stringify( salida ) ),
    'Content-Type': 'text/plain'
  });
    
  res.end( JSON.stringify( salida ) );
});
  
httpServer.listen(PORT, () => {
   console.log("Servidor corriendo en el puerto 8080");
});