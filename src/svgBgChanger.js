import { useState, useEffect } from 'react';

export function useDynamicSvg(svgUrl, colorMappings) {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    fetch(svgUrl)
      .then((res) => res.text())
      .then((originalData) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(originalData, "image/svg+xml");
        const svg = xmlDoc.getElementsByTagName('svg')[0];
        if (svg) {
          // Remove width and height to allow container to control size
          svg.removeAttribute('width');
          svg.removeAttribute('height');

          // Apply color mappings
          let data = svg.outerHTML;
          Object.entries(colorMappings).forEach(([oldColor, newColor]) => {
            data = data.replace(new RegExp(oldColor, 'g'), newColor);
          });

          setSvgContent(data);
        }
      }).catch(() => {
        // do nothing
      });
  }, [svgUrl, colorMappings]);

  return svgContent;
}
