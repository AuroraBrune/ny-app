$(document).ready(function(){


    $("#submit").click(function(event){
        event.preventDefault()
        
        var search = $("#searchTerm").val()
        var numRecords = $("#numberOf").val()
        var startYear = $("#startYear").val()
        var endYear = $("#endYear").val()


        console.log("Works", search, numRecords, startYear, endYear)
    })

  });