type TocPage = {
  title: string;
  href: string;
};

type TocSection = {
  title: string;
  href: string;
  pages?: TocPage[];
};

type TocData = {
  [key: string]: TocSection[];
};

export const TocData: TocData = {
  'getting-started/introduction': [
    {
      title: 'Welcome to CodinIT',
      href: '/docs/getting-started/introduction#welcome-to-codinit',
      pages: [
        {
          title: 'Product Capabilities',
          href: '/docs/getting-started/introduction#product-capabilities',
        },
        {
          title: 'Quick Start',
          href: '/docs/getting-started/introduction#quick-start',
        },
        {
          title: 'What is CodinIT',
          href: '/docs/getting-started/introduction#what-is-codinit',
        },
        {
          title: 'Stay Connected',
          href: '/docs/getting-started/introduction#stay-connected',
        },
      ],
    },
  ],
  'getting-started/quick-start': [
    {
      title: 'Overview of CodinIT',
      href: '/docs/getting-started/quick-start#overview-of-codinit',
    },
    {
      title: 'Create your First Project',
      href: '/docs/getting-started/quick-start#create-your-first-project',
    },
    {
      title: 'CodinIT Dashboard',
      href: '/docs/getting-started/quick-start#codinit-dashboard',
    },
    {
      title: 'Start your Project',
      href: '/docs/getting-started/quick-start#start-your-project',
    },
    {
      title: 'Edit your Project',
      href: '/docs/getting-started/quick-start#edit-your-project',
    },
    {
      title: 'Add Fullstack Capabilities',
      href: '/docs/getting-started/quick-start#add-fullstack-capabilities-to-your-project',
    },
    {
      title: 'Deploy & Publish',
      href: '/docs/getting-started/quick-start#deploy--publish-your-project',
    },
  ],
  'getting-started/teams': [
    {
      title: 'Create a Workspace',
      href: '/docs/getting-started/teams#create-a-workspace',
    },
    {
      title: 'Rename a Workspace',
      href: '/docs/getting-started/teams#rename-a-workspace',
    },
    {
      title: 'Invite & Manage Collaborators',
      href: '/docs/getting-started/teams#invite--manage-collaborators',
    },
    {
      title: 'Real-Time Collaboration',
      href: '/docs/getting-started/teams#real-time-collaboration',
    },
    {
      title: 'Move Projects Between Workspaces',
      href: '/docs/getting-started/teams#move-a-project-between-workspaces',
    },
    {
      title: 'Managing Access',
      href: '/docs/getting-started/teams#managing-access',
    },
    {
      title: 'Permissions',
      href: '/docs/getting-started/teams#permissions',
    },
  ],
  'features/seo-and-social-sharing': [
    {
      title: 'Why metadata matters',
      href: '/docs/features/seo-and-social-sharing#why-metadata-matters',
    },
    {
      title: 'Configuring Metadata',
      href: '/docs/features/seo-and-social-sharing#configuring-metadata-in-nextjs',
    },
  ],
  'features/sidebar': [
    {
      title: 'Folder Structure',
      href: '/docs/features/sidebar#folder-structure',
    },
    {
      title: 'Editing Sidebar Navigation',
      href: '/docs/features/sidebar#editing-sidebar-navigation',
    },
    {
      title: 'Where is Sidebar Rendered?',
      href: '/docs/features/sidebar#where-is-the-sidebar-rendered',
    },
    {
      title: 'Summary',
      href: '/docs/features/sidebar#summary',
    },
  ],
  'prompt-engineering/prompting': [
    {
      title: 'What is Prompting?',
      href: '/docs/prompt-engineering/prompting#what-is-prompting',
    },
    {
      title: 'Why Prompting Matters',
      href: '/docs/prompt-engineering/prompting#why-prompting-matters',
    },
    {
      title: 'Understanding How AI Thinks',
      href: '/docs/prompt-engineering/prompting#understanding-how-ai-thinks',
    },
    {
      title: 'The C.L.E.A.R. Framework',
      href: '/docs/prompt-engineering/prompting#core-prompting-principles-the-clear-framework',
    },
    {
      title: 'The Four Levels of Prompting',
      href: '/docs/prompt-engineering/prompting#the-four-levels-of-prompting',
    },
    {
      title: 'Advanced Prompting Techniques',
      href: '/docs/prompt-engineering/prompting#advanced-prompting-techniques',
    },
    {
      title: 'CodinIT-Specific Best Practices',
      href: '/docs/prompt-engineering/prompting#codinit-specific-best-practices',
    },
  ],
  'prompt-engineering/prompt-library': [
    {
      title: 'Starting Projects',
      href: '/docs/prompt-engineering/prompt-library#starting-projects',
    },
    {
      title: 'UI/UX Design',
      href: '/docs/prompt-engineering/prompt-library#uiux-design',
    },
    {
      title: 'Responsiveness',
      href: '/docs/prompt-engineering/prompt-library#responsiveness',
    },
    {
      title: 'Refactoring',
      href: '/docs/prompt-engineering/prompt-library#refactoring',
    },
    {
      title: 'App Types',
      href: '/docs/prompt-engineering/prompt-library#app-types',
    },
    {
      title: 'React Development',
      href: '/docs/prompt-engineering/prompt-library#react-development',
    },
    {
      title: 'Locking Files / Limiting Scope',
      href: '/docs/prompt-engineering/prompt-library#locking-files--limiting-scope',
    },
    {
      title: 'Planning',
      href: '/docs/prompt-engineering/prompt-library#planning',
    },
    {
      title: 'Stripe Setup',
      href: '/docs/prompt-engineering/prompt-library#stripe-setup',
    },
    {
      title: 'Supabase & Backend',
      href: '/docs/prompt-engineering/prompt-library#supabase--backend',
    },
    {
      title: 'Using Chat Mode vs Default Mode',
      href: '/docs/prompt-engineering/prompt-library#using-chat-mode-vs-default-mode',
    },
    {
      title: 'Writing Knowledge Bases and PRDs',
      href: '/docs/prompt-engineering/prompt-library#writing-knowledge-bases-and-prds',
    },
  ],
  'prompt-engineering/debugging': [
    {
      title: 'Performance Issues',
      href: '/docs/prompt-engineering/debugging#performance-issues',
    },
    {
      title: 'Best Practices',
      href: '/docs/prompt-engineering/debugging#best-practices',
    },
  ],
  'search-bar': [
    {
      title: 'How it works',
      href: '/docs/search-bar#how-it-works',
    },
    {
      title: 'Key Features',
      href: '/docs/search-bar#key-features',
    },
    {
      title: 'Customization',
      href: '/docs/search-bar#customization',
    },
    {
      title: 'Code Snippet: search highlight',
      href: '/docs/search-bar#code-snippet-search-highlighting',
    },
    {
      title: 'Visual Preview',
      href: '/docs/search-bar#visual-preview',
    },
    {
      title: 'Why this is cool',
      href: '/docs/search-bar#why-this-is-cool',
    },
  ],
  theme: [
    {
      title: 'Overview',
      href: '/docs/theme#overview',
    },
    {
      title: 'Understanding Foreground and Background',
      href: '/docs/theme#understanding-foreground-and-background',
    },
    {
      title: 'Primary and Secondary colors',
      href: '/docs/theme#primary-and-secondary-colors',
    },
    {
      title: 'Where to modify',
      href: '/docs/theme#where-to-modify-themes',
    },
  ],
};
