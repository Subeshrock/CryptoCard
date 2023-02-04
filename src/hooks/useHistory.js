import { useQuery } from "react-query";
import axios from "axios";

const historyUrl =
  "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=";

const fetchHistory = async ({ queryKey }) => {
  let history = queryKey[1];
  if (history > "7") history = history + "&interval=daily";
  return await axios.get(historyUrl + history);
};

export const useHistory = (history) => {
  return useQuery(["history-query", history], fetchHistory, {
    select: (data) => {
      const prices = data.data.prices;
      const history = prices.map(([x, y]) => ({ x, y }));
      const coinHistory = [{ id: "whatever", data: history }];
      return coinHistory;
    },
    keepPreviousData: false,
  });
};
// const data1 = [{ id: "whatever", coins: price }];
