import { Router } from "express"
import OpenAI from "openai";
import fs from "fs/promises"
import "dotenv/config"
import path from "path"

const router = Router()
/*
const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY
})
*/


router.get("/", async(req, res) => {
	let msgError = "No se pudo cargar el dato cultural"

	try {

//		console.log("→ Petición recibida")
//		console.log("API KEY:", process.env.OPENAI_API_KEY)

/*
		const response = await openai.responses.create({
		model: "gpt-4.1-mini",
		input: [
			{
				role: "user",
				content: [
					{
						type: "input_text",
						text: `Genera un dato cultural breve y sorprendente, real y verificable, relacionado con historia, arte, ciencia o costumbres del mundo. Máximo 3 frases. Lenguaje claro y accesible.`
					}
				]
			}
		]
		})

		console.log("→ Respuesta de OpenAI recibida")


		res.render("index", {dato : response.output_text})
*/

		const filePath = path.join(process.cwd(), "data", "data.json")

		const data = await fs.readFile(filePath, "utf8")

		const json = JSON.parse(data)

		const rnd =  Math.floor(Math.random() * json.length)

		res.render("index", { dato: json[rnd].msg })
	} catch(error) {
		res.render("index", { dato: msgError })
		console.error(error)
	}
})

export default router
