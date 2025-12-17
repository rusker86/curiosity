import { Router } from "express"
import OpenAI from "openai";
import "dotenv/config"

const router = Router()
const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY
})



router.get("/", async(req, res) => {
	try {

		console.log("→ Petición recibida")
		console.log("API KEY:", process.env.OPENAI_API_KEY)


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
	} catch(error) {
		console.error(error)
		res.render("index", { dato: "No se pudo cargar el dato cultural" })
	}
})

export default router
