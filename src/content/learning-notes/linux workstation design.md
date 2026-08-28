---
title: "Linux Workstation Design"
date: 2026-08-27
tags: ["aws"]
---

# Context :
The first stage of the ![Linux Workstation Engineering] project is to establish a design for the workstation I intend to build and use.

The goal is not simply to install Arch Linux and select a collection of applications. The workstation is intended to become a practical environment through which I can develop the ability to configure, operate, troubleshoot, maintain, automate and reproduce a Linux system.

The design therefore needs to account for both the system itself and the way I intend to interact with it.
# Design Objectives:
The workstation should satisfy the following principles:

- **Minimalist**: avoid unnecessary software and functionality.
- **Keyboard-driven**: minimize dependence on mouse-oriented interfaces.
- **Understandable**: important system components should be understandable rather than treated as a black box.

These principles are design constraints rather than requirements that every component must satisfy independently.

# Overview Intial Design:
I divided the workstation into three major areas:

1. **System Foundation**
2. **User Workstation**
3. **Monitoring & Diagnostic Kit**

![Linux Workstation Design Model v1](/src/assets/linux-workstation-design-model-v1.png)

## System Foundation

The System Foundation contains the components that establish the basic operating and graphical environment.

## User Workstation

The User Workstation contains the applications and services that make the system useful for my actual workflows.

The initial design separates these into areas such as:

- Development environment Represents the interface I use to build, configure and interact with the system.
    
- Core/user applications The software that provides digital functionality I personally need for everyday use.
    
- System services and infrastructure The underlying services and supporting components that provide essential system functionality.
    

These selections are not intended to represent a final software stack. They represent the current workstation design and are expected to change as I use the system and discover better approaches.

## Monitoring & Diagnostic Kit

This area is intentionally incomplete at this stage.

Rather than selecting a large collection of diagnostic utilities in advance, I intend to acquire and learn tools as I encounter actual operational and troubleshooting requirements.

This should prevent the project from becoming a process of collecting software without understanding its purpose.
# Detailed Intial Design:
---
## Operating System

**Decision:** Use Arch Linux as the primary operating system.

**Reasoning:**

I have previous experience using Arch Linux, which makes it a familiar starting point for this project. In addition, Arch’s minimalist approach, which allows the user to install and configure only the software and components they need, is well suited to the design goals of this workstation.

## Compositor & Tiling Window Manager

**Decision:** Use Sway as the primary window manager/compositor.

**Reasoning:**

I have previous experience using i3 and X11 and prefer the tiling window manager approach. For this project, I wanted to move to a Wayland-based compositor while retaining the characteristics I value in i3. Sway was therefore a natural choice due to its similarities with i3, including its keyboard-driven workflow, simplicity, and relatively straightforward configuration. Compared with alternatives such as Hyprland, Sway also provides a more minimal environment fitting for the Linux Workstation Engineering project.

---
## User Workstation Design

**Decision:** Structure the user workstation into three areas: Development Environment, Core Applications, and System Services & Infrastructure.

**Reasoning:**

I separated the workstation into these categories based on the role each component plays rather than treating the software as a single collection.

- **Development Environment**: Contains the tools used to interact with, configure, and develop the system, such as the terminal emulator, shell, editor.
    
- **Core/User Applications**: Contains the software used for my everyday activities and personal workflows, such as browsing, reading, media, and knowledge management.
    
- **System Services & Infrastructure**: Contains the underlying services and supporting components that provide essential functionality for the workstation, such as networking, audio, bluetooth, backups, VPN, and security. These are separated because they support the operation of the system rather than directly serving a user workflow.
    

This structure provides a simple conceptual model of the workstation while allowing the software stack and categories to evolve as the project develops.


##  Terminal Emulator
## Shell
## File Editor
## File Manager



## Web Browser
## Knowledge Manager
## Book Manager
## Media Manager
## AI Stack


## Backup Stack
## VPN
## Archieve Manager
## Authentication Manager

---
## Separate Diagnostic Environment

**Decision:** Treat monitoring and diagnostic tools as their own part of the workstation design.

**Reasoning:**

Diagnostic tools serve a fundamentally different purpose from normal applications. Their purpose is to observe, understand and troubleshoot the system.

Keeping them separate should make it easier to distinguish between:

- software I use to accomplish tasks; and
- software I use to understand or diagnose the machine performing those tasks.



# Current Assessment
The initial design provides a reasonable starting architecture, but it should not yet be considered mature.

The main areas requiring further development are:

- expansion of the monitoring and diagnostic layer;
- refinement of workstation application categories;
- identification of configuration that should eventually be automated;
- documentation of important system dependencies;
- evaluation of whether the selected applications actually support the intended workflows.

These will be addressed through implementation and experimentation rather than attempting to design the complete workstation in advance.

# Related Documentation
# References

