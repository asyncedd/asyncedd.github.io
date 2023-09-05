# Some notes

## TODO

### HIGH

- [x] Make everything more responsive

#### [ ] RESPONSIVENESS

##### [ ] Navbar

PRIORITY: LOW
DESCRIPTION: The navbar is relatively responsive

- [_] Maybe hide buttons when x width?
  NOTES: We don't need it since we have only two buttons tbh

### FEATURES

#### [ ] Bento

PRIORITY: HIGH
DESCRIPTION: Add a skills/hobbies/tools page

- [ ] Add a **skills** section
- [ ] Add a **hobbies** section
- [ ] Add a **tools** section

#### Gen

##### Typewriter

PRIORITY: LOW
DESCRIPTION: Use Svelte's built-in stuff for the animation

- [x] Use the Svelte/animation library for the typewriter animations

### PERF

- [x] Improve perf

#### [x] Website

PRIORITY: LOW
DESCRIPTION: The website is relatively responsive

- [x] Improve performance

#### [x] Navbar

PRIORITY: HIGH
DESCRIPTION: The navbar has a hell ton of elements

- [x] Remove unneeded elements

##### [x] Text

PRIORITY: LOW
DESCRIPTION: The text takes a few milliseconds or nanoseconds to "load" on the build version w/ Firefox

- [x] Play around with text compression like gzip
- [x] Fix the text-loading on Firefox

##### [_] img

PRIORITY: HIGH
DESCRIPTION: It's low res and slow on the dev version

- [x] Improve the resolution
- [x] Properly size images
- [x] Increase the cache duration
      Looks to be impossible since GitHub pages sucks.
- [x] Use a CDN

### UnoCSS

##### [_] Use UnoCSS

**SCRAPPED**
PRIORITY: HIGH
DESCRIPTION: Use UnoCSS

### LOW

#### [_] Hackerman

##### Ideas

PRIORITY: LOW
DESCRIPTION: This is relatively stable at this point

- [x] Animate on page load? That'll be cool :)
- [_] We could incorporate GSAP too!

##### PERF

PRIORITY: LOW
DESCRIPTION: The performance is pretty good

- [_] Optimize the randomizer
  Not needed since random-ness doesn't matter here.
- [x] Refactor more
