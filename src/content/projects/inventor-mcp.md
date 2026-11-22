---
title: Inventor MCP server
summary: A Model Context Protocol server that lets an AI assistant drive a live Autodesk Inventor session, with 92 tools from sketches to drawings and export.
kind: side
discipline: Software
term: "2026"
software: [Python, pywin32 (COM), Model Context Protocol, Autodesk Inventor]
status: Work in progress
poster: /posters/inventor-mcp.svg
order: 20
---

## What it is

A side project I made for fun and out of curiosity, not for marks. It is a server that uses the Model Context Protocol (MCP) to let an AI assistant drive a live Autodesk Inventor session. The assistant asks for an action, and the server carries it out in Inventor through Inventor's COM interface, using Python and pywin32.

I built it with AI coding assistants. I designed the tool set, tested each tool against a running copy of Inventor, and debugged it when Inventor did something I didn't expect.

## What it can do

It has 92 tools covering:

- parts, sketches and features
- parameters and iProperties
- assemblies and weldments
- drawings
- export to STEP, STL, PDF, DWG and other formats

## Demos

- From a prompt: make a block, extrude it, add a hole and pattern the hole.
- From a folder of my own IPT and IAM files: generate a multi-sheet IDW drawing using my own template, in about 30 minutes.

## Status

Still being refined. Some tools still throw errors. It is not public yet.
