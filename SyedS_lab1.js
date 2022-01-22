 google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(drawChart);

    function toMilliseconds(minutes) {
      return minutes * 60 * 1000;
    }


    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');

      data.addRows([
        ['p1', 'Initiate', new Date(2022, 0, 10), new Date(2022, 0, 17), null,  100,  null],
        ['p2', 'Plan', new Date(2022, 0, 17),new Date(2022, 0, 26), null, 25, 'p1'],
        ['p3', 'Execute', new Date(2022, 0, 26), new Date(2022, 1,2 ),null, 20, 'p2'],
        ['p4', 'Evaluate', new Date(2022, 1, 2), new Date(2022, 1, 10),null, 0, 'p3'],
        ['p5','Close', new Date(2022, 1,10), new Date(2022,1,17), null, 50, 'p4'],
       /*  ['test', 'exam1', new Date(2022, 1, 22), new Date(2022, 1, 23),null, 100, 'skill1, skill2, skill3, skill4, skill5'] */
      ]);

      var options = {
        height: 275
      };

      var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
