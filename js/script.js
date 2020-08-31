
$(document).ready(function(){
    $(".design").click(function(){
        $("#designImg").toggle();
        $("#designContent").toggle();
    });
    $(".development").click(function(){
        $("#developmentImg").toggle();
        $("#developmentContent").toggle();
    });
    $(".productManagement").click(function(){
        $("#managementImg").toggle();
        $("#managementContent").toggle();
    });
    $("#img1").mouseover(function() {
        $("#project1").show();
    }).mouseout(function() {
        $("#project1").hide();
    });

    $("#img2").mouseover(function() {
        $("#project2").show();
    }).mouseout(function() {
        $("#project2").hide();
    });
    $("#img3").mouseover(function() {
        $("#project3").show();
    }).mouseout(function() {
        $("#project3").hide();
    });
    $("#img4").mouseover(function() {
        $("#project4").show();
    }).mouseout(function() {
        $("#project4").hide();
    });
    $("#img5").mouseover(function() {
        $("#project5").show();
    }).mouseout(function() {
        $("#project5").hide();
    });
    $("#img6").mouseover(function() {
        $("#project6").show();
    }).mouseout(function() {
        $("#project6").hide();
    });
    $("#img7").mouseover(function() {
        $("#project7").show();
    }).mouseout(function() {
        $("#project7").hide();
    });
    $("#img8").mouseover(function() {
        $("#project8").show();
    }).mouseout(function() {
        $("#project8").hide();
    });
});

function main() {
    var userName = document.getElementById("name").value;
    var emailAddress = document.getElementById("email").value;
    var textMessage = document.getElementById("message").value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    var validateForm = function() {
        if(userName == "" || emailAddress == "" || textMessage == "") {
        alert("Please fill in the form!");
        }
        else {
            return true;
        };

        if(emailAddress !== mailFormat) {
            alert("Input the correct email address!")
        }
        else {
            return true;
        };
    }
    
    if (validateForm() === true) {
            alert("We have received your message " + name + ". Thank you for reaching out to us.")
        }
        else {
            return false;
        };
    


};
