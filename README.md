# Alert
JS for good looking alert box

Usage:

Paste "<script src="https://lukvx.de/alert/alert.js"></script>" to your code. Simply use the functions below.

IMPORTANT: the Message box has the z-index of 30. So if u dont see it just change the CSS property of .small_alert and .small_alert_displayed to a higher number


Example:
Notify('Notification');

SmallAlert('Error Message', 'Red', 'White', 3, 'https://google.com/');

BigAlert('Something happened', 'Please follow the instructions <a href='instructions'>here</a>', 'Grey', 'white');

Syntax: 

SmallAlert('Message', 'Background Color', 'Font color', duration, target);
                                                                  Target can be empty


BigAlert('Title', 'Value (can be HTML format)', 'color', 'textcolor');

Notify('Message');





