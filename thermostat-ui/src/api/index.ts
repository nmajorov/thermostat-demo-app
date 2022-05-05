/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTTP_VERBS } from "@/types/Common";

export default function newRequest(
  method: HTTP_VERBS,
  url: string,
  headers: Headers,
  queryParams: any,
  data: any
): Promise<any> {
  let init = {};
  if (HTTP_VERBS.GET || HTTP_VERBS.PATCH) {
    init = {
      method: method,
      headers: headers,
    };
  } else {
    init = {
      method: method,
      headers: headers,
      body: data,
    };
  }

  const responseData = fetch(
    url,
    init
    //  params: queryParams,
  ).then((response: Response) => {
    //console.log("headers: " + JSON.stringify(headers) );

    if (headers.get("Content-Type") === "application/json") {
      console.log("application type json");
      return response.json();
    } else {
      return response.text().then(function (text) {
        return text;
      });
    }
  });

  return responseData;
}

// export const loadPosts = () => {
//     const PostLoader = (props: { url: string; children: ReactNode }) => {
//         const loader = async () => {
//             const wait = (ms: number, value: Post) =>
//                 new Promise((resolve) => setTimeout(resolve, ms, value));
//             return await fetch(props.url)
//                 .then((res) => res.json())
//                 .then((value) => wait(3000, value));
//         };
//         return <DataLoader loader={loader}>{props.children}</DataLoader>;
//     };
