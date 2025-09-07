import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageNavigation } from '@/components/layout/page-navigation';
import Disclaimer from '@/components/layout/disclaimer';

export default function ExistingProtocolsPage() {
  return (
    <div className="m-4 vision flex justify-center">
      <div className="flex-1 px-6 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Our Vision', href: '/our-vision' },
            {
              label: 'What About TCP/UDP/IPv4/IPv6?',
              href: '/our-vision/what-about-existing-protocols',
              current: true,
            },
          ]}
        />
        <div className="row">
          <div className="col text-center">
            <h1>What About TCP/UDP/IPv4/IPv6?</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>TCP/IPv4</th>
                  <th>TCP/IPv6</th>
                  <th>Terra Stack</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Textual addresses and names are natively{' '}
                    <Link
                      target="_blank"
                      href="https://home.unicode.org/"
                    >
                      UNICODE
                    </Link>
                    .
                  </td>
                  <td>no</td>
                  <td>no</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>Direction-of-read of textual addresses is:</td>
                  <td>small-to-large</td>
                  <td>small-to-large</td>
                  <td>large-to-small</td>
                </tr>
                <tr>
                  <td>Number of bits in digital address:</td>
                  <td>32</td>
                  <td>128</td>
                  <td>64</td>
                </tr>
                <tr>
                  <td>Number of bytes in digital address:</td>
                  <td>4</td>
                  <td>16</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Regular address and current address of a node are disparate.</td>
                  <td>no</td>
                  <td>no</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>
                    Address resolution (
                    <Link
                      target="_blank"
                      href="https://en.wikipedia.org/wiki/Domain_Name_System"
                    >
                      DNS
                    </Link>
                    ) is integrated into the stack.
                  </td>
                  <td>no</td>
                  <td>no</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>Multicast is integrated into the stack.</td>
                  <td>yes</td>
                  <td>yes</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>
                    <Link
                      target="_blank"
                      href="https://en.wikipedia.org/wiki/Network_topology"
                    >
                      Topology discovery
                    </Link>{' '}
                    is integrated into the stack.
                  </td>
                  <td>no</td>
                  <td>no</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>Route construction is integrated into the stack.</td>
                  <td>no</td>
                  <td>no</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>Route construction performs large-scale load-balancing.</td>
                  <td>no</td>
                  <td>no</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>Route construction permits arbitrary packet readdressing.</td>
                  <td>no</td>
                  <td>no</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>Node maintains single address regardless of number of adapters.</td>
                  <td>no</td>
                  <td>no</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>Security is integrated into the stack.</td>
                  <td>no</td>
                  <td>yes*</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>
                    Security typically requires{' '}
                    <Link
                      target="_blank"
                      href="https://en.wikipedia.org/wiki/Public_key_certificate"
                    >
                      certificates
                    </Link>
                    .
                  </td>
                  <td>yes</td>
                  <td>yes</td>
                  <td>no</td>
                </tr>
                <tr>
                  <td>Connections are secure by default.</td>
                  <td>no</td>
                  <td>no</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>Nodes are topologically mobile by default.</td>
                  <td>no</td>
                  <td>no</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>Connections beteeen applications can be made by port name.</td>
                  <td>no</td>
                  <td>no</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>Connections between applications can be made by port number.</td>
                  <td>yes</td>
                  <td>yes</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>API permits out-of-band data.</td>
                  <td>yes</td>
                  <td>yes</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>API permits transparent auto-re-resolution of connections.</td>
                  <td>no</td>
                  <td>no</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>API makes gross distinction between reliable and unreliable connections.</td>
                  <td>yes</td>
                  <td>yes</td>
                  <td>no</td>
                </tr>
                <tr>
                  <td>Source of packets and target of packets can be different nodes in reliable connections.</td>
                  <td>no</td>
                  <td>no</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>
                    Connections are resistant to chaotic changes in path{' '}
                    <Link
                      target="_blank"
                      href="https://en.wikipedia.org/wiki/Maximum_transmission_unit"
                    >
                      MTU
                    </Link>
                    .
                  </td>
                  <td>no</td>
                  <td>yes</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>Rate control is cooperative for nodes along multi-path.</td>
                  <td>no</td>
                  <td>no</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>Packet header may vary in size.</td>
                  <td>yes</td>
                  <td>yes</td>
                  <td>no</td>
                </tr>
                <tr>
                  <td>Most features are functionly orthogonal.</td>
                  <td>yes</td>
                  <td>yes</td>
                  <td>yes</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
        <PageNavigation
          next={{ title: 'Schedule', href: '/our-vision/schedule' }}
          prev={{ title: 'Supported Platforms', href: '/our-vision/supported-platforms' }}
        />
        <Disclaimer />
      </div>
    </div>
  );
}
