# Alert
![image](https://user-images.githubusercontent.com/44476930/123536526-02794680-d72b-11eb-9ffa-300d4b7b7954.png)

JS function for a good looking Alert Box with many functions


### Usage:

Paste ```<script src="https://lukvx.de/alert/alert.js"></script>```to your code. Simply use the functions below.

IMPORTANT: the Message box has the z-index of 30. So if u dont see it just change the CSS property of .small_alert and .small_alert_displayed to a higher number


### Example:

```Notify('Notification');```

```SmallAlert('Error Message', 'Red', 'White', 3, 'https://google.com/');```

```BigAlert('Something happened', 'Please follow the instructions <a href='instructions'>here</a>', 'Grey', 'white');```

### Syntax: 
Small Alert
```SmallAlert('Message', 'Background Color', 'Font color', duration, target);```
If you dont have a target and just want to display a simple alert just leave the param empty.

Big Alert
```BigAlert('Title', 'Value (can be HTML format)', 'color', 'textcolor');```

Notification
```Notify('Message');```





