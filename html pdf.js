// var down=function () {
//     document.getElementById("download")
//         .addEventListener("click", () => {
//             const invoice = this.document.getElementById("invoice");
//             console.log(invoice);
//             console.log(window);
//             var opt = {
//                 margin: 0.3,
//                 filename: 'SMV Billing.pdf',
//                 image: { type: 'jpeg', quality: 1 },
//                 html2canvas: { scale: 3 },
//                 jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//             };
//             html2pdf().from(invoice).set(opt).save();
//         })
// }