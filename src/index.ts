import express from 'express'

const PORT = 80
const app = express()

app.listen(PORT, () => {
	console.log(`Server has been started on PORT: ${ PORT }...`)
})

app.get('*', (req, res) => {
	res.send('Hello, World!')
})