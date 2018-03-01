$(document).ready(function () {

    var newRow = '';
    var employeeName = '';
    var role = '';
    var startDate = '';
    var monthlyRate = '';

    $('#submit-button').on('click', function() {
        event.preventDefault();

        employeeName = $('#name-input').val().trim();
        role = $('#role-input').val().trim();
        startDate = $('#start-input').val()//.trim();
        monthlyRate = $('#monthly-input').val()//.trim();

        console.log(employeeName, role, startDate, monthlyRate);

<<<<<<< HEAD
        newRow = '<tr><td>' + employeeName + '</td><td>' + role + '</td><td>' + '<td>' + startDate + '</td><td>' + '<td>' + monthlyRate;
=======
        newRow = '<tr><td>' + employeeName + '</td><td>' + role + '</td><td>' + startDate + '</td><td>' + '<td>' + monthlyRate + '</td><td>'
>>>>>>> 35283895299d209d16830e1d5caa38b8cf7b07b8

        $('#table-body').append(newRow);
    })
});});
