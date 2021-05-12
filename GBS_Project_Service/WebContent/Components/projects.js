$(document).ready(function()
{
	if ($("#alertSuccess").text().trim() == "")
	{
	$("#alertSuccess").hide();
	}
	$("#alertError").hide();
});

//SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

//Form validation-------------------
var status = validateProjectForm();
if (status != true)
{
	$("#alertError").text(status);
	$("#alertError").show();
	return;
}
	// If valid-------------------------
	$("#formProject").submit();
});

//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	$("#hidProjectIDSave").val($(this).closest("tr").find('#hidProjectIDUpdate').val());
	$("#project_title").val($(this).closest("tr").find('td:eq(0)').text());
	$("#p_description").val($(this).closest("tr").find('td:eq(1)').text());
	$("#inventor_name").val($(this).closest("tr").find('td:eq(2)').text());
	$("#delivery_time").val($(this).closest("tr").find('td:eq(3)').text());
	$("#project_cost").val($(this).closest("tr").find('td:eq(4)').text());
	
});

//CLIENT-MODEL================================================================
function validateProjectForm()
{
	// Title
	if ($("#project_title").val().trim() == "")
	{
		return "Insert Project Title.";
	}
	// Description
	if ($("#p_description").val().trim() == "")
	{
		return "Insert Description.";
	}
	// Name-------------------------------
	if ($("#inventor_name").val().trim() == "")
	{
		return "Insert Inventor's name.";
	}
	
	//Time-------------------------------
	if ($("#delivery_time").val().trim() == "")
	{
		return "Insert Delivery Time.";
	}
	// is numerical value
	var tmpPrice = $("#project_cost").val().trim();
	if (!$.isNumeric(tmpPrice))
	{
		return "Insert a numerical value for Cost.";
	}
	// convert to decimal price
	$("#project_cost").val(parseFloat(tmpPrice).toFixed(2));

return true;
}

