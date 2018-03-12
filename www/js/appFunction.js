function CreateWeekBox() {
    var start = $$('#start_date').val();
    var end = $$('#end_date').val();
    refresh_fields();

    if (start == "" || end == "") {
        myApp.alert("Please enter dates");
        return;
    }

    function getDates(startDate, stopDate) {
        var dateArray = new Array();
        var currentDate = startDate;
        while (currentDate <= stopDate) {
            dateArray.push(new Date(currentDate));
            currentDate = currentDate.addDays(1);
        }
        return dateArray;
    }

    Date.prototype.addDays = function (days) {
        var dat = new Date(this.valueOf())
        dat.setDate(dat.getDate() + days);
        return dat;
    }

    var array_date = getDates(new Date(start), (new Date(end)).addDays(0));
    $$('#time_form_1').hide();
    $$('#time_form_2').show();

    if ($$('#r1').is(':checked')) {
        $$('#header_text').html("OnShore Billable");
        $$('#time_form_fill').show();
        appendRows_Date(array_date, 1);
    }

    if ($$('#r2').is(':checked')) {
        $$('#header_text2').html("Offshore Billable");
        $$('#time_form_fill2').show();
        appendRows_Date(array_date, 2);
    }
    if ($$('#r3').is(':checked')) {
        $$('#header_text3').html("OnShore Non-Billable");
        $$('#time_form_fill3').show();
        appendRows_Date(array_date, 3);
    }

    if ($$('#r4').is(':checked')) {
        $$('#header_text4').html("Offshore Non-Billable");
        $$('#time_form_fill4').show();
        appendRows_Date(array_date, 4);
    }

    console.log(array_date);
}

function appendRows_Date(array_date, id) {
    /* for (i = 0; i < array_date.length; i++) {
        var print_d = get_print_date(array_date[i]);
        $$('#date_table' + id).append("<div class='col-xs-6'><div class='date_fill'> " + print_d + "</div></div>");
        $$('#date_table' + id).append("<div class='col-xs-6'><input type='number' class='form-control' style='width:80%;margin-top:12px;'/> (h)</div><div class='col-xs-12'></div>");
    } */
}

function get_print_date(d) {

    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();
    var string = curr_date + "-" + curr_month + "-" + curr_year;
    return string;
}

function appendOption() {
    var string = "<option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>" +
        + "<option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option>";
    return string;
}

function refresh_fields() {
    $$('#date_table1').html("");
    $$('#date_table2').html("");
    $$('#date_table3').html("");
    $$('#date_table4').html("");
    $$('#header_text').html("");
    $$('#header_text2').html("");
    $$('#header_text3').html("");
    $$('#header_text4').html("");
}

function push_tms(value){

}
function read_from_tms(value){
    
}

function login_click(){
    mainView.router.loadPage("home.html");
}


function logout(){
    location.reload();
}

function fill_range_text(value1,value2){
    $$('#task_time'+value2).html(value1);
}

var count= 0;
function append_task_list(value){
    
    count++;
    var string_task='<div id="task_list'+count+''+value+'" class="block accordion-list custom-accordion"><div class="accordion-item" style="margin-bottom:10px;"><div style="border: 1px solid white;height:34px;"><span class="acc_text" id="acc_text'+count+''+value+'">Item 1</span><span style="float:right"><i class="f7-icons color-white acc_icon" onclick="remove_item('+count+','+value+')">delete_round</i><i class="accordion-item-toggle f7-icons color-white acc_icon">compose</i></span></div><div class="accordion-item-content"><div class="card"><div class="card-content card-content-padding"><select id="project_select'+count+''+value+'" onchange="title_change('+count+''+value+')" class="form-control"><option disabled selected>--Select an option--</option><option>Siveillance VMS Toolbox</option><option>Siveillance VMS iBase Tracker</option><option>Siveillance VMS Test/Pilot License</option></select></div></div><div class="card"><div class="card-content card-content-padding"><select class="form-control"><option disabled selected>--Select an option--</option><option value="1">Development</option><option value="2">Testing</option><option value="3">Deployment</option></select></div></div><div class="card"><div class="card-content card-content-padding" style="text-align:center">Task Duration:<b><span id="task_time'+count+''+value+'">0</span> hours</b></div></div><div class="card"><div class="card-content card-content-padding"><div class="range-slider color-red"><input onchange="fill_range_text(this.value,'+count+''+value+')" type="range" min="0" max="8" step="0.5" value="0"></div></div></div></div></div></div>';
    $$('#task_append_'+value).append(string_task);
}

function remove_item(value1,value2){
    var id_to_remove=value1;
    $$('#task_list'+value1+value2).remove();
}

function title_change(value){
    
    var text_=$$('#project_select'+value).val();
    $$('#acc_text'+value).html(text_);
}
