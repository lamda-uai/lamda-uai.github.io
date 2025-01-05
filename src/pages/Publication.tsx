import { ReactElement, useEffect, useState } from 'react';
import { GridLoader } from 'react-spinners';
import {
  LiteratureEntry,
  Literatures
} from 'react-paper-list';
import { publicationData } from './publicationData';

export function Publication(): ReactElement {
  const [papers, setPapers] = useState<LiteratureEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const processedPapers: LiteratureEntry[] = publicationData.map(
      (d, index) => ({
        id: index.toString(), // Convert to string to match LiteratureEntry type
        title: d.title,
        date: new Date(d.date),
        type: 'Conference Paper',
        authors: d.authors.map((authorName: string) => ({
          lastName: authorName.split(',')[0].trim(),
          firstName: authorName.split(',')[1]?.trim() || '',
        })),
        venue: d.venue,
        venueShort: d.venueShort,
        tags: d.tags,
        awards: d.awards,
        paperUrl: d.paperUrl,
        abstract: d.abstract,
        bibtex: d.bibtex,
        projectUrl: d.projectUrl,
        slidesUrl: d.slidesUrl,
      })
    );

    // Simulate network delay
    setTimeout(() => {
      setPapers(processedPapers);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div style={{ minHeight: 200 }}>
        {loading ? (
          <div
            style={{
              position: 'relative',
              marginTop: 100,
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '20px',
            }}
          >
            <GridLoader color="#5dc9c9" />
          </div>
        ) : (
          <Literatures
            title={'Selected Publication'}
            description={''}
            entries={papers}
            listHeader={'Published Papers'}
            defaultSortCriterion="date"
            defaultReverse={true}
            enableSearch
            enableScrollTopButton
          />
        )}
      </div>
    </div>
  );
}