$(document).ready(function () {

       
        // Initialize Firebase
        var config = {
                apiKey: "AIzaSyCWHVsprbzdNVZE21_iII6YwDs3vaTr2m8",
                authDomain: "click-counter-63e56.firebaseapp.com",
                databaseURL: "https://click-counter-63e56.firebaseio.com",
                projectId: "click-counter-63e56",
                storageBucket: "click-counter-63e56.appspot.com",
                messagingSenderId: "305383994479"
        };
        firebase.initializeApp(config);

        var database = firebase.database();

        var newRow = '';
        var employeeName = '';
        var role = '';
        var startDate = '';
        var monthlyRate = '';

        $('#submit-button').on('click', function () {
                event.preventDefault();

                employeeName = $('#name-input').val().trim();
                role = $('#role-input').val().trim();
                startDate = $('#start-input').val();
                monthlyRate = $('#monthly-input').val();

                

                console.log(employeeName, role, startDate, monthlyRate);

                database.ref('/employeeData').push({
                        employeeName: employeeName,
                        role: role,
                        startDate: startDate,
                        monthlyRate: monthlyRate
                });

                newRow = '<tr><td>' + employeeName + '</td><td>' + role + '</td><td>' + startDate + '</td><td>' + monthlyRate + '</td>';

                $('#table-body').append(newRow);
        })
});
