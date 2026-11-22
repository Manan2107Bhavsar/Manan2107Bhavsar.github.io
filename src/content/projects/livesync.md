---
title: Civil 3D → Revit LiveSync
summary: Edit a TIN surface in Civil 3D and the matching Revit toposolid updates itself in about 1–2 seconds. Open source, early version.
kind: side
discipline: Software
term: "2026"
software: [C#, .NET, Civil 3D API, Revit API]
status: Early version (v0.2)
poster: /posters/livesync.svg
links:
  - label: Source code on GitHub
    href: https://github.com/Manan2107Bhavsar/Civil3D-to-Revit-LiveSync
  - label: Latest release and installer
    href: https://github.com/Manan2107Bhavsar/Civil3D-to-Revit-LiveSync/releases/latest
order: 10
featured: true
---

## What it is

A side project I made for fun and out of curiosity, not for marks. Civil 3D and Revit each keep their own version of the ground. LiveSync connects them: when I edit a TIN surface in Civil 3D, the matching toposolid in Revit updates itself in about 1–2 seconds, with no export and import in between.

I built it with AI assistance (Claude Code). I designed how it works, tested it in Civil 3D and Revit, and debugged it until the two programs stayed in step.

## How it works

1. A Civil 3D plug-in watches the TIN surface for changes.
2. When the surface changes, its points are sent over a local named pipe to Revit.
3. A Revit add-in receives the points and updates the toposolid in one transaction, using Revit's SlabShapeEditor.

It supports Civil 3D and Revit 2025 to 2027 and comes with an installer.

## Status

This is an early version. The v0.2 release is tested on Civil 3D 2027 and Revit 2027. The code is open source on GitHub, and the release page has the installer.

