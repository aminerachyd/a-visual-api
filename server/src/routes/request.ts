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
    try {
      const bodyData: BodyData = req.body;

      // We check if the required params are present
      if (bodyData.requestApi && bodyData.requestMethod) {
        // We check if the method is a get/post/put/delete
        if (
          ["get", "post", "put", "delete"].indexOf(
            bodyData.requestMethod.toLowerCase()
          ) > -1
        ) {
          try {
            let requestRes: AxiosResponse = await axios({
              baseURL: bodyData.requestApi,
              data: bodyData.requestBody,
              method: <"get" | "post" | "put" | "delete">(
                bodyData.requestMethod.toLowerCase()
              ),
            });
            return res
              .status(200)
              .send(
                requestRes.data
                  ? { Message: "Success", data: requestRes.data }
                  : { Message: "Success", data: "No payload from this request" }
              );
          } catch (error) {
            return res.status(200).send({
              Message: "Error from the API server",
              data: error,
            });
          }
        } else {
          return res.status(400).send({
            Message: "Error",
            data: "The method you submitted is currently not availabe",
          });
        }
      } else {
        return res.status(400).send({
          Message: "Error",
          data:
            "Missing parameters, you must specify both the API link and the request method",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        Message: "Error",
        data: "Server error, try again later",
      });
    }
  }
);
export default router;
