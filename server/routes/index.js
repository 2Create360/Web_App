import express from 'express'
import user from './user'
//import route from './route'
import transaction from './transaction'

const router = express.Router();

router.use('/*', (req, res, next) => {
    res.setHeader("Expires", "-1");
    res.setHeader("Cache-Control", "must-revalidate, private");
    next();
});

router.use('/user', user);
//router.use('/route', route);
router.use('/trans', transaction);

export default router;