var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
    const { username, password } = req.body
    const result = login(username, password)
    
    res.json({
        username,
        password,
    })
});

router.get('/sesion-test', (req, res, next) => {
    const session = req.session
    if(session.viewNum == null) {
        session.viewNum = 0
    }

    session.viewNum++

    res.json({
        viewNum: session.viewNum
    })
})

module.exports = router;