var socket = io.connect('http://localhost:4444');
var table = document.getElementById("statistics");

//Ամեն 10000 մլվրկ֊ը մեկ
setTimeout(function(){
    //ուղարկում ենք "get stats" հացրումը սերվերին
    socket.emit("get stats", []);
}, 5000);

//Երբ սերվերը ուղարկում է տվյալ "send stats" պիտակով
socket.on("send stats",function(statistics){
    
    //Պատրսատում ենք աղյուսակը
    statistics = JSON.parse(statistics);
    //console.log(statistics); //այստեղ null է տալիսս 
    table.innerHTML = "";
    tableHTML = "<tr><td>խոտակերի քանակ</td><td>խոտի քանակ</td><td>գիշատիչի քանակ</td><td>ֆերմերի քանակ</td><td>հատուկ իրադարձության քանակ քանակ</td><td>ամենակերի քանակ</td></tr>";
    for(var st of statistics){
     //   console.log(st.xotakeriqanak);
        for(var i in statistics){
            
        tableHTML+="<tr>";
        tableHTML+="<td>"+st.xotakeriqanak+"</td>";
        tableHTML+="<td>"+st.xotiqanaky+"</td>";
        tableHTML+="<td>"+st.gishatichiqanak+"</td>";
        tableHTML+="<td>"+st.fermeriqanak+"</td>";
        tableHTML+="<td>"+st.amenakeriqanak+"</td>";
        tableHTML+="<td>"+st.specialevntiqanak+"</td>";
     //   console.log(tableHTML);
        tableHTML+="</tr>";
        }
    }

    table.innerHTML = tableHTML;
    //console.log(statistics);
})

