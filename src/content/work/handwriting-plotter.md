---
title: Handwriting plotter
kind: project
org: 3D printer turned pen plotter
role: Software and hardware
sort: 2026.1
summary: I clamped a pen to my 3D printer and wrote software that turns a photo of handwriting into a path the printer can draw.
cover: ../../assets/work/handwriting-plotter/input.jpg
coverFit: contain
coverAlt: Handwritten "hello world!" in marker on graph paper
gallery:
  - src: ../../assets/work/handwriting-plotter/traced.png
    caption: "The same note traced into G-code: black is pen down, red is the pen moving between strokes"
---

A pen plotter that writes in my own handwriting. I clamped a pen on a sprung, 3D-printed mount 45 mm in front of the nozzle of my Prusa Mini 3D printer, then wrote hw2gcode, a Python tool that turns a photo of handwriting into G-code the printer can draw.

- Traces the centerline of each stroke rather than its outline, so the pen follows the same path my hand did.
- Joins stroke ends that nearly meet into single pen-down strokes, so a crossed "t" becomes two strokes instead of four stubs.
- Orders the strokes to cut down on pen-up travel, and previews the result before anything is plotted.
- Works with servo, Z-axis and Marlin pen lifts, so it runs on dedicated plotters as well as 3D printers.

I use it to plot handwritten notes onto cards.
