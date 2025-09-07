import Link from 'next/link';
import { TableOfContents } from '@/components/layout/table-of-contents';

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
        <div className="row">
          <div className="col text-center">
            <h1 id="problems">Problems</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              Most complex problems in engineering consist of a surprisingly number of smaller sub-problems. Internet
              architecture is no different. If one had to pick how many sub-problems there are in network protocol
              stacks, &quot;10&quot; would be a good guess. But the sub-problems <i>are</i> complex, so we illustrate
              them by way of fictional actions of fictional internet users.
            </p>
            <h2 id="addressing">Addressing</h2>
            <p>
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
            <p>
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
            <p>
              The .mp3-playback client should have a means of specifying which server application on Beta’s smartphone
              should be the focus of a connection. Identifying the .mp3-playback server application using an identifier
              that is easily efficiently manipulated by computers is one aspect the numbering problem.
            </p>
            <h2 id="reliability">Reliability</h2>
            <p>
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
            <p>
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
            <p>
              Beta’s mother has the intention of reading back private information over the voice connection, securely.
              Being able to establish a secure connection between two smartphones, where information can be both veiled
              and signed, independently, using only the addresses of the respective nodes, is the security problem.
            </p>
            <h2 id="mobility">Mobility</h2>
            <p>
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
            <p>
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
            <p>
              Providing a programmer’s network application API that allows a relatively inexperienced high-school
              student to be the author of the 1,000,000,000–user video streaming application, with mobility of both
              source of feed and many of the 1,000,000,000 target nodes to be mobile, simultaneously, perhaps with
              security, with confidence that the logic of the application is correct, is the programmer’s API problem.
            </p>
            <h1 id="solutions">Solutions</h1>
            <p>To solve the clean-slate Internet problem, we adopt the following management principles:</p>
            <ol>
              <li>Ignore existing users and hope that they realize that ignoring them now will benefit them later.</li>
              <li>
                Start with a true clean-slate. Avoid trying to salvage elements of existing protocols. Virtuous elements
                of existing protocols, such as the{' '}
                <Link
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/End-to-end_principle"
                >
                  end-to-end principle
                </Link>
                , will reassert themselves automatically in the new protocol on their own merit.{' '}
              </li>
              <li>
                Address all of the major problems at once. Counterintuitively, this causes primitive solutions to impose
                mutual constraints on each other that forces them to assume their mutually-cooperative form, thereby
                preventing the researcher from constructing a partial set of primitives that turn-out to be incompatible
                with not-yet-developed primitives.
              </li>
              <li>
                Code first, paper later. If the code works, viability of a paper proposal ceases to be a question.
              </li>
              <li>
                Reconsider existing users, and make-sure to accommodate them by integrating the new with the old as
                painlessly as possible.
              </li>
              <li>Incorporate feedback from existing users into specification.</li>
              <li>Let experts finish the final form.</li>
            </ol>
            <p>Next, we adopt the following technical principles:</p>
            <ol>
              <li>Eliminate the distinction between nodes and routers and servers. Just make everything a node.</li>
              <li>
                Begin with making the protocol stack a user-mode multi-threaded application that is
                architecturally-lateral instead of subordinate, as is done in TCP/IP and most other protocol stacks, to
                other applications that are executed by the operating system.
              </li>
              <li>
                Add a GUI for human configuration and observation. Structure stack as both client and a server itself,
                so that it may be configured and observed by peer stacks.
              </li>
              <li>Structure the stack so that the presence of a GUI does no interfere with, for example, routing.</li>
              <li>
                Combat complexity with rich, object-oriented data structures, but ensure a good balance between
                performance and ease of programming.
              </li>
              <li>
                Keep the code portable, but when it comes to (computationally expensive) crytographic operations, be
                fiendishly opportunistic.
              </li>
            </ol>
            <h2 id="addressing-1">Addressing</h2>
            <p>To solve the addressing problem, we note the following maxim:</p>
            <p>
              <i>Language shapes the way we think, and determines what we can think about.</i> - Benjamin Lee Whorf.
            </p>
            <p>If we heed this maxim, we might follow with:</p>
            <p>
              <i>To solve, correctly, the naming problem, one must, correctly, name the problem.</i>
            </p>
            <p>
              So-called{' '}
              <Link
                target="_blank"
                href="https://en.wikipedia.org/wiki/Fully_qualified_domain_name"
              >
                fully qualified domain names (FQDN)
              </Link>{' '}
              are not really names. www.whitehouse.gov does not denote a name. It denotes an address. Thus, what we have
              long been calling domain names are actually addresses. This seemingly trivial nitick is not trivial at
              all.
            </p>
            <p>
              But if FQDN&apos;s are actually addresses, and IP address are addresses, then these two types of
              identfiers have the same referencing power, and are paraellel conceptual alternatives.
            </p>
            <p>
              Both of these forms are capable of unambiguosly identifying a location. Which form should be employed is
              determined by context: Humans do well with textual addresses because they are easier to remember.
              Computers do well with digital addresses because they are efficient to store and process.
            </p>
            <h2 id="naming-1">Naming</h2>
            <p>
              Once we have recognized textual address as the proper term for an unambiguous identifier within a global
              space, the next question becomes: What do we call the individual components of a textual address? They are
              names. These names are their own first-class primitives. whitehouse is a name.
            </p>
            <h2 id="numbering-1">Numbering</h2>
            <p>
              If textual addresses are composed of names, then what are digital addresses composed of? They are composed
              of numbers. These numbers are their own first-class primitives.
            </p>
            <h2 id="reliability-1">Reliability</h2>
            <p>To Be Done.</p>
            <h2 id="routing">Routing</h2>
            <p>To Be Done.</p>
            <h2 id="prioritization-1">Prioritization</h2>
            <p>To Be Done.</p>
            <h2 id="security-1">Security</h2>
            <p>To Be Done.</p>
            <h2 id="mobility-1">Mobility</h2>
            <p>
              The{' '}
              <Link
                target="_blank"
                href="https://en.wikipedia.org/wiki/Vehicle-to-everything"
              >
                Vehicle-To-Everything (V2X)
              </Link>{' '}
              industry, projected to grow to a market size of{' '}
              <Link
                target="_blank"
                href="https://straitsresearch.com/report/automotive-v2x-market"
              >
                $36 billion by 2031
              </Link>
              , depends upon mobility. In fact, essence of V2X is the mobility problem in disguise. If one solves the
              mobility problem, one solves the core of the V2X problem.
            </p>
            <h2 id="multicast-1">Multicast</h2>
            <p>To Be Done.</p>
            <h2 id="api-1">API</h2>
            <p>To Be Done.</p>
            <h1 id="supported-platforms">Supported Platforms</h1>
            <ol>
              <li>
                Microsoft Windows is supported first (but not because it is the ideal OS for network protocol stacks).
              </li>
              <li>
                Linux will be included. Linux <i>is</i> the ideal OS for network protocol stacks. We expect Linux to run
                our carrier-grade equipment and mobile nodes.
              </li>
              <li>
                MacOS will be included. We would like to make it easier for Mac nodes to interact with non-Mac nodes.
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/ESP32"
                >
                  ESP32
                </Link>{' '}
                will be included. No other IoT device has such a high ratio of feature-set/cost.
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Arduino"
                >
                  Arduino
                </Link>{' '}
                will be included in accordance with its memory limitations. We will ~not~ build carrier-grade routers
                with Arduino, however.
              </li>
            </ol>
            <p>
              We will also provide minimal support for unlisted platforms as time/resources allow, including{' '}
              <Link
                target="_blank"
                href="https://www.freebsd.org/"
              >
                BSD
              </Link>{' '}
              and{' '}
              <Link
                target="_blank"
                href="https://www.openindiana.org/"
              >
                Solaris
              </Link>
              .
            </p>
            <h1>What About TCP/UDP/IPv4/IPv6?</h1>
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
            <h1>Schedule</h1>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Event</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>2024-01-15</th>
                  <td>Terra Stack</td>
                  <td>
                    <Link href="/Packages/Terra Suite/Terra Suite.stm">Download</Link> Alpha Version 2024.01.15.{' '}
                    <Link href="/Services/Terra Sage/Enregister.stm">Enregister</Link> into global{' '}
                    <Link
                      target="_blank"
                      href="https://en.wikipedia.org/wiki/Public_key_infrastructure"
                    >
                      PKI
                    </Link>
                    .
                  </td>
                </tr>
                <tr>
                  <th>2024-02-15</th>
                  <td>
                    <Link
                      target="_blank"
                      href="https://en.wikipedia.org/wiki/Ping_(networking_utility)"
                    >
                      PING
                    </Link>
                    -Fest
                  </td>
                  <td>
                    <Link
                      target="_blank"
                      href="https://en.wikipedia.org/wiki/Ping_(networking_utility)"
                    >
                      PING
                    </Link>{' '}
                    fellow users of new clean-slate Internet.
                  </td>
                </tr>
                <tr>
                  <th>2024-03-15</th>
                  <td>Connect</td>
                  <td>Connect your nodes to other nodes to form one large network.</td>
                </tr>
                <tr>
                  <th>2024-04-15</th>
                  <td>Mystery Application #1</td>
                  <td>Get first taste of digital liberation.</td>
                </tr>
                <tr>
                  <th>2024-05-15</th>
                  <td>Mystery Application #2</td>
                  <td>Get second taste of digital liberation.</td>
                </tr>
                <tr>
                  <th>2024-06-15</th>
                  <td>Mystery Application #3</td>
                  <td>Get third taste of digital liberation.</td>
                </tr>
                <tr>
                  <th>2024-07-15</th>
                  <td>Announcement</td>
                  <td>Stay tuned!</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
        <div
          className="row text-center"
          style={{ marginTop: '3em' }}
        >
          <div className="col">
            <p>
              <i>
                Statements made herein are the views of Terra Magma and do not imply the endorsement by any person or
                organization.
              </i>
            </p>
            <p>
              <i>
                Please <Link href="/Contact/Contact.stm">inform us</Link> of any factual errors so that we may correct
                them.
              </i>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden xl:block w-64 flex-shrink-0">
        <div className="sticky top-24 p-6">
          <TableOfContents items={tableOfContents} />
        </div>
      </div>
    </div>
  );
}
