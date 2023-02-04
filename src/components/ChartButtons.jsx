import { useState } from "react";
import { Box, Stack, Button, useToast } from "@chakra-ui/react";
import { FiMaximize2, FiPlusCircle, FiMinimize2 } from "react-icons/fi";
import { useQueryClient } from "react-query";

const active = {
  bg: "#4B40EE",
  transform: "scale(0.98)",
  color: "#ffffff",
};

const ChartButtons = ({ buttons, changeDay, changeSize, size }) => {
  const queryClient = useQueryClient();
  const [clickedId, setClickedId] = useState(2);
  const days = ["1", "3", "7", "30", "182", "365"];
  const toast = useToast();

  const handleClick = (event, id) => {
    setClickedId(id);
    queryClient.resetQueries("history-query");
    changeDay(days[id]);
    // doSomethingAfterClick(event);
  };

  const handleChange = () => {
    changeSize(!size);
  };

  return (
    <Box
      width="80vw"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack direction="row">
        <Button
          leftIcon={size ? <FiMinimize2 /> : <FiMaximize2 />}
          variant="ghost"
          onClick={handleChange}
        >
          {size ? "Minimize" : "Fullscreen"}
        </Button>
        <Button
          leftIcon={<FiPlusCircle />}
          variant="ghost"
          onClick={() =>
            toast({
              title: "UI not given",
              description:
                "UI is not given for this button and how to compare two crypto",
              status: "success",
              duration: 3000,
              position: "top",
              isClosable: true,
            })
          }
        >
          Compare
        </Button>
      </Stack>
      <Stack direction="row" spacing="20px">
        {buttons.map((buttonLabel, i) => (
          <Button
            key={i}
            size="xs"
            onClick={(event) => handleClick(event, i)}
            isActive={i === clickedId ? true : false}
            _active={active}
          >
            {buttonLabel}
          </Button>
        ))}
        {/* <Button isActive={false} _active={active} size="xs">
          1d
        </Button>
        <Button _active={active} size="xs">
          3d
        </Button>
        <Button _active={active} size="xs">
          1w
        </Button>
        <Button _active={active} size="xs">
          1m
        </Button>
        <Button _active={active} size="xs">
          6m
        </Button>
        <Button _active={active} size="xs">
          1y
        </Button>
        <Button _active={active} size="xs">
          max
        </Button> */}
      </Stack>
    </Box>
  );
};

export default ChartButtons;
