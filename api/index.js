import express from "express"
import routes from "../src/routes/routes.js"
import path from "path"

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(process.cwd(), "public"))

app.use(express.static(path.join(process.cwd(), "public")))

app.use("/", routes)

/*
app.listen(3000, () => {
	console.log(`Servidor escuchando en puerto ${3000}`)
})
*/