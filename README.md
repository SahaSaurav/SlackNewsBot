# News Bot: A Slack Plugin
_Contributors: Saurav Saha, Ahmed Abdelmoneim, Seif Ghazi_

News Bot is a Slack app that automatically sends a Slack message containing links to the top 5 news headlines for the day according to CNN. The message is sent out every morning at 9 am to the workspace's General channel. 

![image](https://i.ibb.co/B45RmPx/Screen-Shot-2018-12-01-at-8-10-02-PM.png)


## App Structure

_Tools Used: Node.js, Slack API, Heroku

_Folder Structure:

    ├── controllers                                 
            ├── message_controller
    ├── services                                     
            ├── request_controller                   
    ├── app.js                                       
    ├── main.js
    ├── package.json
    └── README.md
