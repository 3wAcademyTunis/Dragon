<?php
function ajoutMembre($membre)
{
	$file = fopen('membres.csv', 'a');

	fputcsv($file, $membre);

	fclose($file);
}

function getAllMembers()
{
	$result = [];

	$file = fopen('membres.csv', 'r');

	while($ligne = fgetcsv($file))
	{
		array_push($result, $ligne);
	}

	fclose($file);

	return $result;
}