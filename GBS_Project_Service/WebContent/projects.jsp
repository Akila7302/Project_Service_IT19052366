<%@page import="com.ProjectModel"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Project Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/projects.js"></script>
</head>
<body>

		
	<div class="container">
		<div class="row">
			<div class="col-8">
			
				<div class="shadow p-3 mb-5 bg-white rounded">
					<h1 Style="color:blue; text-align:center;">Projects Management</h1>
				</div>

				<form id="formProject" name="formProject" method="post" action="projects.jsp">
					Project Title:
					<input id=" project_title " name="project_title" type="text"
					class="form-control form-control-sm">
					
					<br> Description:
					<textarea class="form-control" id="p_description" rows="4"></textarea>
					
					<br> Inventor:
					<input id=" inventor_name " name="inventor_name" type="text"
					class="form-control form-control-sm">
					
					<br> Delivery Time:
					<input id=" delivery_time " name="delivery_time" type="text"
					class="form-control form-control-sm">
					
					<br> Project Cost:
					<input id="project_cost" name="project_cost" type="text"
					class="form-control form-control-sm">
					
					<br>
					<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
					<input type="hidden" id="hidProjectIDSave" name="hidProjectIDSave" value="">
				</form>
				
				<br>
				<div id="alertSuccess" class="alert alert-success" ></div>
				<div id="alertError" class="alert alert-danger" ></div>
				<br>
				
			</div>
		</div>
	</div>
	
	<div class="container">
		<div class="row">
			<div class="col-10">

				<% 
					ProjectModel projectObj = new ProjectModel();
					out.print(projectObj.readProjects());
				%>
			</div>
		</div>
	</div>
	
	<br>
	
	<hr style="height:1px; border:none; color:#000; background-color:#000;">
	
	<nav class="navbar navbar-default  navbar-fixed-bottom" role="navigation">
    	<div class="container text-center">
    		<p> </p>
	  		<p><a href="https://github.com/Akila7302/Gadget_Badget">GadgetBadget 2021</a></p>
	  		<p> </p>
		</div>
	</nav>
	
</body>
</html>