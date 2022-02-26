// chain of responsability
import { LoginHandler } from '../src/behavioral/chain_of_responsibility/LoginHandler'
import { Router } from '../src/behavioral/chain_of_responsibility/Router'
import { Request } from '../src/behavioral/chain_of_responsibility/Request'
import { Response } from '../src/behavioral/chain_of_responsibility/Response'
import { LogHandler } from '../src/behavioral/chain_of_responsibility/LogHandler'

test('should be able to handle a request', () => {
    const request = new Request('/login', 'post', { username: 'test', password: '123' })
    const response = new Response()
    const router = new Router()
    router.register(new LogHandler())
    router.register(new LoginHandler())
    router.process(request, response)
    expect(response.body.token).toBe('123456')
})