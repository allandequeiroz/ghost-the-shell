const 
    EXIT_SUCCESS = 0,
    EXIT_FAILURE = 1;

const page = require('webpage').create();

console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';

page.open('http://localhost:2368', function (status) {
    if (status !== 'success') {
        console.log('Was not possible to connect')
        phantom.exit(EXIT_ERROR);
    } else {

        console.log('Starting phantom tests')
        console.log('d_id, g_id and g_url are related to Disqus and Google Analytics, no worry about that, configure it later...');

        const logo = page.evaluate(function () {
            return document.getElementById('blog-logo');
        });
        const siteHead = page.evaluate(function () {
            return document.getElementById('site-head');
        });
        const copyright = page.evaluate(function () {
            return document.getElementsByClassName('copyright');
        });
        const poweredby = page.evaluate(function () {
            return document.getElementsByClassName('poweredby');
        });
        if(logo) {
            console.log('blog-logo : ok')
        }
        if(siteHead) {
            console.log('site-head : ok')
        }
        if(copyright) {
            console.log('copyright : ok')
        }
        if(poweredby) {
            console.log('poweredby : ok')
        }
        if (logo && siteHead && copyright && poweredby) {
            console.log('Phantom verification succed');
            phantom.exit(EXIT_SUCCESS);
        } else {
            console.log('Phantom verification fail');
            phantom.exit(EXIT_ERROR);
        }
    }
    phantom.exit();
});
