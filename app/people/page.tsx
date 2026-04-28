import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "People",
  description:
    "The founders of the Brain Repair Foundation, and the advisory board now in formation.",
};

export default function PeoplePage() {
  return (
    <div className="page">
      <article className="page-narrow">
        <p className="page-eyebrow">Who is behind this</p>
        <h1>People</h1>

        <h2>Founders</h2>

        <section className="person">
          <p className="person-name">Jake Heller</p>
          <p className="person-title">Co-Founder</p>
          <div className="person-photo" role="img" aria-label="Photo placeholder for Jake Heller">
            [PHOTO PLACEHOLDER]
          </div>
          <p>
            Jake co-founded Casetext in 2013, the legal AI company that built one of the first
            widely-deployed AI assistants for lawyers. Casetext was acquired by Thomson Reuters in
            2023 for $650M. Jake led the company as CEO for over a decade and is now Head of
            Product for CoCounsel at Thomson Reuters. He clerked on the U.S. Court of Appeals for
            the First Circuit and worked as a litigation associate at Ropes &amp; Gray before
            founding Casetext. He earned his JD at Stanford Law School, where he served as
            President of the Stanford Law Review, and his BA in Economics &amp; Politics at Pitzer
            College.
          </p>
          <p>
            Jake brings to the Foundation a decade of experience building production AI systems,
            an attorney&rsquo;s training in evidence and argument, and the engineering work
            behind the Levi AI Research Lab &mdash; which he designed and built.
          </p>
          <p className="placeholder-block">
            [REPLACE WITH ACTUAL VOICE: a short personal sentence about why this work matters to
            him and what he hopes the Foundation accomplishes.]
          </p>
        </section>

        <hr />

        <section className="person">
          <p className="person-name">Miki Heller</p>
          <p className="person-title">Co-Founder</p>
          <div className="person-photo" role="img" aria-label="Photo placeholder for Miki Heller">
            [PHOTO PLACEHOLDER]
          </div>
          <p>
            Miki is VP of Business Operations and Strategy at Astranis, the satellite
            communications company, where she has led strategy and operations since 2018. Before
            Astranis, she was a Design Lead at IDEO from 2014 to 2018, applying human-centered
            design to organizational and systems-level problems. Earlier in her career, she was
            Director of Strategy at Teach For America, founded an education-technology company
            called AppSuccess, taught middle-school math through Teach For America, and worked as a
            performance analyst in the City of San Francisco&rsquo;s Controller&rsquo;s Office.
            She holds an MBA from Harvard Business School and an MPP from the Harvard Kennedy
            School (joint program), and a BS in Aerospace Engineering from California Polytechnic
            State University, San Luis Obispo.
          </p>
          <p>
            Miki brings to the Foundation systems engineering rigor, design thinking, and
            operational discipline. She is Levi&rsquo;s primary advocate inside the medical system
            and the architect of the family&rsquo;s day-to-day care coordination.
          </p>
          <p className="placeholder-block">
            [REPLACE WITH ACTUAL VOICE: a short personal sentence about why this work matters to
            her and what she hopes the Foundation accomplishes.]
          </p>
        </section>

        <h2>Advisory Board</h2>
        <p>
          <em>In formation.</em>
        </p>
        <p>
          The Brain Repair Foundation is recruiting a medical and scientific advisory board. We
          are seeking clinicians and researchers with deep expertise in pediatric epileptic
          encephalopathies, mosaic developmental disorders, neuroinflammation, and post-injury
          cognitive recovery &mdash; and a willingness to engage seriously with a single complex
          case as a research vehicle.
        </p>
        <p>
          If you are interested, please <Link href="/contact">contact us</Link>.
        </p>
      </article>
    </div>
  );
}
