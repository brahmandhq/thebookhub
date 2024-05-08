import React from "react";

export default function TermsOfService() {
  const heading = "Website Terms and Conditions of Use";

  return (
    <div className="bg-neutral-900 rounded-lg h-screen w-full overflow-y-auto">
      <div className="m-auto w-9/12 p-20 text-justify">
        <div className="mb-4">
          <p className="text-center text-3xl font-semibold">{heading}</p>
        </div>
        <p className="my-4 text-xl font-semibold">1. Terms</p>
        <p>
          By accessing this Website, accessible from thebookhub.org, you are
          agreeing to be bound by these Website Terms and Conditions of Use and
          agree that you are responsible for the agreement with any applicable
          local laws. If you disagree with any of these terms, you are
          prohibited from accessing this site. The materials contained in this
          Website are protected by copyright and trade mark law.
        </p>
        -<p className="my-4 text-xl font-semibold">2. Use License</p>
        <p>
          Permission is granted to temporarily download one copy of the
          materials on TheBookHub&apos;s Website for personal, non-commercial
          transitory viewing only. This is the grant of a license, not a
          transfer of title, and under this license you may not:
        </p>
        <ul>
          <li>modify or copy the materials;</li>
          <li>
            use the materials for any commercial purpose or for any public
            display;
          </li>
          <li>
            attempt to reverse engineer any software contained on
            TheBookHub&apos;s Website;
          </li>
          <li>
            remove any copyright or other proprietary notations from the
            materials; or
          </li>
          <li>
            transferring the materials to another person or &#34;mirror&#34; the
            materials on any other server.
          </li>
        </ul>
        <p>
          This will let TheBookHub to terminate upon violations of any of these
          restrictions. Upon termination, your viewing right will also be
          terminated and you should destroy any downloaded materials in your
          possession whether it is printed or electronic format. These Terms of
          Service has been created with the help of the{" "}
          <a href="https://www.termsofservicegenerator.net">
            Terms Of Service Generator
          </a>
          .
        </p>
        <p className="my-4 text-xl font-semibold">3. Disclaimer</p>
        <p>
          All the materials on TheBookHub’s Website are provided &#34;as
          is&#34;. TheBookHub makes no warranties, may it be expressed or
          implied, therefore negates all other warranties. Furthermore,
          TheBookHub does not make any representations concerning the accuracy
          or reliability of the use of the materials on its Website or otherwise
          relating to such materials or any sites linked to this Website.
        </p>
        <p className="my-4 text-xl font-semibold">4. Limitations</p>
        <p>
          TheBookHub or its suppliers will not be hold accountable for any
          damages that will arise with the use or inability to use the materials
          on TheBookHub’s Website, even if TheBookHub or an authorize
          representative of this Website has been notified, orally or written,
          of the possibility of such damage. Some jurisdiction does not allow
          limitations on implied warranties or limitations of liability for
          incidental damages, these limitations may not apply to you.
        </p>
        <p className="my-4 text-xl font-semibold">5. Revisions and Errata</p>
        <p>
          The materials appearing on TheBookHub’s Website may include technical,
          typographical, or photographic errors. TheBookHub will not promise
          that any of the materials in this Website are accurate, complete, or
          current. TheBookHub may change the materials contained on its Website
          at any time without notice. TheBookHub does not make any commitment to
          update the materials.
        </p>
        <p className="my-4 text-xl font-semibold">6. Links</p>
        <p>
          TheBookHub has not reviewed all of the sites linked to its Website and
          is not responsible for the contents of any such linked site. The
          presence of any link does not imply endorsement by TheBookHub of the
          site. The use of any linked website is at the user’s own risk.
        </p>
        <p className="my-4 text-xl font-semibold">
          7. Site Terms of Use Modifications
        </p>
        <p>
          TheBookHub may revise these Terms of Use for its Website at any time
          without prior notice. By using this Website, you are agreeing to be
          bound by the current version of these Terms and Conditions of Use.
        </p>
        <p className="my-4 text-xl font-semibold">8. Your Privacy</p>
        <p>Please read our Privacy Policy.</p>
        <p className="my-4 text-xl font-semibold">9. Governing Law</p>
        <p>
          Any claim related to TheBookHub&apos;s Website shall be governed by
          the laws of in without regards to its conflict of law provisions.
        </p>
      </div>
    </div>
  );
}
