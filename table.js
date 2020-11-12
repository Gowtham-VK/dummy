
function generate()
{
    
   jarray =JSON.parse(sessionStorage.getItem("jarray"))
   console.log(jarray);
   amtRs =JSON.parse(sessionStorage.getItem("amtRs"))
   console.log(amtRs);
   length =sessionStorage.getItem("length")
   User =sessionStorage.getItem("User")
   Email =sessionStorage.getItem("Email")
   Address =sessionStorage.getItem("Address")
   Dates =sessionStorage.getItem("Dates")
   Discount =sessionStorage.getItem("Discount")
   Bill =sessionStorage.getItem("Bill")
   Gst = sessionStorage.getItem("Gst")
   Total = sessionStorage.getItem("Total")
fin= Total-Discount
Option =sessionStorage.getItem("Option")
//console.log(Option);
Gst = sessionStorage.getItem("Gst")

// console.log(typeof Dates);
// console.log(User);

// function reverse_the_string(num) {
//     return String(num.split("").reverse().join(""));
// }

// var dat = reverse_the_string(Dates)

console.log(dat);

   document.getElementById("inv").innerText=Bill
   document.getElementById("dates").innerText=Dates
   document.getElementById("discount").innerHTML=Discount
   document.getElementById("subtotal").innerHTML=Total
   document.getElementById("total").innerHTML= fin
   document.getElementById("email").innerHTML=Email
   document.getElementById("address").innerHTML=Address
   document.getElementById("username").innerHTML=User
   document.getElementById("Gst").innerHTML="GSTIN:"+Gst
   
    var num_rows = length/2
    var theader = '<table border="">\n';
    var tbody = '';
console.log(Discount);
    
    for( var i=0; i<num_rows;i++) 
    {
        tbody += '<tr>';
        // for( var j=0; j<num_cols;j++)
        // {
            tbody += '<td>';
            tbody += '<h6 class="mb-0">' + `${jarray[i]}`
            tbody += '</td>'
            tbody += '<td>';
            tbody += "1"
            tbody += '</td>'
            tbody += '<td>';
            tbody += `${amtRs[i]}`;
            tbody += '</td>'
        
        tbody += '</tr>\n';
    }
    var tfooter = '</table>';
    document.getElementById("add").innerHTML = theader + tbody + tfooter;

    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 0.3,
                filename: "SMV Billing"+" "+`${Dates}.pdf`,
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 3 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })

        

            var a = ['','One ','Two ','Three ','Four ', 'Five ','Six ','Seven ','Eight ','Nine ','Ten ','Eleven ','Twelve ','Thirteen ','Fourteen ','Fifteen ','Sixteen ','Seventeen ','Eighteen ','Nineteen '];
        var b = ['', '', 'Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety'];
       
       function inWords (num) {
           if ((num = num.toString()).length > 9) return 'overflow';
           n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
           if (!n) return; var str = '';
           str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
           str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
           str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
           str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
           str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + '' : '';
           return str;
       }
       
       number = function (x) {
            amt= inWords(x);
           console.log(amt);
       }
       number(fin)
    document.getElementById("totWords").innerHTML=amt+"Only"

    if(Option==2){
        gst()
        function gst(){

        Gst=9/100*fin
        Cgst=9/100*fin
        var l=Cgst.toFixed(2)
        var m =Gst.toFixed(2)
        subTot=Gst+Cgst+fin
        var n = subTot.toFixed()
        number(n)
        document.getElementById("totWords").innerHTML=amt+"Only"
        document.getElementById("discount").innerHTML=Discount
        document.getElementById("total").innerHTML= n
            var tbodyRef = document.getElementById('tBody');
            console.log(tbodyRef);
            var newRow = tbodyRef.insertRow(2);
            var y = newRow.insertCell(0);
            var z = newRow.insertCell(1);
            y.outerHTML  = '<th class="text-left">GST<span class="font-weight-normal">(9%)</span></</th>'
           
            z.innerHTML =`${m}`;
            var newRow = tbodyRef.insertRow(3);
            var a = newRow.insertCell(0);
            var b = newRow.insertCell(1);
            a.outerHTML  = '<th class="text-left">CGST<span class="font-weight-normal">(9%)</span></</th>'
           
            b.innerHTML = `${l}`;
            z.setAttribute('class', 'text-right');
             b.setAttribute('class', 'text-right');
        
        }
        
    }
    else if(Option==3){

    cgst()
    function cgst(){
        
        Cgst=18/100*fin
        var l=Cgst.toFixed(2)
        subTot=Cgst+fin
        var n = subTot.toFixed()
        number(n)
        document.getElementById("totWords").innerHTML=amt+"Only"
        document.getElementById("total").innerHTML= subTot
        document.getElementById("discount").innerHTML=Discount
        var tbodyRef = document.getElementById('tBody');
        console.log(tbodyRef);
        var newRow = tbodyRef.insertRow(2);
        var y = newRow.insertCell(0);
        var z = newRow.insertCell(1);
        y.outerHTML  = '<th class="text-left">CGST<span class="font-weight-normal">(18%)</span></</th>'
       
        z.innerHTML =`${l}`;
      
        z.setAttribute('class', 'text-right');
       
    
    }
    
    }
    else{
        console.log("");
    }
}

