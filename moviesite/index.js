// "use strict"
const noimage = "./No_Image_Available.jpg";
let nominated = []
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
function checkmovienominated(id){
    let result = false
    nominated.forEach(e => {
        if (e.id == id){
            result = true
        }
    })
    return result;
    

}
function movieevent(title, year, img, id, drawer){

    console.log(drawer);

  if (checkmovienominated(id) == true && drawer == false){
       const old = $("#banner").html();
        
            $("#banner").html("The selected movie has already been nominated!");

        setTimeout(function(){
        $("#banner").html(old);
    }, 3000);
    }

    if (drawer == false && checkmovienominated(id) != true && nominated.length <5){
        nominated.push({title:title, year:year, img,img, id:id});
    }
   
    
    
    updateDrawer();

}

function updateDrawer(){
    if (nominated.length >=5){
        $("#banner").html("5 Nominated!");
    }
    let acc = ""
    
    nominated.forEach(e => {
            acc += movietemplate(e.title, e.year, e.img, e.id, true)
        })
    $('.drawerlisting').html(acc)

}

function deleteselection(id){
    $("#banner").html("Nominate 5 movies");
    
    // updateDrawer();
    $(".drawerlisting #"+id ).fadeOut(1000);
    nominated = nominated.filter(e => {return String(e.id) != String(id)});

}
function movietemplate(title, year, img, id, drawer){
    const template =  `<div class="box" id = "${id}"onclick="movieevent('${title}', '${year}','${img}', '${id}', ${drawer})">
                            <div style="position: relative; width: 0; height: 0">
                            <button onclick="deleteselection('${id}')" class= "erase" ${drawer?"": "hidden"}>X</button>
                            </div>

                            <img src= ${img} onerror="this.onerror=null;this.src='${noimage}';" alt = ${img}>
                            

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
        if (total == undefined){
            $("#status").html("Input Invalid");
            setTimeout(function(){
                $("#status").html("");


            }, 2000)


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
    return false;


}

$(function(){
    if (sessionStorage.getItem("nominated") ) {
        nominated = JSON.parse(sessionStorage.getItem("nominated"))
        updateDrawer();
    }
    
    test();
    yeardate();
    $("form#searchbar ").submit(function(event){
        event.preventDefault();
        getformvalues();
        return false;
    });
    $(".box img").on('click', function(e){console.log("test")});
    $(window).bind('beforeunload', function(){
        sessionStorage.setItem("nominated", JSON.stringify(nominated));
      });
    $("#hint").on("mouseover", function(event){
        event.preventDefault();
        $("#hintcontainer").show();

    });
    $("#hint").on("mouseout", function(event){
        event.preventDefault();
        $("#hintcontainer").hide();

    });
})