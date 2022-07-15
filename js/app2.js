class UI
{
    constructor(loan,intr,mon,mpay,ans){
        this.loan=loan;
        this.intr=intr;
        this.mon=mon;
        this.mpay=mpay;
        this.ans = ans;
    }
    clearfields(loan,intr,mon,mpay,ans){
        loan = document.querySelector('#loan_val');
        intr = document.querySelector('#interest_val');
        mon = document.querySelector('#month_val');
        mpay = document.querySelector('#mpay_val');
        ans =  document.querySelector('.result-output');
        loan.value = '';
        intr.value='';
        mpay.value='';
        mon.value='';
        ans.textContent = '';
    }
}
class Calculation {
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    // z= loan amount       pv
    // a= interest amount   i 
    // b = month            n
    // c = mpay             pmt
    // Formula => pv = (pmt/i)*(1-(1/(Math.pow((1+i),n)))) 
    // x=(c/a)
    // y=Math.pow((1+a),b
    // r=1/y
    // v=1-r
    // p=v;
    loan_output(a,b,c) {
        let x=(c/a);
        let p= b/12;
        let y=Math.pow((1+a),p);
        let r=1/y;
        let v=1-r;
        const z = x*v;

      return z;  
    }
    interest_output(a,b,c) {
        const z = ((a+b)+c);
      return z;  
    }
    mpay_output(a,b,c) {
        const z = ((a+b)+c);
      return z;  
    }
    month_output(a,b,c) {
        const z = ((a+b)+c);
      return z;  
    }
}
window.addEventListener("DOMContentLoaded",function(ev){
    document.querySelector('#cal-form').addEventListener("submit", function(e){
        const interestinput = parseFloat(document.querySelector('#interest_val').value);
        const monthinput = parseInt(document.querySelector('#month_val').value);
        const mpayInput = parseInt(document.querySelector('#mpay_val').value);
        const cal = new Calculation;
        const result = cal.loan_output(interestinput,monthinput,mpayInput);
        const output = document.querySelector('.result-output');
            output.textContent=result;
       e.preventDefault();
       
    });
    ev.preventDefault();
 },{once : true})


function show(){   
    const ui = new UI;
    function remove_sec(x)
    {
        x.style.display = 'none';
    }
    function show_sec(a,b,c){
        a.style.display = 'block';
        b.style.display = 'block';
        c.style.display = 'block';
    }
    // Define UI Variables
    const selection      = document.querySelector('#calculation-type');
    const loan_sec       = document.querySelector('#item-loan');
    const interest_sec   = document.querySelector('#item-interest');
    const month_sec      = document.querySelector('#item-month');
    const mpay_sec       = document.querySelector('#item-mpay');
    
    
    if (selection.value === 'interest') {
        remove_sec(interest_sec);
        show_sec(loan_sec,month_sec,mpay_sec); 
        ui.clearfields(loan_sec,interest_sec,month_sec,mpay_sec);
        document.querySelector('#cal-form').addEventListener("submit", function(e){
            const loaninput = parseInt(document.querySelector('#loan_val').value);
            const monthinput = parseInt(document.querySelector('#month_val').value);
            const mpayInput = parseInt(document.querySelector('#mpay_val').value);
            const cal = new Calculation;
            const result = cal.interest_output(loaninput,monthinput,mpayInput,answer);
            const output = document.querySelector('.result-output');
            output.textContent=result;
          
            e.preventDefault();
        });
   
    } 
    else if (selection.value === 'month') {
        remove_sec(month_sec);
        show_sec(loan_sec,interest_sec,mpay_sec);
        ui.clearfields(loan_sec,interest_sec,month_sec,mpay_sec);
        document.querySelector('#cal-form').addEventListener("submit", function(e){
            const loaninput = parseInt(document.querySelector('#loan_val').value);
            const interestinput = parseInt(document.querySelector('#interest_val').value);
            const mpayInput = parseInt(document.querySelector('#mpay_val').value);
            const cal = new Calculation;
            const result = cal.month_output(loaninput,interestinput,mpayInput);
            const output = document.querySelector('.result-output');
            output.textContent=result;
            e.preventDefault();
        });
    } 
    else if (selection.value === 'mpay') {
        remove_sec(mpay_sec);
        show_sec(loan_sec,month_sec,interest_sec);  
        ui.clearfields(loan_sec,interest_sec,month_sec,mpay_sec);
        document.querySelector('#cal-form').addEventListener("submit", function(e){
            const loaninput = parseInt(document.querySelector('#loan_val').value);
            const monthinput = parseInt(document.querySelector('#month_val').value);
            const interestInput = parseInt(document.querySelector('#interest_val').value);
            const cal = new Calculation;
            const result = cal.mpay_output(loaninput,monthinput,interestInput);
            const output = document.querySelector('.result-output');
            output.textContent=result;
            e.preventDefault();
        });        
    } 
    else if (selection.value === 'loan') {
        remove_sec(loan_sec);
        show_sec(interest_sec,month_sec,mpay_sec);
        ui.clearfields(loan_sec,interest_sec,month_sec,mpay_sec);
        document.querySelector('#cal-form').addEventListener("submit", function(e){
            const interestinput = parseInt(document.querySelector('#interest_val').value);
            const monthinput = parseInt(document.querySelector('#month_val').value);
            const mpayInput = parseInt(document.querySelector('#mpay_val').value);
            const cal = new Calculation;
            const result = cal.loan_output(interestinput,monthinput,mpayInput);
            const output = document.querySelector('.result-output');
            output.textContent=result;
            e.preventDefault();
        });
    }    
    else{
        console.log("Error");
    }
}


