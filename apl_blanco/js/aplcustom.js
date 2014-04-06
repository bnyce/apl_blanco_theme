(function ($) {
$(document).ready(function() {

var i = $('#gsearch-input');
var searchString = '';
var default_value_i = i.val();
var f = $('#gsearch-form');


i.css('color', 'silver');
i.css('padding-left', '3px');


i.focus(function() {
        this.style.color="black";
if(i.val() == default_value_i) {
        this.value="";
    };

i.bind("keyup", function(event) {
  searchString = i.val();
});

});


i.bind("keydown", function(event) {
      // track enter key
      var keycode = (event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode));
      if (keycode == 13) { // keycode for enter key

          f.attr("action", "http://library.austintexas.gov/gsearch/" + i.val());
 //	this.document.location.href = "http://library.austintexas.gov/gsearch/" + i.val();

         f.submit();
         return false;
      } else  {
         return true;
      }
}); // end of function



var ii = $('#search_input');
var ii_c = $('#search_input_catalog');
var ii_s = $('#search_input_site');
var ii_a = $('#search_input_articles');
var ii_submit = $('#form_submit');
var ii_form   = $("form#globalSearch");
var ii_form_c = $('#form_catalog');
var ii_form_s = $('#form_site');
var ii_form_a = $('#form_articles');
var searchString = '';
var default_value_ii = ii.val();
var searchType = new Array();
	searchType[1] = $('input[name=searchOpt]:checked', ii_form).val();

ii.focus(function() {
// clear the search form if it's just the default value
	if(ii.val()==default_value_ii) {
		this.value=""; 
	}
});


//should this be inside the focus event (above) ??
ii.keydown(function(event) {
// track enter key
	var keycode = (event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode));
    
	if (keycode == 13) { // keycode for enter key
		$("#form_"+searchType[1]).submit();
        return false;
    } else {
		return true;
	}
});
function switcheroo() {
	searchType[1] = $('input[name=searchOpt]:checked', ii_form).val();
	searchString = ii.val();
	ii_c.val(searchString);
	ii_s.val(searchString);
	ii_form_s.attr("action", "http://library.austintexas.gov/gsearch/"+searchString);
	ii_a.val(searchString);
}
//should this be inside the focus event (above) ??
ii.keyup(switcheroo);


ii_submit.click(function(event) {
	switcheroo();
	$("#form_"+searchType[1]).submit();
}); 

$("div.searchOptions input").change(function(event) {
	searchType= $(this).attr("id").split("_");
	var selectedInput = $("input#searchOpt_" + searchType[1]);
	
	switch(searchType[1]) {
		case "articles":
			ii.attr("placeholder", "Search articles and research");
			break;
		case "catalog":
			ii.attr("placeholder", "Search books and more");
			break;
		case "site":
			ii.attr("placeholder", "Search the APL site");
			break;
	}
	selectedInput.attr("checked", "checked");   
});

ii_form_s.submit(function() {
	var searchGo = "http://library.austintexas.gov/gsearch/"+searchString;
	
	document.location=searchGo;
	return false;
});




















	
// Expand / Collapse
//$("div#virtual span.show-hide").click(function(){
$("div#virtual div.virtual-service").click(function(){
	//var my_dt=$(this);
	var my_dt=$(this).find('.show-hide');
	//var my_dd=$(this).closest('.virtual-service').find('.description');
	var my_dd=$(this).find('.description');

	$(my_dt).toggleClass('expanded');
	$(my_dd).toggleClass('more-info');

	return false;
});

var d = new Date();
var weekday=new Array(7);
	weekday[0]="sunday";
	weekday[1]="monday";
	weekday[2]="tuesday";
	weekday[3]="wednesday";
	weekday[4]="thursday";
	weekday[5]="friday";
	weekday[6]="saturday";

$(".views-field-field-"+weekday[d.getDay()]).css('font-weight', 'bold');














}); // document.ready......

}(jQuery));

