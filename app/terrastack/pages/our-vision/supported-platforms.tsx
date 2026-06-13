import { Link } from 'react-router';

export const supportedPlatformsTableOfContents = [
  { id: 'supported-platforms', title: 'Supported Platforms', level: 2 },
];

export default function SupportedPlatformsPage() {
  return (
    <div className="m-4 vision flex justify-center">
      <div className="flex-1 px-6 py-8 max-w-4xl">
        <div className="row">
          <div className="col title-outdent">
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
                  to="https://en.wikipedia.org/wiki/ESP32"
                  rel="noopener noreferrer"
                >
                  ESP32
                </Link>{' '}
                will be included. No other IoT device has such a high ratio of feature-set/cost.
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://en.wikipedia.org/wiki/Arduino"
                  rel="noopener noreferrer"
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
                to="https://www.freebsd.org/"
                rel="noopener noreferrer"
              >
                BSD
              </Link>{' '}
              and{' '}
              <Link
                target="_blank"
                to="https://www.openindiana.org/"
                rel="noopener noreferrer"
              >
                Solaris
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
