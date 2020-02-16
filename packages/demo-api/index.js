const express = require('express')
const ethers = require('ethers');
const app = express();

const port = 5000;

app.get('/api/wallet/generate', function (req, res) {
    const instance = ethers.Wallet.createRandom();

    res.json({
        address: instance.address,
        privateKey: instance.privateKey
    });
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))