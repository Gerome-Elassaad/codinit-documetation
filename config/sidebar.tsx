import { Component, Paintbrush, Rocket, Wrench } from 'lucide-react';

export const sidebarNav = [
  {
    title: 'Getting Started',
    icon: <Rocket className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Introduction',
        href: '/docs/getting-started/introduction',
      },
      {
        title: 'Quick Start',
        href: '/docs/getting-started/quick-start',
      },
      {
        title: 'Teams',
        href: '/docs/getting-started/teams',
      },
    ],
  },
  {
    title: 'Features',
    icon: <Component className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      {
        title: 'SEO and Social Sharing',
        href: '/docs/features/seo-and-social-sharing',
      },
    ],
  },
  {
    title: 'Prompt Engineering',
    icon: <Wrench className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Prompting',
        href: '/docs/prompt-engineering/prompting',
      },
      {
        title: 'Prompt Library',
        href: '/docs/prompt-engineering/prompt-library',
      },
      {
        title: 'Debugging',
        href: '/docs/prompt-engineering/debugging',
      },
    ],
  },
  {
    title: 'Models & Providers',
    icon: <Wrench className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Anthropic',
        href: '/docs/models/anthropic',
        icon: (
          <img src="/icons/anthropic.svg" className="h-5 w-5" alt="Anthropic" />
        ),
      },
      {
        title: 'DeepSeek',
        href: '/docs/models/deepseek',
        icon: (
          <img src="/icons/deepseek.svg" className="h-5 w-5" alt="DeepSeek" />
        ),
      },
      {
        title: 'Fireworks',
        href: '/docs/models/fireworks',
        icon: (
          <img src="/icons/fireworks.svg" className="h-5 w-5" alt="Fireworks" />
        ),
      },
      {
        title: 'Gemini',
        href: '/docs/models/gemini',
        icon: <img src="/icons/google.svg" className="h-5 w-5" alt="Gemini" />,
      },
      {
        title: 'Groq',
        href: '/docs/models/groq',
        icon: <img src="/icons/groq.svg" className="h-5 w-5" alt="Groq" />,
      },
      {
        title: 'Mistral',
        href: '/docs/models/mistral',
        icon: (
          <img src="/icons/mistral.svg" className="h-5 w-5" alt="Mistral" />
        ),
      },
      {
        title: 'Ollama',
        href: '/docs/models/ollama',
        icon: <img src="/icons/ollama.svg" className="h-5 w-5" alt="Ollama" />,
      },
      {
        title: 'OpenAI',
        href: '/docs/models/openai',
        icon: <img src="/icons/openai.svg" className="h-5 w-5" alt="OpenAI" />,
      },
      {
        title: 'TogetherAI',
        href: '/docs/models/togetherai',
        icon: (
          <img
            src="/icons/togetherai.svg"
            className="h-5 w-5"
            alt="TogetherAI"
          />
        ),
      },
      {
        title: 'Vertex',
        href: '/docs/models/vertex',
        icon: <img src="/icons/google.svg" className="h-5 w-5" alt="Vertex" />,
      },
      {
        title: 'XAI',
        href: '/docs/models/xai',
        icon: <img src="/icons/xai.svg" className="h-5 w-5" alt="XAI" />,
      },
    ],
  },
];
