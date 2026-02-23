import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — CareDose",
  description:
    "The agreement between you and CareDose governing your use of the app and services.",
};

export default function TermsPage() {
  return (
    <>
      <LegalHeader />
      <main>
        <HeroBanner
          title="Terms of Service"
          subtitle="The agreement between you and CareDose governing your use of the app and services"
          effective="Effective Date: March 1, 2026"
          updated="Last Updated: March 1, 2026"
        />
        <article className="section-container section-padding py-12 md:py-16">
          <div className="max-w-3xl mx-auto legal-prose">
            {/* Critical notice */}
            <div className="warning-callout">
              <p className="font-semibold mb-2">Please Read Carefully</p>
              <p>
                These Terms of Service constitute a legally binding agreement between you and
                CareDose Technologies Ltd. By creating an account or using the CareDose
                application, you agree to be bound by these Terms. If you do not agree, do not
                create an account or use the app. Key terms include limitations on our liability,
                a dispute resolution clause, and important disclaimers about the medical nature
                of this app.
              </p>
            </div>

            {/* Section 1 */}
            <SectionHeading n={1} title="Acceptance of Terms and Eligibility" />
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
              CareDose mobile application, website, and related services (collectively, the
              &ldquo;Service&rdquo;) provided by CareDose Technologies Ltd (&ldquo;CareDose&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By downloading the app,
              creating an account, or using any part of the Service, you confirm that:
            </p>
            <ul>
              <li>You have read and understood these Terms and our Privacy Policy, which is incorporated into these Terms by reference.</li>
              <li>You are at least 18 years of age, or if you are between 13 and 17, that you have obtained verifiable parental or guardian consent.</li>
              <li>You have the legal capacity to enter into a binding agreement in your jurisdiction.</li>
              <li>You are not prohibited from using the Service under applicable law, including any sanctions or export control regulations.</li>
            </ul>
            <p>
              If you are creating an account on behalf of a minor, you represent that you are the
              parent or legal guardian and that you accept these Terms on the minor&apos;s behalf.
            </p>

            {/* Section 2 */}
            <SectionHeading n={2} title="Description of the Service" />
            <p>
              CareDose is a personal medication and supplement management application. The
              Service enables you to:
            </p>
            <ul>
              <li>Create and manage a personalised medication schedule listing names, dosages, frequencies, and time slots.</li>
              <li>Log dose actions, including marking a dose as taken, missed, taken late, or excused, with optional notes.</li>
              <li>Track adherence metrics including a daily adherence score, weekly adherence percentage, and consecutive day streaks.</li>
              <li>Receive local on-device reminders for scheduled doses and refill thresholds.</li>
              <li>Invite caregivers to view your medication schedule and dose status in real time, and optionally to receive push notifications when high-priority doses are missed.</li>
              <li>Access premium features in the Family tier including caregiver missed-dose alerts, support for multiple caregivers, multi-device sync, and exportable adherence reports.</li>
            </ul>
            <p>
              The Service is designed to help you remember and track your medications.
              <strong> It is not a medical device, a medical records system, a clinical
              decision support tool, or a telehealth platform.</strong> See Section 5 (Medical
              Disclaimer) for important limitations.
            </p>

            {/* Section 3 */}
            <SectionHeading n={3} title="Account Registration and Security" />

            <h3>3.1 &nbsp;Account Creation</h3>
            <p>
              To use most features of CareDose, you must create an account using a valid email
              address and password, or by authenticating via Sign in with Apple or Google Sign-In.
              You agree to provide accurate, current, and complete information.
            </p>

            <h3>3.2 &nbsp;Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials.
              You agree to:
            </p>
            <ul>
              <li>Use a strong, unique password that you do not use for any other service.</li>
              <li>Enable biometric authentication (Face ID or Touch ID) where available.</li>
              <li>Notify CareDose immediately at security@caredose.app if you suspect unauthorised access.</li>
              <li>Ensure that you sign out of shared devices after each session.</li>
            </ul>
            <p>
              CareDose will never ask for your password via email or in-app message. Any
              communication requesting your password is fraudulent — report it to
              security@caredose.app.
            </p>

            <h3>3.3 &nbsp;Account Responsibility</h3>
            <p>
              You are responsible for all activity that occurs under your account. CareDose is
              not liable for any loss arising from your failure to maintain account security.
            </p>

            <h3>3.4 &nbsp;One Account Per Person</h3>
            <p>
              Each account is personal. Sharing credentials is prohibited. The caregiver feature
              is the correct mechanism for allowing another person to view and interact with your
              medication data.
            </p>

            {/* Section 4 */}
            <SectionHeading n={4} title="Caregiver Features and Permissions" />

            <h3>4.1 &nbsp;Consent and Invitation</h3>
            <p>
              Only you, as the owner of a patient profile, can invite a caregiver. Caregivers
              cannot add themselves. Every invitation is single-use and expires after 24 hours.
            </p>

            <h3>4.2 &nbsp;Caregiver Roles</h3>
            <p>When inviting a caregiver, you assign them one of two roles:</p>
            <ul>
              <li><strong>View-only</strong> — the caregiver can see your medication schedule, today&apos;s dose status, and historical adherence. They cannot modify records or log doses.</li>
              <li><strong>Edit</strong> — the caregiver has all view permissions plus the ability to log dose actions on your behalf and mark doses as excused. They cannot change your account credentials, subscription, or notification settings.</li>
            </ul>
            <p>
              You may change a caregiver&apos;s role or remove them at any time from Settings
              &rarr; Care Team. Removal takes effect immediately.
            </p>

            <h3>4.3 &nbsp;Caregiver Responsibilities</h3>
            <p>If you are using CareDose as a caregiver, you agree to:</p>
            <ul>
              <li>Use your access only for the purpose of supporting the care recipient who invited you.</li>
              <li>Keep medication and dose information confidential.</li>
              <li>Not attempt to access any patient profile other than those for which you have a valid invitation.</li>
              <li>Log dose actions accurately and only when you have genuine knowledge.</li>
              <li>Notify the care recipient if you no longer wish to serve as a caregiver.</li>
            </ul>

            <h3>4.4 &nbsp;Notification Opt-Out</h3>
            <p>
              Caregivers may disable missed-dose notifications at any time from Notifications
              &rarr; Caregiver Alerts, or by removing themselves from the Care Team. The care
              recipient will be notified when notification settings change.
            </p>

            {/* Section 5 */}
            <SectionHeading n={5} title="Medical Disclaimer" />

            <div className="warning-callout">
              <p className="font-semibold mb-2">Critical Disclaimer</p>
              <p>
                CareDose is a tracking and reminder tool. It is NOT a medical device, NOT a
                clinical decision support system, and NOT a substitute for professional medical
                advice. Nothing in the app constitutes medical advice, diagnosis, or treatment.
                Always consult a qualified healthcare professional about your medications.
              </p>
            </div>

            <p>The Service does not:</p>
            <ul>
              <li>Verify the accuracy, completeness, or appropriateness of any medication information you enter.</li>
              <li>Detect, prevent, or warn you about drug interactions, contraindications, overdose risks, or other medication safety concerns.</li>
              <li>Provide clinical guidance on whether to take, skip, adjust, or discontinue any medication.</li>
              <li>Replace the advice or oversight of a qualified physician, pharmacist, nurse, or other licensed healthcare professional.</li>
              <li>Guarantee that reminders will be delivered on time, or that missed-dose alerts will reach your caregiver within any particular timeframe.</li>
            </ul>

            <p>You acknowledge and agree that:</p>
            <ul>
              <li>Any decision to take, skip, delay, or modify a medication dose must be made in consultation with your healthcare provider.</li>
              <li>Adherence statistics reflect only what has been logged in the app and may not accurately represent your actual medication behaviour.</li>
              <li>CareDose assumes no responsibility for any harm, adverse event, or medical outcome arising from your use of or reliance on the Service.</li>
              <li>In a medical emergency, call the appropriate emergency services — do not rely on CareDose notifications or caregiver alerts.</li>
            </ul>

            {/* Section 6 */}
            <SectionHeading n={6} title="Subscriptions, Payments, and Refunds" />

            <h3>6.1 &nbsp;Free and Family Tiers</h3>
            <p>
              CareDose offers a free tier and a paid Family tier. The free tier includes unlimited
              medication tracking, local reminders, dose logging, adherence streaks, and one
              view-only caregiver. The Family tier includes all free features plus caregiver
              missed-dose push notifications, support for multiple caregivers, multi-device cloud
              sync, and exportable adherence reports in PDF format.
            </p>

            <h3>6.2 &nbsp;Free Trial</h3>
            <p>
              New users are eligible for a 7-day free trial of the Family tier at account
              creation. At the end of the trial, your account reverts to the free tier unless you
              subscribe. You will not be charged automatically without your explicit action.
            </p>

            <h3>6.3 &nbsp;Subscription Pricing and Billing</h3>
            <ul>
              <li><strong>Monthly subscription:</strong> USD 3.99 per month (or local equivalent)</li>
              <li><strong>Annual subscription:</strong> USD 19.99 per year (~58% savings)</li>
              <li><strong>Lifetime purchase:</strong> may be offered at our discretion</li>
            </ul>
            <p>
              All subscriptions are billed through Apple App Store or Google Play. Subscriptions
              automatically renew unless cancelled at least 24 hours before the end of the
              current period.
            </p>

            <h3>6.4 &nbsp;Cancellation</h3>
            <p>
              You may cancel at any time. Cancellation stops renewal but does not result in a
              pro-rata refund. You retain access to Family features until the end of the paid
              period.
            </p>
            <ul>
              <li><strong>iOS:</strong> Settings &rarr; [your name] &rarr; Subscriptions &rarr; CareDose &rarr; Cancel</li>
              <li><strong>Android:</strong> Google Play &rarr; Profile &rarr; Payments &amp; subscriptions &rarr; Subscriptions &rarr; CareDose &rarr; Cancel</li>
            </ul>

            <h3>6.5 &nbsp;Refund Policy</h3>
            <p>
              Refunds are processed by Apple or Google. If you believe you are entitled to a
              refund due to a technical failure on our end, contact support@caredose.app.
            </p>

            <h3>6.6 &nbsp;Price Changes</h3>
            <p>
              We may change prices with at least 30 days&apos; advance notice to existing
              subscribers. Price changes take effect at the next renewal date after the notice
              period.
            </p>

            {/* Section 7 */}
            <SectionHeading n={7} title="Acceptable Use and Prohibited Conduct" />
            <p>You agree that you will not:</p>
            <ul>
              <li>Track medications for a person who has not consented to such tracking.</li>
              <li>Invite a caregiver without the knowledge of the person whose data will be shared.</li>
              <li>Attempt to access another user&apos;s account, data, or patient profile without authorisation.</li>
              <li>Use automated tools, bots, or scripts to interact with the Service or extract data.</li>
              <li>Reverse-engineer, decompile, or disassemble the CareDose application.</li>
              <li>Overburden, damage, or impair servers or networks connected to the Service.</li>
              <li>Upload or transmit unlawful, harmful, threatening, abusive, or defamatory content.</li>
              <li>Impersonate any person or entity.</li>
              <li>Resell, sublicense, or commercialise access to the Service without written permission.</li>
              <li>Circumvent, disable, or interfere with security-related features of the Service.</li>
            </ul>
            <p>
              Violation may result in immediate suspension or termination of your account.
            </p>

            {/* Section 8 */}
            <SectionHeading n={8} title="Intellectual Property" />

            <h3>8.1 &nbsp;Our Property</h3>
            <p>
              CareDose and all associated intellectual property — including application code, UI
              designs, graphics, icons, text, data models, algorithms, and the CareDose name,
              logo, and brand marks — are the property of CareDose Technologies Ltd and are
              protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3>8.2 &nbsp;Licence to Use</h3>
            <p>
              Subject to your compliance with these Terms, CareDose grants you a limited,
              non-exclusive, non-transferable, revocable licence to install and use the
              application on devices you own or control, solely for personal, non-commercial use.
            </p>

            <h3>8.3 &nbsp;Your Content</h3>
            <p>
              You retain ownership of all medication data, dose logs, notes, and other content
              you enter (&ldquo;Your Content&rdquo;). By entering Your Content into CareDose, you
              grant us a limited licence to store, process, and transmit it solely as necessary
              to provide the Service.
            </p>

            <h3>8.4 &nbsp;Feedback</h3>
            <p>
              If you provide suggestions or feedback, you grant us a perpetual, royalty-free
              licence to use and incorporate that feedback into our products without obligation.
            </p>

            {/* Section 9 */}
            <SectionHeading n={9} title="Disclaimers and Limitation of Liability" />

            <h3>9.1 &nbsp;Disclaimer of Warranties</h3>
            <p>
              <strong>THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
              AVAILABLE&rdquo;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.</strong> To
              the maximum extent permitted by applicable law, CareDose expressly disclaims all
              warranties, including implied warranties of merchantability, fitness for a
              particular purpose, title, and non-infringement.
            </p>

            <h3>9.2 &nbsp;Limitation of Liability</h3>
            <p>
              <strong>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW,</strong> CareDose, its
              directors, employees, partners, contractors, suppliers, and agents shall not be
              liable for any indirect, incidental, special, consequential, exemplary, or punitive
              damages, including loss of profits, data, goodwill, or other intangible losses;
              physical harm, adverse medical events, or health consequences arising from missed
              doses or reliance on the Service.
            </p>
            <p>
              In no event shall CareDose&apos;s total cumulative liability exceed the greater of:
              (a) the total amount you paid to CareDose in the twelve (12) months preceding the
              claim; or (b) USD 100.
            </p>

            <h3>9.3 &nbsp;Essential Basis of the Bargain</h3>
            <p>
              You acknowledge that the limitations of liability reflect a reasonable allocation of
              risk and are an essential element of the basis of the bargain between us.
            </p>

            <h3>9.4 &nbsp;Exceptions</h3>
            <p>
              Some jurisdictions do not allow the exclusion of implied warranties or limitation of
              liability for certain damages. In those jurisdictions, our liability will be limited
              to the greatest extent permitted by applicable law.
            </p>

            {/* Section 10 */}
            <SectionHeading n={10} title="Indemnification" />
            <p>
              You agree to defend, indemnify, and hold harmless CareDose Technologies Ltd and its
              officers, directors, employees, contractors, agents, licensors, and successors from
              claims arising from:
            </p>
            <ul>
              <li>Your use of or inability to use the Service.</li>
              <li>Your violation of these Terms.</li>
              <li>Your violation of any applicable law or third-party rights.</li>
              <li>Your Content, including any claim that it infringes intellectual property or privacy rights.</li>
              <li>Any action taken by a caregiver you invited, arising from permissions you granted.</li>
            </ul>

            {/* Section 11 */}
            <SectionHeading n={11} title="Term, Suspension, and Termination" />

            <h3>11.1 &nbsp;Term</h3>
            <p>
              These Terms are effective from the date you first access the Service and continue
              until terminated by either party.
            </p>

            <h3>11.2 &nbsp;Termination by You</h3>
            <p>
              You may terminate your account at any time via Settings &rarr; Account &rarr; Delete
              Account. Your data will be permanently deleted within 30 days. If you have an active
              subscription, you must cancel separately through the App Store or Google Play.
            </p>

            <h3>11.3 &nbsp;Termination by CareDose</h3>
            <p>We may suspend or terminate your account if:</p>
            <ul>
              <li>You materially breach these Terms and fail to remedy the breach within 14 days of written notice.</li>
              <li>We are required to do so by law or a regulatory authority.</li>
              <li>We discontinue the Service.</li>
              <li>We reasonably believe your account has been compromised.</li>
            </ul>

            <h3>11.4 &nbsp;Effect of Termination</h3>
            <p>
              Upon termination, your right to access the Service immediately ceases. Sections 5,
              8, 9, 10, 12, 13, and 14 survive termination.
            </p>

            {/* Section 12 */}
            <SectionHeading n={12} title="Governing Law and Dispute Resolution" />

            <h3>12.1 &nbsp;Governing Law</h3>
            <p>
              These Terms shall be governed by the laws of the jurisdiction in which CareDose
              Technologies Ltd is incorporated, without regard to conflict of law provisions.
            </p>

            <h3>12.2 &nbsp;Informal Dispute Resolution</h3>
            <p>
              Before initiating any formal proceeding, you agree to first attempt to resolve the
              dispute informally by contacting legal@caredose.app. We will attempt to resolve the
              dispute within 60 days.
            </p>

            <h3>12.3 &nbsp;Binding Arbitration</h3>
            <p>
              For users in jurisdictions where binding arbitration is enforceable, disputes shall
              be resolved by binding arbitration on an individual basis — not as a class action.
              You are waiving your right to a jury trial and to participate in a class action.
            </p>

            <h3>12.4 &nbsp;Jurisdiction for Court Proceedings</h3>
            <p>
              For disputes not subject to arbitration, you consent to the exclusive jurisdiction
              of the courts in the jurisdiction where CareDose Technologies Ltd is incorporated.
            </p>

            <h3>12.5 &nbsp;Time Limitation on Claims</h3>
            <p>
              Any claim must be filed within one (1) year after the claim arose, or be forever
              barred.
            </p>

            {/* Section 13 */}
            <SectionHeading n={13} title="Modifications to the Service and Terms" />

            <h3>13.1 &nbsp;Modifications to the Service</h3>
            <p>
              We reserve the right to modify, update, suspend, or discontinue the Service at any
              time. Features may move between tiers with at least 30 days&apos; advance notice. We
              will not remove a feature from the Family tier without offering a refund or credit
              for any prepaid period affected.
            </p>

            <h3>13.2 &nbsp;Modifications to These Terms</h3>
            <p>
              We may update these Terms with at least 30 days&apos; notice via in-app notification
              and email. Continued use after the effective date constitutes acceptance. If you
              disagree, you must stop using the Service and may delete your account.
            </p>

            {/* Section 14 */}
            <SectionHeading n={14} title="General Provisions" />

            <h3>14.1 &nbsp;Entire Agreement</h3>
            <p>
              These Terms, together with the Privacy Policy and any additional terms for specific
              features, constitute the entire agreement between you and CareDose.
            </p>

            <h3>14.2 &nbsp;Severability</h3>
            <p>
              If any provision is found invalid, it shall be modified to the minimum extent
              necessary, and the remaining provisions continue in full force.
            </p>

            <h3>14.3 &nbsp;Waiver</h3>
            <p>
              Our failure to enforce any provision shall not constitute a waiver of that
              provision.
            </p>

            <h3>14.4 &nbsp;Assignment</h3>
            <p>
              You may not assign your rights under these Terms without our consent. We may assign
              ours in connection with a merger, acquisition, or sale of assets.
            </p>

            <h3>14.5 &nbsp;Force Majeure</h3>
            <p>
              Neither party is liable for failures due to circumstances beyond reasonable
              control, including acts of God, natural disasters, pandemic, war, failure of
              third-party infrastructure, or governmental action.
            </p>

            <h3>14.6 &nbsp;Notices</h3>
            <p>
              Notices to CareDose must be sent to legal@caredose.app. Notices from CareDose will
              be sent to your account email and/or via in-app notification.
            </p>

            <h3>14.7 &nbsp;Language</h3>
            <p>
              These Terms are written in English. In the event of any conflict with a translated
              version, the English version prevails.
            </p>

            <h3>14.8 &nbsp;Third-Party Beneficiaries</h3>
            <p>
              There are no third-party beneficiaries to these Terms.
            </p>

            {/* Contact */}
            <div className="callout mt-14">
              <p className="font-semibold text-primary-dark mb-3">Contact Us</p>
              <ul className="space-y-1.5 !pl-0">
                <li className="!pl-0 before:!hidden"><strong>Legal enquiries:</strong> legal@caredose.app</li>
                <li className="!pl-0 before:!hidden"><strong>Privacy requests:</strong> privacy@caredose.app</li>
                <li className="!pl-0 before:!hidden"><strong>Account security:</strong> security@caredose.app</li>
                <li className="!pl-0 before:!hidden"><strong>General support:</strong> support@caredose.app</li>
                <li className="!pl-0 before:!hidden"><strong>Data protection officer:</strong> dpo@caredose.app</li>
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-txt-tertiary">
                CareDose Technologies Ltd &nbsp;&middot;&nbsp; privacy@caredose.app &nbsp;&middot;&nbsp; legal@caredose.app &nbsp;&middot;&nbsp; caredose.app
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
