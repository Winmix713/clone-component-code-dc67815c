import {createGlobalStyle} from 'styled-components';
import theme from 'styled-theming';

export default createGlobalStyle`
  :root {
    --body: ${theme('theme', {
      light: 'var(--body-light)',
      dark: 'var(--body-dark)',
    })};
    --widget: ${theme('theme', {
      light: 'var(--widget-light)',
      dark: 'var(--widget-dark)',
    })};
    --widget-shadow: ${theme('theme', {
      light: '0 1px 8px rgba(110, 110, 110, .1)',
      dark: '0 4px 30px rgba(0, 0, 0, .4)',
    })};
    --winget-inner-shadow: ${theme('theme', {
      light: 'linear-gradient(270deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)',
      dark: 'linear-gradient(270deg, rgba(17, 19, 18, 0.0001) 0%, hsl(220 12% 12%) 100%)',
    })};
    --text: ${theme('theme', {
      light: 'var(--text-light)',
      dark: 'var(--text-dark)',
    })};
    --border: ${theme('theme', {
      light: 'var(--border-light)',
      dark: 'var(--border-dark)',
    })};
    --header: ${theme('theme', {
      light: 'var(--header-light)',
      dark: 'var(--header-dark)',
    })};
    --header-invert: ${theme('theme', {
        light: 'var(--header-dark)',
        dark: 'var(--header-light)',
    })};
    --label: ${theme('theme', {
      light: 'var(--btn-text-light)',
      dark: 'var(--text-dark)',
    })};
    --btn-text: ${theme('theme', {
      light: 'var(--btn-text-light)',
      dark: 'var(--widget-light)',
    })};
    --highlight: ${theme('theme', {
      light: 'var(--olive)',
      dark: 'hsl(var(--electric-gold))',
    })};
    --highlight-invert: ${theme('theme', {
        light: 'hsl(var(--electric-gold))',
        dark: 'var(--olive)',
    })};
    --tooltip-bg: ${theme('theme', {
        light: 'var(--widget)',
        dark: 'var(--border)',
    })};
    --nav-arrow-color: ${theme('theme', {
        light: 'var(--header)',
        dark: 'hsl(var(--electric-blue) / 0.7)',
    })};
    --nav-arrow-hover-color: ${theme('theme', {
        light: 'var(--blue)',
        dark: 'hsl(var(--electric-green))',
    })};
    --divider: ${theme('theme', {
        light: '#ccc',
        dark: 'hsl(220 10% 20%)',
    })};
    --placeholder: ${theme('theme', {
        light: '#8C9876',
        dark: '#6B7280'
    })};
    --score-alt: ${theme('theme', {
        light: 'var(--border)',
        dark: 'hsl(var(--stadium-surface))'
    })};
    
    /* === STADIUM ELECTRIC THEME ENHANCEMENTS === */
    --card-glow: ${theme('theme', {
        light: '0 1px 8px rgba(110, 110, 110, .1)',
        dark: '0 0 0 1px hsl(var(--electric-green) / 0.1), 0 4px 30px rgba(0, 0, 0, .4)',
    })};
    --accent-glow: ${theme('theme', {
        light: 'none',
        dark: 'var(--glow-green)',
    })};
  }
`;