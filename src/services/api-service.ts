import axios from "axios";

interface HeaderInit_ {
  "Content-Type"?: "application/json" | "application/x-www-form-urlencoded";
  Authorization?: string; ///Bearer {Token}
}

interface IRequest {
  endpoint: string;
  data?: object;
  header?: HeaderInit_;
  method: "get" | "post" | "put" | "delete";
}

interface IServerResponse {
  data?: any;
  error?: any;
}

export default function APIService(props: IRequest) {
  try {
    this.fetch = async () => {
      let res = await axios({
        method: props.method,
        url: props.endpoint,
        data: props.data
      });
      if (res) {
        return res;
      }
    };
  } catch (error) {
    throw error;
  }
}

export async function useAPIFetch(props: IRequest): Promise<IServerResponse> {
  var data, error;
  try {
    let res = await new APIService({
      method: props.method,
      endpoint: props.endpoint
    }).fetch();
    data = res;
  } catch (e) {
    error = e;
  } finally {
    return { data, error };
  }
}


export const responseHandler = (response) =>
  new Promise(resolve => {
    resolve(response.data)
})