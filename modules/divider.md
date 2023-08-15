---

id: divider
title: "DIVIDER"
link: "https://www.tangiblewaves.com/store/p37/DIVIDER.html"
imglink: divider.png
---




This module is discontinued. The Beat Divider does a similar role. The MM Divider is its more versatile direct replacement in a lot of ways, but this divider is well worth keeping, as it is a simpler device for beats, and also can be used on audio signals with great results.

### Inputs

*   **CLK** - the clock signal you want to reduce with this module.
*   **Reset** - this input is used to reset the divider module to keep in sync with the provided clock.

### Outputs

These 4 are on the left, usually input side of the module.

*   **Bus CLK** - Midi clock from a connected Midi device (via the Master module). erroneously labelled **Bus Gate** on some modules (as illustrated)
*   **Bus Start** - +5V pulse when a connected Midi device start key is pressed.
*   **Bus Stop** - +5V pulse when a connected Midi device stop key is pressed.
*   **Bus Ctrl** - a CV based on Midi controller No. 20 (CC20) of a connected Midi device.

On the right side of the module:-

*   **1** - a straight copy of the input.
*   **2** - a half speed copy of the input.
*   **4** - a quarter speed copy of the input
*   **8** - output is an eighth the speed of the input.
*   **16** - output is a sixteenth of the speed of the input.
*   **32** - output is a 32nd the speed of the input.
*   **64** - output is a 64th the speed of the input.
*   **128** - output is a pulse for every 128 pulses of the input.

### Controls

None.

### Patch Suggestions

The most obvious is to reduce the 24 pulses per quarter note of the midi clock signal down to something more useful for triggers within the AE modular. You will need the Midi clock from an external source via the Master module.

Please see the other divider modules for further ideas





