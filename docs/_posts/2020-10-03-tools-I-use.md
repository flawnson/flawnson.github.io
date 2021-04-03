---
layout: post
title: "The Tools I use"
categories: [ development ]
tags: [ tools, opinion, featured]
created: Apr 17, 2020 10:00 PM
image: assets/images/17.jpg
---

This page is for keeping track of the software and hardware I use on a regular basis, as well as instructions for setup and other customizations if reference needed in the future.

## PCs and OSs
{:.no_toc}

* A markdown unordered list which will be replaced with the ToC, excluding the "Contents header" from above
{:toc}


# Devices

<table style="width:100%">
  <tr>
    <th>Asus Zenbook 14</th>
    <th>Lenovo Flex 4</th>
    <th>Acer Chromebook C740</th>
  </tr>
  <tr>
    <td>Intel Core i7-8565U</td>
    <td>Intel Core i7-6500U</td>
    <td>Intel Celeron 3205U</td>
  </tr>
  <tr>
    <td>Quad Core</td>
    <td>Quad Core</td>
    <td>Dual Core</td>
  </tr>
  <tr>
    <td>1.5 GHz - 1.6GHz</td>
    <td>2.5 GHz - 2.6GHz</td>
    <td>1.5 GHz</td>
  </tr>
  <tr>
    <td>16GB RAM</td>
    <td>16GB RAM</td>
    <td>4GB RAM</td>
  </tr>
  <tr>
    <td>512GB SSD</td>
    <td>512GB SSD</td>
    <td>16GB SSD</td>
  </tr>
  <tr>
    <td>Nvidia GeForce MX250</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Windows 10 Pro</td>
    <td>Windows 10 Home</td>
    <td>Chrome OS</td>
  </tr>
</table>

Nick J's videos, blogs, and other content on the topic are super useful.

Some settings need to be manually changed for further customization:

- Turn on developer mode (Windows 10 Pro)
- Turn on remote desktop (Windows 10 Pro)
- Sign in for windows insider program (required for Docker desktop to work on Windows Home)
- Check Virtual Desktop availability
- Turn on Hypervisor services
- Turn on Virtualization

## Peripherals

- Logitech MX Anywhere 2S wireless mouse
    - Seriously great battery life (literally months at full charge)
    - Logitech Flow and Duolink are indispensable once adjusted to
- Logitech MX Keys Multi-device wireless keyboard ~~Logitech K780 Multi-device wireless keyboard~~
- Pluggable USB 3.0 Universal Laptop Docking Station
    - Requires Pluggable's proprietary driver for triple monitor support
- HP 24es dual monitor displays

# Software

# Setup Script

What I'll need

- git (probably already installed)
- Anaconda (conda in cli)
    - [Installation archive](https://repo.anaconda.com/archive/)
    - [Instructions](https://medium.com/google-cloud/set-up-anaconda-under-google-cloud-vm-on-windows-f71fc1064bd7)
- Conda envs
    - use environment.yml files
    - manually install torch, PyG, and DGL
- zsh (and oh-my-zsh)
    - Themes? (powerlevel9k)
- tmux
    - tmux plugin manager
    - set up tmux config for proper scrolling and [selecting text](https://unix.stackexchange.com/questions/318281/how-to-copy-and-paste-with-a-mouse-with-tmux)

---

## WSL (Ubuntu 18.04)

WSL with zShell (with oh-my-zsh installed and vi-mode enabled) used mostly for scripting (tmux and vim) and monitoring of device processes (htop and ncdu) as well as for container management/orchestration with Docker (desktop app only works with Windows Pro otherwise it requires you to use a VM with HyperV or WSL as the backend). My Chromebook also has a [Linux subsystem installed](https://support.google.com/chromebook/answer/9145439?p=chromebook_linuxapps&b=auron_paine-signed-mp-v2keys&visit_id=637329404892105456-2383669780&rd=1) for light dev work and SSHing.

Both WSL and cmd can use themes from iTerm2 using the [Microsoft colortool app](https://github.com/microsoft/terminal/tree/master/src/tools/ColorTool) and colorscheme from the [iTerm2 repository](https://github.com/mbadolato/iTerm2-Color-Schemes) Further customization with [Zsh](https://medium.com/@vinhp/use-zsh-in-wsl-on-windows-10-5d439a749c4c) and [ConEmu](https://blog.joaograssi.com/windows-subsystem-for-linux-with-oh-my-zsh-conemu/)

To copy the output (or files) from WSL bash to windows clipboard, pipe your command as such:

- `command.txt | clip.exe`

I keep track of my linux system packages on Notion:

[*nix Systems Packages](https://www.notion.so/897c22d78650472f80c419bb8fca79fb)

## Dotfiles

[Important dotfiles](https://www.notion.so/f881760420a948af9c6f3dfb79cc57bf)

Try to manage with git bare repository

- Example [1](https://www.atlassian.com/git/tutorials/dotfiles), [2](https://medium.com/toutsbrasil/how-to-manage-your-dotfiles-with-git-f7aeed8adf8b), [3](https://news.ycombinator.com/item?id=11070797)

If not, then clone into normal git repo and symlink into root dir (Currently on this setup for .vimrc only) still need to implement git bare strategy on all dotfiles in root dir

- [Example](https://coderwall.com/p/ynu8xq/keep-your-dotfiles-in-git)

Reference [Nickj Janetakis'](https://github.com/nickjj/dotfiles/blob/master/.tmux.conf) or Jonathan Gin's dotfile repos for detailed implementations of dotfiles

---

## Desktop Apps

[Apps](https://www.notion.so/9cf06c13a8fe4c8582ad6f456f8272ef)

## Editors

See [here](https://www.notion.so/JetBrains-Toolbox-e00437579d1c43d1b34cf2596f68ed56) for installation.

Currently using JetBrain's IDE series including PyCharm, Webstorm, IntelliJ, and Android Studio (ordered from most to least used)

[IDE Plugins](https://www.notion.so/26bebe7c1b4e48319fefd2f27633d9ec)

There are a couple settings I do to customize my IDE a bit:

- Import settings if there is an existing settings file
- Enable detection of TODO, XXX, FIXME, and BUG
- Set stable Vim/Editor shortcuts
- You can open any JetBrains IDE in Administrator mode for admin privilege (otherwise, go to the executable and set it to always run as admin in the compatibility tab.

## Terminals

Mainly use Powershell (for SSHing and environment management) unless there is something quick that needs to be done (git stuff, file/folder management)

[Conda Environments](https://www.notion.so/70962336821a49bab87c5beed9a1e0ac)

***To properly install torch AND torch-geometric, one must use:

`torch==1.4.0+cpu torchvision==0.5.0+cpu -f [https://download.pytorch.org/whl/torch_stable.html](https://download.pytorch.org/whl/torch_stable.html)` in the options input field of the PyCharm package manager when installing torch

# Media

## Browser

- I use chrome for all my online activities

[Chrome Extensions](https://www.notion.so/bc4e9c883a23451e9309c1d3170c40fe)

## Hardware

- Blue Yeti Microphone
- Logitech B525 HD Webcam
- UE Megaboom wireless speaker
- Sony WH-CH700N Wireless Noise Canceling Headphones
- 1MORE Triple Driver Hi-Res In Ear Monitors
- Casio PX-5S Privia 88-Key Digital Stage Piano
- Sony Walkman NW-A45 Digital Analog Converter
    - Compatible with Sony Music Center desktop app only

## Software

- Music Apps
    - iTunes for orchestral/trailer/movie score music
    - Spotify for everything else
    - Sony Music Center for Walkman transfers
    - Foobar2000 for consolidating files from iTunes and SMC (FLACs, AACs, MP3s, etc.)
- Audio Apps
    - Audacity
    - Ableton Live 9

<p id="modTime"></p>
