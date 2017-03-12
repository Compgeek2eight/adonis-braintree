const ServiceProvider = require('adonis-fold').ServiceProvider

class BraintreeGatewayProvider extends ServiceProvider {

  * register () {
    this.app.bind('Adonis/Addons/BraintreeGateway', (app) => {
      const braintree = require('braintree')
      const Config = app.use('Adonis/Src/Config')

      var gatewayEnvironment

      switch(Config.get('braintree.environment')){
        case 'sandbox':
          gatewayEnvironment = braintree.Environment.Sandbox
          break
        case 'production':
          gatewayEnvironment = braintree.Environment.Production
          break
        case 'development':
          gatewayEnvironment = braintree.Environment.Development
          break
        default:
          gatewayEnvironment = braintree.Environment.Sandbox
      }

      const gateway = new braintree.connect({
        environment = gatewayEnvironment,
        merchantId: Config.get('braintree.merchantId'),
        publicKey: Config.get('braintree.publicKey'),
        privateKey: Config.get('braintree.privateKey')
      })

      return gateway
    })
  }

}

module.exports = BraintreeGatewayProvider
