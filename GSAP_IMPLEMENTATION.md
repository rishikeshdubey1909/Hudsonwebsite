# GSAP Premium Scrolling Implementation

## Overview
This document describes the premium GSAP scrolling and animation system implemented across the Hudson website. The implementation provides Apple/Stripe-level smooth scrolling, premium section reveals, subtle parallax effects, and elegant micro-interactions.

## Architecture

### Core Files

1. **`lib/gsap.ts`** - GSAP initialization and configuration
   - Registers ScrollTrigger plugin
   - Defines premium easing curves
   - Provides utility functions for mobile detection and reduced motion

2. **`lib/gsapInit.ts`** - Global animation initialization
   - `initSectionReveals()` - Section fade-up animations
   - `initCardReveals()` - Card scale + fade animations
   - `initCardHovers()` - Premium card hover effects
   - `initCTAHovers()` - CTA micro-interactions

3. **`hooks/useSectionReveal.ts`** - Section reveal hook
   - Premium fade-up with 2-4% motion
   - Staggered child animations
   - Respects reduced motion preferences

4. **`hooks/useParallax.ts`** - Parallax hook
   - Subtle parallax (10-25px speed)
   - Elegant scrub (0.4-0.7)
   - Disabled on mobile for performance

5. **`hooks/useCardReveal.ts`** - Card reveal hook
   - Scale 0.96 → 1 animation
   - Fade + translate on entry

6. **`hooks/useCTAHover.ts`** - CTA hover hook
   - Arrow movement (2-3px)
   - Underline animation
   - 200ms smooth transitions

7. **`components/GSAPProvider.tsx`** - GSAP provider component
   - Initializes GSAP on mount
   - Handles cleanup on unmount
   - Wraps entire app

## Implementation Details

### Section Reveals

All sections with `data-section-reveal` attribute automatically get:
- Fade-up animation (opacity 0 → 1, y: 20 → 0)
- Trigger at "top 80%"
- Premium easing: `cubic-bezier(0.22, 1, 0.36, 1)`
- Duration: 0.8s

**Usage:**
```tsx
<section data-section-reveal>
  <div data-reveal-child>
    {/* Content */}
  </div>
</section>
```

### Card Reveals

All cards in containers with `data-card-container` get:
- Scale animation (0.96 → 1)
- Fade + translate (opacity 0 → 1, y: 20 → 0)
- Staggered by 0.1s
- Trigger at "top 80%"

**Usage:**
```tsx
<div data-card-container>
  <div data-card-reveal>
    <Card />
  </div>
</div>
```

### Card Hover Effects

Cards with `data-card-hover` get:
- Lift effect (y: -3px)
- Scale (1 → 1.02)
- Enhanced shadow
- 250ms smooth transition

**Usage:**
```tsx
<div data-card-hover>
  {/* Card content */}
</div>
```

### CTA Micro-Interactions

CTAs with `data-cta-link` get:
- Arrow moves 3px on hover
- Underline scales from 0 to 1
- 200ms smooth transitions

**Usage:**
```tsx
<div data-cta-link>
  <span>Learn More</span>
  <span data-cta-underline className="absolute bottom-[-2px] left-0 right-0 h-[1.5px] bg-accent/40 origin-left scale-x-0" />
  <span data-cta-arrow>→</span>
</div>
```

### Parallax Effects

Hero background elements use subtle parallax:
- Speed: 15-20px
- Scrub: 0.5-0.6
- Disabled on mobile

**Usage:**
```tsx
const parallaxRef = useParallax({ speed: 20, scrub: 0.6 })
<div ref={parallaxRef}>...</div>
```

## Components Updated

1. **Hero.tsx** - GSAP reveal + parallax for background orbs
2. **WhyHudson.tsx** - Section reveal + card animations
3. **IndustryShowcase.tsx** - Section reveal + card animations
4. **BaseCard.tsx** - CTA micro-interactions
5. **PremiumIndustryCard.tsx** - CTA micro-interactions
6. **app/(site)/page.tsx** - Section data attributes

## Performance Optimizations

1. **Mobile Detection** - Parallax disabled on mobile
2. **Reduced Motion** - All animations respect `prefers-reduced-motion`
3. **ScrollTrigger Refresh** - Auto-refresh on resize (debounced)
4. **Cleanup** - Proper ScrollTrigger cleanup to prevent memory leaks
5. **Once Animations** - Most animations use `once: true` for performance

## Easing & Timing

- **Premium Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (Apple-like)
- **Section Duration**: 0.8s
- **Card Stagger**: 0.1s
- **Hover Transitions**: 200-250ms
- **Parallax Scrub**: 0.4-0.7

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Reduced motion support for accessibility

## Future Enhancements

1. **ScrollSmoother** - Can be added for even smoother scrolling
2. **SplitText** - For text reveal animations
3. **Magnetic Effects** - For interactive elements
4. **Scroll Progress** - For progress indicators

## Notes

- All text content remains unchanged
- Only visual animations and interactions are enhanced
- Production-ready code with proper TypeScript types
- Fully responsive and mobile-optimized







