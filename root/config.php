<?php

if(defined('WB_PATH')) { die('By security reasons it is not permitted to load \'config.php\' twice!! Forbidden call from \''.$_SERVER['SCRIPT_NAME'].'\'!'); }

define('DB_TYPE', 'mysql');
define('DB_HOST', 'localhost');
define('DB_PORT', '3306');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'usbw');
define('DB_NAME', 'lepton_122');
define('TABLE_PREFIX', 'lep_');

define('WB_SERVER_ADDR', '127.0.0.1');
define('WB_PATH', dirname(__FILE__));
define('WB_URL', 'http://localhost:8080');
define('ADMIN_PATH', WB_PATH.'/admins');
define('ADMIN_URL', 'http://localhost:8080/admins');

define('LEPTON_GUID', '0e38f5b7-2ad9-4675-9981-83817c2d1ce0');
define('LEPTON_SERVICE_FOR', '');
define('LEPTON_SERVICE_ACTIVE', 0);

if (!defined('LEPTON_INSTALL')) require_once(WB_PATH.'/framework/initialize.php');

?>