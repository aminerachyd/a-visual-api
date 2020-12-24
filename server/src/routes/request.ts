import express, { Request, Response, Router } from "express";
import axios, { AxiosResponse } from "axios";
const router: Router = express.Router();

// Interface pour la data reçue
interface BodyData {
  requestApi: string;
  requestMethod: string;
  requestBody: string;
}

// Request - GET
// Required data: none
// Optional data: none
router.get(
  "/",
  (req: Request, res: Response): Response => {
    return res.send({ Message: "You should probably use a POST" });
  }
);

// Request - POST
// Required data: requestApi, requestMethod
// Optional data: requestBody
router.post(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    const bodyData: BodyData = req.body;

    // We check if the required params are present
    if (bodyData.requestApi && bodyData.requestMethod) {
      // We check the method if it's a get/post/put/delete
      if (
        ["get", "post", "put", "delete"].indexOf(
          bodyData.requestMethod.toLowerCase()
        ) > -1
      ) {
        switch (bodyData.requestMethod.toLowerCase()) {
          case "get":
            let requestRes: AxiosResponse = await axios.get(
              bodyData.requestApi
            );

            return res.send(requestRes.data);
          //   case "post":
          //     let requestRes: AxiosResponse = await axios.post(
          //       bodyData.requestApi,
          //       bodyData.requestBody
          //     );
          //   case "put":
          //   case "delete":

          //   default:
        }
      } else {
        return res.status(400).send({
          Message: "The method you submitted is currently not availabe",
        });
      }
    } else {
      return res.status(400).send({
        Message:
          "Missing parameters, you must specify both the API link and the request method",
      });
    }

    return res.send({ Message: "You should probably use a POST" });
  }
);
export default router;
