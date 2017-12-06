//this is all test data, it means nothing

//returned as the result of one query to get all categories (except for contextual ones like "similar/com.james.status")
//"permission" reflects who has the ability to add/remove items from the category
var categories = [
  {
		"id": "stuff",
    "name": "Stuff",
    "description": "A bunch of stuff.",
    "color": "#000",
    "background": "transparent",
    "permission": "developer",
    "apps": [
      //...
    ]
  },
  {
		"id": "actiongames",
    "name": "Action Games",
    "description": "These fast-paced games are sure to do something.",
    "color": "#7CF38B",
    "background": "#222",
    "permission": "developer",
    "apps": [
      //...
    ]
  },
  {
		"id": "graphics",
    "name": "Graphics",
    "description": "These games show off some beautiful graphics without impacting performance.",
    "color": "#177323",
    "background": "#7CF38B",
    "permission": "moderator",
    "apps": [
      //...
    ]
  },
  {
		"id": "morestuff",
    "name": "More Stuff",
    "description": "A bunch of more stuff with a long description.",
    "color": "#82B1FF",
    "background": "#0D47A1",
    "permission": "developer",
    "apps": [
      //...
    ]
  }
];

//can be queried individually (using the package as an identifier) to get full info (first two items), or returned in lists (for categories/search) containing only app name/author, rating, downloads, package name, summary, header, and icon info
var apps = [
  {
    "name": "Status",
    "author": {
      "id": "aora4nf844tt",
      "name": "James Fenn",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "links": [
      {
        "name": "GitHub",
        "type": "source",
        "url": "https://github.com/TheAndroidMaster/Status"
      },
      {
        "name": "Google Play",
        "url": ""
      },
      {
        "name": "Website",
        "type": "website",
        "url": "https://theandroidmaster.github.io/apps/status/"
      },
      {
        "name": "Privacy Policy",
        "type": "privacy_policy",
        "url": "https://theandroidmaster.github.io/policies/?status"
      }
    ],
    "rating": 3.9,
    "ratings": 8273,
    "downloads": 120562,
    "package": "com.james.status",
    "summary": "Status is a thing that does stuff with things and uses those things to do stuff.",
    "releases": [
      {
        "version": "1.1",
        "channel": "stable",
        "date": "June 10, 2017",
        "notes": "- did something\n- whatever\n- yes\n- added cabbage\n- heck",
        "downloads": [
          {
            "target": 25,
            "min": 18,
            "max": 25,
            "minDpi": 560,
            "maxDpi": 800,
            "size": "2.3 MB",
            "url": "/status1.apk"
          },
          {
            "target": 25,
            "min": 18,
            "max": 25,
            "minDpi": 0,
            "maxDpi": 480,
            "size": "2.4 MB",
            "url": "/status2.apk"
          },
					{
            "target": 25,
            "min": 18,
            "max": 25,
            "minDpi": 0,
            "maxDpi": 480,
            "size": "2.4 MB",
            "url": "/status2.apk"
          },
					{
            "target": 25,
            "min": 18,
            "max": 25,
            "minDpi": 0,
            "maxDpi": 480,
            "size": "2.4 MB",
            "url": "/status2.apk"
          },
					{
            "target": 25,
            "min": 18,
            "max": 25,
            "minDpi": 0,
            "maxDpi": 480,
            "size": "2.4 MB",
            "url": "/status2.apk"
          },
					{
            "target": 25,
            "min": 18,
            "max": 25,
            "minDpi": 0,
            "maxDpi": 480,
            "size": "2.4 MB",
            "url": "/status2.apk"
          },
					{
            "target": 25,
            "min": 18,
            "max": 25,
            "minDpi": 0,
            "maxDpi": 480,
            "size": "2.4 MB",
            "url": "/status2.apk"
          }
        ]
      },
      {
        "version": "1.0",
        "channel": "beta",
        "date": "February 2, 2017",
        "notes": "- did something\n- whatever\n- yes\n- added cabbage\n- heck",
        "downloads": [
          {
            "target": 24,
            "min": 18,
            "minDpi": 240,
            "maxDpi": 560,
            "size": "2.5 MB",
            "url": "/status.apk"
          }
        ]
      }
    ],
    "description": "Status is a thing that does stuff with things and uses those things to do stuff. Status is a thing that does stuff with things and uses those things to do stuff. Status is a thing that does stuff with things and uses those things to do stuff.",
    "categories": [
      {
        "id": "actiongames",
        "name": "Action Games"
      },
      {
        "id": "thanksgiving",
        "name": "Thanksgiving"
      }
    ],
    "screenshots": [
      {"url":"https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/screenshots/ColorPickerDialog-Color.png"},
      {"url":"https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/screenshots/ColorPickerDialog-Image.png"}
    ],
    "header": "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png",
    "reviews": [ //reviews, when returned with apps, are limited to the most recent four, with only a "summary" shortened to "most convenient" 100 characters (don't break words) + "..."
      {
        "id": "com.james.status/31938ffas9d833",
        "user": {
          "id": "aora4nf844tt",
          "name": "Jim Person",
          "image": "https://avatars3.githubusercontent.com/u/13000407"
        },
        "date": "January 2, 2017",
        "rating": 3,
        "summary": "I really liked this app a lot. The idea that something could do something that does things..."
      },
      {
        "id": "com.james.status/9wd98d023urcm",
        "user": {
          "id": "aora4nf844tt",
          "name": "Jim Person",
          "image": "https://avatars3.githubusercontent.com/u/13000407"
        },
        "date": "January 2, 2017",
        "rating": 2,
        "summary": "I really liked this app a lot. The idea that something could do something that does things..."
      },
      {
        "id": "com.james.status/qowidjq0d29fj4",
        "user": {
          "id": "aora4nf844tt",
          "name": "Jim Person",
          "image": "https://avatars3.githubusercontent.com/u/13000407"
        },
        "date": "January 2, 2017",
        "rating": 4,
        "summary": "I really liked this app a lot. The idea that something could do something that does things..."
      },
      {
        "id": "com.james.status/i319jdqa9d332",
        "user": {
          "id": "aora4nf844tt",
          "name": "Jim Person",
          "image": "https://avatars3.githubusercontent.com/u/13000407"
        },
        "date": "January 2, 2017",
        "rating": 5,
        "summary": "I really liked this app a lot. The idea that something could do something that does things..."
      }
    ]
  },
  {
    "name": "Metronome",
    "author": {
      "id": "aora4nf844tt",
      "name": "James Fenn",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "links": [
      {
        "name": "GitHub",
        "type": "source",
        "url": "https://github.com/TheAndroidMaster/Metronome-Android"
      },
      {
        "name": "Google Play",
        "url": ""
      },
      {
        "name": "Website",
        "type": "website",
        "url": "https://theandroidmaster.github.io/apps/status/"
      }
    ],
    "rating": 4.8,
    "ratings": 4985,
    "downloads": 5982,
    "package": "james.metronome",
    "summary": "Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "releases": [
      {
        "version": "1.1",
        "channel": "stable",
        "date": "June 16, 2017",
        "notes": "- did something\n- whatever\n- yes\n- added cabbage\n- heck",
        "downloads": [
          {
            "target": 26,
            "min": 18,
            "minDpi": 240,
            "maxDpi": 480,
            "arch": "arm, x86",
            "size": "2.6 MB",
            "url": "/metronome2.apk"
          },
          {
            "target": 26,
            "min": 21,
            "config": "wear",
            "size": "2.6 MB",
            "url": "/metronome2-wear.apk"
          }
        ]
      },
      {
        "version": "1.0",
        "channel": "beta",
        "date": "February 24, 2017",
        "notes": "- did something\n- whatever\n- yes\n- added cabbage\n- heck",
        "downloads": [
          {
            "target": 25,
            "min": 16,
            "dpi": "nodpi",
            "size": "2.6 MB",
            "url": "/metronome.apk"
          }
        ]
      }
    ],
    "description": "Metronome is a thing that does stuff with things and uses those things to do stuff. Metronome is a thing that does stuff with things and uses those things to do stuff. Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "categories": [
      {
        "id": "morestuff",
        "name": "More Stuff"
      },
      {
        "id": "thanksgiving",
        "name": "Thanksgiving"
      },
      {
        "id": "stuff",
        "name": "Stuff"
      }
    ],
    "screenshots": [
      {"url":"https://camo.githubusercontent.com/db497d07ffe194806fbdc2b9892fbe6975403ffe/68747470733a2f2f746865616e64726f69646d61737465722e6769746875622e696f2f617070732f6d6574726f6e6f6d652f696d616765732f6d61696e2e706e67"},
      {"url":"https://camo.githubusercontent.com/a7d712e1e207893363b9fbabf649f10f79a1145e/68747470733a2f2f746865616e64726f69646d61737465722e6769746875622e696f2f617070732f6d6574726f6e6f6d652f696d616765732f61626f75742e706e67"},
      {"url":"https://camo.githubusercontent.com/70da392453b2c1ff894603fcb9920142164e2541/68747470733a2f2f746865616e64726f69646d61737465722e6769746875622e696f2f617070732f6d6574726f6e6f6d652f696d616765732f7468656d65732e706e67"}
    ],
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png",
    "reviews": [
      {
        "id": "james.metronome/31938ffas9d833",
        "user": {
          "id": "aora4nf844tt",
          "name": "Jim Person",
          "image": "https://avatars3.githubusercontent.com/u/13000407"
        },
        "date": "January 2, 2017",
        "rating": 2,
        "summary": "I really liked this app a lot. The idea that something could do something that does things..."
      },
      {
        "id": "james.metronome/9wd98d023urcm",
        "user": {
          "id": "aora4nf844tt",
          "name": "Jim Person",
          "image": "https://avatars3.githubusercontent.com/u/13000407"
        },
        "rating": 3,
        "date": "January 2, 2017",
        "summary": "I really liked this app a lot. The idea that something could do something that does things..."
      },
      {
        "id": "james.metronome/qowidjq0d29fj4",
        "user": {
          "id": "aora4nf844tt",
          "name": "Jim Person",
          "image": "https://avatars3.githubusercontent.com/u/13000407"
        },
        "rating": 5,
        "date": "January 2, 2017",
        "summary": "I really liked this app a lot. The idea that something could do something that does things..."
      },
      {
        "id": "james.metronome/i319jdqa9d332",
        "user": {
          "id": "aora4nf844tt",
          "name": "Jim Person",
          "image": "https://avatars3.githubusercontent.com/u/13000407"
        },
        "rating": 4,
        "date": "January 2, 2017",
        "summary": "I really liked this app a lot. The idea that something could do something that does things..."
      }
    ]
  },
	{
    "name": "Status",
    "author": {
      "id": "aora4nf844tt",
      "name": "James Fenn",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "rating": 3.9,
    "downloads": 120562,
    "package": "com.james.status",
    "description": "Status is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png"
  },
  {
    "name": "Metronome",
    "author": {
      "id": "aora4nf844tt",
      "name": "James Fenn",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "rating": 4.8,
    "downloads": 5982,
    "package": "james.metronome",
    "description": "Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png"
  },
	{
    "name": "Status",
    "author": {
      "id": "aora4nf844tt",
      "name": "James Fenn",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "rating": 3.9,
    "downloads": 120562,
    "package": "com.james.status",
    "description": "Status is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png"
  },
  {
    "name": "Metronome",
    "author": {
      "id": "aora4nf844tt",
      "name": "James Fenn",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "rating": 4.8,
    "downloads": 5982,
    "package": "james.metronome",
    "description": "Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png"
  },
	{
    "name": "Status",
    "author": {
      "id": "aora4nf844tt",
      "name": "James Fenn",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "rating": 3.9,
    "downloads": 120562,
    "package": "com.james.status",
    "description": "Status is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png"
  },
  {
    "name": "Metronome",
    "author": {
      "id": "aora4nf844tt",
      "name": "James Fenn",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "rating": 4.8,
    "downloads": 5982,
    "package": "james.metronome",
    "description": "Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png"
  },
  {
    "name": "Status",
    "author": {
      "id": "aora4nf844tt",
      "name": "James Fenn",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "rating": 3.9,
    "downloads": 120562,
    "package": "com.james.status",
    "description": "Status is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png"
  },
  {
    "name": "Metronome",
    "author": {
      "id": "aora4nf844tt",
      "name": "James Fenn",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "rating": 4.8,
    "downloads": 5982,
    "package": "james.metronome",
    "description": "Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png"
  },
  {
    "name": "Metronome",
    "author": {
      "id": "aora4nf844tt",
      "name": "James Fenn",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "rating": 4.8,
    "downloads": 5982,
    "package": "james.metronome",
    "description": "Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png"
  },
  {
    "name": "Metronome",
    "author": {
      "id": "aora4nf844tt",
      "name": "James Fenn",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "rating": 4.8,
    "downloads": 5982,
    "package": "james.metronome",
    "description": "Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png"
  },
  {
    "name": "Metronome",
    "author": {
      "id": "aora4nf844tt",
      "name": "James Fenn",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "rating": 4.8,
    "downloads": 5982,
    "package": "james.metronome",
    "description": "Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png"
  },
  {
    "name": "Metronome",
    "author": {
      "id": "aora4nf844tt",
      "name": "James Fenn",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "rating": 4.8,
    "downloads": 5982,
    "package": "james.metronome",
    "description": "Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png"
  },
  {
    "name": "Metronome",
    "author": {
      "id": "aora4nf844tt",
      "name": "James Fenn",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "rating": 4.8,
    "downloads": 5982,
    "package": "james.metronome",
    "description": "Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png"
  },
  {
    "name": "Metronome",
    "author": {
      "id": "aora4nf844tt",
      "name": "James Fenn",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "rating": 4.8,
    "downloads": 5982,
    "package": "james.metronome",
    "description": "Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png"
  }
];

//reviews can be queried individually for full review data, or as a full list with the package name as a parameter, which only returns the shortened review "summary" (same as ones included with the app, like above)
var reviews = [
  {
    "id": "com.james.status/31938ffas9d833",
    "user": {
      "id": "aora4nf844tt",
      "name": "Jim Person",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "app": {
      "name": "Status",
      "package": "com.james.status"
    },
    "date": "January 2, 2017",
    "rating": 5,
    "review": "I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff. I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff. I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff."
  },
  {
    "id": "com.james.status/9wd98d023urcm",
    "user": {
      "id": "aora4nf844tt",
      "name": "Jim Person",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "app": {
      "name": "Status",
      "package": "com.james.status"
    },
    "date": "January 2, 2017",
    "rating": 2,
    "review": "I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff. I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff. I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff."
  },
  {
    "id": "com.james.status/qowidjq0d29fj4",
    "user": {
      "id": "aora4nf844tt",
      "name": "Jim Person",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "app": {
      "name": "Status",
      "package": "com.james.status"
    },
    "date": "January 2, 2017",
    "rating": 1,
    "review": "I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff. I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff. I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff."
  },
  {
    "id": "com.james.status/i319jdqa9d332",
    "user": {
      "id": "aora4nf844tt",
      "name": "Jim Person",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "app": {
      "name": "Status",
      "package": "com.james.status"
    },
    "date": "January 2, 2017",
    "rating": 4,
    "review": "I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff. I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff. I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff."
  },
  {
    "id": "com.james.status/31938ffas9d833",
    "user": {
      "id": "aora4nf844tt",
      "name": "Jim Person",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "app": {
      "name": "Status",
      "package": "com.james.status"
    },
    "date": "January 2, 2017",
    "rating": 3,
    "review": "I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff. I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff. I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff."
  },
  {
    "id": "com.james.status/9wd98d023urcm",
    "user": {
      "id": "aora4nf844tt",
      "name": "Jim Person",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "app": {
      "name": "Status",
      "package": "com.james.status"
    },
    "date": "January 2, 2017",
    "rating": 2,
    "review": "I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff. I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff. I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff."
  },
  {
    "id": "com.james.status/qowidjq0d29fj4",
    "user": {
      "id": "aora4nf844tt",
      "name": "Jim Person",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "app": {
      "name": "Status",
      "package": "com.james.status"
    },
    "date": "January 2, 2017",
    "rating": 5,
    "review": "I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff. I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff. I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff."
  },
  {
    "id": "com.james.status/i319jdqa9d332",
    "user": {
      "id": "aora4nf844tt",
      "name": "Jim Person",
      "image": "https://avatars3.githubusercontent.com/u/13000407"
    },
    "app": {
      "name": "Status",
      "package": "com.james.status"
    },
    "date": "January 2, 2017",
    "rating": 4,
    "review": "I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff. I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff. I really liked this app a lot. The idea that something could do something that does things is a brilliant thing that does stuff."
  }
];

//users can be requested as part of a list or other queries (returned without 'links', 'apps', and 'reviews' attrs), or individually by their id
var users = [
  {
    "id": "aora4nf844tt",
    "name": "Jim Person",
    "image": "https://avatars3.githubusercontent.com/u/13000407",
    "links": [
      {
        "name": "GitHub",
        "url": "https://github.com/TheAndroidMaster"
      },
      {
        "name": "Website",
        "type": "website",
        "url": "https://theandroidmaster.github.io/"
      },
      {
        "name": "Google Play",
        "url": ""
      },
      {
        "name": "Donate",
        "type": "donation",
        "url": "https://play.google.com/store/apps/details?id=james.donate"
      },
      {
        "name": "Twitter DM",
        "type": "message",
        "url": "https://twitter.com/IDontLikePHP"
      }
    ],
    "apps": [
      //...
    ],
    "reviews": [
      //...
    ]
  }
];
