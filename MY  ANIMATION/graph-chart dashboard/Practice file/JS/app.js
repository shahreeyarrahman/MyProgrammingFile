const xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // 12 months

const ctx = document.getElementById('myChart').getContext('2d');

// Create gradient for red line
const redGradient = ctx.createLinearGradient(0, 0, 0, 400);
redGradient.addColorStop(0, 'rgba(79, 209, 197, 0.1)'); // Start color
redGradient.addColorStop(1, 'rgba(0, 0, 0,0.84)'); // End color

// Create gradient for blue line
const blueGradient = ctx.createLinearGradient(0, 0, 0, 400);
blueGradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)'); // Start color
blueGradient.addColorStop(1, 'rgba(0, 0, 150, 0.1)'); // End color

new Chart(ctx, {
  type: "line",
  data: {
    labels: xValues, // Full list of 12 months
    datasets: [{ 
      data: [190, 225, 200, 300, 400, 300, 300, 250, 275, 325, 275, 300], // Full data set
      borderColor: "#4FD1C5",
      backgroundColor: redGradient, // Apply gradient
      fill: true,
      borderWidth: 2 // Increase line width to make it more visible
    }, 
    { 
      data: [500, 150, 100, 200, 220, 150, 220, 190, 200, 150, 180, 230], // Full data set
      borderColor: "#2D3748",
      backgroundColor: blueGradient, // Apply gradient
      fill: true,
      borderWidth: 2 // Increase line width to make it more visible
    }]
  },
  options: {
    legend: { display: false }, // Hide legend if not needed
    scales: {
      xAxes: [{
        ticks: {
          autoSkip: true,
          maxTicksLimit: 12, // Ensure the x-axis can accommodate 12 ticks
          callback: function(value, index) {
            // Display labels for all months, but show every 2nd label
            // Show every month but manage label density
            return (index % 1 === 0) ? value : ''; 
          }
        },
        gridLines: {
          display: false // Hide vertical grid lines
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 500,
          stepSize: 100, // Ensure ticks are spaced correctly
          callback: function(value) {
            // Customize tick values to show 500, 400, 300, 200, 100, 0
            const values = [ 500, 400, 300, 200, 100, 0];
            return values.includes(value) ? value : '';
          }
        },
        gridLines: {
          display: true, // Show horizontal grid lines
          borderDash: [5, 5] // Dotted horizontal grid lines
        }
      }]
    }
  }
});

// end of here for it was using graph 

