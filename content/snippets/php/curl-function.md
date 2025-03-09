---
title: cURL function
author:
  name: Bastiaan de Hart
  url: https://github.com/Bastiaantjuhh
---

```
function curl() {
    
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "URL",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
    ));

    $response = curl_exec($curl);
    curl_close($curl);

    return json_decode($response, true);
}
```