# Fluent FTW
An open source project to bring Microsoft's Fluent Design System to the web

Fluent FTW currently consists of a CSS stylesheet and some snippets of vanilla JavaScript that can be added to any website. Over time the plan is to bring a more comprehensive selection of integrations such as building on top of Bootstrap and creating a WordPress Theme.

## Usage

### CSS
Add the below snippet to the `<head>` of your site to add the Fluent FTW CSS to your site

`https://raw.githubusercontent.com/MichaelGillett/FluentFTW/master/dist/css/fluent.css`

### JavScript
Add the below snippet to the bottom of the `<body>` of your site to add the Fluent FTW JS to your site

`https://raw.githubusercontent.com/MichaelGillett/FluentFTW/master/dist/js/fluent.js`

## Current Features

- Acrylic
- Parallax
- Buttons (including Reveal)
- Drop Shadow

## Want to contribute?
We are accepting Pull Request for Fluent FTW so if you have additions to make, suggestions for improvements or requests for additional features then please get involved.

## Documentation
### Acrylic
Acrylic can be applied to any element with just a CSS class. There are three "thicknesses" to Acrylic

#### Default Acrylic
The default Acrylic effect of Fluent FTW

`<div class="acrylic">...</div>`

#### Medium Acrylic
A thicker version of Acrylic

`<div class="acrylic medium">...</div>`

#### Thick Acrylic
A thickest version of Acrylic

`<div class="acrylic thick">...</div>`

### Buttons
There are a number of CSS button types available within Fluent FTW:

- Default
- Secondary
- Square

There is also a JavaScript Reveal effect that can be applied to the Default and Square type buttons

#### Default Button
The default button of Fluent FTW. It has rounded corners and when hovered over the color changes and there is a dropshadow

`<a class="button" href="/">Default button</a>`

#### Secondary Button
The secondary button of Fluent FTW. It is just text and when hovered over there is an underline

`<a class="button secondary" href="/">Secondary button</a>`

#### Square Button
The square button of Fluent FTW is like the default button but has square corners

`<a class="button square" href="/">Square button</a>`

#### Default Button with Reveal effect
The reveal effect can be added to a default or square button. When the cursor is near the button the edges will highlight in relation to the cursor. When hovered over all the edges are highlighted with an emphasis around where the cursor is

`<a class="button reveal" href="/">Default button with Reveal</a>`

### Parallax
To enable the Parallax affect the fluent.js script needs to be added to the page, a class needs to be applied to an element and the element needs a background image

#### Default Parallax
The default parallax behaviour of Fluent FTW.

`<div class="parallax" style="background-image: url(image.jpg">...</div>`

#### Change the speed of Parallax
The parallax behaviour of Fluent FTW can be set to have a different speed by setting an attribute on the element. The default speed is 2, setting it to 1 will increase the speed and setting it to anything greater than 2 will slow it down

`<div class="parallax" style="background-image: url(image.jpg)" data-parallax-speed="3">...</div>`

### Drop Shadow
The Drop Shadow effect can be added to any element with a CSS class.

#### Default Drop Shadow
The default depth of the dropshadow effect

`<div class="dropshadow">...</div>`

#### Change the depth of the Drop Shadow
The dropshadow effect of Fluent FTW can be set to have a different depth by adding addition CSS classes to the element. There are 5 depths beyond the default one:

- depth-1
- depth-2
- depth-3
- depth-4
- depth-5

`<div class="dropshadow depth-1">...</div>`