import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — CareDose",
  description:
    "How CareDose collects, uses, protects, and shares your personal and health information.",
};

export default function PrivacyPage() {
  return (
    <>
      <LegalHeader />
      <main>
        <HeroBanner
          title="Privacy Policy"
          subtitle="How CareDose collects, uses, protects, and shares your personal and health information"
          effective="Effective Date: March 1, 2026"
          updated="Last Updated: March 1, 2026"
        />
        <article className="section-container section-padding py-12 md:py-16">
          <div className="max-w-3xl mx-auto legal-prose">
            {/* Plain-language summary */}
            <div className="callout">
              <p className="font-semibold text-primary-dark mb-2">Plain-Language Summary</p>
              <p>
                CareDose is a medication tracking app. To work, it needs to know which
                medications you take and when you take them. This policy explains exactly what
                we collect, how we store it, who can see it, and what rights you have over it.
                We do not sell your health data. We do not share it with advertisers. You can
                delete everything at any time.
              </p>
            </div>

            {/* Section 1 */}
            <SectionHeading n={1} title="Who We Are and How to Contact Us" />
            <p>
              CareDose is a mobile application developed and operated by CareDose Technologies
              Ltd (referred to in this policy as &ldquo;CareDose&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;our&rdquo;). CareDose Technologies Ltd is a privately
              held software company registered under the laws of its jurisdiction of
              incorporation.
            </p>
            <p>
              We take privacy seriously. If you have any questions, concerns, or requests
              relating to this Privacy Policy or your personal data, you can reach our dedicated
              Privacy team through the following channels:
            </p>
            <ul>
              <li><strong>Email:</strong> privacy@caredose.app</li>
              <li><strong>In-app:</strong> Settings &rarr; Help &amp; Support &rarr; Privacy Request</li>
              <li><strong>Postal address:</strong> [Registered business address]</li>
            </ul>
            <p>
              We will respond to all privacy-related enquiries within fourteen (14) business
              days. For requests relating to the deletion or export of personal data, we will
              complete the action within thirty (30) days of verifying your identity.
            </p>

            {/* Section 2 */}
            <SectionHeading n={2} title="The Information We Collect" />
            <p>
              We collect information in three ways: information you give us directly,
              information your device or the app generates automatically, and in limited cases,
              information provided by caregivers or authorised third parties on your behalf.
            </p>

            <h3>2.1 &nbsp;Information You Provide Directly</h3>
            <p>
              When you create a CareDose account and use the app, you provide us with the
              following categories of information:
            </p>
            <ul>
              <li>
                <strong>Account credentials</strong> — your email address, encrypted password,
                and display name. If you use Sign in with Apple or Google Sign-In, we receive a
                unique identifier and your email address from Apple or Google.
              </li>
              <li>
                <strong>Medication and supplement data</strong> — the names, dosages,
                frequencies, time schedules, refill counts, notes, and priority settings for each
                medication or supplement you add to the app.
              </li>
              <li>
                <strong>Dose log data</strong> — records of every dose action you take, including
                whether you marked a dose as taken, missed, taken late, or excused, along with
                the timestamp of that action and who logged it.
              </li>
              <li>
                <strong>Caregiver relationship data</strong> — if you invite a caregiver, we
                store their name, email address, their role (view-only or edit), whether they have
                accepted the invitation, and their notification preferences.
              </li>
              <li>
                <strong>Health context data</strong> (optional, future feature) — if you choose to
                log supplementary health readings such as blood pressure, blood glucose, or body
                weight, we store those values along with the date and time of each reading.
              </li>
              <li>
                <strong>Refill information</strong> — the current count and refill threshold for
                each medication, which you update manually.
              </li>
              <li>
                <strong>Symptom and side-effect notes</strong> (optional) — any free-text notes
                you attach to a dose log entry.
              </li>
              <li>
                <strong>Device notification preferences</strong> — your choices about which
                notifications to receive, at what times, and which medications are marked high
                priority.
              </li>
              <li>
                <strong>Support and feedback communications</strong> — if you contact us via
                in-app support, email, or feedback forms, we retain the content of those
                communications.
              </li>
            </ul>

            <h3>2.2 &nbsp;Information Collected Automatically</h3>
            <p>
              When you use CareDose, our systems and third-party service providers automatically
              collect certain technical information:
            </p>
            <ul>
              <li>
                <strong>Device identifiers</strong> — including your device type, operating system
                version, and a Firebase-generated installation identifier. We do not collect your
                IMEI, SIM serial number, or any permanent hardware identifier.
              </li>
              <li>
                <strong>FCM token</strong> — a rotating push notification token generated by
                Firebase Cloud Messaging and stored in your user profile. This token changes
                periodically and is used only to send notifications to your specific device.
              </li>
              <li>
                <strong>App usage and crash data</strong> — we use Firebase Crashlytics and
                Firebase Performance Monitoring to collect anonymised crash reports, stack traces,
                and performance metrics. These do not contain medication data.
              </li>
              <li>
                <strong>Firestore access logs</strong> — Firebase maintains server-side logs of
                database read and write operations for security and debugging purposes.
              </li>
              <li>
                <strong>IP address</strong> — captured at sign-in for fraud prevention and
                security monitoring. We do not use IP addresses to build advertising profiles.
              </li>
            </ul>

            <h3>2.3 &nbsp;Information We Do Not Collect</h3>
            <p>
              We want to be explicit about what we <strong>do not</strong> collect, because we
              understand the sensitivity of health data:
            </p>
            <ul>
              <li>We do not collect your precise GPS location. The app does not request location permission.</li>
              <li>We do not access your camera, microphone, or photo library unless you explicitly use a future feature that requires it — and only with your explicit permission at that moment.</li>
              <li>We do not collect biometric authentication data. Face ID and Touch ID authentication is handled entirely by your device&apos;s operating system and never transmitted to our servers.</li>
              <li>We do not collect data from other apps on your device.</li>
              <li>We do not purchase data about you from data brokers or third-party data vendors.</li>
            </ul>

            {/* Section 3 */}
            <SectionHeading n={3} title="How We Use Your Information" />
            <p>
              We use the information we collect strictly for the purposes described below. We do
              not use your medication data, dose history, or health context information for
              advertising, profiling, or sale to any third party.
            </p>

            <h3>3.1 &nbsp;Core App Functionality</h3>
            <ul>
              <li>To display your personalised medication schedule and today checklist.</li>
              <li>To record dose logs when you tap Took it, Missed, or Took late, and to associate those logs with the correct medication and scheduled time.</li>
              <li>To calculate your adherence percentage and streak count, which are derived from your dose log history.</li>
              <li>To send local on-device notifications for dose reminders, follow-up reminders, and refill alerts — these are generated on your device and do not require our servers.</li>
              <li>To sync your data across your own devices when you enable cloud sync.</li>
            </ul>

            <h3>3.2 &nbsp;Caregiver Features</h3>
            <ul>
              <li>To allow a caregiver you invite to view your medication schedule and today&apos;s dose status in real time.</li>
              <li>To send push notifications to your caregiver&apos;s device when a dose you have marked as high priority is not logged within the alert window — this is a Family tier feature requiring your explicit consent at time of setup.</li>
              <li>To deliver encouragement messages from your caregiver to your home screen.</li>
            </ul>

            <h3>3.3 &nbsp;Account and Security Management</h3>
            <ul>
              <li>To verify your identity when you sign in or request account changes.</li>
              <li>To prevent unauthorised access to your account, including detecting unusual sign-in activity.</li>
              <li>To send password reset emails when requested.</li>
              <li>To enforce your subscription entitlements (free vs. Family tier) based on information received from RevenueCat following a confirmed purchase or cancellation.</li>
            </ul>

            <h3>3.4 &nbsp;Service Improvement and Safety</h3>
            <ul>
              <li>To analyse anonymised, aggregated crash and performance data to identify and fix technical problems.</li>
              <li>To respond to support requests you send us.</li>
              <li>To comply with applicable law, regulatory obligations, or valid legal process such as a court order.</li>
            </ul>

            <h3>3.5 &nbsp;What We Will Never Do With Your Data</h3>
            <ul>
              <li>We will <strong>never sell</strong> your personal information, medication data, or health data to any third party.</li>
              <li>We will <strong>never share</strong> your data with advertisers, data brokers, or analytics companies for the purpose of building advertising profiles.</li>
              <li>We will <strong>never use</strong> your medication data to train machine learning models that are shared commercially with third parties.</li>
              <li>We will <strong>never make</strong> automated decisions about your healthcare or medication regimen based on your data.</li>
            </ul>

            {/* Section 4 */}
            <SectionHeading n={4} title="Legal Basis for Processing Your Data" />
            <p>
              Depending on where you live, applicable data protection law may require us to
              identify a legal basis for each type of data processing we perform:
            </p>
            <ul>
              <li><strong>Contract performance</strong> — processing your medication data and dose logs to provide the core functionality you have signed up for.</li>
              <li><strong>Legitimate interests</strong> — processing crash and performance data to maintain and improve the reliability of the app; processing sign-in IP addresses to prevent fraud and unauthorised access.</li>
              <li><strong>Consent</strong> — processing optional health context data; sharing your dose status with your caregiver; sending marketing communications (if you opt in). You can withdraw consent at any time.</li>
              <li><strong>Legal obligation</strong> — retaining records where required by applicable law and responding to valid legal process.</li>
            </ul>

            {/* Section 5 */}
            <SectionHeading n={5} title="How We Store and Protect Your Data" />

            <h3>5.1 &nbsp;Local-First Architecture</h3>
            <p>
              CareDose is designed with a local-first data model. Your medication schedule and
              dose history are stored primarily in an encrypted database on your device (using
              SQLite with platform-level encryption). This means the app functions fully offline,
              and your data does not leave your device unless you choose to enable cloud sync.
            </p>

            <h3>5.2 &nbsp;Cloud Storage</h3>
            <p>
              When cloud sync is enabled, your data is stored in Google Cloud Firestore, operated
              by Google LLC. Firestore data is encrypted at rest using AES-256 encryption and in
              transit using TLS 1.2 or higher. Our Firestore database is protected by security
              rules that enforce strict access controls: your data can only be read by your own
              authenticated account and by caregivers you have explicitly invited.
            </p>

            <h3>5.3 &nbsp;Access Controls</h3>
            <p>We implement the principle of least privilege across our entire backend:</p>
            <ul>
              <li>Your medication data, dose logs, and caregiver relationships can only be accessed by authenticated accounts linked to your patient profile.</li>
              <li>CareDose employees and contractors do not have standing access to individual users&apos; medication data. Access to production data by engineers requires a formal approval process and is logged.</li>
              <li>Your subscription status can only be updated by our server-side Cloud Functions in response to a verified RevenueCat webhook.</li>
            </ul>

            <h3>5.4 &nbsp;Caregiver Invite Security</h3>
            <p>
              When you invite a caregiver, CareDose generates a cryptographically secure one-time
              token. Only a SHA-256 hash of this token is stored in our database — the raw token
              is never stored. The token is included in the invite link sent to the
              caregiver&apos;s email address and expires after 24 hours.
            </p>

            <h3>5.5 &nbsp;Data Breach Response</h3>
            <p>
              In the event of a data breach that is likely to result in a risk to your rights and
              freedoms, we will notify affected users and, where required by law, the relevant
              supervisory authority, within the timeframes mandated by applicable regulation
              (typically 72 hours for regulatory notification).
            </p>

            {/* Section 6 */}
            <SectionHeading n={6} title="Who We Share Your Data With" />
            <p>
              We share your data only with the following categories of parties, and only to the
              extent necessary for the stated purpose:
            </p>

            <h3>6.1 &nbsp;Your Caregivers</h3>
            <p>
              When you invite someone as a caregiver and they accept, they gain visibility into
              your medication list and dose status. You control who is invited, what role they
              have, and you can remove a caregiver at any time from Settings &rarr; Care Team.
            </p>

            <h3>6.2 &nbsp;Service Providers (Sub-processors)</h3>
            <ul>
              <li><strong>Google LLC (Firebase)</strong> — cloud database (Firestore), authentication, push notifications (FCM), crash reporting (Crashlytics), and performance monitoring.</li>
              <li><strong>RevenueCat, Inc.</strong> — subscription and in-app purchase management. RevenueCat receives your Firebase User ID (a pseudonymous identifier) and purchase transaction data. It does not receive your medication data.</li>
              <li><strong>Apple Inc.</strong> — App Store payment processing, Sign in with Apple authentication, APNs notification delivery.</li>
              <li><strong>Google LLC (Google Play)</strong> — Play Store payment processing, Google Sign-In authentication, Firebase Cloud Messaging delivery.</li>
              <li><strong>SendGrid (Twilio Inc.)</strong> — transactional email delivery (caregiver invite emails, password resets). SendGrid does not receive medication data.</li>
            </ul>

            <h3>6.3 &nbsp;Legal and Regulatory Disclosures</h3>
            <p>
              We may disclose your information to law enforcement agencies, courts, or other
              governmental authorities if we are legally required to do so, or in response to a
              verified legal process such as a subpoena or court order. Where permitted by law,
              we will notify you before disclosing your data.
            </p>

            <h3>6.4 &nbsp;Business Transfers</h3>
            <p>
              If CareDose is acquired by or merges with another company, your personal data may
              be transferred. We will notify you at least thirty (30) days before any transfer
              takes effect, and you will have the option to delete your account and data before
              the transfer occurs.
            </p>

            <h3>6.5 &nbsp;With Your Explicit Consent</h3>
            <p>
              We will not share your data with any other party without your explicit, informed,
              and freely given consent.
            </p>

            {/* Section 7 */}
            <SectionHeading n={7} title="Data Retention" />
            <p>
              We retain your personal data for as long as necessary to provide the CareDose
              service, comply with our legal obligations, resolve disputes, and enforce our
              agreements. The following retention periods apply:
            </p>
            <ul>
              <li><strong>Account and profile data</strong> — retained until you delete your account, then permanently deleted within 30 days.</li>
              <li><strong>Medication records and dose logs</strong> — retained until you delete your account or manually delete individual records.</li>
              <li><strong>Security logs</strong> (sign-in timestamps, IP addresses) — retained for a maximum of 90 days.</li>
              <li><strong>Crash and performance data</strong> — retained for 90 days in anonymised form.</li>
              <li><strong>Support communications</strong> — retained for 2 years.</li>
            </ul>

            {/* Section 8 */}
            <SectionHeading n={8} title="Your Rights and Choices" />
            <p>
              Depending on your location, you have the following rights. We honour these rights
              regardless of your location, because we believe they represent the right standard.
            </p>

            <h3>8.1 &nbsp;Right to Access</h3>
            <p>
              You can access most of your data directly within the app under Settings &rarr; My
              Data. For a complete data export, email privacy@caredose.app. We will respond
              within 30 days.
            </p>

            <h3>8.2 &nbsp;Right to Correction</h3>
            <p>
              You can update your name, email address, and medication records directly within the
              app. For other corrections, contact privacy@caredose.app.
            </p>

            <h3>8.3 &nbsp;Right to Deletion</h3>
            <p>
              To delete your account and all associated data, go to Settings &rarr; Account
              &rarr; Delete Account. This action is irreversible. Your data will be permanently
              deleted within 30 days.
            </p>

            <h3>8.4 &nbsp;Right to Data Portability</h3>
            <p>
              Within the app, you can export your dose history as a CSV file and (in the Family
              tier) as a formatted PDF. You may also request a full JSON export by contacting us.
            </p>

            <h3>8.5 &nbsp;Right to Withdraw Consent</h3>
            <p>
              Where we process your data based on consent, you can withdraw that consent at any
              time. To withdraw consent for caregiver sharing, remove the caregiver from Settings
              &rarr; Care Team.
            </p>

            <h3>8.6 &nbsp;Right to Object</h3>
            <p>
              Contact privacy@caredose.app, explaining the processing you object to and your
              reasons. We will assess your objection and, where we cannot demonstrate compelling
              legitimate grounds, cease the processing.
            </p>

            <h3>8.7 &nbsp;Right to Restrict Processing</h3>
            <p>
              You have the right to request that we restrict processing in certain circumstances,
              such as while we are verifying the accuracy of disputed data.
            </p>

            <h3>8.8 &nbsp;Right to Lodge a Complaint</h3>
            <p>
              If you are located in the EEA, the UK, or another jurisdiction with a data
              protection supervisory authority, you have the right to lodge a complaint. We ask
              that you contact us first so we have the opportunity to address your concern.
            </p>

            {/* Section 9 */}
            <SectionHeading n={9} title="Children's Privacy" />
            <p>
              CareDose is not directed at children under the age of 13. We do not knowingly
              collect personal information from children under 13. If we become aware that a child
              under 13 has created an account, we will delete that information as soon as
              possible.
            </p>
            <p>
              For users aged 13 to 17, parental or guardian consent is required. Caregivers may
              set up a patient profile on behalf of a minor with appropriate parental
              authorisation.
            </p>

            {/* Section 10 */}
            <SectionHeading n={10} title="International Data Transfers" />
            <p>
              CareDose&apos;s infrastructure is hosted on Google Cloud Platform. Depending on the
              region you select, your data may be processed in data centres located in Belgium,
              Germany, the United States, or Singapore. When data is transferred from the EEA or
              UK to a country without an adequacy decision, we rely on Google&apos;s Standard
              Contractual Clauses.
            </p>

            {/* Section 11 */}
            <SectionHeading n={11} title="Cookies and Tracking Technologies" />
            <p>
              CareDose is a mobile application and does not use traditional browser cookies. The
              app uses the following functional technologies:
            </p>
            <ul>
              <li><strong>Firebase Authentication session tokens</strong> — stored securely in your device&apos;s Keychain (iOS) or Keystore (Android). Not used for tracking.</li>
              <li><strong>Firebase App Check tokens</strong> — short-lived tokens that verify your device is running a genuine copy of CareDose.</li>
              <li><strong>Local SQLite database</strong> — stores your medication data on-device. Not a tracking mechanism.</li>
            </ul>
            <p>
              We do not use advertising SDKs, third-party analytics trackers, social media
              pixels, or any technology that tracks your behaviour across other apps or websites.
            </p>

            {/* Section 12 */}
            <SectionHeading n={12} title="Jurisdiction-Specific Provisions" />

            <h3>12.1 &nbsp;California Residents (CCPA / CPRA)</h3>
            <p>
              We do not sell personal information as defined under the CCPA. We do not share
              personal information for cross-context behavioural advertising. To exercise your
              California privacy rights, contact privacy@caredose.app.
            </p>

            <h3>12.2 &nbsp;EEA and UK Residents (GDPR / UK GDPR)</h3>
            <p>
              Our Data Controller is CareDose Technologies Ltd. Our Data Protection Officer can
              be contacted at dpo@caredose.app.
            </p>

            <h3>12.3 &nbsp;Nigerian Residents (NDPA)</h3>
            <p>
              CareDose is committed to compliance with the Nigeria Data Protection Act 2023
              (NDPA). To exercise any of your rights, contact privacy@caredose.app.
            </p>

            {/* Section 13 */}
            <SectionHeading n={13} title="Changes to This Privacy Policy" />
            <p>
              When we make material changes, we will notify you at least thirty (30) days before
              the changes take effect, by sending you an in-app notification and an email to your
              account address. If you disagree, you may close your account before the new policy
              takes effect.
            </p>

            {/* Summary */}
            <div className="callout mt-14">
              <p className="font-semibold text-primary-dark mb-2">Summary of Key Commitments</p>
              <p>
                We collect only what is necessary to run the app. We store your health data
                securely with encryption at rest and in transit. We do not sell your data. We do
                not share it with advertisers. You can export, correct, or delete your data at
                any time. We notify you before any material change to this policy.
              </p>
            </div>

            {/* Contact */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-txt-tertiary">
                CareDose Technologies Ltd &nbsp;&middot;&nbsp; privacy@caredose.app &nbsp;&middot;&nbsp; caredose.app
              </p>
            </div>
          </div>
        </article>
      </main>
      <LegalFooter />
    </>
  );
}

/* ─── Shared legal-page components ─── */

function SectionHeading({ n, title }: { n: number; title: string }) {
  return (
    <h2 id={`section-${n}`} className="flex items-center">
      <span className="section-number">{n}</span>
      {title}
    </h2>
  );
}

function LegalHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border py-3.5">
      <div className="section-container section-padding flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/pill-icon.svg"
            alt="CareDose"
            width={32}
            height={32}
            className="transition-transform group-hover:rotate-12"
          />
          <span className="text-lg font-bold text-txt">
            Care<span className="text-primary">Dose</span>
          </span>
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-txt-secondary hover:text-primary transition-colors flex items-center gap-1.5"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 8H4M7 5L4 8l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </Link>
      </div>
    </header>
  );
}

function HeroBanner({
  title,
  subtitle,
  effective,
  updated,
}: {
  title: string;
  subtitle: string;
  effective: string;
  updated: string;
}) {
  return (
    <section className="bg-surface-alt border-b border-border pt-12 pb-10">
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-txt mb-3">{title}</h1>
          <p className="text-lg text-txt-secondary mb-4">{subtitle}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-txt-tertiary">
            <span>{effective}</span>
            <span>{updated}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function LegalFooter() {
  return (
    <footer className="border-t border-border py-8 bg-white">
      <div className="section-container section-padding flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-txt-tertiary">
          &copy; {new Date().getFullYear()} CareDose. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="text-sm text-txt-tertiary hover:text-primary transition-colors font-medium">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm text-txt-tertiary hover:text-primary transition-colors font-medium">
            Terms
          </Link>
          <Link href="/" className="text-sm text-txt-tertiary hover:text-primary transition-colors font-medium">
            Home
          </Link>
        </div>
      </div>
    </footer>
  );
}
