import type { ImageMetadata } from 'astro';

// Every .jpg in src/assets/photos/ shows on the Photography page, sorted by file name.
// To add one, drop it in that folder and (optionally) describe it below for screen readers.
// Strip location data before adding photos: phone pictures carry GPS coordinates.
const files = import.meta.glob<{ default: ImageMetadata }>('./assets/photos/*.jpg', { eager: true });

const alt: Record<string, string> = {
  '02': 'Panorama of a wide canyon under a blue sky',
  '03': 'Canyon panorama with layered red cliffs',
  '04': 'Canyon rim overlooking eroded red rock',
  '05': 'A river winding along the bottom of a deep canyon',
  '06': 'A rock spire beside a sunlit canyon wall',
  '07': 'A Grand Canyon cap resting on red rock with the canyon behind',
  '08': 'Black-and-white chairlift above a snowy ski run',
  '09': 'Aerial view of a downtown with a baseball stadium',
  '10': 'Aerial view of a downtown with a long arch shadow across the park',
  '11': 'Desert visitor center thermometer reading 120°F',
  '12': 'Granite domes and a waterfall above a forested valley',
  '18': 'Motorcycle racer leaning through a turn',
  '19': 'A pack of motorcycle racers through a corner',
  '21': 'Motorcycle team members smiling in their garage',
  '25': 'Black-and-white observation tower against a pale sky',
  '26': 'Steam rising where lava meets the ocean, seen from the air',
  '27': 'Black-and-white view of a white ribbed station hall full of people',
  '28': 'Black-and-white glass skyscraper against clouds',
  '29': 'A red canyon framed by pine trees',
  '30': 'A creek running through a red-rock canyon under clouds',
  '31': 'A suspension bridge over a green river in a canyon',
  '32': 'Pointing down a trail into a deep canyon at sunrise',
  '38': 'A city skyline reflected in a calm river',
  '39': 'A suspension bridge road with green towers and lamp posts',
  '40': 'Black-and-white snowy mountain ridge with hikers',
  '41': 'An equestrian statue in a park',
  '42': 'Black-and-white courtyard of a Venetian-style building',
  '43': 'Rows of vintage street lamps',
  '47': 'City lights at night through raindrops on glass',
  '49': 'Black-and-white lake reflecting wooded hills',
  '59': 'A skyscraper disappearing into fog above the trees',
  '60': 'Two bridges and a city skyline at dusk',
  '61': 'A Formula 1 car in the pit garage',
  '64': 'Looking up a glass-and-steel lattice facade',
  '68': 'A granite dome against a blue sky with clouds',
};

export const photos = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => {
    const key = path.split('/').pop()!.slice(0, 2);
    return { key, src: mod.default, alt: alt[key] ?? 'Photograph' };
  });

// The photos shown on the home page, by file-name prefix.
export const featured = ['31', '60', '26', '19', '68', '38']
  .map((k) => photos.find((p) => p.key === k))
  .filter((p) => p !== undefined);
