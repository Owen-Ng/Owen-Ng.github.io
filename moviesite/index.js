// "use strict"
const noimage = "./No_image_Available.jpg";
var nominated = []
function test(){
    $.ajax({
        method:"GET",
        url: "https://www.omdbapi.com/?apikey=55ceea2f&s=jason&page=1-29",
        processData:false, 
		dataType:"json"
    }).done(function(data, status, jqx){
        console.log(jqx.status + " " + status + JSON.stringify(data))
    }).fail(function(err){
        console.log("fail " + err.status + " " + JSON.stringify(err.responseJSON))
    })
}
function movieevent(title, year, img, id){
    nominated.push({title:title, year:year, img,img, id:id});
    updateDrawer();

}

function updateDrawer(){
    let acc = ""
    if (nominated.length <=5){
        nominated.forEach(e => {
            acc += movietemplate(e.title, e.year, e.img, e.id, true)
        })
        $('.drawerlisting').html(acc)

    }
}
function movietemplate(title, year, img, id, drawer){
    const template =  `<div class="box" onclick="movieevent('${title}', '${year}','${img}', '${id}')">
                            <button class= "erase" ${drawer?"": "hidden"}>X</button>

                            <img src= ${img} alt = ${img}>
                            <div class = "subtext">     
                            <p class = "title">${title}</p>
                            <p class = "year">${year}</p>
                            </div>
                        </div>`
    return template;
}
function gettinglisting(s, y, t, page){
    
    $.ajax({
        method:"GET",
        url: `https://www.omdbapi.com/?apikey=55ceea2f&s=${s}&y=${y}&plot=full&type=${t}&page=${page}`,
        processData:false, 
		dataType:"json"
    }).done(function(data, status, jqx){
        const datajson = JSON.stringify(data)
        const result = data["Search"];
        appendboxes(result);
        

       
        // console.log(jqx.status + " " + status + JSON.stringify(data))
        // return datajson;
    }).fail(function(err){
        console.log("fail " + err.status + " " + JSON.stringify(err.responseJSON))
    })
    
}
function appendboxes(jsondata){
    let display = $("#movielisting").html();
        jsondata.forEach(e => {
            if (e["Poster"] == "N/A"){
                display += movietemplate(e["Title"], e["Year"], noimage, e["imdbID"], false);

            }else{
                display += movietemplate(e["Title"], e["Year"], e["Poster"], e["imdbID"], false);
            }
            

        })
        $("#movielisting").html(display);
        

}
function displayresult(s, y, t){
    $.ajax({
        method:"GET",
        url: `https://www.omdbapi.com/?apikey=55ceea2f&s=${s}&y=${y}&plot=full&type=${t}`,
        processData:false, 
		dataType:"json"
    }).done(function(data, status, jqx){
        const datajson = JSON.stringify(data)
        const total = data["totalResults"];
        console.log(total)
        for (let i = 1; i <= Math.ceil(total/10) ; i ++){
            gettinglisting(s, y, t, i );
        }
        
        

       
        // console.log(jqx.status + " " + status + JSON.stringify(data))
        // return datajson;
    }).fail(function(err){
        console.log("fail " + err.status + " " + JSON.stringify(err.responseJSON))
    })

}
function yeardate(){
    const start = 1900;
    const today = new Date();
    const year = today.getFullYear();
    let years = ""
    for (let i = start; i <= year; i ++){
        years += `<option>${i}</option>`;
    }
    years += `<option selected>...</option>`;

    $('select[name="year"]').html(years);
}
function getformvalues(){
    $("#movielisting").html("");

    let array = []
    $("#searchbar input, select").each(function(){
        let values = $(this);
        array.push(values.val())
    })
    console.log(array)
    // gettinglisting(array[0], array[1], array[2], 1 )
    // gettinglisting(array[0], array[1], array[2], 2 )
    displayresult(array[0], array[1], array[2])


}
$(function(){
    test();
    yeardate();
    $("#searchbar button").on('click', getformvalues);
    $(".box img").on('click', function(e){console.log("test")})
})