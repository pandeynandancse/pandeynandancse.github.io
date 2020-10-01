<?php

// database connection code

$con = mysqli_connect('localhost', 'root', '','datab_2');

// get the post records

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$age = $_POST['age'];
$address = $_POST['address'];
$qualification = $_POST['qualification'];
$profession = $_POST['profession'];
$icname = $_POST['icname'];
$like = implode(",", $_POST['like']);
$rate = $_POST['rate'];

// database insert SQL code

$sql = "INSERT INTO table_1 ( Name, Email, Mobile, Age, Address, Qualification, Profession, ICname, Likes, Rating) VALUES ( '$name', '$email', '$number', '$age', '$address', '$qualification', '$profession', '$icname', '$like', '$rate')";


// insert in database 
$rs = mysqli_query($con, $sql);
if($rs)
{
	echo "Thank you for giving your valuable time !";
}
else{
	echo "Error: " . mysqli_error($con);
}

?>