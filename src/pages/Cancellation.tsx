import { LegalLayout } from '@/components/LegalLayout';

const Cancellation = () => {
  return (
    <LegalLayout title="Cancellation & Refund Policy">
      <p>
        Engagements at Nex AI are custom builds. This policy explains how cancellation and refunds
        work.
      </p>

      <section>
        <h2>Before Work Begins</h2>
        <p>
          If you cancel before build work has started, any advance paid is refunded in full minus
          any transaction or processing charges already incurred.
        </p>
      </section>

      <section>
        <h2>After Work Begins</h2>
        <p>
          Once system design or build work has started, fees for completed work and time invested
          are non-refundable. Any unused portion of a milestone can be refunded proportionally at
          our discretion.
        </p>
      </section>

      <section>
        <h2>Delivered Systems</h2>
        <p>
          Delivered and handed-over systems are non-refundable. Post-delivery issues are handled
          under the support terms, not through refunds.
        </p>
      </section>

      <section>
        <h2>How to Cancel</h2>
        <p>
          Send a written cancellation request to{' '}
          <a href="mailto:contact@nexifier.in">contact@nexifier.in</a> or message us on WhatsApp.
          We'll confirm receipt and outline any refund due within 5–7 business days.
        </p>
      </section>

      <section>
        <h2>Processing Time</h2>
        <p>
          Approved refunds are processed within 7–14 business days via the original payment method.
        </p>
      </section>
    </LegalLayout>
  );
};

export default Cancellation;
