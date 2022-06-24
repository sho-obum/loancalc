
function show(){
    
    
    function show_sec(x)
    {
        x.style.display = 'block';
    }
    function remove_sec(a,b,c){
        a.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'none';
    }
    // Define UI Variables
    const form           = document.querySelector('.form');
    const selection      = document.querySelector('#calculation-type');
    const loan_sec       = document.querySelector('.loan-section');
    const interest_sec   = document.querySelector('.interest-section');
    const month_sec      = document.querySelector('.month-section');
    const mpay_sec       = document.querySelector('.mpay-section');

    if (selection.value === 'interest') {
        show_sec(interest_sec);
        remove_sec(loan_sec,month_sec,mpay_sec);
      
       
    } 
    else if (selection.value === 'month') {
        show_sec(month_sec);
        remove_sec(loan_sec,interest_sec,mpay_sec);
       

    } 
    else if (selection.value === 'mpay') {
        show_sec(mpay_sec);
        remove_sec(loan_sec,month_sec,interest_sec);
       
        
    } 
    else{
        show_sec(loan_sec);
        remove_sec(interest_sec,month_sec,mpay_sec);
       
    }


    
}
function calc(){
alert("hi");
  
}
