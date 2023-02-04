import { useQuery } from "react-query";
import axios from "axios";

const coinUrl =
  "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false";

const fetchCoin = async () => {
  return await axios.get(coinUrl);
};

export const useCoin = () => {
  return useQuery("coin-query", fetchCoin, {
    select: (data) => {
      const coin = data.data;
      return coin;
    },
  });
};
