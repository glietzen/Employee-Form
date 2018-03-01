$(document).ready(function () {

    var newRow = '';
    var employeeName = '';
    var role = '';
    var startDate = '';
    var monthlyRate = '';

    $('#submit-button').on('click', function() {

        employeeName = $('#name-input').val().trim();
        role = $('#role-input').val().trim();
        startDate = $('#start-input').val().trim();
        monthlyRate = $('#monthly-input').val().trim();

        newRow = '<tr><td>' + employeeName + '</td><td>' + role + '</td><td>' + '<td>' + startDate + '</td><td>' + '<td>' + monthlyRate + '</td><td>'

        $('#table-body').append(newRow);
    })
});