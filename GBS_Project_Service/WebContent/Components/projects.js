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
		var type = ($("#hidProjectIDSave").val() == "") ? "POST" : "PUT";
		
		$.ajax(
		{
				url : "ProjectsAPI",
				type : type,
				data : $("#formProject").serialize(),
				dataType : "text",
				complete : function(response, status)
				{
					onProjectSaveComplete(response.responseText, status);
				}
				});
});

//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	$("#hidProjectIDSave").val($(this).data("project_id"));	
	$("#project_title").val($(this).closest("tr").find('td:eq(0)').text());
	$("#p_description").val($(this).closest("tr").find('td:eq(1)').text());
	$("#inventor_name").val($(this).closest("tr").find('td:eq(2)').text());
	$("#delivery_time").val($(this).closest("tr").find('td:eq(3)').text());
	$("#project_cost").val($(this).closest("tr").find('td:eq(4)').text());
	
});

function onProjectSaveComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
	if (resultSet.status.trim() == "success")
	{
		$("#alertSuccess").text("Successfully saved.");
		$("#alertSuccess").show();
		$("#divProjectsGrid").html(resultSet.data);
	} else if (resultSet.status.trim() == "error")
	{
		$("#alertError").text(resultSet.data);
		$("#alertError").show();
	}
	} else if (status == "error")
	{
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else
	{
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	 
		$("#hidProjectIDSave").val("");
		$("#formProject")[0].reset();
}


//Delete==========================================
$(document).on("click", ".btnRemove", function(event)
{
		$.ajax(
		{
			url : "ProjectsAPI",
			type : "DELETE",
			data : "project_id=" + $(this).data("project_id"),
			dataType : "text",
			complete : function(response, status)
			{
				onProjectDeleteComplete(response.responseText, status);
			}
		});
});

function onProjectDeleteComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
	if (resultSet.status.trim() == "success")
	{
		$("#alertSuccess").text("Successfully deleted.");
		$("#alertSuccess").show();
		$("#divProjectsGrid").html(resultSet.data);
	} else if (resultSet.status.trim() == "error")
	{
		$("#alertError").text(resultSet.data);
		$("#alertError").show();
	}
	} else if (status == "error")
	{
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else
	{
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}



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

