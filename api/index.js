module.exports = (req, res) => {
  res.json({
    mensaje: "Conexión al Backend Exitosa",
    estado: 200,
    usuarios_activos: 1,
    tecnologia: "Node.js en Vercel"
  });
};
