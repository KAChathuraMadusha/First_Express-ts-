import { Router } from "express";
import { GreetingRoute } from "./greeting.route";
import { CustomerRoute } from "./customer.route";

export class Routes {
  public router: Router;
  private static instance: Routes;

  private constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  public static getInstance(): Routes {
    if (!Routes.instance) {
      Routes.instance = new Routes();
    }
    return Routes.instance;
  }

  private setupRoutes() {
    this.router.use("/greeting", GreetingRoute.getInstance().router);
    this.router.use("/customer", CustomerRoute.getInstance().router);
  }
}

