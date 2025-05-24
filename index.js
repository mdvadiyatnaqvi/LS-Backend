const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Service is running...")
})

const PORT = 5500

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

})