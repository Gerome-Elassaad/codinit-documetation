/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './src/**/*.{js,ts,jsx,tsx,mdx}', // Added ./src as well for broader coverage
];
export const theme = {
  extend: {
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      border: 'hsl(var(--border))',
      'border-header': 'hsl(var(--border-header))',
      primary: 'hsl(var(--primary))',
      'primary-foreground': 'hsl(var(--primary-foreground))',
      secondary: 'hsl(var(--secondary))',
      'secondary-foreground': 'hsl(var(--secondary-foreground))',
      muted: 'hsl(var(--muted))',
      'muted-foreground': 'hsl(var(--muted-foreground))',
      accent: 'hsl(var(--accent))',
      'accent-foreground': 'hsl(var(--accent-foreground))',
      card: 'hsl(var(--card))',
      'card-foreground': 'hsl(var(--card-foreground))',
      popover: 'hsl(var(--popover))',
      'popover-foreground': 'hsl(var(--popover-foreground))',
      destructive: 'hsl(var(--destructive))',
      'destructive-foreground': 'hsl(var(--destructive-foreground))',
      success: 'hsl(var(--success))',
      'success-foreground': 'hsl(var(--success-foreground))',
      warning: 'hsl(var(--warning))',
      'warning-foreground': 'hsl(var(--warning-foreground))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      sidebar: 'hsl(var(--sidebar))',
      'sidebar-active': 'hsl(var(--sidebar-active))',
      'sidebar-foreground': 'hsl(var(--sidebar-foreground))',
      'sidebar-active-foreground': 'hsl(var(--sidebar-active-foreground))',
      button: 'hsl(var(--button))',
      'button-border': 'hsl(var(--button-border))',
      'button-foreground': 'hsl(var(--button-foreground))',
      'button-hover': 'hsl(var(--button-hover))',
      'button-secondary': 'hsl(var(--button-secondary))',
      'button-secondary-foreground': 'hsl(var(--button-secondary-foreground))',
    },
    borderRadius: {
      sm: 'calc(var(--radius) - 4px)',
      md: 'calc(var(--radius) - 2px)',
      lg: 'var(--radius)',
      DEFAULT: 'var(--radius)', // Makes `rounded` use `var(--radius)`
    },
  },
};
export const screens = {
  xs: '100px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
export const plugins = [require('tailwindcss-animated')];
