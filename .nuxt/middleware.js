const middleware = {}

middleware['authentication'] = require('../middleware/authentication.js')
middleware['authentication'] = middleware['authentication'].default || middleware['authentication']

middleware['nonAuthentication'] = require('../middleware/nonAuthentication.js')
middleware['nonAuthentication'] = middleware['nonAuthentication'].default || middleware['nonAuthentication']

export default middleware
