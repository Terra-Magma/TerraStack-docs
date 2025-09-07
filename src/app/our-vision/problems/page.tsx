import Link from 'next/link';
import { TableOfContents } from '@/components/layout/table-of-contents';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageNavigation } from '@/components/layout/page-navigation';
import Disclaimer from '@/components/layout/disclaimer';

export default function ProblemsPage() {
  const tableOfContents = [
    { id: 'problems', title: 'Problems', level: 2 },
    { id: 'addressing', title: 'Addressing', level: 3 },
    { id: 'naming', title: 'Naming', level: 3 },
    { id: 'numbering', title: 'Numbering', level: 3 },
    { id: 'reliability', title: 'Reliability', level: 3 },
    { id: 'prioritization', title: 'Prioritization', level: 3 },
    { id: 'security', title: 'Security', level: 3 },
    { id: 'mobility', title: 'Mobility', level: 3 },
    { id: 'multicast', title: 'Multicast', level: 3 },
    { id: 'api', title: 'API', level: 3 },
  ];

  return (
    <div className="m-4 vision flex justify-center">
      <div className="flex-1 px-6 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Our Vision', href: '/our-vision' },
            { label: 'Problems', href: '/our-vision/problems', current: true },
          ]}
        />
        <div className="row">
          <div className="col text-center">
            <h1 id="problems">Problems</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className={'body-text'}>
              Most complex problems in engineering consist of a surprisingly number of smaller sub-problems. Internet
              architecture is no different. If one had to pick how many sub-problems there are in network protocol
              stacks, &quot;10&quot; would be a good guess. But the sub-problems <i>are</i> complex, so we illustrate
              them by way of fictional actions of fictional internet users.
            </p>
            <h2 id="addressing">Addressing</h2>
            <p className={'body-text'}>
              Two friends, Alpha and Beta, take different cruise ships from different respective ports of departure to
              meet at{' '}
              <Link
                target="_blank"
                href="https://en.wikipedia.org/wiki/Nassau,_Bahamas"
              >
                Nassau
              </Link>
              ,{' '}
              <Link
                target="_blank"
                href="https://en.wikipedia.org/wiki/The_Bahamas"
              >
                The Bahamas
              </Link>
              . While in route, Alpha decides to use the .mp3-playback application on his smartphone to listen to .mp3
              files on the mass storage device of Beta’s smartphone with no mediating cloud storage server. The
              addressing scheme that identifies both smartphones to the .mp3 client application and server applications
              so that a connection between the devices can be established is the{' '}
              <Link
                target="_blank"
                href="https://en.wikipedia.org/wiki/Network_address"
              >
                addressing problem
              </Link>
              .
            </p>
            <h2 id="naming">Naming</h2>
            <p className={'body-text'}>
              The .mp3-playback client should have a means of specifying which server application on Beta’s smartphone
              should be the focus of a connection. Identifying the .mp3-playback server application using an identifier
              that is easily remembered by humans is one aspect the{' '}
              <Link
                target="_blank"
                href="https://en.wikipedia.org/wiki/Computer_network_naming_scheme"
              >
                naming
              </Link>{' '}
              problem.
            </p>
            <h2 id="numbering">Numbering</h2>
            <p className={'body-text'}>
              The .mp3-playback client should have a means of specifying which server application on Beta’s smartphone
              should be the focus of a connection. Identifying the .mp3-playback server application using an identifier
              that is easily efficiently manipulated by computers is one aspect the numbering problem.
            </p>
            <h2 id="reliability">Reliability</h2>
            <p className={'body-text'}>
              The free Wi-Fi access point near Beta on Beta’s ship is so popular, it becomes nearly saturated. Packets
              become lost, corrupted, reordered, replicated, and delayed. Maintaining the semblance of faultless
              continuity of the data stream is the{' '}
              <Link
                target="_blank"
                href="https://en.wikipedia.org/wiki/Reliability_(computer_networking)"
              >
                reliability
              </Link>{' '}
              problem.
            </p>
            <h2 id="prioritization">Prioritization</h2>
            <p className={'body-text'}>
              While Alpha is listening to one of Beta’s .mp3 files, Beta receives an important phone call from her
              mother. Prioritizing the voice stream over the .mp3-playback stream to minimize the delay that the voice
              packets experience in Beta’s smartphone, as well as every Internet net node between Beta’s smartphone and
              her mother’s, if the <strong>prioritization</strong> problem, also known as the{' '}
              <Link
                target="_blank"
                href="https://en.wikipedia.org/wiki/Quality_of_service"
              >
                quality of service
              </Link>{' '}
              problem.
            </p>
            <h2 id="security">Security</h2>
            <p className={'body-text'}>
              Beta’s mother has the intention of reading back private information over the voice connection, securely.
              Being able to establish a secure connection between two smartphones, where information can be both veiled
              and signed, independently, using only the addresses of the respective nodes, is the security problem.
            </p>
            <h2 id="mobility">Mobility</h2>
            <p className={'body-text'}>
              The saturated Wi-Fi access point becomes too much for Beta to bear. Beta instinctively walks away from the
              area of congestion, along the deck of the ship, not realizing that, while encircling the ship, she makes
              and breaks connections with no less than 20 different WiFi access points. There is no detectable
              interruption of the voice connection, nor of the .mp3 playback, and the paths between Beta’s smartphone,
              and Alpha’s, remains optimal, as does the path between Beta’s smartphone and her mother’s. While in
              motion, Beta’s grandmother joins the conversation by specifying the address of Beta’s smartphone before
              dialing. Meanwhile, both Alpha’s ship and Beta’s ship cruise close to shore, making and breaking their own
              wireless connections from ship to shore. No networked device on either ship experiences interruption.
              Maintaining all active connections seamlessly, while allowing new connections with almost all devices in
              motion, including, perhaps, those nodes that are responsible for address resolution, simultaneously, with
              or without security, multicast, or any other feature active, is the mobility problem.
            </p>
            <h2 id="multicast">Multicast</h2>
            <p className={'body-text'}>
              Suddenly, near Beta’s ship, out of the ocean arises the mythological beast,{' '}
              <Link
                target="_blank"
                href="https://en.wikipedia.org/wiki/Kraken"
              >
                The Kraken
              </Link>
              . Beta aims her smartphone to collect real-time video of the beast, and sends a text message to Alpha, who
              starts watching the video on his smartphone. Others on Alpha’s ship gather around his smartphone, see the
              beast, then decide that they, too, want to watch, but using their own in-room monitors, simply by
              specifying a URL-like path to Beta’s video feed. Several hundred passengers on Alpha’s ship watch the
              beast on Beta’s smartphone, simultaneously, on several hundred different devices, until word gets back to
              the mainland of USA, then the world, at which point, 1,000,000,000 people suddenly start watching the
              beast through various Internet-connected devices. Allowing nominally 1,000,000,000 people to receive the
              stream of a single, relatively feeble source, that might or might not be mobile, without interruption, and
              without having to rely on a proprietary streaming, cloud, or edge service, is the multicast problem.
            </p>
            <h2 id="api">API</h2>
            <p className={'body-text'}>
              Providing a programmer’s network application API that allows a relatively inexperienced high-school
              student to be the author of the 1,000,000,000–user video streaming application, with mobility of both
              source of feed and many of the 1,000,000,000 target nodes to be mobile, simultaneously, perhaps with
              security, with confidence that the logic of the application is correct, is the programmer’s API problem.
            </p>
          </div>
        </div>
        <PageNavigation
          prev={{ title: 'A Brief History', href: '/our-vision/history' }}
          next={{ title: 'Solutions', href: '/our-vision/solutions' }}
        />
        <Disclaimer />
      </div>
      <div className="hidden xl:block w-64 flex-shrink-0">
        <div className="sticky top-24 p-6">
          <TableOfContents items={tableOfContents} />
        </div>
      </div>
    </div>
  );
}
