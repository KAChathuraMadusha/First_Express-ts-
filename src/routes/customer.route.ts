import { Router, Request, Response } from "express";

export class CustomerRoute {
  public router: Router;
  private static instance: CustomerRoute;

  private constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  public static getInstance(): CustomerRoute {
    if (!CustomerRoute.instance) {
      CustomerRoute.instance = new CustomerRoute();
    }
    return CustomerRoute.instance;
  }

  private setupRoutes() {
    this.router.get("/", (req: Request, res: Response) => {
      res.send("Chathura Madusha is a");
    });

    this.router.post("/", (req: Request, res: Response) => {
      const customerName = req.body.name;
      res.send(`Customer ${customerName} added successfully!`);
    });
  }
}

