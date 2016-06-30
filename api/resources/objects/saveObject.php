<?php
/**
 * Created by PhpStorm.
 * User: spider-ninja
 * Date: 6/22/16
 * Time: 3:06 PM
 */

function saveObject($app_id){

    $request = \Slim\Slim::getInstance()->request();
    $object = json_decode($request->getBody());


    $sql = "INSERT INTO `digieye`.`objects`
                  ( `qr_bar_code`, `name`, `photo`, `brand`, `address`, `mobile`, `email`, `type`, `location`)
              VALUES (:qr_bar_code, :name, :photo, :brand, :address, :mobile, :email, :type, :location);";

    try {

        $db = getDB();
        $stmt = $db->prepare($sql);

        $stmt->bindParam("qr_bar_code", $object->qr_bar_code);
        $stmt->bindParam("name", $object->name);
        $stmt->bindParam("photo", $object->photo);
        $stmt->bindParam("brand", $object->brand);
        $stmt->bindParam("address", $object->address);
        $stmt->bindParam("mobile", $object->mobile);
        $stmt->bindParam("email", $object->email);
        $stmt->bindParam("type", $object->type);
        $stmt->bindParam("location", $object->location);

        $stmt->execute();

        $id = $db->lastInsertId();

        $object->id = $id;


        $db = null;

        echo '{"object": ' . json_encode($object) . '}';

    } catch (PDOException $e) {
        //error_log($e->getMessage(), 3, '/var/tmp/php.log');
        echo '{"error":{"text":"' . $e->getMessage() . '"}}';
    }
}

?>
