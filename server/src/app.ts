import express, {Express}from "express"
import cors from "cors"

const app : Express = express()

// Usa o cors com a opção origin definida
app.use(cors({
    origin: '*'
  }));

// Usa o express.json depois do cors
app.use(express.json())

app.listen(3003 , () => {
    console.log("Server ready!")
})

export default app
