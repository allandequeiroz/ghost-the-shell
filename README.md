
[![Travis](https://api.travis-ci.org/allandequeiroz/ghost-the-shell.svg)](https://api.travis-ci.org/allandequeiroz/ghost-the-shell)

[![](https://images.microbadger.com/badges/image/allandequeiroz/ghost-the-shell.svg)](https://microbadger.com/images/allandequeiroz/ghost-the-shell "Get your own image badge on microbadger.com")
[![](https://images.microbadger.com/badges/version/allandequeiroz/ghost-the-shell.svg)](https://microbadger.com/images/allandequeiroz/ghost-the-shell "Get your own version badge on microbadger.com")

[![](https://images.microbadger.com/badges/image/allandequeiroz/ghost-the-shell:amd64.svg)](https://microbadger.com/images/allandequeiroz/ghost-the-shell:amd64 "Get your own image badge on microbadger.com")
[![](https://images.microbadger.com/badges/version/allandequeiroz/ghost-the-shell:amd64.svg)](https://microbadger.com/images/allandequeiroz/ghost-the-shell:amd64 "Get your own version badge on microbadger.com")

# Ghost with the-shel theme by default

[Ghost 1.25.2](https://github.com/TryGhost/Ghost)

[The Shell theme 0.1.2](https://github.com/mityalebedev/The-Shell/releases)

[Node v8 carbon LTS](https://nodejs.org/en/blog/release/v8.9.0/)

## How to set it up

There's no much need for setup here, a simple `docker-compose up -d` is enough to have your Ghost platform up and running, an example of a `docker-compose.yml` would be something similas to this.

```
version: '3.2'

services:

  # Ghost server    
  ghost:
    image: allandequeiroz/ghost-the-shell
    ports:
      - mode: host
        target: 2368
        published: 2368
    volumes:
      - /lab/data/blog:/var/www/ghost/content/data/
```

## If you're upgrading your current version

If you already have a Ghost running you may need to export your content first and import into this new version, you can do that going to your current Ghost version, Labs, and clicking on `Export` next to `Export your content`.

To import just to to the same place on your new Ghost, Labs, next to `Import content`, select the `.json` file that you've just exported and click `Import`, all you have will be imported, code injection, configurations and so on.

> You may want to delete all the default content before importing your own one, you can get it done by going to `Labs` and clicking on `Delete all content`, now you have a plain clean Ghost to import your exported content.

## How does it look like

![Ghost with the shell](https://i.imgur.com/jzeL0O7.png)

## Code injections

I've made some changes through code injection to improve my version appearence.

### Blog header

```
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/themes/prism.min.css" />
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/themes/prism-okaidia.min.css" />
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/plugins/line-numbers/prism-line-numbers.min.css" />
<style type="text/css">
    .post {
        max-width: 900px;
    }
    #blog-logo {
        width: unset;
        border-radius: unset;
        text-align: center;
        border: unset;
    }
    #blog-logo:before {
        border: unset;
        display: none;
    }
    .poweredby {
        display: none;
    }
    #site-head {
    	height: 40%;
	}
    pre {
        background: #272822;
        border-radius: 12px;
    }
    pre[class*=language-] {
        border-radius: 12px;
    }
    code, tt {
        border: 1px solid #493254;
        background: #493254;
        border-radius: 3px;
    }
    h2 {
    	padding-top: 30px;
    }
</style>
```

### Blog footer

```
<script>
    var d_id  = 'YOUR DISQUS USER',
        g_id  = 'YOUR GOOGLE ANALYTICS ID',
        g_url = 'YOUR GOOGLE ANALYTICS URL'
</script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/prism.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/plugins/line-numbers/prism-line-numbers.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-python.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-java.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-go.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-json.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-yaml.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-docker.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-bash.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-css.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-nginx.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-cpp.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-git.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-handlebars.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-http.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-ini.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-markdown.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-nasm.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-properties.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-puppet.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-rest.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-scala.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/prism-vim.js"></script>
```
