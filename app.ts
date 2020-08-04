import { opine, Request, Response, NextFunction} from './repo.ts'
import routes from "./routes/index.ts";
const app = opine();

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(new Date(), req.method, req.url)
  next()
})

app.use(routes);

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // Set locals, only providing error in development
  // Render the error page
  res.setStatus(err.status || 500);
  res.render("error");
});
app.listen(3000);
