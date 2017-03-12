# Adonis Braintree Provider
A [Braintree](https://github.com/braintree/braintree_node) provider for the adonis framework.

Use this library to access the gateway object from within Adonis

## Install
```
npm install --save adonis-braitnree
```

## Configure
Register it in `bootstrap/app.js`:

```javascript
const providers = [
  ...
  'adonis-braintree/providers/BraintreeGatewayProvider'
]
```
You may also want to register an alias:
```javascript
const aliases = {
  ...
  BraintreeGateway: 'Adonis/Addons/BraintreeGateway'
}
```

Create a configuration file in `config/braintree.js`. For example:

```javascript
'use strict';

const Env = use('Env');

module.exports = {
  environment: 'sandbox',
  merchantId: Env.get('BRAINTREE_MERCHANTID'),
  publicKey: Env.get('BRAINTREE_KEY_PUBLIC'),
  privateKey: Env.get('BRAINTREE_KEY_PRIVATE')
};

```

## Example Usage

```javascript
const Gateway = use('BraintreeGateway')

Route.get('/braintree/token', function *(request, response){
    gateway.clientToken.generate({}, function (err, res){
        yield response.send(res.clientToken);
      });
})
```
