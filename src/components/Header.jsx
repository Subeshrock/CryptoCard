import { Box, Heading, Text } from "@chakra-ui/react";

const Header = ({ price, priceChange, priceChangePercentage }) => {
  return (
    <>
      <Box display="flex" alignItems="baseline">
        <Heading mr="10px">Bitcoin Price</Heading>
        <Heading fontSize="70px" lineHeight="89px" color="#1A243A" as="h1">
          {new Intl.NumberFormat("en-US", {
            style: "decimal",
            maximumFractionDigits: 2,
          }).format(parseInt(price))}
        </Heading>
        <Heading
          ml="6px"
          fontSize="24px"
          lineHeight="30px"
          color="#BDBEBF"
          as="h3"
        >
          USD
        </Heading>
      </Box>
      <Text color="#67BF6B" fontSize="18px" lineHeight="23px">
        Change{" "}
        {new Intl.NumberFormat("en-US", {
          style: "decimal",
          signDisplay: "exceptZero",
          maximumFractionDigits: 2,
        }).format(parseInt(priceChange))}{" "}
        (
        {new Intl.NumberFormat("en-US", {
          style: "percent",
          signDisplay: "exceptZero",
          maximumFractionDigits: 2,
        }).format(parseInt(priceChangePercentage))}
        )
      </Text>
    </>
  );
};

export default Header;
