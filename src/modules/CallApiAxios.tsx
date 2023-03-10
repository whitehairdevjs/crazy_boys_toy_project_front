import axios from "axios";

const instance = axios.create({
  baseURL: "http://34.168.205.50:8080",
});

const AUTH_TOKEN = "123";
instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
instance.defaults.timeout = 2500;

export default async function callApi(url: string, method: string, params: any) {
    console.log("method : " + method);
    console.log("params : " + JSON.stringify(params));

    if (method === "get") {
        // GET
        try {
            // GET 요청은 params에 실어 보냄
            const response = await instance.get(url, params.datas);

            // 응답 결과(response)를 변수에 저장하거나.. 등 필요한 처리를 해 주면 된다.


            console.log(response);
        } catch (e) {
            // 실패 시 처리
            console.error(e);
        }
    } else if (method === "post") {
        // POST
        console.log("post");
        try {        
            // POST 요청은 body에 실어 보냄            
            const response = await instance.post(url, params.datas);
            alert(response.data);
        } catch (e) {
            console.error(e);
        }
    }
}
