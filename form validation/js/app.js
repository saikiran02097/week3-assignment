function addDetails() {
    console.log('Add button clicked');
    // Check if user has entered all required data
    // If not show error message
    // Else post it
    if (validateFirstName()) {
        if (validateFullName()) {
            // Do a Post
            postData();
        }
        else {
            // Display error message for full Name
            displayErrorMessageForFullName();
        }
    } else {
        // Display error message for first Name
        displayErrorMessageForFirstName();
    }
    if(validateContactNumber()){
        postData();
    }
    else{
        displayErrorMessageForContactNumber();
    }

}

function  displayErrorMessageForContactNumber(){
    $('#errForContactNumber').show();
    $('#errForEmergencyNumber').show();
}

function displayErrorMessageForFirstName() {
    $('#errForFirstName').show();
}

function displayErrorMessageForFullName() {
    $('#errForFullName').show();
}

function validateContactNumber(){
    const contactNumber=$('#contactNumber').val();
    if(contactNumber.length===10){
        return true;
    }
    return false;
    const emergencyNumber=$('#emergencyNumber').val();
    if(contactNumber.length===10){
        return true;
    }
    return false;
}

function validateFirstName() {
    const firstName = $('#firstName').val();
    if (firstName === '') {
        return false;
    }
    return true;
}

function validateFullName() {
    const fullName = $('#fullName').val();
    if (fullName === '') {
        return false;
    }
    return true;
}

function postData() {
    const data = {
        firstName: $('#firstName').val(),
        fullName: $('#fullName').val()
    };
    $.ajax({
        type: "POST",
        url: 'https://id-application-form.firebaseio.com/applicationIds.json',
        data: JSON.stringify(data),
        success: onPostSuccess,
        // dataType: dataType
    });
}

const onPostSuccess = (data) => {
    console.log('Posting to firebase success');
    console.log(data);
}

$('document').ready(() => {
    // Initialize
    $('.span-for-errors').hide();
    
});

function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) 
    {
        alert('Invalid Email Address');
        return false;
    }

    return true;

}

function numbersOnly(evt)
{
   
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;

}