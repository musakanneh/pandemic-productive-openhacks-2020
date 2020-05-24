<?php
$client = new MongoDB\Client(
    'mongodb+srv://admin:CT0X8t6x3NzXGR6a@funkie-amahle-ezc6x.mongodb.net/test?retryWrites=true&w=majority');

$db = $client->test;
   echo "Database mydb selected";
   $collection = $db->createCollection("mycol");
   echo "Collection created succsessfully";
      $cursor = $collection->find();
   // iterate cursor to display title of documents
	
   foreach ($cursor as $document) {
      echo $document["tasks"] . "\n";
   }
?>