'use client';

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/theme-toggle';
import { ChevronDownIcon, Menu, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import DevelopmentButton from '@/components/ui/DevelopmentButton';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import GithubButton from '@/components/layout/github-button';
import './header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const [navMenuOpenProducts, setNavMenuOpenProducts] = React.useState(false);
  const [navMenuOpenVision, setNavMenuOpenVision] = React.useState(false);
  const [navMenuOpenAdoption, setNavMenuOpenAdoption] = React.useState(false);

  const items = [
    { title: 'Packages', href: '/packages' },
    {
      title: 'Products',
      href: '/products',
      children: [{ title: 'TerraStack', href: '/terrastack' }],
      menuOpen: navMenuOpenProducts,
      setNavMenuOpen: setNavMenuOpenProducts,
    },
    { title: 'Services', href: '/services' },
    { title: 'Support', href: '/support' },
    { title: 'Documentation', href: '/docs' },
    {
      title: 'Vision',
      href: '/our-vision',
      children: [
        { title: 'A Brief History', href: '/our-vision/history' },
        { title: 'Problems', href: '/our-vision/problems' },
        { title: 'Solution', href: '/our-vision/solution' },
        { title: 'Supported Platforms', href: '/our-vision/supported-platforms' },
        { title: 'Existing Protocols', href: '/our-vision/what-about-existing-protocols' },
        { title: 'Schedule', href: '/our-vision/schedule' },
      ],
      menuOpen: navMenuOpenVision,
      setNavMenuOpen: setNavMenuOpenVision,
    },
    {
      title: 'Adoption',
      href: '/adoption',
      children: [
        { title: 'Early Adoption', href: '/adoption/early-adoption' },
        { title: 'Current Adoption', href: '/adoption/current-adoption' },
      ],
      menuOpen: navMenuOpenAdoption,
      setNavMenuOpen: setNavMenuOpenAdoption,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-6">
        <div className="flex items-center gap-6 flex-1">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TS</span>
            </div>
            <span className="font-semibold text-lg">TerraMagma</span>
          </Link>
          <NavigationMenu
            className="hidden lg:flex"
            viewport={false}
          >
            <NavigationMenuList>
              {items.map(
                (item) =>
                  (item.children && (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuTrigger style={{ color: 'var(--primary-hover)' }}>
                        <Link href={item.href}>{item.title}</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-4">
                          {item.children.map((child) => (
                            <li
                              key={child.href}
                              className="m-0"
                            >
                              <NavigationMenuLink asChild>
                                <Link href={child.href}>{child.title}</Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )) || (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link href={item.href}>{item.title}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
              )}
              <NavigationMenuItem>
                <div key={'component-testing'}>
                  <DevelopmentButton
                    link={'/component-testing'}
                    title={'Component Testing'}
                  />
                </div>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 relative">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              className="w-64 pl-10"
            />
          </div>
          <GithubButton />
          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn('lg:hidden border-t bg-background/95 backdrop-blur', isMenuOpen ? 'block' : 'hidden')}>
        <nav className="container px-6 py-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              className="pl-10"
            />
          </div>
          <div className="space-y-2">
            {items.map(
              (item) =>
                (item.children && (
                  <div key={item.href}>
                    <div
                      key={item.href}
                      className=" py-2 hover:text-primary text-magma transition-colors flex items-center group cursor-pointer"
                      onClick={() => item.setNavMenuOpen!(!item.menuOpen)}
                    >
                      {item.title}
                      <ChevronDownIcon
                        className={cn(
                          'relative top-[1px] ml-1 size-3 transition duration-300',
                          item.menuOpen ? 'rotate-180' : ''
                        )}
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className={cn('animated-div flex flex-col')}
                      style={
                        item.menuOpen
                          ? {
                              height: `${item.children.length * 36}px`,
                            }
                          : {}
                      }
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn('!py-2 ml-5 text-sm transition-colors group cursor-pointer nav-item')}
                          onClick={() => {
                            item.setNavMenuOpen!(false);
                            setIsMenuOpen(false);
                          }}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                    <div className={cn(item.menuOpen ? '' : 'hidden', 'animate-shadow')}></div>
                  </div>
                )) || (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 transition-colors nav-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
