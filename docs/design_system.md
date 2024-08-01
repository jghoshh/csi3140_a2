# Design System

The following document defines the design system for Assignment 2.

**Authors:** 
- Jay Ghosh (300243766) 
- Noah Do Rego (300234846)

## Font

### Primary Typeface

- **Name:** Noto Sans
- **Type:** Sans-Serif
- **Usage:** Used as the main, base font across the platform for all text elements, providing a clean, uniform look. 

### Fallback

- **Type:** System Default Sans-Serif font
- **Condition:** Applied when Noto Sans is unfetchable.
- **Purpose:** Ensures that text remains readable and stylistically consistent, even if the primary typeface cannot be loaded.

### Typography Settings

The following are the specific font sizes used for various text elements within our game. 
#### Headers

- **Main Heading (`<h1>`)**: `2rem`
  - Used for the main game title on the main page.
- **Secondary Heading (`<h2>`)**: `1.4rem`
  - Used for displaying the author names on the main page after the main game title.
- **Tertiary Heading (`<h3>`)**: `1.1rem`
  - Used for displaying supporting information after the main game title and author names on the main page.

#### Body Text
- **Paragraph (`<p>`)**: `1rem`
  - The standard text size used for body text.

## Colours

### Primary Color
- **Hex:** `#fffbdc`

This color is used for the page.

### Secondary Color
- **Hex:** `#ffe341`

This color is used for the board.

### Primary Text Color
- **Hex:** `#333333`

This color is used for all text in the application.

## Components

### Header

The header of the application serves as the primary introduction to the game and introduces the authors.

#### Structure

The header component is structured as follows:

```html
<header id="section-aligner">
    <h1>CSI3140 A2 - 1D Pacman</h1>
    <h3>By: Noah Do Rego and Jay Ghosh</h3>
    <h3>Press the left and right arrow keys to move pacman and play.</h3>
</header>
```

### Body

The body is the core component of the application that contains the game board and score. The ```<p>``` elements with the ```board``` and  ```score``` ids are manipulated by JavaScript to enable gameplay.


#### Structure
```html
<body>
    <header  id="header" class="section-aligner">
      ...
    </header>
    <section id="main-section">
      <p id="board"></p>
      <br />
      <h2 id="score"></h2>
    </section>
    <footer id="section-aligner">
      ...
    </footer>
    <script src="pacman.js"></script>
</body>
```

### Board

The board is simply a ```<p>``` element to which we apply custom JavaScript manipulations to make interactive and *"playable"*.

#### Structure
```html
...
<body>
  ...
    <p id="board"></p>
  ...
</body>
```

### Scoreboard

The Scoreboard is simply a ```<p>``` element to which we apply custom JavaScript manipulations to make interactive.

#### Structure
```html
...
<body>
  ...
    <p id="score"></p>
  ...
</body>
```


### Footer

The footer defines standards and copyright on the application and cites the authors' social profiles.

#### Structure

The footer component is structured as follows:

```html
<footer class="section-aligner">
    <p>Copyright &copy; 2024 Jay Ghosh & Noah Do Rego</p>
    <p>Connect with us on:
        <a href="https://www.linkedin.com/in/noah-do-rego//">Noah's Linkedin</a>,
        <a href="https://www.linkedin.com/in/jayghosh25">Jay's Linkedin</a>
    </p>
</footer>
```

### Corrections

As per the TA's instructions, the fonts have changed to be one style, the colors have been changed to be more neutral and bright, and the footer has been placed at the bottom of the page.