# bigelow-express.js-note-taker

## Description

This app is for busy individuals who want to quickly store, retrieve, view and delete notes and reminders. The user simply types the title and content of their note and hits the save button. Then they will be able to see the note in the sidebar, view it and delete it when they no longer need it. It provides a simple and intuitive user experience, without a lot of extra bells and whistles. 

This project was part of the ExpressJS module of my coding bootcamp. A set of starter code was provided while it was left up for me, the student, to write the server.js file, the apiRoutes.js file and the htmlRoutes.js file. It helped me gain a rudimentary understanding about what middleware does and how express routing works. In addition, working with a base of starter code helped me better understand how the front end connects to the back end. 

## Installation

To use the project, use git clone to clone the repository to your device. You can right-click "server.js" and select "open in integrated terminal". Type "npm i express" to install express. Then type "npm i server.js". You will get a message that says "App listening at http://localhost:3001". Press the control button while you click the link to open the app in the browser. 

## Usage

Once you have the repository open in VS Code, you can right-click "server.js" in the file explorer and select "open in integrated terminal". In the terminal, type "npm i express" to install express. Then type "npm i server.js". You will get a message that says "App listening at http://localhost:3001. Press the control button while you click the link to open the app in the browser. Click "Get started". This will take you to the main page. On the main page, there will be a column of already-made notes on the lefthand side. This will be empty if there are no notes. On the right side, there will be a large area that is mostly blank except for two fields saying "Note title" and "Note text". Click on each one to input your data. When you start typing into the "Note text" field, you will see a save icon appear in the upper-righthand corner of the screen. If you want to save your note, click it and your note will appear in the lefthand column. If you are done with any note and you want to delete it, click the trash bin icon on the righthand side of the saved notes column. 

## Credits

I had a lot of help from tutor Jili Jiang and teacher's assistant Roman Senin. 

## License

MIT License

Copyright (c) 2023 Ibigelow92

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests

After you have opened "server.js" in the terminal and installed express, type "node server.js" into the terminal and press "enter". You should get a message saying "App listening at http://localhost:3001". Once you click it, it should take you to the home page of the app, which has a "Get started" button in the center. When you click the button, it should direct you to the main page of the app. After you have typed the title of a note and start to input the text of the note, you should see a save icon appear in the upper righthand corner. When you click the saved icon, your note should appear in the lefthand column. When you click on that note, it should appear again in the righthand text field. When you click the red trashbin icon in the "saved notes" column, the note should disappear from it. 

