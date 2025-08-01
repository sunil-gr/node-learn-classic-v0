const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const serverVariables = {
    'HTTP_HOST': req.get('host'),
    'HTTP_USER_AGENT': req.get('user-agent'),
    'HTTP_ACCEPT': req.get('accept'),
    'HTTP_ACCEPT_LANGUAGE': req.get('accept-language'),
    'HTTP_ACCEPT_ENCODING': req.get('accept-encoding'),
    'HTTP_CONNECTION': req.get('connection'),
    'HTTP_UPGRADE_INSECURE_REQUESTS': req.get('upgrade-insecure-requests'),
    'SERVER_NAME': req.hostname,
    'SERVER_PORT': req.socket.localPort,
    'REQUEST_METHOD': req.method,
    'REQUEST_URI': req.url,
    'QUERY_STRING': req.url.split('?')[1] || '',
    'REMOTE_ADDR': req.ip,
    'REMOTE_HOST': req.hostname,
    'CONTENT_TYPE': req.get('content-type'),
    'CONTENT_LENGTH': req.get('content-length')
  };
  
  res.render('server-variable', { serverVariables });
});

module.exports = router; 