Countdown Timer

A timer that allows for quick implementation in your everyday projects. Developed for in-house use at [Banyan Hill Publishing, LLC.](https://www.banyanhill.com) This program was written using the JavaScript OOP pattern. Basic knowledge of this pattern is a recommended, but not required.

View project [README.html](https://cloudcollective.s3.amazonaws.com/html/countdownTimer/README.html)

Table of Contents


- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Deadline Timer](#deadline-timer)
- [Minutes Timer](#minutes-timer)
- [Custom Settings](#custom-settings)
- [Notes](#notes)
- [Special Thanks](#special-thanks)
- [Want to Contribute?](#want-to-contribute)

Features
---

+ 2 timer types (deadline and minutes)
+ [Custom settings](#custom-settings)
+ automatic redirect boolean setting
+ Create unique countdowns

[top ↑](#countdown-timer)

Screenshots 
---

![Deadline timer example](https://cloudcollective.s3.amazonaws.com/html/countdownTimer/images/deadline.png)
![Minutes timer example](https://cloudcollective.s3.amazonaws.com/html/countdownTimer/images/minutes.png)
![Expired message example](https://cloudcollective.s3.amazonaws.com/html/countdownTimer/images/expiry.png)
![Expired message example](https://cloudcollective.s3.amazonaws.com/html/countdownTimer/images/expiry-no-redirect-link.png)

[top ↑](#countdown-timer)

Getting Started
---

> Usage
> ---
>
> To use this timer on your site, you **must** insert the element and scripts into your document. Then, adjust the `timer.settings` object properties to your specifications.
>
> You may set HTML to the `displayHeading`, `expiredMessage`, and `redirectText` properties.
>
> Be sure to include `https://` in your redirect url.
>
> ### ⚠️ The `autoRedirect` property: 
> ---
>
> If you set the `autoRedirect` property to `true`, then you **must** also include the `redirectLink` property.
> 
> Setting this property to `false` allows for you to omit the `redirectLink` property.
>#### Example object when `autoRedirect` is set to `true`:
    >> ```javascript
    >>     timer.settings({
    >>         timerType: "deadline",
    >>         deadlineDate: "2022-10-01T09:00:00",
    >>         displayHeading: "Your Offer <span class='nobr'>Ends In:</span>",
    >>         expiredMessage: "<h2>Offer Expired</h2> <h2 class='h4'>We're sorry you <span class='nobr'>missed it!</span></h2>",
    >>         redirectText: "Let\'s Get Started!",
    >>         redirectLink: "https://www.banyanhill.com",
    >>         autoRedirect: true,
    >>         showDays: true,
    >>         showHours: true
    >>     });
    >> ```
> See the full timer setup documentation below.
>
> The timer stylesheet will be added to your document head dynamically.

[top ↑](#countdown-timer)

Deadline Timer
---

> First, insert the element and scripts into your document. You may place them anywhere within the opening and closing `body` tags.
> ### Element:
    >> ```html
    >> <div id='deadlineTimer'></div>
    >> ```
>
>### Scripts:
    >>```javascript
    >><script src="https://cloudcollective.s3.amazonaws.com/scripts/assets/countdownTimer/countdownTimer.js.gz"></script>
    >><script type="text/javascript">
    >>    timer.settings({
    >>        timerType: "deadline",
    >>        deadlineDate: "20XX-00-00T00:00:00",
    >>        displayHeading: "Your Offer <span class='nobr'>Ends In:</span>",
    >>        expiredMessage: "<h2>Offer Expired</h2> <h2 class='h4'>We're sorry you <span class='nobr'>missed it!</span></h2>",
    >>        redirectText: "Let\'s Get Started!",
    >>        redirectLink: "https://www.banyanhill.com",
    >>        autoRedirect: true,
    >>        showDays: true,
    >>        showHours: true
    >>    });
    >></script>
    >>```
>
> To initilize the Deadline Timer, you **must** set the `timerType` property to `"deadline"`
> Next, you **must** include and define the following property values on your timer object:
>
> + `deadlineDate`
> + `expiredMessage`
> + `autoRedirect`
> + `showDays`
> + `showHours`
>
> The following properties and are set to `"true"` by defualt. You may change them to `"false"` if you want to hide them:
>
> + `showDays`
> + `showHours`
>
> You may choose to define the following property values on your timer, as they are optional:
> + `displayHeading`
> + `redirectText`
> + `redirectLink`
>
> ⚠️ If you set the `autoRedirect` property to `true`, then you **must** also include the `redirectLink` property.
>
> When the `autoRedirect` property is set to `true` and the `redirectText` is an empty string, the default hyperlinked text will say `You will be automatically redirected...`
>
> When the `autoRedirect` property is set to `false` and the `redirectText` is an empty string, the default hyperlinked text will say `Learn about our other services.`
>
> The `redirectLink` property default setting is hyperlinked to [the Banyan Hill website](https://www.banyanhill.com).

[top ↑](#countdown-timer)

Minutes Timer
---

> First, insert the element and scripts into your document. You may place them anywhere within the opening and closing `body` tags.
>### Element:
    >> ```html
    >> <div id='deadlineTimer'></div>
    >> ```
>
>### Script:
    >>```javascript
    >><script src="https://cloudcollective.s3.amazonaws.com/scripts/assets/countdownTimer/countdownTimer.js.gz"></script>
    >><script type="text/javascript">
    >>    timer.settings({
    >>        timerType: "minutes",
    >>        displayHeading: "Your Offer <span class='nobr'>Ends In:</span>",
    >>        expiredMessage: "<h2>Offer Expired</h2> <h2 class='h4'>We're sorry you <span class='nobr'>missed it!</span></h2>",
    >>        redirectText: "Let\'s Get Started!",
    >>        redirectLink: "https://www.banyanhill.com",
    >>        autoRedirect: true,
    >>        minutesStart: 15,
    >>        secondsStart: 0,
    >>    });
    >></script>
    >>```
>
> To initilize the Minutes Timer, you **must** set the `timerType` property to `"minutes"`.
> Next, you **must** include and define the following property values on your timer object:
>
> + `expiredMessage`
> + `autoRedirect`
> + `minutesLeft`
> + `secondsLeft`
>
> You may choose to define the following property values on your timer, as they are optional:
> + `displayHeading`
> + `redirectText`
> + `redirectLink`
>
> ⚠️ If you set the `autoRedirect` property to `true`, then you **must** also include the `redirectLink` property.
>
> When the `autoRedirect` property is set to `true` and the `redirectText` is an empty string, the default hyperlinked text will say `You will be automatically redirected...`
>
> When the `autoRedirect` property is set to `false` and the `redirectText` is an empty string, the default hyperlinked text will say `Learn about our other services.`
>
> The `redirectLink` property default setting is hyperlinked to [the Banyan Hill website](https://www.banyanhill.com).

[top ↑](#countdown-timer)

Custom Settings
---

+ Select timer type by using keywords "deadline" or "minutes" (i.e. `timerType: "deadline"`).
+ Set a custom timer heading by providing text to the `displayHeading` property.
+ Set a custom expired message by providing HTML elements to the `expiredMessage` property.
+ Set an automatic redirect on timer expiry by providing a url to the `redirectLink` property (omitting this will automatically redirect to the Banyan Hill website).
+ Toggle display of days and hours on the deadline timer by setting `showDays: false` and/or `showHours: false` properties.
+ Set a percise countdown by providing `minutesLeft` and `secondsLeft` properties to specific number values.
+ Classes available for custom styling:
    + dynamic-countdown (classifies this timer build)
    + countdown-container
    + countdown-headline
    + countdown-content
    + days
    + days-text
    + hours
    + hours-text
    + minutes
    + minutes-text
    + seconds
    + seconds-text
    + timer-colon
    + expired-container
    + expired-message
    + expiry-redirect-link
+ Ids available for custom styling:
    + deadlineTimer
    + countdown

[top ↑](#countdown-timer)

Notes
---

You should refer to the browser console to review errors and warnings if the timer does not behave as expected (`Shift + Ctrl + K` on Windows and `Command + Option + J` on Mac;

You can also right click on the broswer's page and use the menu to inspect the page).

[top ↑](#countdown-timer)

Special Thanks
---

+ [ifdan](https://github.com/ifdan) ( `debugging master` )

[top ↑](#countdown-timer)

Want to Contribute?
---

Contributions are always welcomed!

If you'd like to contribute to this project, please email me at [ataylor.banyanhill@gmail.com](mailto:ataylor.banyanhill@gmail.com).

Please put "Coundown Timer: Banyan Hill" in the subject line, then briefly share what you'd like to contribute to this project and how you think it could be implemented.

[top ↑](#countdown-timer)