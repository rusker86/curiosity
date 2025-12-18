
import express from "express"
import routes from "../routes/routes.js"

const app = express()

app.set("view engine", "ejs")
app.set("views",'views')

app.use(express.static("public"))

app.use(routes)

/*
app.listen(3000, () => {
	console.log(`Servidor escuchando en puerto ${3000}`)
})
*/