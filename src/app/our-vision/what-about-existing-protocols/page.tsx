import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageNavigation } from '@/components/layout/page-navigation';
import Disclaimer from '@/components/layout/disclaimer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function ExistingProtocolsPage() {
  const data = [
    { feature: 'Textual addresses and names are natively UNICODE.', tcpv4: 'no', tcpv6: 'no', terra: 'yes' },
    {
      feature: 'Direction-of-read of textual addresses is:',
      tcpv4: 'small-to-large',
      tcpv6: 'small-to-large',
      terra: 'large-to-small',
    },
    { feature: 'Number of bits in digital address:', tcpv4: '32', tcpv6: '128', terra: '64' },
    { feature: 'Number of bytes in digital address:', tcpv4: '4', tcpv6: '16', terra: '8' },
    { feature: 'Regular address and current address of a node are disparate.', tcpv4: 'no', tcpv6: 'no', terra: 'yes' },
    { feature: 'Address resolution (DNS) is integrated into the stack.', tcpv4: 'no', tcpv6: 'no', terra: 'yes' },
    { feature: 'Multicast is integrated into the stack.', tcpv4: 'yes', tcpv6: 'yes', terra: 'yes' },
    { feature: 'Topology discovery is integrated into the stack.', tcpv4: 'no', tcpv6: 'no', terra: 'yes' },
    { feature: 'Route construction is integrated into the stack.', tcpv4: 'no', tcpv6: 'no', terra: 'yes' },
    { feature: 'Route construction performs large-scale load-balancing.', tcpv4: 'no', tcpv6: 'no', terra: 'yes' },
    { feature: 'Route construction permits arbitrary packet readdressing.', tcpv4: 'no', tcpv6: 'no', terra: 'yes' },
    {
      feature: 'Node maintains single address regardless of number of adapters.',
      tcpv4: 'no',
      tcpv6: 'no',
      terra: 'yes',
    },
    { feature: 'Security is integrated into the stack.', tcpv4: 'no', tcpv6: 'yes*', terra: 'yes' },
    { feature: 'Security typically requires certificates.', tcpv4: 'yes', tcpv6: 'yes', terra: 'no' },
    { feature: 'Connections are secure by default.', tcpv4: 'no', tcpv6: 'no', terra: 'yes' },
    { feature: 'Nodes are topologically mobile by default.', tcpv4: 'no', tcpv6: 'no', terra: 'yes' },
    { feature: 'Connections beteeen applications can be made by port name.', tcpv4: 'no', tcpv6: 'no', terra: 'yes' },
    {
      feature: 'Connections between applications can be made by port number.',
      tcpv4: 'yes',
      tcpv6: 'yes',
      terra: 'yes',
    },
    { feature: 'API permits out-of-band data.', tcpv4: 'yes', tcpv6: 'yes', terra: 'yes' },
    { feature: 'API permits transparent auto-re-resolution of connections.', tcpv4: 'no', tcpv6: 'no', terra: 'yes' },
    {
      feature: 'API makes gross distinction between reliable and unreliable connections.',
      tcpv4: 'yes',
      tcpv6: 'yes',
      terra: 'no',
    },
    {
      feature: 'Source of packets and target of packets can be different nodes in reliable connections.',
      tcpv4: 'no',
      tcpv6: 'no',
      terra: 'yes',
    },
    { feature: 'Connections are resistant to chaotic changes in path MTU.', tcpv4: 'no', tcpv6: 'yes', terra: 'yes' },
    { feature: 'Rate control is cooperative for nodes along multi-path.', tcpv4: 'no', tcpv6: 'no', terra: 'yes' },
    { feature: 'Packet header may vary in size.', tcpv4: 'yes', tcpv6: 'yes', terra: 'no' },
    { feature: 'Most features are functionly orthogonal.', tcpv4: 'yes', tcpv6: 'yes', terra: 'yes' },
  ];

  /*
    Textual addresses and names are natively UNICODE.	no	no	yes
Direction-of-read of textual addresses is:	small-to-large	small-to-large	large-to-small
Number of bits in digital address:	32	128	64
Number of bytes in digital address:	4	16	8
Regular address and current address of a node are disparate.	no	no	yes
Address resolution (DNS) is integrated into the stack.	no	no	yes
Multicast is integrated into the stack.	yes	yes	yes
Topology discovery is integrated into the stack.	no	no	yes
Route construction is integrated into the stack.	no	no	yes
Route construction performs large-scale load-balancing.	no	no	yes
Route construction permits arbitrary packet readdressing.	no	no	yes
Node maintains single address regardless of number of adapters.	no	no	yes
Security is integrated into the stack.	no	yes*	yes
Security typically requires certificates.	yes	yes	no
Connections are secure by default.	no	no	yes
Nodes are topologically mobile by default.	no	no	yes
Connections beteeen applications can be made by port name.	no	no	yes
Connections between applications can be made by port number.	yes	yes	yes
API permits out-of-band data.	yes	yes	yes
API permits transparent auto-re-resolution of connections.	no	no	yes
API makes gross distinction between reliable and unreliable connections.	yes	yes	no
Source of packets and target of packets can be different nodes in reliable connections.	no	no	yes
Connections are resistant to chaotic changes in path MTU.	no	yes	yes
Rate control is cooperative for nodes along multi-path.	no	no	yes
Packet header may vary in size.	yes	yes	no
Most features are functionly orthogonal.	yes	yes	yes

   */

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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Feature</TableHead>
                  <TableHead>TCP/IP4</TableHead>
                  <TableHead>TCP/IP6</TableHead>
                  <TableHead>TerraStack</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell className="font-medium overflow-auto whitespace-normal">{row.feature}</TableCell>
                    <TableCell>{row.tcpv4}</TableCell>
                    <TableCell>{row.tcpv6}</TableCell>
                    <TableCell>{row.terra}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
