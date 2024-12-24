/**
 * This module handles registry of unique fonts to the rest of the application using
 * emotions 'Global' key.
 */


// Mapping from font names to associated weights
const fontWeightManifest = [
    { type: 'ExtraLight', weight: 200 },
    { type: 'Light', weight: 300 },
    { type: 'Medium', weight: 500 },
    { type: 'SemiBold', weight: 600 },
    { type: 'Bold', weight: 700 }
];

// Supported baiJamJuree font types
const baiJamJureeFontTypes = [
    'Italic',
    'Regular',
];

/**
 * Defines a set of fonts using the baiJamJuree font manifest for the purposes of custom
 * hosting.
 */
export function getBaiJamJureeFontFaces(): string {
    const dynamicaBaiJamFontFaces = fontWeightManifest.flatMap((fontWeightItem) => {
        return baiJamJureeFontTypes.map((fontType) => {
            const fontPostFix = `${(fontType === 'Italic') ? 'Italic': ''}`;
            const fontHandle = `${fontWeightItem.type + fontPostFix}`;
    
            return `@font-face {
                font-family: 'Bai Jamjuree';
                font-style: ${(fontType === 'Regular') ? 'normal' : 'italic'};
                font-display: swap;
                font-weight: ${fontWeightItem.weight};
                src: url("static/fonts/bai-jamjuree/BaiJamjuree-${fontHandle}.ttf") format('truetype');
            }`;
        });
    });

    const staticBaiJamFontFaces = baiJamJureeFontTypes.map((fontType) => {
        return `@font-face {
            font-family: 'Bai Jamjuree';
            font-style: ${(fontType === 'Regular') ? 'normal' : 'italic'};
            font-display: swap;
            font-weight: 100;
            src: url("static/fonts/bai-jamjuree/BaiJamjuree-${fontType}.ttf") format('truetype');
        }`;
    });

    const result = [...dynamicaBaiJamFontFaces, ...staticBaiJamFontFaces].join('\n');
    console.log(result);

    return result;
}
