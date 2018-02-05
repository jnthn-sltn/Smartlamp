var tempCtx = document.getElementById("temp-chart").getContext('2d');
var tempChart = new Chart(tempCtx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        responsive: false
    }
});

var soundCtx = document.getElementById("sound-chart").getContext('2d');
var soundChart = new Chart(soundCtx, {
    type: 'radar',
    data: {
        labels: ["1200", "0100","0200","0300","0400","0500","0600","0700",
        "0800","0900","1000","1100"],
        datasets: [{
            label: 'Average Sound Level by Hour - Morning',
            data: soundDataDay,
            backgroundColor: [
                'rgba(255, 230, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255,230,64,1)'
            ],
        }]
    },
    options: {
        scale: {
            ticks: {
                min: soundMin,
                max: soundMax,
                }
            },
        responsive: false
    }
});
function update(jscolor) {
    document.getElementById("color").value = jscolor;
}
function apply(){
    document.getElementById('smt').click();
}