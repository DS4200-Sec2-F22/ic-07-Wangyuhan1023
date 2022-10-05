const FRAME_HEIGHT = 1000;
const FRAME_WIDTH = 500;
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
					.domain([0, MAX_Y])
					.range([0, VIS_WIDTH]);

FRAME.selectAll("point")
		.data(data)
		.enter()
		.append("circle")
			.attr("cy", (d) => {return (Y_SCALE(d))
			})
			.attr("cx", MARGINS.right)
			.attr("r", 10)
			.attr("class", "point");

FRAME.append("g")
		.attr("transform", "translates(" + MARGINS.left + 
			"," +(VIS_WIDTH + MARGINS.top) + ")")
		.call(d3.axisLeft(Y_SCALE).ticks(6))
			.attr("font-size", "20px");