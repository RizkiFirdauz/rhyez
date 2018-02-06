
var bulan = new Date();
var a = bulan.getMonth()+1;
var info;

if (a=1) {
    (info='Januari');
}
else if (a=2){
    (info= 'Februari');
}
else if (a=3){
    (info= 'Maret');
}
else if (a=4){
    (info= 'April');
}
else if (a=5){
    (info= 'Mei');
}
else if (a=6){
    (info= 'Juni');
}
else if (a=7){
    (info= 'Juli');
}
else if (a=8){
    (info= 'Agustus');
}
else if (a=9){
    (info= 'September');
}
else if (a=10){
    (info= 'Oktober');
}
else if (a=11){
    (info= 'November');
}
else {
    (info= 'Desember');
}
console.log('hari ini '+ bulan.getDate() + ', ' + info + ' ' + bulan.getFullYear());
console.log('pukul ' + bulan.getHours()+':'+bulan.getMinutes()+':'+bulan.getSeconds());
