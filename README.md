# Bubble Chart

![image](https://user-images.githubusercontent.com/82291897/232204020-30b6e6c3-5a7d-4b7a-a858-41241b8308e9.png)

This is a simple bubble chart drawn on an HTML Canvas element using JavaScript. The chart displays bubbles at certain X and Y coordinates, with the size of the bubble determined by a third value.

## Getting Started

To get started with this project, simply download the code or clone the repository to your local machine.

### Prerequisites

This project requires a modern web browser with support for the HTML canvas element and JavaScript.

### Installing

There is no installation process for this project. Simply open the `index.html` file in your web browser to view the bubble chart.

## Usage

The chart displays a set of bubbles with X and Y coordinates specified in the `mockData` array. The size of each bubble is determined by a third value in the array.

The chart also includes a set of X and Y axes, with tick marks and labels. The tick marks are spaced at intervals of 20, with the values labeled at each tick mark.

## Customization

To customize the chart, you can adjust the values in the `mockData` array to change the location and size of the bubbles.

* If you want to generate a random number of circles with x,y and r in range [0,100] instead of using the mockData you could do the following => In `chart.js` remove everything from line 70 till the end of the code and replace it with a for loop like the one below (adjust `n` according to the number of circles you wish to generate)
```
for (i = 0; i <= n; i++) {
  const x = xScale(Math.floor(Math.random() * 101));
  const y = yScale(Math.floor(Math.random() * 101));
  const r = rScale(Math.floor(Math.random() * 101));

  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * 2 * Math.PI);
  ctx.fillStyle = styles.bubble.fillStyle;
  ctx.fill();
  ctx.strokeStyle = styles.bubble.strokeStyle;
  ctx.lineWidth = styles.bubble.lineWidth;
  ctx.stroke();
}
```

You can also adjust the tick mark spacing and labeling by changing the `for` loops that draw the axes.
The `xScale` and `yScale` functions can be adjusted to change the scaling of the chart axes.

The colors and styles of the bubbles and axes can be customized by adjusting the `styles` variable in the `chart.js` file.

## Built With

- HTML
- CSS
- JavaScript

## Authors

- Andrea Petkova - https://github.com/andreapetkova

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
