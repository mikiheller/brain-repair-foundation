import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Durable writeups from the Brain Repair Foundation: synthesis memos, methodology pieces, and literature reviews.",
};

export default function ResearchPage() {
  return (
    <div className="page">
      <article className="page-narrow">
        <p className="page-eyebrow">Writeups</p>
        <h1>Research</h1>
        <p className="lede">
          Durable writeups from the Brain Repair Foundation. We publish synthesis memos,
          methodology pieces, and literature reviews that we believe are useful beyond
          Levi&rsquo;s specific case. We do not blog. Each piece below is meant to stay relevant.
        </p>

        <p className="placeholder-block">
          Writeups will be published here as they are completed. To be notified of new pieces,
          please email{" "}
          <a href="mailto:hello@brainrepairfoundation.org">hello@brainrepairfoundation.org</a>.
        </p>

        <section aria-labelledby="cite">
          <h2 id="cite">How to cite this work</h2>
          <p>
            If you reference work from the Brain Repair Foundation in your own writing or
            research, please cite as:
          </p>
          <blockquote>
            Heller, J. and Heller, M. <em>[Title of piece]</em>. Brain Repair Foundation. [URL].
            Accessed [DATE].
          </blockquote>
        </section>
      </article>
    </div>
  );
}
