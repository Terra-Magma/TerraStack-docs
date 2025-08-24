import Link from 'next/link';

export default function VisionPage() {
  return (
    <div className="m-4 vision">
      <div className="row">
        <div className="col text-center">
          <h1>Vision</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>The Internet is a hack.</p>
          <h2>1969</h2>
          <p>
            The hack started in 1969 with the{' '}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/ARPANET"
            >
              ARPAnet
            </Link>
            . The US Department of Defense wanted a wide-scale self-healing network that relied on so-called{' '}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Packet_switching"
            >
              packet-switching
            </Link>
            , the dominant way in which bits of information move throught the Internet today. Over the next 13 years,
            various researchers including{' '}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Vint_Cerf"
            >
              Vint Cerf
            </Link>{' '}
            and{' '}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Bob_Kahn"
            >
              Bob Kahn
            </Link>{' '}
            laid the foundations of what would become the dominant protocols of the Internet.
          </p>
          <h2>1983</h2>
          <p>
            The year 1983 was a turning-point. At that time, researchers realized that the fuzzines surrounding their
            creation was starting to disappear. They could rightly say that they had created something exceptionally
            useful for mankind, because, even then, people around the world had grown to depend on their protocol,
            mainly for email, but also for file transfer, with sprinkles of estoeric uses like sending large amounts of
            data gathered during high-energy physics experiments.
          </p>
          <h2>1990</h2>
          <p>
            At some point between 1983 and 1990, it became clear that the Internet would break-out of the insular
            communities of academia, government, and large corporations. Home users were starting to find ways to
            connect. While new casual users were welcomed, it was also alarming, as the number of Internet Protocol
            addresses available to be allocated to comptuers on the Internet was limited to roughly 4.3 billion. But
            there were already 5+ billion people on planet, and given the likelihood that each person would eventually
            have at least one device connected to the Internet, there was clearly not enough addresses.
          </p>
          <p>
            Researchers who were responsible for the technical architecture of the Internet so far decided to do
            something about this situation. They decided to fix the Internet Protocol. They labeled the effort IPnG, for{' '}
            <Link
              target="_blank"
              href="https://users.cs.duke.edu/~narten/ipng.html"
            >
              Internet Protocol Next Generation
            </Link>
            . But while everyone agreed that IP should be fixed, there was disagreement regarding what part of it to
            keep, and what part of it to throw away.
          </p>
          <p>
            Moreover, not-enough-addresses was only one problem with IP. There were others, like no inherent security,
            which forced every software developer to roll their own security schemes.
          </p>
          <p>
            The researchers agreed that, while they were fixing the{' '}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/IPv4_address_exhaustion"
            >
              IP address space exhaustion problem
            </Link>
            , they might as well fix these other problems. But again, there was disagreement regarding how much of IP
            should be changed. A congenial tussle ensued, and two opposing factions formed. One faction might be
            described as the <strong>get-it-right</strong> faction. The other might be described as the{' '}
            <strong>patch-it-up</strong> faction. The patch-it-up faction cited the &quot;installed base&quot; as their
            rationale for not wanting to change too much. By this, they meant that there were already too many users
            using the existing IP to make gross changes, as that would disrupt the Internet. The get-it-right faction
            insisted that the number of future users would likely dwarf the number of current users, and so a complete
            redo, despite the disruption, was warranted, following the principle of least amount of aggregate suffering.
            A brief, congenial tussle ensued between these factions, and the patch-it-up faction, being in the majority,
            won.
          </p>
          <p>
            The patched protocol IPnG, would eventually be called IPv6, for <i>Internet Protocol version 6</i>, given
            that the extant protocol was already at version 4, and version 5, which never materialized, was castaway.
            After the advent of the WWW, it was expected that if IPv6 was not deployed soon, the Internet would implode
            under its own weight, nominally in 1996.
          </p>
          <p>
            While deliberation occurred{' '}
            <Link
              target="_blank"
              href="https://home.cern/science/computing/birth-web/short-history-web"
            >
              Tim Berners-Lee gave birth to the WWW
            </Link>
            . The WWW erased all doubt that something needed to be done quickly about the available number of IP
            addresses.
          </p>
          <h2>1996</h2>
          <p>
            The Internet did not implode due to lack of IP addreses. Very clever people of the{' '}
            <Link
              target="_blank"
              href="https://www.ietf.org/"
            >
              Internet Engineering Task Force (IETF)
            </Link>{' '}
            produced a rapid sequence of fixes, in real-time, that kept the Internet running mostly smoothly. Their
            impressive engineering acrobatics continue even unto this day. They are responsible for most of the
            &quot;good&quot; technology that is employed in the Internet.
          </p>
          <h2>2005</h2>
          <p>
            But these patches were hacks, and everyone who worked in computer networking knew they were hacks. The ratio
            of applied intelligence to net result was astounding. So, observers began to wonder if our collective
            intellectual suffering was self-inflicted, that perhaps the get-it-right people might have been right after
            all. This doubt, combined with lack of desirable features that never materialized in IPv6, lead to a
            resurrection of the get-it-right mantra. The term &quot;Clean Slate Internet was born&quot;. The
            get-it-right crowd re-emerged, but unlike before, where there was no signficant funding for rethinking
            computer networking, there was now significant financial backing from the US federal governement and other
            US entities to at least try. Research organizations around the world were encouraged to rethink the
            Internet.
          </p>
          <p></p>
          <ol>
            <li>
              To the great expectation and relief of many,{' '}
              <Link
                target="_blank"
                href="https://www.stanford.edu/"
              >
                Stanford University
              </Link>
              threw their hat into the ring. Unfortunately, their{' '}
              <Link
                target="_blank"
                href="https://en.wikipedia.org/wiki/Clean_Slate_Program"
              >
                clean-slate program ceased in January 2012
              </Link>
              .
            </li>

            <li>
              The US National Science Foundation funded four programs under its{' '}
              <Link
                target="_blank"
                href="http://www.nets-fia.net/"
              >
                Future Internet Architecture Project
              </Link>
              . Of these projects, it appears that only{' '}
              <Link
                target="_blank"
                href="http://www.cs.cmu.edu/~xia/"
              >
                XIA
              </Link>{' '}
              persists today.
            </li>

            <li>
              The US National Science Foundation operated the{' '}
              <Link
                target="_blank"
                href="https://new.nsf.gov/funding/opportunities/cns-networking-technology-systems-nets"
              >
                Networking Technology and Systems (NeTS)
              </Link>{' '}
              program to seek{' '}
              <i>
                fundamental scientific understanding of and advances in large-scale, complex, heterogeneous
                communications networks, including, but not limited to, internet of things (IoT), home, edge,
                enterprise, data center, cloud, and Internet or Internet-scale networks, and in the wireless areas of
                cellular, vehicular, mesh, sensor, body area, satellite, and underwater networks
              </i>
              .
            </li>

            <li>
              The{' '}
              <Link
                target="_blank"
                href="https://www.geni.net/"
              >
                Global Environment for Network Innovation (GENI)
              </Link>{' '}
              is/was a{' '}
              <Link
                target="_blank"
                href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=1541939"
              >
                $300 million program
              </Link>{' '}
              to create a global environment to{' '}
              <Link
                target="_blank"
                href="https://new.nsf.gov/funding/opportunities/global-environment-networking-innovations-geni"
              >
                ...inspire and accelerate the potential for groundbreaking innovations of significant socio-economic
                impact.
              </Link>
            </li>

            <li>
              The US National Science Foundation funded{' '}
              <Link
                target="_blank"
                href="https://learn.fabric-testbed.net/"
              >
                FABRIC
              </Link>
              , another type of experimental testbed.
            </li>
          </ol>
          <p>
            Other{' '}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Future_Internet"
            >
              Future Internet
            </Link>{' '}
            programs sprouted around the world. An example is{' '}
            <Link
              target="_blank"
              href="https://scion-architecture.net/"
            >
              SCION
            </Link>
            .
          </p>
          <p>
            A few open-source/commercial overlay type networks arose. While useful, they do not solve the problems of
            computer networking at a fundamental level, as they require the existence of some underlying protocol to
            function, and the goal of clean-slate Internet is to repair the underlying protocol.
          </p>
          <h2>2013</h2>
          <p>
            None of the clean slate efforts resulted in a network protocol stack that could replace TCP/IPv4. But the
            Internet needed to continue growing, and growing it did, until Internet researchers were forced to prevent,
            with yet another hack, the Internet from collapsing onto itself because of{' '}
            <Link
              target="_blank"
              href="https://datatracker.ietf.org/doc/html/rfc1380#section-4.3"
            >
              routing table explosion.
            </Link>
          </p>
          <h2>2023</h2>
          <p>
            <Link
              target="_blank"
              href="https://www.geni.net/"
            >
              GENI
            </Link>{' '}
            shut down its operations on August 1, 2023. It has since transitioned to{' '}
            <Link
              target="_blank"
              href="https://fabric-testbed.net/"
            >
              FABRIC
            </Link>
            .
          </p>
          <h2>2024</h2>
          <p>
            After working quietly in parallel with fix-the-Internet efforts, Terra Magma released Terra Stack on
            2024-01-01.
          </p>
          Those other efforts have come in essentially in five flavors:
          <ol>
            <li>
              Patch-up the existing protocol stack, making minimal structural changes with the goal of avoiding
              disruption.
            </li>
            <li>
              Create overlay software that is not a true global-scale protocol stack, but something that requires the
              existence of IPv4 or IPv6 underneath.
            </li>
            <li>
              Create a framework that might ultimately lead to a clean-slate stack, but only if someone makes its
              primitives sufficiently specific.
            </li>
            <li>
              Provide a &quot;global environment&quot; such that, <i>if</i> someone were to create a clean-slate
              protocol stack, that environment would be used to test that clean-slate stack.
            </li>
            <li>
              Provide a forum that facilitates discussion of the social and political aspect of Internet operation.
            </li>
          </ol>
          <p>
            Terra Stack is none of these. Terra Stack is a true clean-slate Internet protocol stack:
            <ol>
              <li>
                Terra Stack is not a tweak of TCP, UDP, or IP. It is a redo of TCP/UDP/IP. It also redoes several
                ancillary protocols such as (
                <Link
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Domain_Name_System"
                >
                  DNS
                </Link>
                ,{' '}
                <Link
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Network_address_translation"
                >
                  NAT
                </Link>
                ,{' '}
                <Link
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Border_Gateway_Protocol"
                >
                  BGP
                </Link>
                ,{' '}
                <Link
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Interior_gateway_protocol"
                >
                  IGP
                </Link>
                ,{' '}
                <Link
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol"
                >
                  ICMP
                </Link>
                ,{' '}
                <Link
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Transport_Layer_Security"
                >
                  TLS
                </Link>
                , etc.).
              </li>
              <li>
                Terra Stack is not an overlay module that cannot operate without TCP/IPv4 or TCP/IPv6. It can run over
                over Ethernet and other{' '}
                <Link
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Data_link_layer"
                >
                  Layer-
                </Link>
                2 links.
              </li>
              <li>
                Terra Stack is not a software framework whose specificity is left to the imagination of the observer.
              </li>
              <li>
                Terra Stack is not a blueprint that facilitates discussion of social and political implications of
                Future Internet architectures.
              </li>
              <li>
                Terra Stack is not an environment that facilitates experimentation with clean-slate protocol stacks.
              </li>
            </ol>
          </p>
          <p>Terra Stack is functionally equivalent with TCP/IPv4 and TCP/IPv6.</p>
          <h1>Problems</h1>
          <p>
            Most complex problems in engineering consist of a surprisingly number of smaller sub-problems. Internet
            architecture is no different. If one had to pick how many sub-problems there are in network protocol stacks,
            &quot;10&quot; would be a good guess. But the sub-problems <i>are</i> complex, so we illustrate them by way
            of fictional actions of fictional internet users.
          </p>
          <h2>Addressing</h2>
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
            files on the mass storage device of Beta’s smartphone with no mediating cloud storage server. The addressing
            scheme that identifies both smartphones to the .mp3 client application and server applications so that a
            connection between the devices can be established is the{' '}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Network_address"
            >
              addressing problem
            </Link>
            .
          </p>
          <h2>Naming</h2>
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
          <h2>Numbering</h2>
          <p>
            The .mp3-playback client should have a means of specifying which server application on Beta’s smartphone
            should be the focus of a connection. Identifying the .mp3-playback server application using an identifier
            that is easily efficiently manipulated by computers is one aspect the numbering problem.
          </p>
          <h2>Reliability</h2>
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
          <h2>Prioritization</h2>
          <p>
            While Alpha is listening to one of Beta’s .mp3 files, Beta receives an important phone call from her mother.
            Prioritizing the voice stream over the .mp3-playback stream to minimize the delay that the voice packets
            experience in Beta’s smartphone, as well as every Internet net node between Beta’s smartphone and her
            mother’s, if the <strong>prioritization</strong> problem, also known as the{' '}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Quality_of_service"
            >
              quality of service
            </Link>{' '}
            problem.
          </p>
          <h2>Security</h2>
          <p>
            Beta’s mother has the intention of reading back private information over the voice connection, securely.
            Being able to establish a secure connection between two smartphones, where information can be both veiled
            and signed, independently, using only the addresses of the respective nodes, is the security problem.
          </p>
          <h2>Mobility</h2>
          <p>
            The saturated Wi-Fi access point becomes too much for Beta to bear. Beta instinctively walks away from the
            area of congestion, along the deck of the ship, not realizing that, while encircling the ship, she makes and
            breaks connections with no less than 20 different WiFi access points. There is no detectable interruption of
            the voice connection, nor of the .mp3 playback, and the paths between Beta’s smartphone, and Alpha’s,
            remains optimal, as does the path between Beta’s smartphone and her mother’s. While in motion, Beta’s
            grandmother joins the conversation by specifying the address of Beta’s smartphone before dialing. Meanwhile,
            both Alpha’s ship and Beta’s ship cruise close to shore, making and breaking their own wireless connections
            from ship to shore. No networked device on either ship experiences interruption. Maintaining all active
            connections seamlessly, while allowing new connections with almost all devices in motion, including,
            perhaps, those nodes that are responsible for address resolution, simultaneously, with or without security,
            multicast, or any other feature active, is the mobility problem.
          </p>
          <h2>Multicast</h2>
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
            beast, then decide that they, too, want to watch, but using their own in-room monitors, simply by specifying
            a URL-like path to Beta’s video feed. Several hundred passengers on Alpha’s ship watch the beast on Beta’s
            smartphone, simultaneously, on several hundred different devices, until word gets back to the mainland of
            USA, then the world, at which point, 1,000,000,000 people suddenly start watching the beast through various
            Internet-connected devices. Allowing nominally 1,000,000,000 people to receive the stream of a single,
            relatively feeble source, that might or might not be mobile, without interruption, and without having to
            rely on a proprietary streaming, cloud, or edge service, is the multicast problem.
          </p>
          <h2>API</h2>
          <p>
            Providing a programmer’s network application API that allows a relatively inexperienced high-school student
            to be the author of the 1,000,000,000–user video streaming application, with mobility of both source of feed
            and many of the 1,000,000,000 target nodes to be mobile, simultaneously, perhaps with security, with
            confidence that the logic of the application is correct, is the programmer’s API problem.
          </p>
          <h1>Solutions</h1>
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
            <li>Code first, paper later. If the code works, viability of a paper proposal ceases to be a question.</li>
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
              Add a GUI for human configuration and observation. Structure stack as both client and a server itself, so
              that it may be configured and observed by peer stacks.
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
          <h2>Addressing</h2>
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
            long been calling domain names are actually addresses. This seemingly trivial nitick is not trivial at all.
          </p>
          <p>
            But if FQDN&apos;s are actually addresses, and IP address are addresses, then these two types of identfiers
            have the same referencing power, and are paraellel conceptual alternatives.
          </p>
          <p>
            Both of these forms are capable of unambiguosly identifying a location. Which form should be employed is
            determined by context: Humans do well with textual addresses because they are easier to remember. Computers
            do well with digital addresses because they are efficient to store and process.
          </p>
          <h2>Naming</h2>
          <p>
            Once we have recognized textual address as the proper term for an unambiguous identifier within a global
            space, the next question becomes: What do we call the individual components of a textual address? They are
            names. These names are their own first-class primitives. whitehouse is a name.
          </p>
          <h2>Numbering</h2>
          <p>
            If textual addresses are composed of names, then what are digital addresses composed of? They are composed
            of numbers. These numbers are their own first-class primitives.
          </p>
          <h2>Reliability</h2>
          <p>To Be Done.</p>
          <h2>Routing</h2>
          <p>To Be Done.</p>
          <h2>Prioritization</h2>
          <p>To Be Done.</p>
          <h2>Security</h2>
          <p>To Be Done.</p>
          <h2>Mobility</h2>
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
          <h2>Multicast</h2>
          <p>To Be Done.</p>
          <h2>API</h2>
          <p>To Be Done.</p>
          <h1>Supported Platforms</h1>
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
              will be included in accordance with its memory limitations. We will ~not~ build carrier-grade routers with
              Arduino, however.
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
                <td>Nodes are topologically mobile by default. </td>
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
  );
}
