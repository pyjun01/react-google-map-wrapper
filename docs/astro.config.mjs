import react from '@astrojs/react';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            {
              label: 'Introdution',
              link: '/docs/introdution',
            },
            {
              label: 'Installation',
              link: '/docs/installation',
            },
            {
              label: 'Quick Start',
              link: '/docs/quick-start',
            },
            {
              label: 'Important Rule',
              link: '/docs/important-rule',
            },
          ],
        },
        {
          label: 'API Reference',
          items: [
            {
              label: 'Component',
              items: [
                {
                  label: 'GoogleMapApiLoader',
                  link: '/docs/api/google-map-api-loader',
                },
                {
                  label: 'GoogleMap',
                  link: '/docs/api/google-map',
                },
                {
                  label: 'Marker',
                  link: '/docs/api/marker',
                },
                {
                  label: 'CustomMarker',
                  link: '/docs/api/custom-marker',
                },
                {
                  label: 'AdvancedMarker (w/ PinElement)',
                  link: '/docs/api/advanced-marker',
                },
                {
                  label: 'MarkerClusterer',
                  link: '/docs/api/marker-clusterer',
                },
                {
                  label: 'Control',
                  link: '/docs/api/control',
                },
                {
                  label: 'InfoWindow',
                  link: '/docs/api/info-window',
                },
                {
                  label: 'Polyline',
                  link: '/docs/api/polyline',
                },
                {
                  label: 'Polygon',
                  link: '/docs/api/polygon',
                },
                {
                  label: 'Rectangle',
                  link: '/docs/api/rectangle',
                },
                {
                  label: 'Circle',
                  link: '/docs/api/circle',
                },
                {
                  label: 'HeatmapLayer',
                  link: '/docs/api/heatmap-layer',
                },
              ],
            },
            {
              label: 'Hooks',
              items: [
                {
                  label: 'useMapContext',
                  link: '/docs/api/use-map-context',
                },
                {
                  label: 'useImportLibrary',
                  link: '/docs/api/use-import-library',
                },
                {
                  label: 'useApiLoadingStatus',
                  link: '/docs/api/use-api-loading-status',
                },
              ],
            },
            {
              label: 'etc',
              items: [
                {
                  label: 'LoadingStatus',
                  link: '/docs/api/loading-status',
                },
                {
                  label: 'appendLibImportScript',
                  link: '/docs/api/append-lib-import-script',
                },
              ],
            },
          ],
        },
        {
          label: 'Examples',
          items: [
            {
              label: 'Basic',
              items: [
                {
                  label: 'Load the Maps JavaScript API',
                  link: '/docs/examples/basic',
                },
                // {
                //   label: 'Showing Pixel and Tile Coordinates',
                //   link: '/docs/introdution',
                //   // link: '/docs/examples/coordinates',
                // },
                // {
                //   label: 'Geolocation',
                //   link: '/docs/introdution',
                //   // link: '/docs/examples/geolocation',
                // },
                // {
                //   label: 'Localizing the Map',
                //   link: '/docs/introdution',
                //   // link: '/docs/examples/language',
                // },
                // {
                //   label: 'Custom Map Projections',
                //   link: '/docs/introdution',
                //   // link: '/docs/examples/projection',
                // },
              ],
            },
            // {
            //   label: 'Marker',
            //   items: [
            //     {
            //       label: 'Custom Marker',
            //       link: '/docs/introdution',
            //       // link: '/docs/examples/marker- custom',
            //     },
            //     {
            //       label: 'Legacy',
            //       items: [
            //         {
            //           label: 'Simple Markers',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/marker-simple',
            //         },
            //         {
            //           label: 'Marker Labels',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/marker-label',
            //         },
            //         {
            //           label: 'Removing Markers',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/marker-remove',
            //         },
            //         {
            //           label: 'Markers with Image Icons',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/icon-simple',
            //         },
            //         {
            //           label: 'Markers with SVG and Font',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/marker-modern',
            //         },
            //         {
            //           label: 'Markers with Predefined Symbol Icons',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/marker-symbol-predefined',
            //         },
            //         {
            //           label: 'Markers with Vector-Based Icons',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/marker-symbol-custom',
            //         },
            //         {
            //           label: 'Complex Marker Icons',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/icon-complex',
            //         },
            //         {
            //           label: 'Marker Animations',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/marker-animations',
            //         },
            //         {
            //           label: 'Marker Animations With setTimeout()',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/marker-animations-timeout',
            //         },
            //       ],
            //     },
            //     {
            //       label: 'Advanced',
            //       items: [
            //         {
            //           label: 'Customize advanced markers',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/advanced-markers-basic-style',
            //         },
            //         {
            //           label: 'Create markers with graphics',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/advanced-markers-graphics',
            //         },
            //         {
            //           label: 'Create markers with HTML and CSS',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/advanced-markers-html-simple',
            //         },
            //         {
            //           label: 'Create interactive markers using HTML',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/advanced-markers-html',
            //         },
            //         {
            //           label: 'Animate markers using CSS',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/advanced-markers-animation',
            //         },
            //         {
            //           label: 'Control marker collision behavior',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/advanced-markers-collision',
            //         },
            //         {
            //           label: 'Set marker altitude',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/advanced-markers-altitude',
            //         },
            //         {
            //           label: 'Control marker visibility by zoom level',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/advanced-markers-zoom',
            //         },
            //         {
            //           label: 'Make markers clickable and accessible',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/advanced-markers-accessibility',
            //         },
            //         {
            //           label: 'Make markers draggable',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/advanced-markers-draggable',
            //         },
            //         {
            //           label: 'Marker clustering',
            //           link: '/docs/introdution',
            //           // link: '/docs/examples/marker-clustering',
            //         },
            //       ],
            //     },
            //   ],
            // },
            // {
            //   label: 'Info Window',
            //   link: '/docs/introdution',
            //   // link: '/docs/examples/infowindow',
            // },
          ],
        },
      ],
      title: 'react-google-map-wrapper',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/pyjun01/react-google-map-wrapper',
      },
      favicon: 'favicon.ico',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'manifest',
            href: '/react-google-map-wrapper/site.webmanifest',
          },
        },
      ],
      customCss: ['./src/styles/index.css'],
    }),
    react(),
    tailwind(),
  ],
  site: 'https://pyjun01.github.io',
  base: '/react-google-map-wrapper',
});
