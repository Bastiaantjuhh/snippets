---
title: Mini GET parameter Router
author:
  name: Bastiaan de Hart
  url: https://github.com/Bastiaantjuhh
---

```
<?php
    if (isset($_GET['page'])) {
        switch ($_GET['page']) {

        case 'home':
            include dirname(__FILE__) . "/inc/page.home.php";
        break;
        
        case 'success':
            include dirname(__FILE__) . "/inc/page.success.php";
        break;
            
        case 'cancel':
            include dirname(__FILE__) . "/inc/page.cancel.php";
        break;
        
        case 'contact':
            include dirname(__FILE__) . "/inc/page.contact.php";
        break;

        default:
            echo '<h1>404 - File not Found</h1>';
            echo '<p>The requested URL was not found on this server.</p>';
        
            header('HTTP/1.1 404 Not Found');
            header('Status: 404 Not Found');
        break;
        }
    }
    else {
        // header('Location: index.php?page=home');
        include dirname(__FILE__) . "/inc/page.home.php";
    }
?>
```