# Image Organization Guide

This guide explains how to organize the inspiration images for the pretotype website.

## Required Images

### Exterior Views
| Filename | Description | Source |
|----------|-------------|--------|
| `exterior-day.jpg` | Solarpunk mansion, daytime view | Architectural sketch or 3D render |
| `exterior-night.jpg` | Same view with colored room lighting | 3D render showing zones |

### Bedroom ("AEON Sanctuary")
| Filename | Description | Key Elements |
|----------|-------------|--------------|
| `bedroom-sleep.jpg` | Green/teal sleep mode | Thermal mattress grid, HRV display |
| `bedroom-dark.jpg` | Dark blue night mode | Minimal, blackout, sleep monitor |

### Office ("Sovereign Studio")
| Filename | Description | Key Elements |
|----------|-------------|--------------|
| `office-focus.jpg` | Electric blue focus mode | Deep Work timer, knowledge graph, encoding station |

### Kitchen ("Nutrition Lab")
| Filename | Description | Key Elements |
|----------|-------------|--------------|
| `kitchen-farm.jpg` | Vertical aeroponic farm | Zone labels, growing plants |
| `kitchen-nutrition.jpg` | Food pyramid display | Tiered food presentation |

### Living Room ("Connection Hub")
| Filename | Description | Key Elements |
|----------|-------------|--------------|
| `living-room-social.jpg` | Warm orange lighting | Sunken conversation pit, natural light |

### Gym ("Anti-Aging Arena")
| Filename | Description | Key Elements |
|----------|-------------|--------------|
| `gym-wellness.jpg` | Recovery equipment | Cold plunge, red light panels |

### Meditation Atrium
| Filename | Description | Key Elements |
|----------|-------------|--------------|
| `meditation-atrium.jpg` | Biophilic space | Living walls, circadian skylight |

## Image Specifications

### Technical Requirements
- **Format**: WebP preferred, JPG fallback
- **Resolution**: 2400x1600px minimum (3:2 aspect ratio)
- **File Size**: <500KB optimized
- **Color Profile**: sRGB

### Style Guidelines
- **Lighting**: Golden hour or dramatic architectural lighting
- **Composition**: Wide angle, show full room context
- **Tech Overlays**: HUD elements should be subtle, not overwhelming
- **Aesthetic**: Solarpunk (nature + technology harmony)

## Organizing Your Images

1. **Create the directory**:
   ```bash
   mkdir -p public/rooms
   ```

2. **Copy and rename images**:
   ```bash
   # Example
   cp ~/Downloads/bedroom_concept.jpg public/rooms/bedroom-sleep.jpg
   ```

3. **Optimize for web**:
   ```bash
   # Using ImageMagick
   convert input.jpg -resize 2400x1600 -quality 85 output.webp

   # Or use online tools like Squoosh.app
   ```

4. **Update rooms.json** with correct hotspot coordinates

## Mapping Images to Inspiration

Based on the provided inspiration images:

| Inspiration | Maps To | Notes |
|-------------|---------|-------|
| Architectural sketch (color-coded rooms) | `exterior-day.jpg` | Use as reference for zone colors |
| 3D render with "System Optimized: 98%" | `exterior-night.jpg` | Shows room lighting |
| Blue office with Deep Work timer | `office-focus.jpg` | Primary office image |
| Green bedroom with thermal grid | `bedroom-sleep.jpg` | Shows HRV display |
| Dark blue bedroom | `bedroom-dark.jpg` | Night mode variant |
| Orange living room with conversation pit | `living-room-social.jpg` | Digital Detox Zone visible |
| Vertical farm with zone labels | `kitchen-farm.jpg` | Shows plant varieties |
| Food pyramid display | `kitchen-nutrition.jpg` | Tiered food presentation |

## Hotspot Calibration

After placing images, you'll need to calibrate hotspot coordinates in `data/rooms.json`.

### Method 1: Browser DevTools
1. Open the image in a browser
2. Use DevTools to find pixel coordinates
3. Update coords array: `[x1, y1, x2, y2]`

### Method 2: Online Tool
1. Visit [image-map.net](https://www.image-map.net/)
2. Upload your image
3. Draw rectangular regions
4. Export coordinates

### Method 3: Percentage-Based (Recommended)
Store as percentages, calculate actual pixels at render time:
```json
{
  "coords": [0.35, 0.45, 0.65, 0.75],
  "coordsType": "percentage"
}
```

## Placeholder Images

If final images aren't ready, use these placeholder sources:
- [Unsplash Architecture](https://unsplash.com/s/photos/modern-architecture)
- [Midjourney](https://midjourney.com) - Generate solarpunk interiors
- [Stable Diffusion](https://stability.ai) - Custom generation

Remember: For the MVP, imperfect images are fine. The goal is to validate the concept, not achieve visual perfection.
