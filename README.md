# Personal Website

![Stars](https://img.shields.io/github/stars/Physlex/PersonalWebsite)
![Issues](https://img.shields.io/github/issues/Physlex/PersonalWebsite)


## Overview

This github repository defines the monorepo for Alexander Williams-Letondre's personal website (WIP)


## Features

#### Unified Service
    Serve the minified javascript SPA using only django and a regex!

- Regex path defined on django python backend `src-django/src/frontend`
- Single page application client side page routing via `react-router` library


#### Grainy Gradient Background (WIP)
    Look at a fancy background using some math and filters!

- Noisemap for grain-filter served via django
- Noisemap + linear-gradient blending to create interesting static background render


... Though to be honest a lot has yet to be done. Most of the project to date has been design and fighting with the gradient system rather than actually implementing features. It's likely that the majority of work will be put into this project come summer.

## Getting Started

This project makes use of both Django (backend service) and React! (frontend framework). Luckily, both of the requirements are put in the associated package.json (src-vite) and Makefile (src-django).


## Building and Running

One will need to run both the backend and frontend code pieces in order for this project to work properly. Luckily, we don't need to run multiple servers due to custom templates defined in src-django that I wrote.

To run the frontend:

Navigate to src-vite and run

```bash
$ npm install .
$ npm run build
```

This will auto-format the typescript codebase and compile all static assets in the src-django directory (for service during development).

To run the website:

Navigate to root, then to src-django. It is recommended (like all python projects) that you run a virtual environment before continuing such as `venv`.

```bash
$ pip install build
$ python3 -m build
$ pip install .
```

This installs the website to your virtual environment, so that you can make use of it during tests.

Finally, run

```bash
$ make run
```

Which should output something like:

```bash
python3 src/manage.py runserver --insecure
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
January 16, 2025 - 00:15:54
Django version 5.1.3, using settings 'website.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

If so, perfect! You can now officially check out my (WIP) website!

Again, please note, that it's a work in progress. I will only consider it done when it's hosted via AWS or Heroku.

## Contributing

No contributions will be accepted to my personal website as of this moment. Though, the thought is appreciated. Instead, this repository exists to prove to others that I am in fact working on a website for myself, and that I do also know React.
