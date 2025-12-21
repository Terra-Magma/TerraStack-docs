import { Breadcrumbs } from '~/components/ui/breadcrumbs';
import { PageNavigation } from '~/components/layout/page-navigation';
import Disclaimer from '~/components/layout/disclaimer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';

export default function SchedulePage() {
  const events = [
    {
      date: '2026-01-15',
      event: 'Terra Stack',
      description: 'Download Alpha Version 2024.01.15. Enregister into global PKI.',
    },
    {
      date: '2026-02-15',
      event: 'PING-Fest',
      description: 'PING fellow users of new clean-slate Internet.',
    },
    {
      date: '2026-03-15',
      event: 'Connect',
      description: 'Connect your nodes to other nodes to form one large network.',
    },
    {
      date: '2026-04-15',
      event: 'Mystery Application #1',
      description: 'Get first taste of digital liberation.',
    },
    {
      date: '2026-05-15',
      event: 'Mystery Application #2',
      description: 'Get second taste of digital liberation.',
    },
    {
      date: '2026-06-15',
      event: 'Mystery Application #3',
      description: 'Get third taste of digital liberation.',
    },
    {
      date: '2026-07-15',
      event: 'Announcement',
      description: 'Stay tuned!',
    },
  ];

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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className={'text-center'}>Date</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead className="w-[100px]">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((row) => (
                  <TableRow key={row.date}>
                    <TableCell className={'text-center'}>{row.date}</TableCell>
                    <TableCell>{row.event}</TableCell>
                    <TableCell className="font-medium overflow-auto whitespace-normal w-[100%]">
                      {row.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
