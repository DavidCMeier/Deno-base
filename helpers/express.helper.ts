import { Request , Response, NextFunction } from '../repo.ts'

const handleControllerCall = (controllerToCall: any) => {
  return (req:Request , res:Response, next: NextFunction) => {
    controllerToCall(req, res, next).then((result: any) => {
      res.send(result)
    }).catch((err: any) => {
      console.error(err)
      next(err)
    })
  }
}

const handleServiceCall = async (promiseToResolve: any, params = []) => {
  try {
    const result = await promiseToResolve(...params)

    return result
  } catch (err) {
    throw err
  }
}

const hCC = handleControllerCall
const hSC = handleServiceCall

export {
  hCC,
  hSC,
}
