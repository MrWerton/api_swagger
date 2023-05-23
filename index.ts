import express from 'express'
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";


const app = express()

app.get('/', (req, res) => {
    return res.json({ message: 'hello, world' })
})

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const port = 4000;

app.listen(port, () => console.log(`server running in http://localhost:${port}`))