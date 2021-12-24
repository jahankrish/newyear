

$(document).ready(function(){

    $('#form-validation').click(function(e){

        e.preventDefault();
        
        validateForm();  
    });
   
    
    function validateForm(){
    
        var nameReg = /^[A-Za-z]+$/;

        var emailReg = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
    
        var inputVal = new Array(name,email,subject, message);
    
        var inputMessage = new Array("name", "email","subject", "message");
    
         $('.error').hide();
    
            if(inputVal[0] == ""){
                $('#name').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
            } 
            else if((name.length < 3)|| (name.length > 10)){
                $('#name').after('<span class="error">  username must be between 3 and 10 character ' + inputMessage[0] + '</span>');
            } 
            else if(!nameReg.test(name)){
                $('#name').after('<span class="error">  username must be Letters only</span>');
            }
           
            if(inputVal[1] == ""){
                $('#email').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
            } 
            else if(!emailReg.test(email)){
                $('#email').after('<span class="error"> Please enter a valid email address</span>');
            }
    
            if(inputVal[2] == ""){
                $('#subject').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
            } 
            else if((subject.length < 6) || (subject.length > 20)){
                $('#subject').after('<span class="error"> must be between 6 and 20 character ' + inputMessage[2] + '</span>');
            } 
           
    
            if(inputVal[3] == ""){
                $('#message').after('<span class="error"> Please enter your ' + inputMessage[3] + '</span>');
            }  
            else if((message.length < 10)|| (message.length > 50)){
                $('#message').after('<span class="error">  must be between 10 and 50 character ' + inputMessage[3] + '</span>');
            } 
            
            
            

            if(inputVal[0],inputVal[1],inputVal[2],inputVal[3]  != ""){
                alert("Form Submited");

                window.location.reload();
                
            }
    }  
    

    
    });


