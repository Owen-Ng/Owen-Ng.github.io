const myForm = $("#myform");
const upfile = $("#file");


myForm.submit(function(e){
    const pathname = $("#pathname").val();
const sheetname = $("#sheetname").val();
const pdfname = $("#pdfname").val();
const date = $("#date").val();
    e.preventDefault();
    console.log(pathname);
    const formData = new FormData();
    formData.append('file', upfile.prop('files')[0]);
    formData.append('pathname', pathname);
    formData.append('sheetname', sheetname);
    formData.append('pdfname', pdfname);
    formData.append('date', date);
    $.ajax({
        method: "POST",
        url: 'upload.php',
        data:formData,
        // body: {pathname, sheetname, pdfname,date},
        contentType: false,
        processData: false
    }).done(function(data){
        console.log(data);
    }
    )
    .catch(function(e){
        console.log(e.status + " Failed")
    })
    return false;
})
