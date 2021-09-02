const menuIconEl = $('.menu-icon');
const sidenavEl = $('.sidenav');
const sidenavCloseEl = $('.sidenav__close-icon');

// Add and remove provided class names
function toggleClassName(el, className) {
	if (el.hasClass(className)) {
		el.removeClass(className);
	} else {
		el.addClass(className);
	}
}

// Open the side nav on click
menuIconEl.on('click', function () {
	toggleClassName(sidenavEl, 'active');
});

// Close the side nav on click
sidenavCloseEl.on('click', function () {
	toggleClassName(sidenavEl, 'active');
});

// OS
var options = {
	series: [20, 65, 15],
	chart: {
		width: 280,
		type: 'pie',
	},
	legend: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	title: {
		text: 'OS',
		align: 'left',
	},
	colors: ['#ff0000', '#00A3E7', '#ff7400'],
	labels: ['Mac', 'Windows', 'Linux'],
	responsive: [
		{
			breakpoint: 480,
			options: {
				chart: {
					width: 200,
				},
				legend: {
					position: 'bottom',
				},
			},
		},
	],
};
var chart = new ApexCharts(document.querySelector('#pie_os'), options);
chart.render();

// Application Drift
var options = {
	series: [
		{
			name: 'Files Added',
			data: [1.4],
		},
		{
			name: 'Files Removed',
			data: [-0.8],
		},
	],
	chart: {
		type: 'bar',
		height: 300,
		width: 250,
		stacked: true,
	},
	colors: ['#4ef68a', '#FF4560'],
	plotOptions: {
		bar: {
			horizontal: true,
			barHeight: '80%',
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		width: 1,
		colors: ['#fff'],
	},
	annotations: {
		xaxis: [
			{
				x: 0,
				borderColor: '#000',
				yAxisIndex: 0,
				// label: {
				// 	show: true,
				// 	text: 'Baseline',
				// 	style: {
				// 		color: '#fff',
				// 		background: '#775DD0',
				// 	},
				// },
			},
		],
	},

	grid: {
		xaxis: {
			lines: {
				show: true,
			},
		},
	},
	yaxis: {
		min: -5,
		max: 5,
		title: {
			// text: 'Age',
		},
	},
	tooltip: {
		shared: false,
		// x: {
		// 	formatter: function (val) {
		// 		return val;
		// 	},
		// },
		// y: {
		// 	formatter: function (val) {
		// 		return Math.abs(val) + '%';
		// 	},
		// },
	},
	title: {
		text: 'Application Drift',
	},
	xaxis: {
		categories: [''],
		// title: {
		// 	text: 'Percent',
		// },
		labels: {
			// formatter: function (val) {
			// 	return Math.abs(Math.round(val)) + '%';
			// },
		},
	},
};

var chart = new ApexCharts(document.querySelector('#line_chart'), options);
chart.render();

// Server
var options = {
	series: [80, 20],
	chart: {
		width: 280,
		type: 'pie',
	},
	legend: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	title: {
		text: 'Server',
		align: 'left',
	},
	colors: ['#fff', '#000'],
	labels: ['Left', 'Used'],
	responsive: [
		{
			breakpoint: 480,
			options: {
				chart: {
					width: 200,
				},
				legend: {
					position: 'bottom',
				},
			},
		},
	],
};

var chart = new ApexCharts(document.querySelector('#pie_server'), options);
chart.render();

//second row

//dounut

var options = {
	series: [44, 55, 41, 17],
	chart: {
		width: 280,
		type: 'donut',
	},
	legend: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	title: {
		text: 'Issues',
		align: 'left',
	},
	colors: ['#FF7400', '#00A3E7', '#FF0000', '#FFF11F'],
	labels: ['', '', '', ''],
	responsive: [
		{
			breakpoint: 480,
			options: {
				chart: {
					width: 200,
				},
				legend: {
					position: 'bottom',
				},
			},
		},
	],
};

var chart = new ApexCharts(document.querySelector('#pie_issues'), options);
chart.render();

//pie

var options = {
	series: [80, 20],
	chart: {
		width: 280,
		type: 'pie',
	},
	legend: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	title: {
		text: 'All IP',
		align: 'left',
	},
	colors: ['#fff', '#000'],
	labels: ['Left', 'Used'],

	responsive: [
		{
			breakpoint: 480,
			options: {
				chart: {
					width: 200,
				},
				legend: {
					position: 'bottom',
				},
			},
		},
	],
};

var chart = new ApexCharts(document.querySelector('#pie_ip'), options);
chart.render();

//bar chart

var options = {
	series: [
		{
			data: [40, 40, 40, 40],
		},
	],
	chart: {
		width: 280,
		type: 'bar',
		events: {
			click: function (chart, w, e) {
				// console.log(chart, w, e)
			},
		},
	},
	colors: ['#00A3E7', '#fff', '#FF7400', '#fff'],
	plotOptions: {
		bar: {
			columnWidth: '45%',
			distributed: true,
		},
	},
	title: {
		text: 'USB',
		align: 'left',
	},
	dataLabels: {
		enabled: false,
	},
	legend: {
		show: false,
	},
	xaxis: {
		categories: [[''], [''], [''], ''],
		labels: {
			style: {
				colors: [],
				fontSize: '12px',
			},
		},
	},
};

var chart = new ApexCharts(document.querySelector('#bar_usb'), options);
chart.render();
