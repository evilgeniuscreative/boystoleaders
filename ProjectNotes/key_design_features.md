# BoysToLeaders.com SCSS Theme

Here's a comprehensive SCSS theme system that creates a friendly, engaging aesthetic while maintaining a structure that's easily maintainable as the project grows:

```scss
// _variables.scss - Core design system variables

// Color System
$colors: (
  // Primary brand colors
  primary: (
    base: #2465e9,
    light: #4a85ff,
    dark: #1a4ba8,
  ),
  // Secondary accent colors
  secondary: (
    base: #33c16f,
    light: #5bd991,
    dark: #259a53,
  ),
  // Supporting accent colors
  accent: (
    orange: #ff7b29,
    purple: #8864f0,
    teal: #29b6c5,
    yellow: #ffcb45,
  ),
  // Grays for text and UI elements
  gray: (
    100: #f7f9fc,
    200: #e9ecf2,
    300: #d0d6e1,
    400: #a0a8b9,
    500: #6e7689,
    600: #4d5362,
    700: #363c4a,
    800: #1f242f,
    900: #121722,
  ),
  // Functional colors
  feedback: (
    success: #2bb67b,
    warning: #ffc555,
    error: #e94444,
    info: #3b93f7,
  ),
);

// Typography
$fonts: (
  heading: ('Montserrat', sans-serif),
  body: ('Open Sans', sans-serif),
  accent: ('Poppins', sans-serif),
);

$font-sizes: (
  xs: 0.75rem,   // 12px
  sm: 0.875rem,  // 14px
  base: 1rem,    // 16px
  md: 1.125rem,  // 18px
  lg: 1.25rem,   // 20px
  xl: 1.5rem,    // 24px
  xxl: 1.875rem, // 30px
  xxxl: 2.25rem, // 36px
  hero: 3rem,    // 48px
);

$font-weights: (
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
);

// Spacing
$spacing: (
  xs: 0.25rem,  // 4px
  sm: 0.5rem,   // 8px
  md: 1rem,     // 16px
  lg: 1.5rem,   // 24px
  xl: 2rem,     // 32px
  xxl: 3rem,    // 48px
  xxxl: 4rem,   // 64px
);

// Responsive breakpoints
$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px,
);

// Animation
$transitions: (
  fast: 150ms ease-in-out,
  base: 250ms ease-in-out,
  slow: 350ms ease-in-out,
);

// Borders
$border-radius: (
  sm: 0.25rem,   // 4px
  md: 0.5rem,    // 8px 
  lg: 0.75rem,   // 12px
  xl: 1rem,      // 16px
  pill: 50rem,   // Pill shape
  circle: 50%,   // Perfect circle
);

// Shadow levels
$shadows: (
  sm: 0 2px 4px rgba(18, 23, 34, 0.08),
  md: 0 4px 8px rgba(18, 23, 34, 0.12),
  lg: 0 8px 16px rgba(18, 23, 34, 0.16),
  xl: 0 12px 24px rgba(18, 23, 34, 0.2),
);

// Z-index layers
$z-layers: (
  base: 1,
  content: 10,
  navigation: 100,
  overlay: 200,
  modal: 300,
  tooltip: 400,
);

// _mixins.scss - Reusable patterns and utilities

@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  } @else {
    @error "Unknown breakpoint: #{$breakpoint}.";
  }
}

@mixin flex($direction: row, $justify: flex-start, $align: stretch, $wrap: nowrap) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
  flex-wrap: $wrap;
}

@mixin card($padding: md, $radius: md, $shadow: md) {
  padding: map-get($spacing, $padding);
  border-radius: map-get($border-radius, $radius);
  box-shadow: map-get($shadows, $shadow);
  background-color: white;
}

@mixin achievement-badge($size: 4rem, $color: primary) {
  width: $size;
  height: $size;
  border-radius: map-get($border-radius, circle);
  background: radial-gradient(circle, 
    lighten(map-get(map-get($colors, $color), base), 20%) 0%, 
    map-get(map-get($colors, $color), base) 100%);
  @include flex(row, center, center);
  box-shadow: map-get($shadows, md);
  transition: transform map-get($transitions, fast);
  
  &:hover {
    transform: scale(1.05);
  }
}

@mixin progress-bar($height: 0.75rem, $color: primary, $background: gray) {
  height: $height;
  border-radius: map-get($border-radius, pill);
  background-color: map-get(map-get($colors, $background), 200);
  overflow: hidden;
  
  .progress-fill {
    height: 100%;
    background-color: map-get(map-get($colors, $color), base);
    border-radius: map-get($border-radius, pill);
    transition: width map-get($transitions, base);
  }
}

// Main component styles

// buttons.scss
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: map-get($spacing, sm) map-get($spacing, lg);
  font-family: map-get($fonts, body);
  font-weight: map-get($font-weights, medium);
  font-size: map-get($font-sizes, base);
  border-radius: map-get($border-radius, md);
  transition: all map-get($transitions, fast);
  border: none;
  cursor: pointer;
  text-decoration: none;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(map-get(map-get($colors, primary), base), 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  // Button variants
  &.btn-primary {
    background-color: map-get(map-get($colors, primary), base);
    color: white;
    
    &:hover {
      background-color: map-get(map-get($colors, primary), dark);
    }
  }
  
  &.btn-secondary {
    background-color: map-get(map-get($colors, secondary), base);
    color: white;
    
    &:hover {
      background-color: map-get(map-get($colors, secondary), dark);
    }
  }
  
  &.btn-outline {
    background-color: transparent;
    border: 2px solid map-get(map-get($colors, primary), base);
    color: map-get(map-get($colors, primary), base);
    
    &:hover {
      background-color: rgba(map-get(map-get($colors, primary), base), 0.1);
    }
  }
  
  // Button sizes
  &.btn-lg {
    padding: map-get($spacing, md) map-get($spacing, xl);
    font-size: map-get($font-sizes, lg);
  }
  
  &.btn-sm {
    padding: map-get($spacing, xs) map-get($spacing, md);
    font-size: map-get($font-sizes, sm);
  }
  
  // Icon buttons
  &.btn-icon {
    @include flex(row, center, center);
    gap: map-get($spacing, sm);
    
    svg {
      width: 1.25em;
      height: 1.25em;
    }
  }
}

// cards.scss
.card {
  @include card(md, md, md);
  transition: transform map-get($transitions, base);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: map-get($shadows, lg);
  }
  
  .card-header {
    margin-bottom: map-get($spacing, md);
    
    h3 {
      font-family: map-get($fonts, heading);
      font-weight: map-get($font-weights, semibold);
      color: map-get(map-get($colors, gray), 800);
      margin-bottom: map-get($spacing, xs);
    }
  }
  
  &.challenge-card {
    border-left: 4px solid map-get(map-get($colors, accent), purple);
  }
  
  &.achievement-card {
    border-left: 4px solid map-get(map-get($colors, accent), orange);
  }
  
  &.mentorship-card {
    border-left: 4px solid map-get(map-get($colors, accent), teal);
  }
}

// dashboard.scss
.dashboard-container {
  @include flex(column, flex-start, stretch);
  gap: map-get($spacing, xl);
  padding: map-get($spacing, lg);
  
  @include respond-to(md) {
    padding: map-get($spacing, xl);
  }
  
  .dashboard-welcome {
    @include flex(column, center, flex-start);
    
    h1 {
      font-family: map-get($fonts, heading);
      font-weight: map-get($font-weights, bold);
      font-size: map-get($font-sizes, xxl);
      color: map-get(map-get($colors, gray), 900);
      margin-bottom: map-get($spacing, xs);
    }
    
    .level-indicator {
      font-family: map-get($fonts, accent);
      font-weight: map-get($font-weights, medium);
      color: map-get(map-get($colors, primary), base);
      font-size: map-get($font-sizes, md);
      padding: map-get($spacing, xs) map-get($spacing, md);
      background-color: rgba(map-get(map-get($colors, primary), base), 0.1);
      border-radius: map-get($border-radius, pill);
    }
  }
  
  .dashboard-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: map-get($spacing, lg);
    
    @include respond-to(lg) {
      grid-template-columns: 3fr 1fr;
    }
  }
}

// progress-tracker.scss
.progress-tracker {
  @include card(lg, lg, md);
  
  .progress-header {
    @include flex(row, space-between, center);
    margin-bottom: map-get($spacing, md);
    
    h2 {
      font-family: map-get($fonts, heading);
      font-weight: map-get($font-weights, semibold);
      font-size: map-get($font-sizes, xl);
      color: map-get(map-get($colors, gray), 800);
    }
  }
  
  .progress-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: map-get($spacing, md);
    margin-bottom: map-get($spacing, lg);
    
    .stat-card {
      @include flex(column, center, center);
      background-color: map-get(map-get($colors, gray), 100);
      padding: map-get($spacing, md);
      border-radius: map-get($border-radius, md);
      text-align: center;
      
      .stat-value {
        font-family: map-get($fonts, accent);
        font-weight: map-get($font-weights, bold);
        font-size: map-get($font-sizes, xxl);
        color: map-get(map-get($colors, primary), base);
        margin-bottom: map-get($spacing, xs);
      }
      
      .stat-label {
        font-family: map-get($fonts, body);
        font-weight: map-get($font-weights, medium);
        font-size: map-get($font-sizes, sm);
        color: map-get(map-get($colors, gray), 600);
      }
      
      &.streak-stat {
        .stat-value {
          color: map-get(map-get($colors, accent), orange);
        }
      }
    }
  }
  
  .level-progress {
    margin-bottom: map-get($spacing, lg);
    
    .progress-label {
      @include flex(row, space-between, center);
      margin-bottom: map-get($spacing, sm);
      
      .current-level {
        font-family: map-get($fonts, body);
        font-weight: map-get($font-weights, medium);
        font-size: map-get($font-sizes, sm);
        color: map-get(map-get($colors, gray), 700);
      }
      
      .next-level {
        font-family: map-get($fonts, body);
        font-weight: map-get($font-weights, regular);
        font-size: map-get($font-sizes, sm);
        color: map-get(map-get($colors, gray), 500);
      }
    }
    
    .progress-bar-container {
      @include progress-bar(0.75rem, primary, gray);
    }
  }
}

// achievements.scss
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: map-get($spacing, md);
  margin-top: map-get($spacing, lg);
  
  .achievement-card {
    @include flex(column, center, center);
    padding: map-get($spacing, md);
    border-radius: map-get($border-radius, md);
    background-color: white;
    box-shadow: map-get($shadows, sm);
    transition: all map-get($transitions, base);
    text-align: center;
    cursor: pointer;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: map-get($shadows, md);
    }
    
    .achievement-icon {
      @include achievement-badge(4rem, primary);
      margin-bottom: map-get($spacing, sm);
    }
    
    &.locked {
      .achievement-icon {
        background: radial-gradient(circle, 
          map-get(map-get($colors, gray), 300) 0%, 
          map-get(map-get($colors, gray), 400) 100%);
        opacity: 0.5;
      }
      
      h3 {
        color: map-get(map-get($colors, gray), 500);
      }
    }
    
    h3 {
      font-family: map-get($fonts, heading);
      font-weight: map-get($font-weights, medium);
      font-size: map-get($font-sizes, sm);
      color: map-get(map-get($colors, gray), 800);
      margin-bottom: map-get($spacing, xs);
    }
    
    .achievement-date {
      font-family: map-get($fonts, body);
      font-size: map-get($font-sizes, xs);
      color: map-get(map-get($colors, gray), 500);
    }
  }
}

// relationships-module.scss
.relationships-module {
  @include card(xl, lg, lg);
  
  .module-header {
    text-align: center;
    margin-bottom: map-get($spacing, xl);
    
    h1 {
      font-family: map-get($fonts, heading);
      font-weight: map-get($font-weights, bold);
      font-size: map-get($font-sizes, xxxl);
      color: map-get(map-get($colors, gray), 900);
      margin-bottom: map-get($spacing, sm);
    }
    
    .module-description {
      font-family: map-get($fonts, body);
      font-size: map-get($font-sizes, md);
      color: map-get(map-get($colors, gray), 600);
      max-width: 600px;
      margin: 0 auto map-get($spacing, lg);
    }
    
    .module-progress-bar {
      @include progress-bar(0.5rem, secondary, gray);
      max-width: 600px;
      margin: 0 auto;
      
      .progress-text {
        display: block;
        text-align: right;
        font-size: map-get($font-sizes, sm);
        color: map-get(map-get($colors, gray), 500);
        margin-top: map-get($spacing, xs);
      }
    }
  }
  
  .module-tabs {
    @include flex(row, center, center);
    list-style: none;
    padding: 0;
    margin: 0 0 map-get($spacing, xl);
    
    li {
      padding: map-get($spacing, sm) map-get($spacing, lg);
      font-family: map-get($fonts, accent);
      font-weight: map-get($font-weights, medium);
      font-size: map-get($font-sizes, base);
      color: map-get(map-get($colors, gray), 600);
      cursor: pointer;
      border-bottom: 3px solid transparent;
      transition: all map-get($transitions, fast);
      
      &:hover {
        color: map-get(map-get($colors, primary), base);
      }
      
      &.react-tabs__tab--selected {
        color: map-get(map-get($colors, primary), base);
        border-bottom-color: map-get(map-get($colors, primary), base);
      }
    }
  }
  
  .learning-content {
    max-width: 800px;
    margin: 0 auto;
    
    h2 {
      font-family: map-get($fonts, heading);
      font-weight: map-get($font-weights, semibold);
      font-size: map-get($font-sizes, xxl);
      color: map-get(map-get($colors, gray), 800);
      margin-bottom: map-get($spacing, lg);
      text-align: center;
    }
    
    .video-container {
      position: relative;
      padding-bottom: 56.25%; // 16:9 aspect ratio
      height: 0;
      margin-bottom: map-get($spacing, lg);
      
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: map-get($border-radius, md);
      }
    }
    
    .key-concepts {
      background-color: map-get(map-get($colors, gray), 100);
      border-radius: map-get($border-radius, md);
      padding: map-get($spacing, lg);
      margin-bottom: map-get($spacing, xl);
      
      h3 {
        font-family: map-get($fonts, heading);
        font-weight: map-get($font-weights, semibold);
        font-size: map-get($font-sizes, lg);
        color: map-get(map-get($colors, gray), 800);
        margin-bottom: map-get($spacing, md);
      }
      
      ul {
        padding-left: map-get($spacing, lg);
        
        li {
          font-family: map-get($fonts, body);
          font-size: map-get($font-sizes, base);
          color: map-get(map-get($colors, gray), 700);
          margin-bottom: map-get($spacing, sm);
          line-height: 1.5;
        }
      }
    }
    
    .next-steps {
      text-align: center;
    }
  }
}

// Animation keyframes
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

// Animation utility classes
.animate-pulse {
  animation: pulse 2s infinite;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out forwards;
}

// Staggered animation for lists
.staggered-item {
  opacity: 0;
  
  @for $i from 1 through 10 {
    &:nth-child(#{$i}) {
      animation: slideUp 0.5s ease-out forwards;
      animation-delay: $i * 0.1s;
    }
  }
}
```

## Key Design Features

1. **Friendly Color Palette**
   - Vibrant primary blue that feels trustworthy but not corporate
   - Energetic accent colors (orange, purple, teal, yellow) for different module types
   - Gradual progression in gamification elements using color psychology

2. **Engaging Interactive Elements**
   - Subtle hover effects on cards and buttons (slight lift and shadow increase)
   - Progress bars with smooth transitions
   - Achievement badges with radiating gradients
   - Celebration animations for milestone achievements

3. **Approachable Typography**
   - Montserrat for headings: clean, modern, and approachable
   - Open Sans for body text: highly readable across devices
   - Poppins for accent text and labels: slightly playful but still professional

4. **Gamification Visual Language**
   - Achievement badges with distinctive styling
   - Clear level progression indicators
   - Reward animations that feel satisfying without being overwhelming
   - Progress visualization that makes growth tangible

5. **Modern UI Patterns**
   - Card-based interface for modular content presentation
   - Responsive grid systems that work across device sizes
   - Tabbed interfaces for complex content organization
   - Animation sequences that guide attention without distracting

This theme creates a visual environment that balances fun and engagement with respect and purpose—avoiding both overly childish elements and overly serious corporate styling.