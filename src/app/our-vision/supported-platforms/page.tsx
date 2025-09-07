import Link from 'next/link';
import { TableOfContents } from '@/components/layout/table-of-contents';

export default function SupportedPlatformsPage() {
  const tableOfContents = [{ id: 'supported-platforms', title: 'Supported Platforms', level: 2 }];

  return (
    <div className="m-4 vision flex justify-center">
      <div className="flex-1 px-6 py-8 max-w-4xl">
        <div className="row">
          <div className="col text-center">
            <h1 id="supported-platforms">Supported Platforms</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
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
