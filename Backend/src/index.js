import { configDotenv } from 'dotenv'
import { app } from "./app.js";
import mongodbConnect from "./db/index.js";
import dns from 'dns'

configDotenv()
dns.setServers(['8.8.8.8'])


const port = process.env.PORT

mongodbConnect().then(() => {
    app.listen(port, () => {
        console.log(`App is Running on port ${port}`)
    })
    app.get('/', (req, res) => {
        res.send('Ecommerce backend running')
    })
})
