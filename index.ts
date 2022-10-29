import express from 'express'
import {router} from './src/routers'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(port, function () {
    console.log(`Library is listening on port ${port}`)
})