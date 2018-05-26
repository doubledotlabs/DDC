This is the Dot Distribution Center, a ridiculously large and ambitious project that was obviously too much for me to take on by myself. The aim of this project is to bring awareness to smaller open source Android projects, and to not only provide a uniform way to distribute and access them but also the ability for users to write reviews and provide feedback to developers without the need of any technical knowledge. I originally started making it for a final project at school, which is why everything is written in vanilla JS and I have used as little libraries as possible. Since then, the website has become somewhat disorganized (mostly due to a lack of documentation) and many issues/inconveniences have been discovered in the [firebase spaghetti](firebase) that I wrote without much initial knowledge of how to use it. In order to solve these problems, much of the project will likely need to be rebuilt from scratch.

## Contributing

Pull requests are welcome. If we haven't already started, we will likely begin rebuilding the project on a new branch, so any contributions should be made to that, whatever it happens to be (it will most likely be titled `develop` or something similarly obvious). If you are interested in becoming more involved with the development this project, I recommend contacting either [me](https://jfenn.me/?contact) or [Marlon](https://twitter.com/DezinKode) so that we can add you on slack.

Some general plans for the different areas of this project are below:

## Plans

### Website

#### Main

[The main website](index.html) simply allows users to discover and download the apks of open source apps. This is not as simple as it turns out. They need to be sorted into categories, organized by reviews/ratings and popularity, searchable, etc. It also contains the sign-in flow, which any other part of the site may redirect to if the user tries to perform an action that requires an account. 

#### Console

[The console](console/index.html) provides developers with a way to publish apps on the site, respond to reviews/feedback, and view basic statistics about their apps. This will be integrated with the GitHub/GitLab APIs to make it easier to publish updates, and will ideally have the option to automatically detect and publish new versions without any action from the developer. 

Another possible feature (somewhat based on [this tweet](https://twitter.com/chrismlacy/status/933136503928000512)) could be to optionally have the server build a test apk on each commit, and allow users to choose whether they want to use only releases marked as "stable", all releases, or all commits.

#### Notifications

Users would [be notified](notifications/index.html) whenever a user submits a review, a developer replies to a review, or the state of a published app is changed (if it is taken down by the currently nonexistent moderation team or is found to contain unattributed copyrighted material, for example).

#### Moderation

Yet another part of the site is created for moderators to easily verify whether apps pass a set of guidelines, have been published under the right category, don't contain any copyrighted material, etc.

### Android App

The Android App would have all of the functionality of the website with the addition of the ability to seamlessly download, install, and update apps, as well as other random useful things like WearOS support, replying to reviews from the notification, etc.

#### Play Store

Since the Play Store guidelines prevent developers from publishing secondary "app stores" on it, our solution would be to remove the "distribution" functionality from the app to publish it, leaving only the ability to find and review apps.

### Tools / Libraries

Several useful tools and libraries that make it easier to publish and maintain apps could be developed alongside this project. Ones that we are currently considering:

#### Translations

A simple (free) site that allows you to upload an xml file containing all of the strings in your app, send all of your users a url for them to translate the strings into their own language, and get all of the translated strings back in another file (or even better, added to your project in pull requests by a bot as they are translated).

#### Feedback

A library allowing you to fetch information about your app (similar to [Attribouter](https://jfenn.me/redirects/?t=github&d=Attribouter) but with less specific usage in mind) such as whether there is a new version available, and display a dialog/screen allowing users to send feedback to you from within your app, regardless of whether the DDC app is installed.
