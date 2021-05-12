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
			<div class="col-5">
		
				<h1>Projects Management</h1>
				
				<form id="formProject" name="formProject" method="post" action="projects.jsp">
					Project Title:
					<input id=" project_title " name="project_title" type="text"
					class="form-control form-control-sm">
					
					<br> Description:
					<input id=" p_description " name="p_description" type="text"
					class="form-control form-control-sm">
					
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
				
				<% 
					ProjectModel projectObj = new ProjectModel();
					out.print(projectObj.readProjects());
				%>
				
			</div>
		</div>
	</div>
		
</body>
</html>