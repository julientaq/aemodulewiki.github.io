---

id: triq164
title: "TRIQ164"
link: "https://www.tangiblewaves.com/store/p52/TRIQ164.html"
imglink: triq164.png
---


[View Product Page](https://www.tangiblewaves.com/store/p52/TRIQ164.html)

TRIQ164 is designed as improved replacement for the STEP10.

TRIQ164 is a 4-track trigger sequencer. It can have a maximum of 16 steps and all tracks have to be the same length. All 4 run in sync but a single track is on the front panel at any one time, switched by the Track buttons. A trigger sequence means it cannot generate CVs for, e.g., pitch but does a +5V pulse when a step is selected to be active. Excellent for controlling percussion sounds, e.g. Drumkit 010 module.

Width: 2U

Module power consumption: 6 mA

### Inputs

*   **CLK** - accepts trigger to advance one step
*   **RESET** - go back to step 1
*   **MUTE1** - accept gate to mute OUT 1. Mutes signal when input is HIGH.
*   **MUTE2** - accept gate to mute OUT 2. Mutes signal when input is HIGH.
*   **REPEAT CV** - control voltage for adding repeated triggers within one step, please see **repeat** knob below.

### Outputs

*   **OUT \[1-4\]** - outputs for each track. The value is given by the current step of the corresponding track.
*   **\[1-16\]** - trigger output for each step of the **currently selected track only**. _NOTE: Repeats are not available through these outputs_
*   **B. CLK** - MIDI clock via the Master module
*   **B. START** - +5V trigger pulse when MIDI START is sent from external equipment, via the Master module.
*   **B. STOP** - +5V trigger pulse when MIDI STOP is sent from external equipment, via the Master module.

### Controls

*   **TRACK Buttons \[1-4\]** - select the track to be edited. The LED by each track button represents the output signal of that track, i.e. steady on LED means that track is selected. When that numbered track has a trigger on that step of the sequence, it will flash. Also makes the individual step outputs available
*   **STEP Buttons \[1-16\]** - activate/deactivate steps in the **current track only**. The LED by each step button indicates if the step is active (ON) or inactive (OFF) in the **current track only**. _NOTICE: The same step my have different values in different tracks_
*   **RESET Button** - resets the sequences (jump to step 1)
*   **REPEAT Knob** - select the number of repeated triggers within one step, (i.e. ratcheting). From no repeats (turned all the way to the left) to 8 repeats (turned all the way to the right). To assign a step to repeat, hold the track button and push the step(s) you want to have in repeat mode. You must turn the knob to the right to get repeats on the assigned step(s), or put a voltage on the repeat CV in. If the knob is at zero position and you have no CV you will not get any repeats.

### Patch Suggestions

For sequences shorter than 16 steps, connect a step output to RESET. For example, if you want a 4-step sequence, connect STEP OUTPUT PIN 5 to RESET.

You can use a TRIQ164 channel to trigger the clock on the [SEQ16](https://wiki.aemodular.com/pmwiki.php/AeManual/SEQ16) or [SEQ8](https://wiki.aemodular.com/pmwiki.php/AeManual/SEQ8) modules so you can do different rhythms/ time signatures with them around your master tempo clock going into the TRIQ164.

As with all AE modules, it can be "abused" - (AE does stand for Abused electronics!), with a high clock rate it can become an audio FX generator or processor. please see the thread on the forum

[https://forum.aemodular.com/thread/1595/triq164-module?page=1&scrollTo=13144](https://forum.aemodular.com/thread/1595/triq164-module?page=1&scrollTo=13144)

Here is a video by [The 5th Volt](https://wiki.aemodular.com/pmwiki.php/User/The5thVolt) which explains how to use the TRIQ164: [https://youtu.be/HrwxXI29Ack](https://youtu.be/HrwxXI29Ack)

[![](/images/th00---triq164.png.jpg)](https://wiki.aemodular.com/uploads/AeManual/TRIQ164/triq164.png "triq164")

[<-- Back to the Module Index](https://wiki.aemodular.com/pmwiki.php/AeManual/Modules)

This manual is a community work in progress. If you would like to help out with completing this manual please send a PM to @admin at the [AE Modular Forum](http://forum.aemodular.com). The status of each page can be seen on the Trello board at [https://trello.com/b/HNd0dBt7/ae-manuals](https://trello.com/b/HNd0dBt7/ae-manuals)