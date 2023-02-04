import { useState } from "react";
import ChartButtons from "./ChartButtons";
import { ResponsiveLine } from "@nivo/line";
import { Badge, Box, Skeleton } from "@chakra-ui/react";
import { useHistory } from "../hooks/useHistory";

const Chart = () => {
  const [day, setDay] = useState("7");
  const [open, setOpen] = useState(false);
  const { isLoading, data } = useHistory(day);
  return (
    <Box
      style={
        open
          ? {
              position: "absolute",
              "z-index": "2",
              width: "100vw",
              height: "100vh",
              top: "0",
              left: "0",
              padding: "20px",
            }
          : {
              pos: "relative",
              zIndex: null,
              width: "100%",
              height: "60vh",
              top: null,
              left: null,
            }
      }
      bg="#ffffff"
    >
      <ChartButtons
        buttons={["1d", "3d", "1w", "1m", "6m", "1y"]}
        changeDay={setDay}
        changeSize={setOpen}
        size={open}
      />
      {isLoading ? (
        <Box pt="6">
          <Skeleton height="300px" />
        </Box>
      ) : (
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
          }}
          axisBottom={null}
          axisLeft={null}
          enableSlices="x"
          lineWidth={2}
          enableArea={true}
          areaOpacity={0.2}
          enablePoints={false}
          colors="#4B40EE"
          defs={[
            {
              id: "gradient1",
              type: "linearGradient",
              colors: [
                { offset: 0, color: "#E8E7FF" },
                { offset: 100, color: "#ffffff" },
              ],
            },
          ]}
          fill={[{ match: "*", id: "gradient1" }]}
          enableGridY={false}
          gridXValues={10}
          isInteractive={true}
          sliceTooltip={({ slice }) => {
            return (
              <Badge
                paddingX="14px"
                paddingY="5px"
                backgroundColor="#1A243A"
                color="#FFFFFF"
                borderRadius="5"
              >
                {slice.points.map(
                  (point) =>
                    `${new Intl.NumberFormat("en-US", {
                      style: "decimal",
                      maximumFractionDigits: 2,
                    }).format(parseInt(point.data.yFormatted))}`
                )}
              </Badge>
            );
          }}
        />
      )}
    </Box>
  );
};

export default Chart;
