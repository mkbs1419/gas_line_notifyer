# line-push-api
Line Bot notification system, made by Google App scripts.

使用前需先加BOT為好友，或為非封鎖狀態。

**Service Check**
----
  Check service status.

* **URL**
```
  https://script.google.com/macros/s/AKfycbw-RqlBvbqSO3O_6LC24Qd2WVGAiAV3MA93EyxtnXQR7wGTwiA/exec
```

* **Method:**

  `GET`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `API is running.`

<!-- * **Sample Call:**
```
``` -->


**Send Message**
----
  Send messages to users.

* **URL**
```
  https://script.google.com/macros/s/AKfycbw-RqlBvbqSO3O_6LC24Qd2WVGAiAV3MA93EyxtnXQR7wGTwiA/exec
```

* **Method:**

  `POST`

* **Data Params**

  UID_List = ["U0f45bbe453140970bc9b34570e4a62fc", "第二人", "第三人"]  
  message_List = ["第一句話", "第二句話", "第三句話"]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `"All Success"` or `"第一人,第三人"`(fail UID)

<!-- * **Sample Call:**
```
``` -->
