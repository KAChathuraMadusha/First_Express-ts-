import { Router, Request, Response } from "express";

export class GreetingRoute {
  public router: Router;
  private static instance: GreetingRoute;

  private constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  public static getInstance(): GreetingRoute {
    if (!GreetingRoute.instance) {
      GreetingRoute.instance = new GreetingRoute();
    }
    return GreetingRoute.instance;
  }

  private setupRoutes() {
    this.router.get("/", (req: Request, res: Response) => {
      res.send("Hello world");
    });

    this.router.post("/", (req: Request, res: Response) => {
      const name = req.body.name;
      res.send(`Hello ${name}`);
    });
  }
}