import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

interface CommodityCardProps {
  data: {
    id: number,
    latestSignal : {
      id: number,
      ltp: number,
      origin: number,
      status: string,
      stoploss: number,
      target1: number,
      target2: number,
      target3: number,
      type: string,
    },
    market: string,
    name: string
  },
  isFavourite: boolean
}

const CommodityCard: React.FC<CommodityCardProps> = ({ data, isFavourite }) => {
  return (
    <Box px={5} py={5} rounded={"xl"} maxW={{ base: "full", md: 900 }} bg={"#1b2028"}>
      <Flex justifyContent="space-between" alignItems="center" mb={3}>
        <Flex alignItems="center" bg="gray.800" borderRadius="md">
          <Text color="white" fontSize={{ base: "xl", md: "3xl" }} mr={2}>
            {data.name}
          </Text>
          <Box alignItems={"center"} bg="#eefcf0" color="white" borderRadius="lg" px={4}>
            <Text color={"black"} fontWeight={"semi-bold"} fontSize={"xs"}>
              {data.market}
            </Text>
          </Box>
        </Flex>

        <Icon
          as={StarIcon}
          boxSize={6}
          color={isFavourite ? "yellow.300" : "gray.400"}
        />
      </Flex>

      <SimpleGrid
        columns={{ base: 2, md: 3, lg:4 }}
        rowGap={4}
        textAlign={"center"}
        mb={4}
      >
        <Flex
          gap={2}
          direction={"column"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Text color={"#84868a"}>Call Type</Text>
          <Text color={"#ffffff"}>{data.latestSignal.type}</Text>
        </Flex>

        <Flex gap={2} direction={"column"}>
          <Text color={"#84868a"}>Call Status</Text>
          <Text color={"#ffffff"}>{data.latestSignal.status}</Text>
        </Flex>

        <Flex gap={2} direction={"column"}>
          <Text color={"#84868a"}>Stoploss</Text>
          <Text color={"#ffffff"}>{data.latestSignal.stoploss}</Text>
        </Flex>

        <Flex gap={2} direction={"column"}>
          <Text color={"#84868a"}>LTP</Text>
          <Text color={"#ffffff"}>{data.latestSignal.ltp}</Text>
        </Flex>

        <Flex gap={2} direction={"column"}>
          <Text color={"#84868a"}>Buy Range</Text>
          <Text color={"#ffffff"}>-</Text>
        </Flex>

        <Flex gap={2} direction={"column"}>
          <Text color={"#84868a"}>Target 1</Text>
          <Text color={"#ffffff"}>{data.latestSignal.target1}</Text>
        </Flex>

        <Flex gap={2} direction={"column"}>
          <Text color={"#84868a"}>Target 2</Text>
          <Text color={"#ffffff"}>{data.latestSignal.target2}</Text>
        </Flex>

        <Flex gap={2} direction={"column"}>
          <Text color={"#84868a"}>Target 3</Text>
          <Text color={"#ffffff"}>{data.latestSignal.target3}</Text>
        </Flex>
      </SimpleGrid>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        gap={4}
      >
        <Text color={"#84868a"}>Last Modified on</Text>

        <Button bg={"#9359c6"} rounded={"full"}>
          <Text fontSize={"sm"} color={"#ffffff"}>
            View Details
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default CommodityCard;