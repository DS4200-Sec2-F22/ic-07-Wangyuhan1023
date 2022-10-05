const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 200;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};
const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;


const FRAME = d3.select("#vis")
					.append("svg")
						.attr("height", VIS_HEIGHT)
						.attr("width", VIS_WIDTH)
						.attr("class", "frame");

const data = [55000, 48000, 27000, 66000, 90000];

const MAX_Y = d3.max(data, (d) => {return d;});

const Y_SCALE = d3.scaleLinear()
					.domain([0, VIS_HEIGHT])
					.range([0, MAX_Y]);

FRAME.selectAll("point")
		.data(data)
		.enter()
		.append("circle")
			.attr("cy", (d) => {return (Y_SCALE(d))
			})
			.attr("cx", 0)
			.attr("r", 10)
			.attr("class", "point");

FRAME.append("g")
		.attr("transform", "translate(1000, 10)")
		.call(d3.axisLeft(Y_SCALE).ticks(6))
			.attr("font-size", "20px");