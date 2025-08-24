'use client';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useEffect } from 'react';

export default function ComponentTesting() {
  const env = process.env.NODE_ENV;

  useEffect(() => {
    if (env !== 'development') {
      window.location.href = '/404';
    }
  }, [env]);

  if (env !== 'development') {
    return null;
  }

  return (
    <div className="px-6 py-8 flex flex-col gap-4">
      <h1 className={'text-4xl font-bold text-foreground mb-4'}>Component Testing Page</h1>
      <div className={'flex flex-col gap-4 w-3xs p-4 rounded-lg bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] '}>
        <h2 className={'text-2xl font-bold text-foreground mb-2'}>Buttons</h2>
        <Button>Default Button</Button>
        <Button variant={'ghost'}>Ghost Button</Button>
        <Button variant={'link'}>Link Button</Button>
        <Button variant={'outline'}>Outline Button</Button>
        <Button variant={'secondary'}>Secondary Button</Button>
        <Button variant={'destructive'}>Destructive Button</Button>
      </div>
      <div className={'flex flex-col gap-4 w-sm p-4 rounded-lg bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] '}>
        <h2 className={'text-2xl font-bold text-foreground mb-2'}>Breadcrumb</h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="size-4" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                  <DropdownMenuItem>Themes</DropdownMenuItem>
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/docs/components">Components</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
