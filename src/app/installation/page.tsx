import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { TableOfContents } from '@/components/layout/table-of-contents';
import { PageNavigation } from '@/components/layout/page-navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Download, Settings, Terminal } from 'lucide-react';

const tableOfContents = [
  { id: 'system-requirements', title: 'System Requirements', level: 2 },
  { id: 'installation-methods', title: 'Installation Methods', level: 2 },
  { id: 'package-manager', title: 'Package Manager', level: 3 },
  { id: 'manual-installation', title: 'Manual Installation', level: 3 },
  { id: 'verification', title: 'Verification', level: 2 },
  { id: 'next-steps', title: 'Next Steps', level: 2 },
];

export default function InstallationPage() {
  return (
    <div className="flex">
      <div className="flex-1 px-6 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Documentation', href: '/' },
            { label: 'Installation', href: '/installation', current: true },
          ]}
        />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <Badge
              variant="secondary"
              className="text-sm"
            >
              Getting Started
            </Badge>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-4">Installation Guide</h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Get TerraStack up and running on your system. This guide covers installation on all supported platforms with
            multiple installation methods.
          </p>

          <section
            id="system-requirements"
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6">System Requirements</h2>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Linux</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• Ubuntu 18.04+ / RHEL 8+ / Debian 10+</p>
                  <p>• 2GB RAM minimum</p>
                  <p>• 1GB disk space</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">macOS</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• macOS 10.15 (Catalina) or later</p>
                  <p>• 2GB RAM minimum</p>
                  <p>• 1GB disk space</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Windows</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• Windows 10 version 1903+</p>
                  <p>• 4GB RAM minimum</p>
                  <p>• 2GB disk space</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section
            id="installation-methods"
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6">Installation Methods</h2>

            <Tabs
              defaultValue="package-manager"
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="package-manager">Package Manager</TabsTrigger>
                <TabsTrigger value="manual">Manual Installation</TabsTrigger>
              </TabsList>

              <TabsContent
                value="package-manager"
                className="mt-6"
              >
                <div id="package-manager">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Package Manager Installation
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3">Ubuntu / Debian</h4>
                      <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Terminal className="h-4 w-4" />
                          <span className="text-muted-foreground">Terminal</span>
                        </div>
                        <div className="space-y-1">
                          <div>
                            $ curl -fsSL https://dl.terrastack.io/gpg | sudo gpg --dearmor -o
                            /usr/share/keyrings/terrastack.gpg
                          </div>
                          <div>
                            $ echo &quot;deb [signed-by=/usr/share/keyrings/terrastack.gpg] https://dl.terrastack.io/apt
                            stable main&quot; | sudo tee /etc/apt/sources.list.d/terrastack.list
                          </div>
                          <div>$ sudo apt update && sudo apt install terrastack</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">macOS (Homebrew)</h4>
                      <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Terminal className="h-4 w-4" />
                          <span className="text-muted-foreground">Terminal</span>
                        </div>
                        <div className="space-y-1">
                          <div>$ brew tap terrastack/tap</div>
                          <div>$ brew install terrastack</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Windows (Chocolatey)</h4>
                      <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Terminal className="h-4 w-4" />
                          <span className="text-muted-foreground">PowerShell</span>
                        </div>
                        <div>PS&gt; choco install terrastack</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="manual"
                className="mt-6"
              >
                <div id="manual-installation">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Manual Installation
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <p className="text-sm">
                        <strong>Note:</strong> Manual installation gives you more control but requires additional
                        configuration steps. We recommend using package managers for most users.
                      </p>
                    </div>

                    <ol className="space-y-4 text-sm">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-medium text-xs">
                          1
                        </span>
                        <div>
                          <p className="font-medium">Download the latest release</p>
                          <p className="text-muted-foreground mt-1">
                            Visit our releases page and download the appropriate binary for your platform.
                          </p>
                        </div>
                      </li>

                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-medium text-xs">
                          2
                        </span>
                        <div>
                          <p className="font-medium">Extract and install</p>
                          <div className="bg-muted rounded-lg p-3 font-mono text-xs mt-2">
                            $ tar -xzf terrastack-v1.0.0-linux-amd64.tar.gz
                            <br />$ sudo mv terrastack /usr/local/bin/
                          </div>
                        </div>
                      </li>

                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-medium text-xs">
                          3
                        </span>
                        <div>
                          <p className="font-medium">Make executable</p>
                          <div className="bg-muted rounded-lg p-3 font-mono text-xs mt-2">
                            $ sudo chmod +x /usr/local/bin/terrastack
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <section
            id="verification"
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Verification
            </h2>

            <p className="text-muted-foreground mb-4">
              Verify that TerraStack is installed correctly by running the version command:
            </p>

            <div className="bg-muted rounded-lg p-4 font-mono text-sm mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="h-4 w-4" />
                <span className="text-muted-foreground">Terminal</span>
              </div>
              <div>$ terrastack --version</div>
              <div className="text-green-600 mt-1">TerraStack v1.0.0 (build: a1b2c3d)</div>
            </div>

            <p className="text-sm text-muted-foreground">
              If you see the version information, TerraStack has been installed successfully!
            </p>
          </section>

          <section
            id="next-steps"
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Start Guide</CardTitle>
                  <CardDescription>Get your first TerraStack network up and running in minutes</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Configuration</CardTitle>
                  <CardDescription>Learn how to configure TerraStack for your specific needs</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>
        </div>

        <PageNavigation
          prev={{ title: 'Introduction', href: '/' }}
          next={{ title: 'Quick Start', href: '/quick-start' }}
        />
      </div>

      <div className="hidden xl:block w-64 flex-shrink-0">
        <div className="sticky top-24 p-6">
          <TableOfContents items={tableOfContents} />
        </div>
      </div>
    </div>
  );
}
