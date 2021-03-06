
# Ethical Imagination project
We, the Ethical Imagination group, are part of the [Global Data Ethics Project](https://www.datafordemocracy.org/project/global-data-ethics-project) at [Data for Democracy](https://www.datafordemocracy.org/), which is a collective of data practitioners seeking to use data for social good in ethical and inclusive ways. The community at D4D serves as the holding place for the governance and communication of a set of ethical principles that were imagined, created and written through consensus, in the data community for the data community. In our principles, it states: “Ensure that all data practitioners take responsibility for exercising ethical imagination in their work, including considering the implication of what came before and what may come after, and actively working to increase benefit and prevent harm to others.

## Contribution

[See the contribution guide.](./CONTRIBUTING.md)

## License

[See the license file.](./LICENSE.md)

# Instructions

A [Bootstrap 4](https://getbootstrap.com/) start up project for [Github Pages](https://pages.github.com/) and [Jekyll](https://jekyllrb.com/).

* A full Bootstrap 4 theme usable both on Github Pages and with a standalone Jekyll.
* Recompiles Bootstrap from SCSS files, which allows to customize Bootstrap's variables and use Bootstrap themes.
* Full support of Bootstrap's JavaScript plugins.
* Supports all features of Github Pages and Jekyll.

## Setup Guide


* **You want a user or organization website**

  In this case your website's URL will be `http://<your username>.github.io` where `<your username>` is your Github user name.

  Go in the `Settings` page of your repository and rename it to `<your username>.github.io`.

* **You want a project website**

  In this case your website's URL will be `http://<your username>.github.io/<whatever you want>` where `<whatever you want>` can be any valid name for a Github repository.

  Go in the `Settings` page of your repository and rename it to `<whatever you want>`.


## Customization Guide

### Modify the configuration

You should at least edit the `_config.yml` file to edit your website's metadata, like the title, description and repository URL.

### Customize your theme

Let's be honest, this theme uses a vanilla version of Bootstrap 4 and an unmodified Bootstrap is quite unpleasant to the eye. You want to change that.

You can of course modify anything in the `_includes`, `_layouts` and `_sass` folders to customize both the HTML or CSS of your website, possibly referring to the [Bootstrap documentation](https://getbootstrap.com/) or the [Jekyll documentation](https://jekyllrb.com/) when needed. This is a normal part of web development and it is outside the scope of this guide.


Aside from that you can of course create new pages and posts like with any Jekyll website by refering to the [Jekyll documentation](https://jekyllrb.com/).

### Run Jekyll on your computer to speed up testing

Editing your website's content or theme directly on Github is completely possible but, due to the time Github Pages takes to update your website, it will probably be much more effective to work using a local Jekyll installation.

To do so:

* Install the [requirements for Jekyll](https://jekyllrb.com/docs/installation/).
* Type `bundle install` at the root of your project to install the necessary Ruby dependencies.
* Type `bundle exec jekyll serve` to launch the test Jekyll web server that will re-compile your work if you edit it.
* You can then open `http://localhost:4000` in your web browser to see your work-in-progress website.

Please note that, to ensure maximum compatibility with Github Pages, the `Gemfile` of this project references the `github-pages` gem, not Jekyll directly. This implies some differences in behavior compared to the official documentation of Jekyll.

## Known issues

* Bootstrap 4 should normally be post-processed using [Autoprefixer](https://github.com/postcss/autoprefixer). Even if it is possible to use autoprefixer with Jekyll, it is not possible with a classic Github Pages installation without adding some kind of pre-processing before publication. Since this project mostly aims compatibility with Github Pages I prefer to keep it that way. The consequences of this choice is that some Bootstrap features could not work as expected on older browsers.
