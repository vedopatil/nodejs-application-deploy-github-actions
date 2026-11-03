import express from 'express'

const app = express()
const PORT = process.eventNames.PORT ?? 8080

app.get('/', (req, res) => {
    return res.json({
        msg: "Hello fromt the server v1"
    })
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})