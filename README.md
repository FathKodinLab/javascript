# Conversion UNIX Time in javascript
# ------------- SPLIT -------------- #

### Perhaps you want to conversion the UNIX time to another format or split it ###

# What have you finded a article that posted by time "view seconds ago", "yesterday", "just minutes", "10 minutes ago", atc? Yeah, the above code you can do it whatever you want.

# How to use?
var cv = new smansaTime();
var a = Math.floor(Date.now()/1000); //recent time
var b = 1540776155; // old time

document.getElementById('someId').innerHtml = cv.genTime(a,b);

# ^_* nothing description more, have nice your code. Salam simple! wkwkwk
# any question? submit your commment!
