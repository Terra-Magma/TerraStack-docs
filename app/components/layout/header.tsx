import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { ChevronDownIcon, Menu, Search, X } from 'lucide-react';
import { cn } from '~/lib/utils';
import DevelopmentButton from '~/components/ui/DevelopmentButton';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/components/ui/navigation-menu';
import GithubButton from '~/components/layout/github-button';
import './header.css';
import { ThemeToggle } from '~/components/theme-toggle';
import { Link, useLocation } from 'react-router';

export interface HeaderProps {
  title: string;
  icon?: React.ReactNode;
  items: NavItem[];
  root: boolean;
  prefix?: string;
}

export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
  menuOpen?: boolean;
  setNavMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header(props: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [hideMainMenu, setHideMainMenu] = useState(false);
  const [headerCount, setHeaderCount] = useState(1);
  const location = useLocation();

  useEffect(() => {
    setHeaderCount(document.querySelectorAll('header').length);
    window.addEventListener('scroll', pop);

    return () => window.removeEventListener('scroll', pop);
  });

  const pop = () => {
    if (headerCount > 1 && window.scrollY > 64) setHideMainMenu(true);
    else setHideMainMenu(false);
  };

  return (
    <header
      className={cn(
        'w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60',
        props.root && (headerCount > 1 ? 'absolute top-0' : 'fixed top-0'),
        !props.root && (hideMainMenu ? 'fixed top-0' : 'absolute top-16')
      )}
    >
      <div className="container flex h-16 items-center px-6">
        <div className="flex items-center gap-6 flex-1">
          <Link
            to="/"
            className="flex items-center gap-3 no-underline"
          >
            {((props.icon || props.root) && (
              <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TS</span>
              </div>
            )) ||
              props.icon || <div className="w-8 h-8" />}
            <span className="font-semibold text-lg">{props.title}</span>
          </Link>
          <NavigationMenu
            className="hidden lg:flex"
            viewport={false}
          >
            <NavigationMenuList>
              {props.items.map(
                (item) =>
                  (item.children && (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuTrigger className="text-primary-hover bg-transparent nav-item text-base! font-normal">
                        <Link to={(props.prefix ?? '') + item.href}>{item.title}</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="z-50">
                        <ul className="grid w-[200px] gap-4 z-50">
                          {item.children.map((child) => (
                            <li
                              key={child.href}
                              className="m-0"
                            >
                              <NavigationMenuLink asChild>
                                <Link
                                  className="nav-item"
                                  to={child.href}
                                >
                                  {child.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )) || (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink
                        asChild
                        className="px-4! py-2! rounded-md!"
                      >
                        <Link
                          className="nav-item text-base!"
                          to={(props.prefix ?? '') + item.href}
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
              )}
              {props.root && (
                <NavigationMenuItem>
                  <div key={'component-testing'}>
                    <DevelopmentButton
                      link={'/component-testing'}
                      title={'Component Testing'}
                    />
                  </div>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {props.root && (
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
        )}
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
          <div>
            {props.items.map(
              (item) =>
                (item.children && (
                  <div key={item.href}>
                    <div
                      key={item.href}
                      className="text-primary transition-colors flex items-center group cursor-pointer hover:bg-accent rounded-sm p-2"
                      onClick={() => item.setNavMenuOpen!(!item.menuOpen)}
                    >
                      {item.title}
                      <ChevronDownIcon
                        className={cn(
                          'relative top-px ml-1 size-3 transition duration-300',
                          item.menuOpen ? 'rotate-180' : ''
                        )}
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className={cn('px-2 animated-div flex flex-col')}
                      style={
                        item.menuOpen
                          ? {
                              height: `${item.children.length * 40}px`,
                            }
                          : {}
                      }
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={cn(
                            'text-sm transition-colors group cursor-pointer nav-item hover:bg-accent rounded-sm p-2!'
                          )}
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
                    to={(props.prefix ?? '') + item.href}
                    className="block transition-colors nav-item  hover:bg-accent rounded-sm p-2"
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
