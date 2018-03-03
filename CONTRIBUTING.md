## How to contribute

Just create a PR directly to master for now. There are no tests yet, so please be sure that it works.

Also please, before contributing have look at the [Airbnb JS Style guide](https://github.com/airbnb/javascript) for non-ES6 stuff only, code hasn't ported to ES6 yet.

## What the project needs

### Improve code style and efficiency 

Since this is my first extension attempt and javascript front-end experience, code style may not be good or may work inefficiently. I would be very pleased hear suggestions or PR to improve this.

### Config page design

My design and html skills are bad as you can see from the configuration page of the plugin, so any kind of contribution to the page (config.html) is very welcome.

### Country domains

Chrome Extensions doesn't accept url syntax like `*://www.google.com.*`, therefore all country domains must be in the `manifest.json`.The thing you could do is adding your country domain to manifest file exactly like existing ones, under `permissions` array and `content_scripts` array, unless if it is already there.
