import { ChakraProvider, Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import Header from "./components/Header";
import MainTab from "./components/MainTab";
// import { ReactQueryDevtools } from "react-query/devtools";
import { useCoin } from "./hooks/useCoin";

function App() {
  const { isLoading, data } = useCoin();

  return (
    <ChakraProvider>
      <Box width="95vw" margin="auto">
        {isLoading ? (
          <Box pt="6">
            <Skeleton height="60px" />
            <SkeletonText mt="4" noOfLines={1} spacing="4" />
          </Box>
        ) : (
          <Header
            price={data.market_data.current_price.usd}
            priceChange={data.market_data.price_change_24h}
            priceChangePercentage={data.market_data.price_change_percentage_24h}
          />
        )}
        <MainTab />
      </Box>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </ChakraProvider>
  );
}

export default App;
