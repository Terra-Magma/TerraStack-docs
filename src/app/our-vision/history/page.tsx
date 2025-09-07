import Link from 'next/link';
import { TableOfContents } from '@/components/layout/table-of-contents';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageNavigation } from '@/components/layout/page-navigation';
import Disclaimer from '@/components/layout/disclaimer';

export default function HistoryPage() {
  const tableOfContents = [
    { id: 'history', title: 'A brief history', level: 2 },
    { id: '1969', title: '1969', level: 3 },
    { id: '1983', title: '1983', level: 3 },
    { id: '1990', title: '1990', level: 3 },
    { id: '1996', title: '1996', level: 3 },
    { id: '2005', title: '2005', level: 3 },
    { id: '2013', title: '2013', level: 3 },
    { id: '2023', title: '2023', level: 3 },
    { id: '2024', title: '2024', level: 3 },
  ];

  return (
    <div className="m-4 vision flex justify-center">
      <div className="flex-1 px-6 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Our Vision', href: '/our-vision' },
            { label: 'A Brief History', href: '/our-vision/history' },
          ]}
        />
        <div className="row">
          <div className="col text-center">
            <h1 id="history">A Brief History</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className={'italic text-gray-200'}>The Internet is a hack.</p>
            <h2 id="1969">1969</h2>
            <p className={'body-text'}>
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
            <h2 id="1983">1983</h2>
            <p className={'body-text'}>
              The year 1983 was a turning-point. At that time, researchers realized that the fuzzines surrounding their
              creation was starting to disappear. They could rightly say that they had created something exceptionally
              useful for mankind, because, even then, people around the world had grown to depend on their protocol,
              mainly for email, but also for file transfer, with sprinkles of estoeric uses like sending large amounts
              of data gathered during high-energy physics experiments.
            </p>
            <h2 id="1990">1990</h2>
            <p className={'body-text'}>
              At some point between 1983 and 1990, it became clear that the Internet would break-out of the insular
              communities of academia, government, and large corporations. Home users were starting to find ways to
              connect. While new casual users were welcomed, it was also alarming, as the number of Internet Protocol
              addresses available to be allocated to comptuers on the Internet was limited to roughly 4.3 billion. But
              there were already 5+ billion people on planet, and given the likelihood that each person would eventually
              have at least one device connected to the Internet, there was clearly not enough addresses.
            </p>
            <p className={'body-text'}>
              Researchers who were responsible for the technical architecture of the Internet so far decided to do
              something about this situation. They decided to fix the Internet Protocol. They labeled the effort IPnG,
              for{' '}
              <Link
                target="_blank"
                href="https://users.cs.duke.edu/~narten/ipng.html"
              >
                Internet Protocol Next Generation
              </Link>
              . But while everyone agreed that IP should be fixed, there was disagreement regarding what part of it to
              keep, and what part of it to throw away.
            </p>
            <p className={'body-text'}>
              Moreover, not-enough-addresses was only one problem with IP. There were others, like no inherent security,
              which forced every software developer to roll their own security schemes.
            </p>
            <p className={'body-text'}>
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
              <strong>patch-it-up</strong> faction. The patch-it-up faction cited the &quot;installed base&quot; as
              their rationale for not wanting to change too much. By this, they meant that there were already too many
              users using the existing IP to make gross changes, as that would disrupt the Internet. The get-it-right
              faction insisted that the number of future users would likely dwarf the number of current users, and so a
              complete redo, despite the disruption, was warranted, following the principle of least amount of aggregate
              suffering. A brief, congenial tussle ensued between these factions, and the patch-it-up faction, being in
              the majority, won.
            </p>
            <p className={'body-text'}>
              The patched protocol IPnG, would eventually be called IPv6, for <i>Internet Protocol version 6</i>, given
              that the extant protocol was already at version 4, and version 5, which never materialized, was castaway.
              After the advent of the WWW, it was expected that if IPv6 was not deployed soon, the Internet would
              implode under its own weight, nominally in 1996.
            </p>
            <p className={'body-text'}>
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
            <h2 id="1996">1996</h2>
            <p className={'body-text'}>
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
            <h2 id="2005">2005</h2>
            <p className={'body-text'}>
              But these patches were hacks, and everyone who worked in computer networking knew they were hacks. The
              ratio of applied intelligence to net result was astounding. So, observers began to wonder if our
              collective intellectual suffering was self-inflicted, that perhaps the get-it-right people might have been
              right after all. This doubt, combined with lack of desirable features that never materialized in IPv6,
              lead to a resurrection of the get-it-right mantra. The term &quot;Clean Slate Internet was born&quot;. The
              get-it-right crowd re-emerged, but unlike before, where there was no signficant funding for rethinking
              computer networking, there was now significant financial backing from the US federal governement and other
              US entities to at least try. Research organizations around the world were encouraged to rethink the
              Internet.
            </p>
            <br />
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
            <p className={'body-text'}>
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
            <p className={'body-text'}>
              A few open-source/commercial overlay type networks arose. While useful, they do not solve the problems of
              computer networking at a fundamental level, as they require the existence of some underlying protocol to
              function, and the goal of clean-slate Internet is to repair the underlying protocol.
            </p>
            <h2 id="2013">2013</h2>
            <p className={'body-text'}>
              None of the clean slate efforts resulted in a network protocol stack that could replace TCP/IPv4. But the
              Internet needed to continue growing, and growing it did, until Internet researchers were forced to
              prevent, with yet another hack, the Internet from collapsing onto itself because of{' '}
              <Link
                target="_blank"
                href="https://datatracker.ietf.org/doc/html/rfc1380#section-4.3"
              >
                routing table explosion.
              </Link>
            </p>
            <h2 id="2023">2023</h2>
            <p className={'body-text'}>
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
            <h2 id="2024">2024</h2>
            <p className={'body-text'}>
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
            <p>Terra Stack is none of these. Terra Stack is a true clean-slate Internet protocol stack:</p>
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
            <p>Terra Stack is functionally equivalent with TCP/IPv4 and TCP/IPv6.</p>
          </div>
        </div>
        <PageNavigation
          prev={null}
          next={{ title: 'Problems', href: '/our-vision/problems' }}
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
