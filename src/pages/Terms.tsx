import { LegalLayout } from '@/components/LegalLayout';

const Terms = () => {
  return (
    <LegalLayout title="Terms of Service">
      <p>
        These terms govern the use of services provided by Nex AI ("we", "us"). By engaging with us,
        you agree to the terms below.
      </p>

      <section>
        <h2>1. Services</h2>
        <p>
          Nex AI builds automation, revenue, and growth systems on a custom engagement basis. Scope,
          deliverables, and timelines are defined per-project before work begins.
        </p>
      </section>

      <section>
        <h2>2. Client Responsibilities</h2>
        <ul>
          <li>Provide access to required tools, accounts, and data for delivery</li>
          <li>Respond to information requests in a timely manner</li>
          <li>Ensure any data shared complies with applicable laws</li>
        </ul>
      </section>

      <section>
        <h2>3. Payment</h2>
        <p>
          Fees, milestones, and payment terms are agreed in writing before engagement. Late payment
          may result in paused delivery until cleared.
        </p>
      </section>

      <section>
        <h2>4. Intellectual Property</h2>
        <p>
          On full payment, ownership of the custom-built systems transfers to the client. Nex AI
          retains rights to underlying frameworks, methods, and reusable components used across
          engagements.
        </p>
      </section>

      <section>
        <h2>5. Limitation of Liability</h2>
        <p>
          Systems are delivered as-is following defined scope. Nex AI is not liable for indirect
          losses, third-party service outages, or misuse of the delivered systems. Total liability
          is capped at fees paid for the specific engagement.
        </p>
      </section>

      <section>
        <h2>6. Confidentiality</h2>
        <p>
          Both parties agree to keep sensitive information exchanged during the engagement
          confidential.
        </p>
      </section>

      <section>
        <h2>7. Governing Law</h2>
        <p>These terms are governed by the laws of India.</p>
      </section>

      <section>
        <h2>8. Contact</h2>
        <p>
          Questions on these terms: <a href="mailto:contact@nexifier.in">contact@nexifier.in</a>.
        </p>
      </section>
    </LegalLayout>
  );
};

export default Terms;
