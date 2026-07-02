# Auto-Rotating Slides Carousel

A simple, pure HTML/CSS/JavaScript carousel that automatically rotates slides every 10 seconds. Perfect for GitHub Pages!

## Features

✨ **No Dependencies** – Pure HTML, CSS, and JavaScript

🔄 **Auto-Rotation** – Slides change every 10 seconds

🎨 **Responsive Design** – Works on all screen sizes

⌨️ **Interactive** – Click dots to jump to specific slides

⏸️ **Hover to Pause** – Auto-rotation pauses on hover and resumes on mouse leave

## How to Use

1. Clone or download this repository
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Your carousel will be live at `https://yourusername.github.io/your-repo`

## Customization

### Change Slide Duration

Edit `script.js` and change this line:
```javascript
const interval = 10000; // Time in milliseconds (10000 = 10 seconds)
```

### Add More Slides

1. Add a new slide div in `index.html`:
```html
<div class="slides">
    <div class="slide-content" style="background: linear-gradient(...)">
        <h2>Your Slide Title</h2>
        <p>Your slide content</p>
    </div>
</div>
```

2. Add a dot indicator in the indicators section:
```html
<span class="dot" onclick="currentSlideIndex(X)"></span>
```
Replace `X` with the slide index (0-based)

### Use Images Instead of Gradients

Replace the slide-content div with:
```html
<img src="your-image.jpg" alt="Slide X" style="width: 100%; height: 100%; object-fit: cover;">
```

## Browser Support

Works on all modern browsers including:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## License

Free to use and modify for any purpose.
