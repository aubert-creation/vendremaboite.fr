const express = require('express');
const next = require('next');
const path = require('path');
const bodyParser = require('body-parser');
const keys = require("./server/config/keys");
const stripe = require('stripe')(keys.stripeSecretKey);
const mailer = require('./mailer');

const execute  =    require('child_process').exec
,    fs        =    require("fs")
,    logs       =    'logs.txt'
,    script    =    'sh deploy.sh'

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
        // Static files
        // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
    server.use('/images', express.static(path.join(__dirname, 'images'), {
        maxAge: dev ? '0' : '365d'
    }));

    server.use(bodyParser.json());

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.post('/api/contact', (req, res) => {
        const { name, email, phone, subject, text } = req.body;
        mailer({name, email, phone, subject, text}).then(() => {
            res.send('success')
        }).catch(error => {
            res.status(422).send(error)
        });
    });

    server.post('/api/stripe/checkout', async (req, res) => {
        await stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            description: 'StartP Next Landing Page Templates',
            source: req.body.token.id
        });
        res.send({})
    });

    server.post('/deploy', function(req, res) {
      // Le non roublard checkerai ici la requête pour rejeter tout ce qui ne viendrais pas de bitbucket ou github
      var sender = req.body.sender;
      var branch = req.body.ref;


      if (branch.indexOf("master") > -1 && sender.login === "aubert-creation") {
        execute([script, '>>', logs, '2>&1'].join(' '));
        res.writeHead(200);
        return res.end('Okay');
      } else {
        res.writeHead(401);
        return res.end('NO');
      }
    })

    server.post('/log', function(req, res) {
       res.writeHead(200);
       return fs.createReadStream(logs).pipe(res);
    })

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`> Read on http://localhost:${PORT}`)
    });
})
