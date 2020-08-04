import { Router } from "../repo.ts";
import api from './api/index.ts'
const router = new Router()

router.get('/', (req, res) => res.send('Everything is allright!'))
router.use('/api', api);

export default router
