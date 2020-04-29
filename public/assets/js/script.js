
$(function () {

    var globalUserId;
    var defaultZipCode;
    var defaultJob;
    var defaultName;
    globalUserId = 1;

    // loads user data for default values

    $.ajax("/api/user/"+globalUserId, {
        type: "GET",
    }).then(function (data) {
        defaultZipCode = data.zipCode;
        defaultJob = data.jobTile;
        defaultName = data.name;
    })

    // function for saving job data

    $(document).on("click", ".link-to-ext", function () {
        event.preventDefault();
        var id = $(this).data("jobid");
        var title = $(`#title-${id}`).text();
        var desc = $(`#desc-${id}`).text();


        var newApp = {
            title: title,
            description: "desc",
            industry: "None",
            zipCode: "94114",
            salaryRange: "0",
            rating: 0,
            UserId: globalUserId
        }

        $.ajax("/api/application", {
            type: "POST",
            data: newApp,
        }).then(function (res) {
            console.log(res)
            // var newCompany = {
            //     name: $(`#company-${id}`).text(),
            //     zipCode: "None",
            //     url: $(`#company-${id}`).attr("href"),
            //     UserID: globalUserId
            // }
            // $.ajax("/api/company", {
            //     type: "POST",
            //     data: newCompany
            // }).then(function () {
            //     console.log("Successfully added the company")
            // })
        })

    })

    $("#app-add").on("submit", function (event) {
        event.preventDefault();

        var newApp = {
            title: $("#app-title").val(),
            type: $("#app-type").val(),
            description: $("#app-desc").val(),
            industry: $("#app-industry").val(),
            zipCode: $("#app-zipCode").val(),
            salaryRange: $("#app-salary").val(),
            rating: $("#app-rating").val(),
            UserId: globalUserId
        }
        $.ajax("/api/application", {
            type: "POST",
            data: newApp,
        }).then(function (response) {
            console.log(response)
        })
    })
});