---

id: wonkystuffrbss
title: "Wonkystuff RBSS"
link: "https://wonkystuff.net/product/rbss/"
imglink: RBSS.png
---


The rbss (random bit-shift sequencer) module is inspired by the famous "Turing Machine" Eurorack module by Music Thing Modular which in turn was inspired by many previous shift-register sequence generators.

When it is in stock, you can buy this module at [Wonkystuff](https://wonkystuff.net/product/rbss/).

**NOTE**: if you have an older rbss module of serial number lower than 130, then you might have issues using it with the QUANTIZER module from tangible waves. This is due to some noise that is output by the module which the digital QUANTIZER module can't quite process. If you have this problem, then you can easily fix this yourself if you know how to use a soldering iron. Please follow the instructions on this page: [https://wonkystuff.net/rbss-quantizer-issue/](https://wonkystuff.net/rbss-quantizer-issue/)

### Inputs

*   **clk in** - Every time there is a rising edge on the voltage in this input, the sequence shifts one step. This can be driven up to audio rates for some interesting noises!
*   **len cv** - The control voltage on this input is added to the control voltage from the front panel length control (so if the knob is fully clockwise, this voltage will have no effect)
*   **chance cv** - The control voltage on this input is added to the control voltage from the front panel chance control (so if the knob is fully clockwise, this voltage will have no effect)
*   **bus clk** - MIDI clock signal, via the master module.

### Outputs

*   **a out** (x3) - an audio-coupled output which will generate a pulse proportional to the difference in voltage between adjacent sequence steps;
*   **cv out** (x3) - a control voltage representing the current bit-shifted binary pattern;
*   **clk out** - a simple square clock signal

### Controls

*   **rate** - This changes the frequency of the clock pulse appearing at the clk out pin. (In order to trigger the rbss, the clk out must be connected to the clk in).
*   **chance** - this specifies the probability that the next step in the sequence will change voltage, from 0 (never) to 1 (always).
*   **length** - this is the number of steps that will be present in the sequence, from 1 to 16.

### Patch Suggestions

You the clk out to trigger other modules, e.g. [SEQ8](https://wiki.aemodular.com/pmwiki.php/AeManual/SEQ8) or [TRIP](https://wiki.aemodular.com/pmwiki.php/AeManual/TRIP) modules).

This video shows how you can use the RBSS together with the [SEQ16](https://wiki.aemodular.com/pmwiki.php/AeManual/SEQ16) to create long evolving sequences. [https://youtu.be/lQotLnLqgHA](https://youtu.be/lQotLnLqgHA)

This video demonstrates how to use the audio output of the RBSS. [https://youtu.be/apqzOGBofuc](https://youtu.be/apqzOGBofuc)

Here is an ambient patch that uses 3x RBSS modules. [https://youtu.be/T-sKgZNlKrM](https://youtu.be/T-sKgZNlKrM)

[![](/images/th00---RBSS.png.jpg)](https://wiki.aemodular.com/uploads/AeManual/WonkyStuffRBSS/RBSS.png "RBSS")

[<-- Back to the Module Index](https://wiki.aemodular.com/pmwiki.php/AeManual/Modules)

This manual is a community work in progress. If you would like to help out with completing this manual please send a PM to @admin at the [AE Modular Forum](http://forum.aemodular.com). The status of each page can be seen on the Trello board at [https://trello.com/b/HNd0dBt7/ae-manuals](https://trello.com/b/HNd0dBt7/ae-manuals)