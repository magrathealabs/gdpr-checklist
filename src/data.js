export const steps = [
  {
    id: 'your-data',
    title:'Seus dados',
    items: [,
      {
        id: 1,
        title: 'Sua empresa possui uma lista de todos os tipos de informaçção pessoal exigida, a origem dessa informação, com quem a ela é compartilhada, o que é feito com isso e por quanto tempo é armazenado',
        role: ['processor', 'controller'],
        description: 'This is a list of the actual types (columns) of information being held (eg Name, social security nr, address,..). For each type, a source should be documented, the parties this information is shared with, the purpose of the information and the duration for which the company will keep this information.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/records-of-processing-activities/",
           title: 'GDPR Article 30 – Records of processing activities'
          },
          {
            href: "https://gdprplug.in/gdpr-data-map/",
            title: "GDPR Data Map Template"
          }
        ]
      },
      {
        id: 2,
        title: 'Your company has a list of places where it keeps personal information and the ways data flows between them',
        role: [ 'processor', 'controller'],
        description: 'This could be a list of databases (eg Mysql), but it could also include offline datastores (paper).',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/records-of-processing-activities/",
           title: 'GDPR Article 30 – Records of processing activities'
          }
        ]
      },
      {
        id: 3,
        title: 'Your company has a publicly accessible privacy policy that outlines all processes related to personal data.',
        role: ['processor', 'controller'],
        description: 'You should include information about all processes related to the handling of personal information. This document should include (or have links to) the types of personal information the company holds, and where it holds them. ',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/records-of-processing-activities/",
           title: 'GDPR Article 30 – Records of processing activities'
          }
        ]
      },
      {
        id: 4,
        title: 'Your privacy policy should include a lawful basis to explain why the company needs to process personal information',
        role: [ 'controller'],
        description: 'It should contain a reason for data processing, eg the fulfillment of a contract.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/lawfulness-of-processing/",
           title: 'GDPR Article 6 – Lawfulness of processing'
          }
        ]
      }
    ]
  },
  {
    id: 'accountability-management',
    title:'Accountability & management',
    items: [{
        id: 1,
        title: 'Your company has appointed a Data Protection Officer (DPO)',
        role: ['processor', 'controller'],
        description: 'A DPO is only required in three scenarios: (1) the processing is carried out by a public authority or body, except for courts acting in their judicial capacity; (2) the core activities of the business consist of processing operations which, by virtue of their nature, scope, and/or purposes, require regular and systematic monitoring of data subjects on a large scale, or (3) the core activities of the business consist of processing on a large scale special categories of data (sensitive data) pursuant to Article 9 and personal data relating to criminal convictions or offenses pursuant to Article 10. If a DPO is required, the DPO should have knowledge of GDPR guidelines as well as knowledge about the internal processes that involve personal information.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/designation-of-the-data-protection-officer/",
           title: 'GDPR Article 37 – Designation of the data protection officer'
          }
        ]
      },
      {
        id: 2,
        title: 'Create awareness among decision makers about GDPR guidelines',
        role: ['processor', 'controller'],
        description: 'Make sure key people and decision makers have up-to-date knowledge about the data protection legislation.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/data-protection-by-design-and-by-default/",
           title: 'GDPR Article 25 – Data protection by design and by default'
          }
        ]
      },
      {
        id: 3,
        title: 'Make sure your technical security is up to date. ',
        role: ['processor', 'controller'],
        description: 'For SaaS software companies, use the SaaS CTO security checklist as a starting point below.',
        links: [
          {title: "SaaS CTO security checklist",
           href: 'https://cto-security-checklist.sqreen.io/'
          },
          {href: "https://advisera.com/eugdpracademy/gdpr/data-protection-by-design-and-by-default/",
           title: 'GDPR Article 25 – Data protection by design and by default'
          }
        ]
      },
      {
        id: 4,
        title: 'Train staff to be aware of data protection',
        role: ['processor'],
        description: 'A lot of security vulnerabilities involve cooperation of an unwitting person with access to internal systems. Make sure your employees are aware of these risks.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/data-protection-by-design-and-by-default/",
           title: 'GDPR Article 25 – Data protection by design and by default'
          }
        ]
      },
      {
        id: 5,
        title: 'You have a list of sub-processors and your privacy policy mentions your use of this sub-processor',
        role: ['processor'],
        description: 'You should inform your customers of the use of any sub-processor. They should consent by accepting your privacy policy.',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/processor/",
            title: 'GDPR Article 28 – Processor'
          },
          {
            href: "https://www.gdprtracker.io",
            title: "GDPR Tracker - Keep track of the GDPR compliance of cloud services & subprocessors"
          }
        ]
      },
      {
        id: 6,
        title: 'If your business operates outside the EU, you have appointed a representative within the EU.',
        role: ['processor', 'controller'],
        description: 'If you have a business outside of the EU and you collect data on EU citizens, you should assign a representative in one of the member states for your business. This person should handle all issues related to processing. In particular, a local authority should be able to contact this person.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/representatives-of-controllers-or-processors-not-established-in-the-union/",
           title: 'GDPR Article 27 – Representatives of controllers or processors not established in the Union'
          }
        ]
      },{
        id: 7,
        title: 'You report data breaches involving personal data to the local authority and to the people (data subjects) involved',
        role: ['processor', 'controller'],
        description: 'Personal data breaches should be reported within 72 hours to the local authority. You should report what data has been lost, what the consequences are and what countermeasures you have taken. Unless the data leaked was encrypted, you should also report the breach to the person (data subject) whose data you lost.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/notification-of-a-personal-data-breach-to-the-supervisory-authority/",
           title: 'GDPR Article 33 – Notification of a personal data breach to the supervisory authority'
          },
          {href: "https://advisera.com/eugdpracademy/gdpr/communication-of-a-personal-data-breach-to-the-data-subject/",
           title: 'GDPR Article 34 – Communication of a personal data breach to the data subject'
          }
        ]
      },{
        id: 8,
        title: 'There is a contract in place with any data processors that you share data with',
        role: [ 'controller'],
        description: 'The contract should contain explicit instructions for the storage or processing of data by the processor. The contract should set out the subject matter and duration of the processing, the nature and purpose of the processing, the type of personal data and categories of data subjects and the obligations and rights of the controller. For example, this could include a contract with your hosting provider. The same contract requirements apply when a processor engages a sub-processor to assist it in fulfilling processing activities on behalf of the controller',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/processor/",
            title: 'GDPR Article 28 – Processor'
          },
          {href: "https://advisera.com/eugdpracademy/gdpr/processing-under-the-authority-of-the-controller-or-processor/",
           title: 'GDPR Article 29 – Processing under the authority of the controller or processor'
          },
          {
            href: "https://www.gdprtracker.io",
            title: "GDPR Tracker - Track hosting centers, DPAs & infrastructure partners from cloud services & subprocessors"
          }
        ]
      }
    ]
  },
  {
    id: 'new-rights',
    title:'New rights',
    items: [,
      {
        id: 1,
        title: 'Your customers can easily request access to their personal information',
        role: ['processor', 'controller'],
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
             href: 'https://www.gdprform.io'
            },
            {href: "https://advisera.com/eugdpracademy/gdpr/right-of-access-by-the-data-subject/",
              title: 'GDPR Article 15 – Right of access by the data subject'
            }
        ]
      },
      {
        id: 2,
        title: 'Your customers can easily update their own personal information to keep it accurate',
        role: ['processor', 'controller'],
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
             href: 'https://www.gdprform.io'
            },
            {href: "https://advisera.com/eugdpracademy/gdpr/right-to-rectification/",
              title: 'GDPR Article 16 – Right to rectification'
            }
        ]
      },
      {
        id: 3,
        title: 'You automatically delete data that your business no longer has any use for',
        role: ['processor', 'controller'],
        description: 'You should automate deletion of data you no longer need. For example, you should automatically delete data for customers whose contracts have not been renewed.',
        links: [
            {href: "https://advisera.com/eugdpracademy/gdpr/principles-relating-to-processing-of-personal-data/",
              title: 'GDPR Article 5 – Principles relating to processing of personal data'
            }
        ]
      },
      {
        id: 4,
        title: 'Your customers can easily request deletion of their personal data',
        role: ['processor', 'controller'],
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
             href: 'https://www.gdprform.io'
            },
            {href: "https://advisera.com/eugdpracademy/gdpr/right-to-erasure-right-to-be-forgotten/",
              title: 'GDPR Article 17 – Right to erasure (‘right to be forgotten’)'
            }
        ]
      },
      {
        id: 5,
        title: 'Your customers can easily request that you stop processing their data',
        role: ['processor', 'controller'],
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
             href: 'https://www.gdprform.io'
            },
            {href: "https://advisera.com/eugdpracademy/gdpr/right-to-restriction-of-processing/",
              title: 'GDPR Article 18 – Right to restriction of processing'
            }
        ]
      },
      {
        id: 6,
        title: 'Your customers can easily request that their data be delivered to themselves or a 3rd party',
        role: ['processor', 'controller'],
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
             href: 'https://www.gdprform.io'
            },
            {href: "https://advisera.com/eugdpracademy/gdpr/right-to-data-portability/",
              title: 'GDPR Article 20 – Right to data portability'
            }
        ]
      },
      {
        id: 7,
        title: 'Your customers can easily object to profiling or automated decision making that could impact them',
        role: ['controller'],
        description: 'This is only applicable if your company does profiling or any other automated decision making. If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
             href: 'https://www.gdprform.io'
            },
            {href: "https://advisera.com/eugdpracademy/gdpr/automated-individual-decision-making-including-profiling/",
              title: 'Article 22 – Automated individual decision-making, including profiling'
            }
        ]
      }
    ]
  },
  {
    id: 'consent',
    title:'Consent',
    items: [{
        id: 1,
        title: 'Where processing is based on consent, such consent must be freely given, specific, informed, and revocable',
        role: [ 'controller'],
        description: 'If your website collects personal information in some way, you should have an easily visble link to your privacy policy and confirm that the user accepts your terms and conditions. Consent requires an affirmative action, so pre-ticked boxes are not permitted.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/conditions-for-consent/",
           title: 'GDPR Article 7 – Conditions for consent'
          }
        ]
      },
      {
        id: 2,
        title: 'Your privacy policy should be written in clear and understandable terms ',
        role: [ 'controller'],
        description: 'It should be written in clear and simple terms and not conceal it\'s intent in any way. Failing to do so could void the agreement entirely. When providing services to children, the privacy policy should be easy enough for them to understand.',
        links: [
          { title: "Watchdog service for terms of service: Terms of Service; Didn't Read",
           href: 'https://tosdr.org/'
          },
          {href: "https://advisera.com/eugdpracademy/gdpr/conditions-for-consent/",
           title: 'GDPR Article 7.2 – Conditions for consent'
          }
        ]
      },
      {
        id: 3,
        title: 'It should be as easy for your customers to withdraw consent as it was to give it in the first place',
        role: [ 'controller'],
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
             href: 'https://www.gdprform.io'
            },
            {href: "https://advisera.com/eugdpracademy/gdpr/conditions-for-consent/",
              title: 'GDPR Article 7.3 – Conditions for consent'
            }
        ]
      },
      {
        id: 4,
        title: 'If you process children\'s personal data, verify their age and ask consent from their legal guardian',
        role: [ 'controller'],
        description: 'For children younger than 16, you need to make sure a legal guardian has given consent for data processing. If consent is given via your website, you should try to make sure approval was actually given by the legal guardian (and not by the child).',
        links: [
            {href: "https://advisera.com/eugdpracademy/gdpr/conditions-applicable-to-childs-consent-in-relation-to-information-society-services/",
              title: 'GDPR Article 8 – Conditions applicable to child’s consent in relation to information society services'
            }
        ]
      },
      {
        id: 5,
        title: 'When you update your privacy policy, you inform existing customers',
        role: [ 'controller'],
        description: 'for example, by emailing upcoming changes of your privacy policy. Your communication should explain in a simple way what has changed.',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/conditions-for-consent/",
            title: 'GDPR Article 7 – Conditions for consent'
          }
        ]
      }
    ]
  },
  {
    id: 'follow-up',
    title:'Follow-up',
    items: [{
        id: 1,
        title: 'You regularly review policies for changes, effectiveness, changes in handling of data and changes to the state of affairs of other countries your data flows to.',
        role: [ 'controller'],
        description: 'You should follow up on best practies and changes to the policies in your local environment. Sign up at the bottom of this page to receive major updates to this list.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/data-protection-by-design-and-by-default/",
           title: 'GDPR Article 25 – Data protection by design and by default'
          },
          {
            href: "https://www.gdprtracker.io",
            title: "GDPR Tracker - Track hosting centers, DPAs & infrastructure partners from cloud services & subprocessors"
          }
        ]
      }
    ]
  },
  {
    id: 'special-cases',
    title:'Special cases',
    items: [{
        id: 1,
        title: 'Your business understands when you must conduct a DPIA for high-risk processing of sensitive data.',
        role: [ 'controller'],
        description: 'This is only applies to businesses carrying out large-scale data processing, profiling and other activities with high risk to the rights and freedoms of people. A special assessment should be carried out in these cases.',
        links: [
          {href: 'https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/avg-nieuwe-europese-privacywetgeving/data-protection-impact-assessment-dpia',
           title: 'DPIA according to the Dutch local authority (Dutch)'
          },
          {href: "https://advisera.com/eugdpracademy/gdpr/data-protection-impact-assessment/",
           title: 'GDPR Article 35 – Data protection impact assessment'
          }

        ]
      },
      {
        id: 2,
        title: 'You should only transfer data outside of the EU to countries that offer an appropriate level of protection',
        role: ['processor', 'controller'],
        description: 'You should also disclose these cross-border data flows in your privacy policy.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/transfers-on-the-basis-of-an-adequacy-decision/",
           title: 'GDPR Article 45 – Transfers on the basis of an adequacy decision'
          },
          {
            href: "https://www.gdprtracker.io",
            title: "GDPR Tracker - Track hosting center locations & hosting partners from cloud services & subprocessors"
          }
        ]
      }
    ]
  }
]

export const roles = {
  'controller': 'Data Controller',
  'processor': 'Data Processor',
}
