// setup 
const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: '# of Facebook Likes',
      data: [18, 12, 6, 9, 12, 3, 9],
      backgroundColor: 'rgba(245,229,174,0.98',
      borderColor: 'rgba(255, 26, 104, 1)',
      borderWidth: 1
    },
    {
      label: '# of Linkedlin Views',
      data: [18, 12, 6, 9, 12, 3, 9],
      backgroundColor:'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    },/*{
      label: '# of Post Impression',
      data: [12, 12, 13, 15, 12, 3, 9],
      backgroundColor: 'rgba(255, 26, 104, 0.2)',
      borderColor: 'rgba(255, 26, 104, 1)',
      borderWidth: 1
    }*/],
    
  };

  // config 
  const config = {
    type: 'bar',
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
