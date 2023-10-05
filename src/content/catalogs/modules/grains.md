---

id: grains
title: "GRAINS"
link: "https://www.tangiblewaves.com/store/p86/GRAINS.html"
imglink: GRAINS_V2.png
---




GRAINS is a programmable multipurpose module that has first been developed by [Ginkosynthese](https://www.ginkosynthese.com/) for Eurorack. The AE Modular version is 100% compatible with the source code for the original, but there are a few added features. It is based on the Atmega 328 micro controller, well known as the core of the Arduino Uno, Nano and other boards, and can act as a granular sound player as well as different other functions depending on the firmware. It can be programmed directly by the Arduino IDE via the integrated USB socket on the front side of the module via the included USB cable.

The newer revision of this module has a switch to enable the use of the open source [Mozzi Library](https://sensorium.github.io/Mozzi/) which makes programming much easier.

The module comes with the WAVEGRAINS firmware pre-installed which is a wavetable oscillator that is immediately useful. However you can install other firmware quite easily as described below.

Module power consumption: 12 mA

## Inputs

*   **IN1** - accepts a CV signal
*   **2** - accepts a CV signal
*   **3** - accepts a CV signal
*   **A** - accepts an audio signal (this is a new feature of the AE Grains and isn't available on the original Eurorack module)

## Outputs

*   **OUT** - This is an audio signal direct from the PWM output pin of the Atmega chip running through a lowpass filter
*   **D** - This is a digital signal that can be used for triggers, etc. (this is also a new feature and does not exist on the original Eurorack module)
*   **MULT** - unbuffered multiple, unconnected from the module's circuitry

Bus outputs on the left hand bank of sockets.

*   **Bus CV** - CV signal from MIDI
*   **Bus CTRL** - Gate signal from MIDI
*   **Bus Gate** - Gate signal from MIDI

## Controls

*   **Pot Level 1** - depending on switch 1 attenuate signal from IN1 or select CV level between 0-5V
*   **Switch IN1/MAN** - switch between attenuating signal from IN1 or issue CV between 0-5V (the original Eurorack module does not have this switch)
*   **Pot Level 2** - depending on switch 2 attenuate signal from IN2 or select CV level between 0-5V
*   **Switch IN2/MAN** - switch between attenuating signal from IN2 or issue CV between 0-5V (the original Eurorack module does not have this switch)
*   **Pot Level 3** - select CV level between 0-5V

**Please note: IN 3 and Pot 3 are not related to each other, they are completely independent!**

## Mode-Switch

*   **Switch M/G** - Selects the internal audio-out pin, use 'M' for 'Mozzi mode' or 'G' for 'Ginkosynthese / original Grains mode' - Depending on the Firmware used, GRAINS may use the one or the other output option! (If you should experience silence at the output, when not expecting it, please make sure to try out the other option as well.)

**Please note: With the first revision of GRAINS this switch is missing, the setting there is equivalent to 'G'!**

## How to install other Firmwares

You can easily install different firmwares on to the GRAINS module or even develop your own programs!

The following firmwares are currently available from the [Ginkosynthese website](https://www.ginkosynthese.com/grains-codes):

*   **GRAINS** - The first code written for the GRAINS, an FOF synthesis oscillator
*   **ROUNDHOUSE** - Kick drum based on the 909 with some tweaks
*   **FRAMEN** - A cut up amen break
*   **TALKO-COUNTER** - Let your GRAINS count like a Speak&math
*   **TRI-SHAPE** - An oscillator based on the supersaw
*   **RZ1** - Crazy lo-fi drums based on the Casio RZ1
*   **EURO PWM SAW** - A supersaw oscillator to bring you back to the 90's
*   **FRESH** - A sample used in many classics, your GRAINS will say FRESH!
*   **FALAFEL RAPS** - A famous rap sample to mangle into crazy glitch-hop
*   **WAVEGRAINS** - A wavetable oscillator

**IMPORTANT** Those firmwares only work in the "GRAINS" mode, so the top right switch needs to be on "G".

To install those firmwares on the module you need to follow these steps:

*   Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software)
*   Download and install the [driver software for the CH340 USB chip](https://sparks.gogo.co.nz/ch340.html) (you may not need it if you are running the latest version of OSX)
*   Open the Arduino IDE and make sure that under Tools/Board you have selected Arduino Nano
*   Make sure under Tools/Processor you have selected "ATmega328P"
*   Download a firmware from the [Ginkosynthese website](https://www.ginkosynthese.com/grains-codes)
*   Connect the included USB cable between the GRAINS module and your PC

![](/images/grains_schematics_v2.png)

The firmware codes from the Ginkosynthese website are mostly single files with the ending .ino which means that they are Arduino sketches. You can open them in the Arduino IDE by double clicking on the filename.

Once you have the file open in the Arduino IDE you can upload them to the GRAINS module by clicking the Upload icon (depicted as an arrow pointing right).

Once the IDE shows that upload is complete you can disconnect the USB cable and use the GRAINS module with the new firmware.

## Developing your own Firmware

Using the existing codes as example you can either make changes to them or develop your own firmware from scratch. The following diagram shows how you can access the various inputs, outputs and controls from within your code:

![](/images/ide-board.png)

**WARNING** It is possible to "brick" your GRAINS with certain operations when you develop and test your own firmware programs! This has happened once and you can find how that happened and how it was resolved in this [thread on the forum](https://forum.aemodular.com/thread/1858/serialport-show-anymore-brick-grains).

## Patch examples

This video explains the module in more detail and has some patch examples for various firmwares. [https://youtu.be/qpniMuq--M8](https://youtu.be/qpniMuq--M8)

There is a section on the forum dedicated to discussing programming this module:-

[https://forum.aemodular.com/board/24/programming-grains](https://forum.aemodular.com/board/24/programming-grains)

Community Firmwares
-------------------

This code repository contains various firmwares that have been developed specifically for the AE Modular GRAINS module. This has started with the work by German author and software developer Mathias aka @visuellemusik. We encourage you to analyse the code and post your own firmware which we would add to this growing repository. With V2 of GRAINS building your own firmware using the Mozzi Library is possible now, too. With such a firmware the Mode-Switch as explained above and also symbolized in the schematics has to be set to 'M'. Please be aware that some versions of the Mozzi-Library did not work as expected in combination with certain versions of the Arduino IDE. An overview of recommended combinations of the two environments, including prereleases of Mozzi can be found here: [https://github.com/sensorium/Mozzi/releases](https://github.com/sensorium/Mozzi/releases)

[https://github.com/aemodular/GRAINS](https://github.com/aemodular/GRAINS)

You can download each firmware as an individual zip file or the whole lot from the [Release Page](https://github.com/aemodular/GRAINS/releases).

This video explains how the [ByteBeat-Xfade](https://github.com/aemodular/GRAINS/tree/master/ByteBeat-Xfade) firmware works followed by a little improvised jam. [https://youtu.be/Wokre1i8Trg](https://youtu.be/Wokre1i8Trg)

And this video explains the workings of the SpellOrSpeak firmware, also developed by Mathias. [https://youtu.be/a1aS6E0b0Fk](https://youtu.be/a1aS6E0b0Fk)

Wonkystuff
----------

This is a new firmware developed by Wonkystuff which brings a Karplus Strong algorithm to the GRAINS module. You can find the code here on Github:

[https://github.com/wonkystuff/ks\_grains](https://github.com/wonkystuff/ks_grains)

And this was discussed on the forum here:

[https://forum.aemodular.com/thread/1608/karplus-strong-synthesis](https://forum.aemodular.com/thread/1608/karplus-strong-synthesis)

Another cool firmware is the Poly Ramp drone oscillator which you can find here:

[https://github.com/wonkystuff/grains\_polyramp](https://github.com/wonkystuff/grains_polyramp)





