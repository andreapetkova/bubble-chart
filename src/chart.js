const canvas = document.getElementById("bubbleChart");
const ctx = canvas.getContext("2d");

// set canvas size
canvas.width = 500;
canvas.height = 500;

// set the chart dimensions and margins
const margin = { top: 30, right: 30, bottom: 50, left: 50 };
const chartWidth = canvas.width - margin.left - margin.right;
const chartHeight = canvas.height - margin.top - margin.bottom;

//set styles for the chart
const styles = {
  axis: {
    strokeStyle: "#ddd",
    font: 'bold 12px "Courier New"',
  },
  bubble: {
    fillStyle: "rgba(255, 0, 0, 0.2)",
    strokeStyle: "rgba(255, 0, 0, 0.3)",
    lineWidth: 2,
  },
};

// get pixel value for the x axis
const xScale = (value) => {
  return margin.left + value * (chartWidth / 100);
};

// get pixel value for the y axis
const yScale = (value) => {
  return margin.top + chartHeight - value * (chartHeight / 100);
};

// get pixel value for the radius
const rScale = (value) => {
  return value * (chartWidth / 100);
};

// create the chart grid
for (let i = 0; i <= 100; i += 20) {
  const startingPointX = xScale(i);
  const startingPointY = yScale(i);

  //styles for the lines
  ctx.strokeStyle = styles.axis.strokeStyle;
  ctx.font = styles.axis.font;

  ctx.beginPath();

  // add line on x axis
  ctx.moveTo(startingPointX, margin.top + chartHeight + 5);
  ctx.lineTo(startingPointX, margin.top);
  ctx.stroke();
  ctx.fillText(i.toString(), startingPointX - 5, margin.top + chartHeight + 20);

  // add line on y axis
  ctx.moveTo(margin.left - 5, startingPointY);
  ctx.lineTo(margin.left + chartWidth, startingPointY);
  ctx.stroke();
  ctx.fillText(i.toString(), margin.left - 30, startingPointY + 5);
}

// create a clipping region that matches the chart area
ctx.beginPath();
ctx.rect(margin.left, margin.top, chartWidth, chartHeight);
ctx.clip();

// bubbles data in [X,Y,Value] format
const mockData = [
  [10, 10, 5],
  [30, 5, 20],
  [50, 70, 15],
  [60, 60, 5],
  [80, 40, 10],
  [15, 50, 7],
  [100, 85, 15],
  [120, -50, 150], // this data will not be displayed because it's values are out of range
];

// check if the bubble data is in range
const isValidData = (data) => {
  return data.every((value) => value >= 0 && value <= 100);
};

//Draw bubbles for each data member in the array
mockData.forEach((data) => {
  if (isValidData(data)) {
    const bubbleX = xScale(data[0]);
    const bubbleY = yScale(data[1]);
    const bubbleR = rScale(data[2]);

    ctx.beginPath();
    ctx.arc(bubbleX, bubbleY, bubbleR, 0, 2 * Math.PI);
    ctx.fillStyle = styles.bubble.fillStyle;
    ctx.fill();
    ctx.strokeStyle = styles.bubble.strokeStyle;
    ctx.lineWidth = styles.bubble.lineWidth;
    ctx.stroke();
  }
});
