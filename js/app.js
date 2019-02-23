$("document").ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBQXB0Ha20AaUOvvaPM5XKi69Bip-WJdr8",
    authDomain: "employee-form-columbia.firebaseapp.com",
    databaseURL: "https://employee-form-columbia.firebaseio.com",
    projectId: "employee-form-columbia",
    storageBucket: "",
    messagingSenderId: "22960368698"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  //var num = 0;
  var e_name = "";
  var role = "";
  var start_date = "";
  var rate = "";

  $("#submit").on("click", function(event) {
    event.preventDefault();
    e_name = $("#employee-name")
      .val()
      .trim();
    role = $("#role")
      .val()
      .trim();
    start_date = $("#start-date")
      .val()
      .trim();
    rate = $("#monthly-rate")
      .val()
      .trim();

    var new_data = {
      e_name: e_name,
      role: role,
      start_date: start_date,
      rate: rate
    };
    database.ref().push(new_data);
  });
  //console.log("DB ref", database);
  database.ref().on(
    "child_added",
    function(snapshot) {
      let tr = $("<tr>");
      tr.append(`<td>${snapshot.val().e_name}</td>`);
      tr.append(`<td>${snapshot.val().role}</td>`);
      tr.append(`<td>${snapshot.val().start_date}</td>`);
      tr.append(`<td>${snapshot.val().rate}</td>`);

      $(".tbody").append(tr);
    },
    function(errorObject) {
      console.log("read failed " + errorObject.code);
    }
  );

  //   $("#submit").on("click", function() {
  //     let th = $("<th>");
  //     let td = $("<td>");
  //     $(th).append(td);
  //     $("<tbody>").append(th);
  //   });
});
