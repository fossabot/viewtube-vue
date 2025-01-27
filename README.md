<h1 align="center">
<sub>
<img  src="https://raw.githubusercontent.com/ViewTube/viewtube-vue/stable/.github/images/logo.png"
      height="50"
      width="50">
</sub>
ViewTube
</h1>

<p align="center"><a href="https://deepscan.io/dashboard#view=project&amp;tid=11097&amp;pid=14017&amp;bid=262917"><img src="https://deepscan.io/api/teams/11097/projects/14017/branches/262917/badge/grade.svg" alt="DeepScan grade"></a>
<a href="https://drone.oeger.li/ViewTube/viewtube-vue"><img src="https://drone.oeger.li/api/badges/ViewTube/viewtube-vue/status.svg" alt="Build Status"></a>
<a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-2.x-brightgreen.svg" alt="vue2"></a>
<a href="https://github.com/ViewTube/viewtube-vue/blob/stable/LICENSE"><img src="https://img.shields.io/github/license/mauriceoegerli/viewtube-vue" alt="GitHub"></a>
<a href="https://hub.docker.com/r/mauriceo/viewtube"><img src="https://img.shields.io/docker/image-size/mauriceo/viewtube/latest?label=docker%20image" alt="Docker Image Size (tag)"></a>
<a href="https://app.fossa.com/projects/git%2Bgithub.com%2FViewTube%2Fviewtube-vue?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FViewTube%2Fviewtube-vue.svg?type=shield"/></a>
<img src="https://img.shields.io/github/last-commit/viewtube/viewtube-vue" alt="GitHub last commit"></p>

ViewTube is an alternative YouTube frontend.

It can recommend, play and search for videos. It saves your watch progress and you can subscribe to channels for them to appear in your subscription feed.

Try the dev version on [dev.viewtube.io](https://dev.viewtube.io)

<h2 align="center">
<sub>
<img  src=".github/icons/star.svg"
      height="30"
      width="30">
</sub>
Features
</h2>

- Watch videos without ads or tracking
- Read comments
- Search for videos
- Subscribe to channels and see their latest uploads
- Receive push notifications for subscribed channels
- Responsive: mobile and desktop friendly

<h2 align="center">
<sub>
<img  src=".github/icons/question.svg"
      height="30"
      width="30">
</sub>
Why not just use invidio.us?
</h2>

You can check the progress on [replacing the invidious api here](https://github.com/ViewTube/viewtube-vue/wiki/Invidious-API-migration).

Invidious instances can easily get rate-limited by Google. With ViewTube, you can <b>switch between instances</b>. Your subscriptions, settings, etc. are stored on your <b>ViewTube account</b>.

<table>
 <tr>
   <td valign="top">
     Your selected instance is slow or doesn't work?
     <br>
     Just go to settings > instance and choose a different one!
     <br>
     Instances are fetched from the <a href="https://github.com/iv-org/documentation/blob/master/Invidious-Instances.md">invidious wiki</a>.
   </td>
   <td><img src=".github/images/switch_instance.gif" /></td>
 </tr>
</table>

<h2 align="center">
<sub>
<img  src=".github/icons/screenshot.svg"
      height="30"
      width="30">
</sub>
Screenshots
</h2>

<h3 align="center">
Homepage
</h3>

![Screenshot-Homepage](https://i.ibb.co/Gk5tKQ7/lxt1y0mk.jpg)

<h3 align="center">
Video
</h3>

![Screenshot-Video](https://i.ibb.co/RTL2v3f/g2ejf7wf.jpg)

<h3 align="center">
Channel
</h3>

![Screenshot-Channel](https://i.ibb.co/h9mf1yd/6j45ao5r.jpg)

<h2 align="center">
<sub>
<img  src=".github/icons/home.svg"
      height="30"
      width="30">
</sub>
Host it yourself
</h2>

A more comprehensive installation guide is available in the [wiki](https://github.com/ViewTube/viewtube-vue/wiki/Installation)

<h3 align="center">
<sub>
<img  src=".github/icons/docker.svg"
      height="30"
      width="30">
</sub>
Docker
</h3>

Example docker command

```docker
$ docker create \
  --name=viewtube
  -p 8066:8066
  -v /path/to/data:/data \
  -e VIEWTUBE_API_URL=http://your-ip-or-domain.com/api/
  --restart unless-stopped \
  mauriceo/viewtube:latest
```

Docker-compose

```yml
version: '3'

services:
  viewtube:
    container_name: viewtube
    restart: unless-stopped
    image: mauriceo/viewtube:latest
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./data:/data
    environment:
      - VIEWTUBE_API_URL=http://your-ip-or-domain.com/api/
    ports:
      - 8066:8066
```

<h2 align="center">
<sub>
<img  src=".github/icons/dev.svg"
      height="30"
      width="30">
</sub>
Development setup
</h2>

Prerequisites

- Nodejs v15.x
- Yarn 1.22.x
- MongoDB 4.4.x

Instructions

1.  Clone this repo

    `git clone https://github.com/ViewTube/viewtube-vue`

2.  Install dependencies

    `yarn install`

3.  Start the dev server

    `yarn serve`

4.  Visit [localhost:8066](http://localhost:8066) with a browser

Pull requests welcome!

<h2 align="center">
<sub>
<img  src=".github/icons/people.svg"
      height="30"
      width="30">
</sub>
Contributors
</h2>

Thanks goes to these wonderful people

[emoji reference](https://allcontributors.org/docs/en/emoji-key)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/cyacedev"><img src="https://avatars0.githubusercontent.com/u/46712905?v=4" width="100px;" alt=""/><br /><sub><b>cyacedev</b></sub></a><br /><a href="https://github.com/ViewTube/viewtube-vue/commits?author=cyacedev" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ckVendrix"><img src="https://avatars2.githubusercontent.com/u/51775140?v=4" width="100px;" alt=""/><br /><sub><b>Vendrix</b></sub></a><br /><a href="https://github.com/ViewTube/viewtube-vue/commits?author=ckVendrix" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FViewTube%2Fviewtube-vue.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FViewTube%2Fviewtube-vue?ref=badge_large)