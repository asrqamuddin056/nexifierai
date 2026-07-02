import { LegalLayout } from '@/components/LegalLayout';

const Privacy = () => {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        This policy explains what information Nex AI collects, how it's used, and the choices you
        have.
      </p>

      <section>
        <h2>Information We Collect</h2>
        <ul>
          <li>Contact details you provide directly (name, phone, email)</li>
          <li>Business context shared during discovery and engagement</li>
          <li>Access credentials or configuration data needed to deliver systems</li>
        </ul>
      </section>

      <section>
        <h2>How We Use It</h2>
        <ul>
          <li>To scope, build, and deliver the systems agreed on</li>
          <li>To communicate about the engagement and support</li>
          <li>To improve our internal processes</li>
        </ul>
      </section>

      <section>
        <h2>Data Sharing</h2>
        <p>
          We do not sell or rent your data. Information is shared only with tools and platforms
          required to deliver the engagement (e.g., CRM, hosting, communication providers) and only
          to the extent required.
        </p>
      </section>

      <section>
        <h2>Retention</h2>
        <p>
          Engagement data is retained for the duration of the project and a reasonable period after
          for support and record-keeping. You can request deletion at any time.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          This website uses only essential technical resources. No third-party advertising or
          tracking cookies are set.
        </p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <ul>
          <li>Request access to the data we hold on you</li>
          <li>Request correction or deletion</li>
          <li>Withdraw consent for processing</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For any privacy request: <a href="mailto:contact@nexifier.in">contact@nexifier.in</a>.
        </p>
      </section>
    </LegalLayout>
  );
};

export default Privacy;
