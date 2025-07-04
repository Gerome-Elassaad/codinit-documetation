'use client';

import Link from 'next/link';
import { allDocs } from 'contentlayer/generated';
import SearchDialog from '@/components/search-dialog';
import { sidebarNav } from 'config/sidebar';
import Image from 'next/image';
import {
  SidebarProvider,
  SidebarLayout,
  Sidebar,
  MainContent,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenuItem,
  SidebarTrigger,
  UserAvatar,
  NestedLink,
} from '@/components/sidebar';
import { GithubIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import Header from '@/components/header';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/button';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from '@/components/logo';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isMobile = useIsMobile();
  return (
    <SidebarLayout>
      {/* Left Sidebar Provider */}
      <SidebarProvider
        defaultOpen={isMobile ? false : true}
        defaultSide="left"
        defaultMaxWidth={280}
        showIconsOnCollapse={true}
      >
        <Sidebar>
          <SidebarHeader className="flex justify-center items-center">
            <Link href={'/'} className="flex items-center">
              <Logo />
            </Link>
          </SidebarHeader>
          <SidebarContent>
            {sidebarNav.map((section) => (
              <SidebarMenuItem
                isCollapsable={section.pages && section.pages.length > 0}
                key={section.title}
                label={section.title}
                icon={section.icon}
                defaultOpen={section.defaultOpen}
              >
                {section.pages?.map((page) => (
                  <NestedLink key={page.href} href={page.href}>
                    {page.title}
                  </NestedLink>
                ))}
              </SidebarMenuItem>
            ))}
          </SidebarContent>

          <SidebarFooter>
            <UserAvatar>
              {<Image alt="logo" src={'/logo.png'} width={100} height={100} />}
            </UserAvatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900 dark:text-white"></span>
              <span className="text-xs text-gray-500 dark:text-gray-400"></span>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <MainContent>
          <Header className="justify-between py-2">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-xl font-bold">Documentation</h1>
            </div>
            <div className="flex gap-2 items-center pr-0 lg:pr-8">
              <SearchDialog searchData={allDocs} />
              <ModeToggle />
              <Button
                onClick={() =>
                  router.push('https://github.com/Gerome-Elassaad/codinit-docs')
                }
              >
                <GithubIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
              </Button>
            </div>
          </Header>
          {/* <div className={`grid xl:grid xl:grid-cols-[1fr_270px]`}> */}
          <main className="overflow-auto p-6">{children}</main>
        </MainContent>
      </SidebarProvider>

      {/* Right Sidebar Provider */}
      {/* <SidebarProvider defaultOpen={false} defaultSide="right" defaultMaxWidth={300} showIconsOnCollapse={true}>
        <Sidebar>
          <SidebarHeader>
            <SidebarTrigger />
            <Title>Documentation</Title>
            <BookOpen className="h-5 w-5" />
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem icon={<BookOpen className="h-5 w-5" />} label="Getting Started" href="/docs/getting-started" />
              <SidebarMenuItem icon={<Settings className="h-5 w-5" />} label="Configuration" href="/docs/configuration" />
              <SidebarMenuItem icon={<FileText className="h-5 w-5" />} label="API Reference" defaultOpen={true}>
                <NestedLink href="/docs/api/overview">Overview</NestedLink>
                <NestedLink href="/docs/api/endpoints">Endpoints</NestedLink>
                <NestedLink href="/docs/api/authentication">Authentication</NestedLink>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter>
            <div className="text-sm text-gray-500">v1.0.0</div>
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider> */}
    </SidebarLayout>
  );
}
