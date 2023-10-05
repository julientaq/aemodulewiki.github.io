---

id: samplehold
title: "SAMPLE & HOLD"
link: "https://www.tangiblewaves.com/store/p18/SAMPLE%26HOLD.html"
imglink: samplehold.png
---




A module whose output voltage is set by "sampling" the input voltage when triggered. This is usually for producing random notes/modulation in conjunction with the [NOISE](https://wiki.aemodular.com/pmwiki.php/AeManual/NOISE) module.

There are 2 independent Sample & Hold circuits within this module.

Module power consumption: 2 mA

## Inputs

*   **In 1** - The source for where the voltage will be selected from.
*   **Trig 1** - For a pulse to tell the module to take the voltage reading of input 1 and send that value to output 1.
*   **In 2** - The source for where voltage will be selected from.
*   **Trig 2** - For a pulse to tell the module to take a reading from input 2 and send that value to output 2.

## Outputs

*   **Out 1** (2) - The voltage selected by In/Trig 1 is available here.
*   **Out 2** (2) - The voltage selected by In/Trig 2 is available here.
*   **Thru** (4) - On older modules marked **Mult** as a passive mixing/signal splitter as per many other AE Modules.

## Controls

This module has no performance controls.

## Patch Suggestions

This video describes how to use the SAMPLE&HOLD module and makes use of the [2ATTCV](https://wiki.aemodular.com/pmwiki.php/AeManual/2ATTCV) module for generating CVs:-

[https://youtu.be/NZVme2SNxXU](https://youtu.be/NZVme2SNxXU)

This is quite an old video so it doesn't suggest using the [QUANTIZER](https://wiki.aemodular.com/pmwiki.php/AeManual/QUANTIZER) module to make the pitch CVs match a key; with this, a sample & hold circuit can produce sequencer type CVs. Triggers can be from many modules including [TRIQ164](https://wiki.aemodular.com/pmwiki.php/AeManual/TRIQ164), [TOPOGRAF](https://wiki.aemodular.com/pmwiki.php/AeManual/TOPOGRAF) or [BEATDIVIDER](https://wiki.aemodular.com/pmwiki.php/AeManual/BEATDIVIDER)

Try using an [LFO](https://wiki.aemodular.com/pmwiki.php/AeManual/2LFO) instead of noise as the input source, quite handy for modulation but can be good to give a restricted random arpeggiator type sequence if used on the pitch of the VCO(s).

Using Noise, the Voltage variation is about the maximum the AE Modular can deal with, so use of some form of attenuation is usually needed - the [4ATTMIX](https://wiki.aemodular.com/pmwiki.php/AeManual/4ATTMIX), 2ATTCV or [Mixer 4-4 modules](https://wiki.aemodular.com/pmwiki.php/AeManual/MIXER44) can do this.

With attenuation, this module can be really good to give a bit of variation to a sequence by varying the filter on the sound - use the [2ATTCV](https://wiki.aemodular.com/pmwiki.php/AeManual/2ATTCV) module to combine the envelope and S&H outputs to the Filter module. It's also good on resonance on the [Nyle filter](https://wiki.aemodular.com/pmwiki.php/AeManual/NYLEFILTER). Use the same trigger as the sequence if you want to be in sync with that, and can change timing(s) with use of one of the logic or divider modules.

It can produce bit crusher style results when used to sample audio signals.





