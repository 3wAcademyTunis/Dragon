<?php
	include "utilities.php";
	
	$id = $_POST['id'];
	$nom = $_POST['nom'];
	$niv = $_POST['niveau'];

	ajoutMembre([$id,$nom,$niv]);

	header('location:exemple.php');