function doGet(e){
  var op = e.parameter.action;
  var ss=SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1PHr5ZC66wo758qDaxlD7-Of1gKKvv0z4xfxSj5oIYOA/edit?usp=sharing");
  var sheet = ss.getSheetByName("Sheet1");
  if(op=="insert")
    return insert_value(e,sheet);
}

function insert_value(request,sheet){
  var company = request.parameter.company;
  var name = request.parameter.name;
  var title = request.parameter.title;
  var email = request.parameter.email;
  var product = request.parameter.product;
  var comments = request.parameter.comments;
  
  var flag=1;
  var lr= sheet.getLastRow();
  
  if(flag==1){
  var d = new Date();
    var currentTime = d.toLocaleString();
  var rowData = sheet.appendRow([currentTime,company,name,title,email,product,comments]);  
  var result="Insertion successful";
  }
     result = JSON.stringify({
    "result": result
  });  
    
  return ContentService
  .createTextOutput(request.parameter.callback + "(" + result + ")")
  .setMimeType(ContentService.MimeType.JAVASCRIPT);   
  }
  
  
