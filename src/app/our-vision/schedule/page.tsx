import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PageNavigation } from '@/components/layout/page-navigation';
import Disclaimer from '@/components/layout/disclaimer';

export default function SchedulePage() {
  return (
    <div className="m-4 vision flex justify-center">
      <div className="flex-1 px-6 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Our Vision', href: '/our-vision' },
            { label: 'Schedule', href: '/our-vision/schedule', current: true },
          ]}
        />
        <div className="row">
          <div className="col text-center">
            <h1>Schedule</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
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
                  <th>2026-03-15</th>
                  <td>Connect</td>
                  <td>Connect your nodes to other nodes to form one large network.</td>
                </tr>
                <tr>
                  <th>2026-04-15</th>
                  <td>Mystery Application #1</td>
                  <td>Get first taste of digital liberation.</td>
                </tr>
                <tr>
                  <th>2026-05-15</th>
                  <td>Mystery Application #2</td>
                  <td>Get second taste of digital liberation.</td>
                </tr>
                <tr>
                  <th>2026-06-15</th>
                  <td>Mystery Application #3</td>
                  <td>Get third taste of digital liberation.</td>
                </tr>
                <tr>
                  <th>2026-07-15</th>
                  <td>Announcement</td>
                  <td>Stay tuned!</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
        <PageNavigation
          prev={{ title: 'What About Existing Protocols?', href: '/our-vision/what-about-existing-protocols' }}
          next={null}
        />
        <Disclaimer />
      </div>
    </div>
  );
}
