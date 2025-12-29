import { TableOfContents } from '~/components/layout/table-of-contents';
import { Breadcrumbs } from '~/components/ui/breadcrumbs';
import { PageNavigation } from '~/components/layout/page-navigation';
import Disclaimer from '~/components/layout/disclaimer';
import { Link } from 'react-router';

export default function SolutionsPage() {
  const tableOfContents = [
    { id: 'solutions', title: 'Solutions', level: 2 },
    { id: 'addressing-1', title: 'Addressing', level: 3 },
    { id: 'naming-1', title: 'Naming', level: 3 },
    { id: 'numbering-1', title: 'Numbering', level: 3 },
    { id: 'reliability-1', title: 'Reliability', level: 3 },
    { id: 'routing', title: 'Routing', level: 3 },
    { id: 'prioritization-1', title: 'Prioritization', level: 3 },
    { id: 'security-1', title: 'Security', level: 3 },
    { id: 'mobility-1', title: 'Mobility', level: 3 },
    { id: 'multicast-1', title: 'Multicast', level: 3 },
    { id: 'api-1', title: 'API', level: 3 },
  ];

  return (
    <div className="m-4 vision flex justify-center">
      <div className="flex-1 px-6 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Our Vision', href: '/terrastack/our-vision' },
            { label: 'Solutions', href: '/terrastack/our-vision/solutions', current: true },
          ]}
        />
        <div className="row">
          <div className="col text-center">
            <h1 id="solutions">Solutions</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>To solve the clean-slate Internet problem, we adopt the following management principles:</p>
            <ol>
              <li>Ignore existing users and hope that they realize that ignoring them now will benefit them later.</li>
              <li>
                Start with a true clean-slate. Avoid trying to salvage elements of existing protocols. Virtuous elements
                of existing protocols, such as the{' '}
                <Link
                  target="_blank"
                  to="https://en.wikipedia.org/wiki/End-to-end_principle"
                  rel="noopener noreferrer"
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
            <p className={'body-text'}>To solve the addressing problem, we note the following maxim:</p>
            <p className={'body-text'}>
              <i>Language shapes the way we think, and determines what we can think about.</i> - Benjamin Lee Whorf.
            </p>
            <p className={'body-text'}>If we heed this maxim, we might follow with:</p>
            <p className={'body-text'}>
              <i>To solve, correctly, the naming problem, one must, correctly, name the problem.</i>
            </p>
            <p className={'body-text'}>
              So-called{' '}
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Fully_qualified_domain_name"
                rel="noopener noreferrer"
              >
                fully qualified domain names (FQDN)
              </Link>{' '}
              are not really names. www.whitehouse.gov does not denote a name. It denotes an address. Thus, what we have
              long been calling domain names are actually addresses. This seemingly trivial nitick is not trivial at
              all.
            </p>
            <p className={'body-text'}>
              But if FQDN&apos;s are actually addresses, and IP address are addresses, then these two types of
              identfiers have the same referencing power, and are paraellel conceptual alternatives.
            </p>
            <p className={'body-text'}>
              Both of these forms are capable of unambiguosly identifying a location. Which form should be employed is
              determined by context: Humans do well with textual addresses because they are easier to remember.
              Computers do well with digital addresses because they are efficient to store and process.
            </p>
            <h2 id="naming-1">Naming</h2>
            <p className={'body-text'}>
              Once we have recognized textual address as the proper term for an unambiguous identifier within a global
              space, the next question becomes: What do we call the individual components of a textual address? They are
              names. These names are their own first-class primitives. whitehouse is a name.
            </p>
            <h2 id="numbering-1">Numbering</h2>
            <p className={'body-text'}>
              If textual addresses are composed of names, then what are digital addresses composed of? They are composed
              of numbers. These numbers are their own first-class primitives.
            </p>
            <h2 id="reliability-1">Reliability</h2>
            <p className={'body-text'}>To Be Done.</p>
            <h2 id="routing">Routing</h2>
            <p className={'body-text'}>To Be Done.</p>
            <h2 id="prioritization-1">Prioritization</h2>
            <p className={'body-text'}>To Be Done.</p>
            <h2 id="security-1">Security</h2>
            <p className={'body-text'}>To Be Done.</p>
            <h2 id="mobility-1">Mobility</h2>
            <p className={'body-text'}>
              The{' '}
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Vehicle-to-everything"
                rel="noopener noreferrer"
              >
                Vehicle-To-Everything (V2X)
              </Link>{' '}
              industry, projected to grow to a market size of{' '}
              <Link
                target="_blank"
                to="https://straitsresearch.com/report/automotive-v2x-market"
                rel="noopener noreferrer"
              >
                $36 billion by 2031
              </Link>
              , depends upon mobility. In fact, essence of V2X is the mobility problem in disguise. If one solves the
              mobility problem, one solves the core of the V2X problem.
            </p>
            <h2 id="multicast-1">Multicast</h2>
            <p className={'body-text'}>To Be Done.</p>
            <h2 id="api-1">API</h2>
            <p className={'body-text'}>To Be Done.</p>
          </div>
        </div>
        <PageNavigation
          prev={{ title: 'Problems', href: '/terrastack/our-vision/problems' }}
          next={{ title: 'Supported Platforms', href: '/terrastack/our-vision/supported-platforms' }}
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
