---

id: heartbeat
title: "HEARTBEAT"
link: "https://www.tangiblewaves.com/store/p157/HEARTBEAT.html"
imglink: HEARTBEAT.png
---


[View Product Page](https://www.tangiblewaves.com/store/p157/HEARTBEAT.html)

*   Power consumption: 14 mA
*   Module width: 1U

### Inputs

*   **CLK** - Used to input an external clock source, (e.g. midi from BUS CLK) if needed.
*   **Reset** - ?
*   **CV1** - Assignable input for a control voltage.
*   **CV2** - Assignable input for a control voltage.
*   **Trig 1** - Assignable input for a trigger pulse.
*   **Trig 2** - Assignable input for a trigger pulse.

The assignable inputs are set by their page in the menu.

### Outputs

*   **BUS GATE** - this output gives a +5V signal as long as a key on Midi keyboard, attached via the master module, is held down.
*   **1** (x2) - Envisaged as the main clock out, the clock division is set in the menu.
*   **2** (x2) - With 2 sockets, 2 is envisaged as the next most used output. The clock division is set in the menu.
*   **3** to **6** inclusive - Each is a separate clock out that can be individually set to what clock division in the menu.

### Controls

*   **TEMPO** (Encoder) - press and hold to access the menu, and adjust parmeters. Otherwise can be used to alter the tempo of the master clock.
*   **START/STOP** (button) - controls the master clock.
*   **TAP** (button) - this can set the desired tempo by repeated quick presses, (taps); useful for matching to non-midi music.

### Display

*   **1** to **6** inclusive - these leds pulse in time of the relevant clock signal being output.

The main OLED display shows the temp on normal operation, and also displays the menu parameters when the **Tempo** knob is held down.

### Patch Ideas

Via the use of the external input, this module could be used to divide the midi clock into something more useful for the AE. There is a specific module for this however, the [Midiclock Divider](https://wiki.aemodular.com/pmwiki.php/AeManual/BEATDIVIDER). This frees up the Heartbeat to be the master clock for any attached sequencers etc. You may want to take an output from the Midiclock divider into the Heartbeat as well.

The use of a master clock that gives up to 6 different outputs means you could have up to 6 different rhythms/patterns in your drum sounds, sequencers etc.

There is an extender module which gives the use more possibilities:-

[https://wiki.aemodular.com/pmwiki.php/AeManual/HEARTBEATEXTENDER](https://wiki.aemodular.com/pmwiki.php/AeManual/HEARTBEATEXTENDER)

[![](/images/th00---HEARTBEAT.png.jpg)](https://wiki.aemodular.com/uploads/AeManual/HEARTBEAT/HEARTBEAT.png "HEARTBEAT")

[<-- Back to the Module Index](https://wiki.aemodular.com/pmwiki.php/AeManual/Modules)

This manual is a community work in progress. If you would like to help out with completing this manual please send a PM to @admin at the [AE Modular Forum](http://forum.aemodular.com). The status of each page can be seen on the Trello board at [https://trello.com/b/HNd0dBt7/ae-manuals](https://trello.com/b/HNd0dBt7/ae-manuals)