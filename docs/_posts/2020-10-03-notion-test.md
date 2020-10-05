---
layout: post
title:  "Welcome to Jekyll!"
date:   2020-10-03 20:23:18 -0400
categories: jekyll update
---

# The Tools I Use

Created: Apr 17, 2020 10:00 PM
Edited: Sep 27, 2020 6:01 PM
Publicised: No
Subtopic: Tools
Topic: Programming

This page is for keeping track of the software and hardware I use on a regular basis, as well as instructions for setup and other customizations if reference needed in the future.

# Devices

## PCs and OSs

Asus Zenbook 14,

Intel Core i7-8565U Quad Core,

1.5 GHz - 1.6GHz

16GB RAM,

512GB SSD,

Nvidia GeForce MX250,

Windows 10 Pro

Lenovo Flex 4,

Intel Core i7-6500U Quad Core,

2.5 GHz - 2.6GHz

16GB RAM,

512GB SSD,

WIndows 10 Home

Acer Chromebook C740

Intel Celeron 3205U Dual Core

1.5 GHz

4GB RAM,

16GB SSD,

Chrome OS

Nick J's videos, blogs, and other content on the topic is super useful

Some settings need to be manually changed for further customization

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
- Logitech K780 Multi-device wireless keyboard
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

---

[*nix Systems Packages](https://www.notion.so/897c22d78650472f80c419bb8fca79fb)

## Dotfiles

[Copy of Important dotfiles](https://www.notion.so/f881760420a948af9c6f3dfb79cc57bf)

Try to manage with git bare repository

- Example [1](https://www.atlassian.com/git/tutorials/dotfiles), [2](https://medium.com/toutsbrasil/how-to-manage-your-dotfiles-with-git-f7aeed8adf8b), [3](https://news.ycombinator.com/item?id=11070797)

If not, then clone into normal git repo and symlink into root dir (Currently on this setup for .vimrc only) still need to implement git bare strategy on all dotfiles in root dir

- [Example](https://coderwall.com/p/ynu8xq/keep-your-dotfiles-in-git)

Reference [Nickj Janetakis'](https://github.com/nickjj/dotfiles/blob/master/.tmux.conf) or Jonathan Gin's dotfile repos for detailed implementations of dotfiles

---

## Desktop Apps

[Copy of Apps](https://www.notion.so/9cf06c13a8fe4c8582ad6f456f8272ef)

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