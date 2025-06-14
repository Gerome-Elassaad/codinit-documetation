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
      title: 'Key Principles to Remember',
      href: '/docs/prompt-engineering/debugging#key-principles-to-remember',
    },
    {
      title: 'Continuous Learning Resources',
      href: '/docs/prompt-engineering/debugging#continuous-learning-resources',
    },
    {
      title: 'Final Thoughts',
      href: '/docs/prompt-engineering/debugging#final-thoughts',
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
  // Provider Documentation TOCs
  'models/anthropic': [
    {
      title: 'Getting an API Key',
      href: '/docs/models/anthropic#getting-an-api-key',
    },
    {
      title: 'Supported Models',
      href: '/docs/models/anthropic#supported-models',
    },
    {
      title: 'Configuration in CodinIT',
      href: '/docs/models/anthropic#configuration-in-codinit',
    },
    {
      title: 'Extended Thinking',
      href: '/docs/models/anthropic#extended-thinking',
    },
    {
      title: 'Tips and Notes',
      href: '/docs/models/anthropic#tips-and-notes',
    },
  ],
  'models/deepseek': [
    {
      title: 'Getting an API Key',
      href: '/docs/models/deepseek#getting-an-api-key',
    },
    {
      title: 'Supported Models',
      href: '/docs/models/deepseek#supported-models',
    },
    {
      title: 'Configuration in CodinIT',
      href: '/docs/models/deepseek#configuration-in-codinit',
    },
    {
      title: 'Tips and Notes',
      href: '/docs/models/deepseek#tips-and-notes',
    },
  ],
  'models/fireworks': [
    {
      title: 'Account Setup and API Keys',
      href: '/docs/models/fireworks#step-1-create-your-fireworks-ai-account-and-generate-api-keys',
      pages: [
        {
          title: 'Sign Up for Fireworks AI',
          href: '/docs/models/fireworks#11-sign-up-for-fireworks-ai',
        },
        {
          title: 'Navigate to API Key Generation',
          href: '/docs/models/fireworks#12-navigate-to-api-key-generation',
        },
        {
          title: 'API Key Security',
          href: '/docs/models/fireworks#13-api-key-security-and-best-practices',
        },
      ],
    },
    {
      title: 'Models and Capabilities',
      href: '/docs/models/fireworks#step-2-explore-high-performance-models-and-capabilities',
      pages: [
        {
          title: 'Optimized Model Catalog',
          href: '/docs/models/fireworks#21-optimized-model-catalog',
        },
        {
          title: 'Performance Advantages',
          href: '/docs/models/fireworks#22-performance-and-speed-advantages',
        },
        {
          title: 'Model Selection Strategy',
          href: '/docs/models/fireworks#23-model-selection-strategy',
        },
      ],
    },
    {
      title: 'CodinIT Configuration',
      href: '/docs/models/fireworks#step-3-configure-the-codinit-vs-code-extension',
    },
    {
      title: 'Authentication Setup',
      href: '/docs/models/fireworks#step-4-authentication-setup-and-configuration',
    },
    {
      title: 'Performance Optimization',
      href: '/docs/models/fireworks#step-5-performance-optimization-and-speed-maximization',
    },
    {
      title: 'Cost Management',
      href: '/docs/models/fireworks#step-6-cost-management-and-usage-monitoring',
    },
    {
      title: 'Production Deployment',
      href: '/docs/models/fireworks#step-7-production-deployment-and-enterprise-features',
    },
    {
      title: 'Advanced Use Cases',
      href: '/docs/models/fireworks#step-8-advanced-use-cases-and-integration-scenarios',
    },
  ],
  'models/gemini': [
    {
      title: 'Obtain Your API Key',
      href: '/docs/models/gemini#step-1-obtain-your-gemini-api-key',
      pages: [
        {
          title: 'Create an API Key',
          href: '/docs/models/gemini#11-create-an-api-key',
        },
        {
          title: 'API Key Security',
          href: '/docs/models/gemini#12-api-key-security-best-practices',
        },
      ],
    },
    {
      title: 'Choose Your Model',
      href: '/docs/models/gemini#step-2-choose-your-model-and-verify-access',
      pages: [
        {
          title: 'Available Models',
          href: '/docs/models/gemini#21-available-gemini-models',
        },
        {
          title: 'Model Capabilities',
          href: '/docs/models/gemini#22-model-capabilities-and-limits',
        },
      ],
    },
    {
      title: 'Configure CodinIT',
      href: '/docs/models/gemini#step-3-configure-the-codinit-vs-code-extension',
    },
    {
      title: 'Authentication Setup',
      href: '/docs/models/gemini#step-4-authentication-setup-options',
    },
    {
      title: 'Rate Limits & Best Practices',
      href: '/docs/models/gemini#step-5-rate-limits-quotas-and-best-practices',
    },
    {
      title: 'Advanced Configuration',
      href: '/docs/models/gemini#step-6-advanced-configuration-and-troubleshooting',
    },
  ],
  'models/groq': [
    {
      title: 'Getting an API Key',
      href: '/docs/models/groq#getting-an-api-key',
    },
    {
      title: 'Supported Models',
      href: '/docs/models/groq#supported-models',
      pages: [
        {
          title: 'Grok-3 Models',
          href: '/docs/models/groq#grok-3-models',
        },
        {
          title: 'Grok-2 Models',
          href: '/docs/models/groq#grok-2-models',
        },
        {
          title: 'Grok Vision Models',
          href: '/docs/models/groq#grok-vision-models',
        },
        {
          title: 'Legacy Models',
          href: '/docs/models/groq#legacy-models',
        },
      ],
    },
    {
      title: 'Configuration in CodinIT',
      href: '/docs/models/groq#configuration-in-codinit',
    },
    {
      title: 'Reasoning Capabilities',
      href: '/docs/models/groq#reasoning-capabilities',
      pages: [
        {
          title: 'Reasoning-Enabled Models',
          href: '/docs/models/groq#reasoning-enabled-models',
        },
        {
          title: 'Controlling Reasoning Effort',
          href: '/docs/models/groq#controlling-reasoning-effort',
        },
        {
          title: 'Key Features',
          href: '/docs/models/groq#key-features',
        },
      ],
    },
    {
      title: 'Tips and Notes',
      href: '/docs/models/groq#tips-and-notes',
    },
  ],
  'models/mistral': [
    {
      title: 'Getting an API Key',
      href: '/docs/models/mistral#getting-an-api-key',
    },
    {
      title: 'Supported Models',
      href: '/docs/models/mistral#supported-models',
    },
    {
      title: 'Configuration in CodinIT',
      href: '/docs/models/mistral#configuration-in-codinit',
    },
    {
      title: 'Using Codestral',
      href: '/docs/models/mistral#using-codestral',
    },
  ],
  'models/ollama': [
    {
      title: 'Setting up Ollama',
      href: '/docs/models/ollama#setting-up-ollama',
    },
    {
      title: 'Tips and Notes',
      href: '/docs/models/ollama#tips-and-notes',
    },
  ],
  'models/openai': [
    {
      title: 'Getting an API Key',
      href: '/docs/models/openai#getting-an-api-key',
    },
    {
      title: 'Supported Models',
      href: '/docs/models/openai#supported-models',
    },
    {
      title: 'Configuration in CodinIT',
      href: '/docs/models/openai#configuration-in-codinit',
    },
    {
      title: 'Tips and Notes',
      href: '/docs/models/openai#tips-and-notes',
    },
  ],
  'models/togetherai': [
    {
      title: 'Account and API Key Setup',
      href: '/docs/models/togetherai#step-1-create-your-together-ai-account-and-api-key',
      pages: [
        {
          title: 'Sign Up for Together AI',
          href: '/docs/models/togetherai#11-sign-up-for-together-ai',
        },
        {
          title: 'Generate Your API Key',
          href: '/docs/models/togetherai#12-generate-your-api-key',
        },
        {
          title: 'API Key Security',
          href: '/docs/models/togetherai#13-api-key-security-and-management',
        },
      ],
    },
    {
      title: 'Model Selection',
      href: '/docs/models/togetherai#step-2-explore-available-models-and-choose-your-configuration',
      pages: [
        {
          title: 'Open-Source Model Categories',
          href: '/docs/models/togetherai#21-open-source-model-categories',
        },
        {
          title: 'Model Selection Criteria',
          href: '/docs/models/togetherai#22-model-selection-criteria',
        },
        {
          title: 'Pricing Overview',
          href: '/docs/models/togetherai#23-pricing-and-performance-overview',
        },
      ],
    },
    {
      title: 'CodinIT Configuration',
      href: '/docs/models/togetherai#step-3-configure-the-codinit-vs-code-extension',
    },
    {
      title: 'Authentication Setup',
      href: '/docs/models/togetherai#step-4-authentication-and-environment-setup',
    },
    {
      title: 'Advanced Configuration',
      href: '/docs/models/togetherai#step-5-advanced-configuration-and-optimization',
    },
    {
      title: 'Enterprise Features',
      href: '/docs/models/togetherai#step-6-enterprise-features-and-considerations',
    },
  ],
  'models/vertex': [
    {
      title: 'Prepare GCP Environment',
      href: '/docs/models/vertex#step-1-prepare-your-gcp-environment',
      pages: [
        {
          title: 'Create or Use a GCP Project',
          href: '/docs/models/vertex#11-create-or-use-a-gcp-project',
        },
        {
          title: 'Set Up IAM Permissions',
          href: '/docs/models/vertex#12-set-up-iam-permissions-and-service-accounts',
        },
      ],
    },
    {
      title: 'Verify Regional Access',
      href: '/docs/models/vertex#step-2-verify-regional-and-model-access',
      pages: [
        {
          title: 'Choose and Confirm Region',
          href: '/docs/models/vertex#21-choose-and-confirm-a-region',
        },
        {
          title: 'Enable Claude Model',
          href: '/docs/models/vertex#22-enable-the-claude-35-sonnet-v2-model',
        },
      ],
    },
    {
      title: 'Configure CodinIT',
      href: '/docs/models/vertex#step-3-configure-the-codinit-vs-code-extension',
    },
    {
      title: 'Authentication Setup',
      href: '/docs/models/vertex#step-4-authentication-and-credentials-setup',
    },
    {
      title: 'Security & Best Practices',
      href: '/docs/models/vertex#step-5-security-monitoring-and-best-practices',
    },
  ],
};