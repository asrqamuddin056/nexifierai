import { LegalLayout } from '@/components/LegalLayout';

const Support = () => {
  return (
    <LegalLayout title="Customer Support">
      <p>
        Support at Nex AI is direct. No ticket queues, no chatbots handling your issue. You talk to
        the team that built your system.
      </p>

      <section>
        <h2>What We Support</h2>
        <ul>
          <li>Deployed system setup, configuration, and hand-off</li>
          <li>Workflow issues, broken automations, and edge cases</li>
          <li>Integration adjustments with your existing stack (CRM, WhatsApp, etc.)</li>
          <li>Guidance on operating and extending your systems</li>
        </ul>
      </section>

      <section>
        <h2>Response Times</h2>
        <p>
          Initial response within 24–48 hours on business days. Resolution time depends on the scope
          of the issue and is communicated after the first response.
        </p>
      </section>

      <section>
        <h2>Scope</h2>
        <p>
          Support covers systems built and deployed by Nex AI. It does not cover third-party tools,
          services, or platforms outside our delivery.
        </p>
      </section>

      <section>
        <h2>How to Reach Us</h2>
        <p>
          The fastest way is WhatsApp. Message 'SYSTEM' to open a direct line. You can also email{' '}
          <a href="mailto:contact@nexifier.in">contact@nexifier.in</a>.
        </p>
      </section>
    </LegalLayout>
  );
};

export default Support;
