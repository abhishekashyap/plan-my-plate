import axios from "axios";
import useSWR, { ConfigInterface } from "swr";

const NUTRIDIGM_BASE_URL =
  "https://nutridigm-api-dev.azurewebsites.net/api/v1/nutridigm/";

const nutridigmServerInstance = axios.create({
  baseURL: NUTRIDIGM_BASE_URL,
  params: {
    subscriptionId: process.env.NEXT_PUBLIC_NUTRIDIGM_API_KEY,
    api_key: process.env.NEXT_PUBLIC_NUTRIDIGM_API_KEY,
  },
});

const fetcher = (url: string) =>
  nutridigmServerInstance.get(url).then((res) => res.data);

export function useNutridigmSWR<Data = any, Error = any>(
  url: string,
  config: ConfigInterface<Data, Error> = {}
) {
  return useSWR<Data, Error>(url, fetcher, config);
}

export default nutridigmServerInstance;
