# Google Result Highlighter

This is a chrome extension to highlight google search results from trusted sources. User can add trusted hostnames/webpages in extension's options page. And if google search results are from these webpages, their link highlighted to help user to find what's wanted easily.

## Install and Configuration

Not yet released on Chrome Web Store. But if you want, you can install as unpacked extension. However I don't recommend because still in development and has some bugs which I will fix after my finals.

1. Download zip or clone in desktop
2. Open `chrome://extensions/` on browser
3. Click `Load unpacked extension...` and select the project folder.


To configure your trusted sources, 

1. Open `chrome://extensions/` on browser
2. Find the extension and click `Options` 
3. Enter hostname (ex: stackoverflow.com) and select highlight color
4. Click `Add` and you are done.

Note: Not all of google country domains added to manifes.json. Thus if your google domain is not there, you need to add it manually to file.

## Contribution

I did it for myself so that's why I will keep maintaining and add some new features for my needs. However anyone is free to request or implement new features.

In addition since this is my first extension attempt and javascript front-end experience, code style may not be good or may work inefficiently. I would be very pleased hear suggestions to improve this. Also my design and html skills are bad as you can see from Options page, so a little help would be very good.

One more thing, as you see note at the end of Install and Configuration section, the least you could do is adding your country domain to manifest file exactly like existing ones (Careful about json syntax!)

## ScreenShots

![SS1](ss/ss1.png)