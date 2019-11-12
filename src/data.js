export const steps = [
  {
    id: 'your-data',
    title:'Your data',
    items: [,
      {
        id: 1,
        title: 'Your company has a list of all types of personal information it holds, the source of that information, who you share it with, what you do with it and how long you will keep it',
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
    title:'Prestação de contas & gerenciamento',
    items: [{
        id: 1,
        title: 'Sua empresa elegeu um Data Protection Officer (DPO).',
        role: ['processor', 'controller'],
        description: 'Um DPO é necessário apenas em três cenários: (1) o processamento é realizado por uma autoridade ou órgão público, exceto para os tribunais que atuam em sua capacidade judicial; (2) as atividades principais do negócio consistem em operações de processamento que, em virtude de sua natureza, escopo e/ou propósitos, requerem monitoramento regular e sistemático dos titulares de dados em larga escala; ou (3) as atividades principais do negócio consistem no processamento em larga escala de categorias especiais de dados (dados sensíveis) nos termos do artigo 9. o e dados pessoais relacionados a condenações ou ofensas criminais nos termos do artigo 10. Se um DPO for necessário, o DPO também deve ter conhecimento das diretrizes da LGPD, assim como conhecimento sobre os processos internos que envolvem informações pessoais.',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/designation-of-the-data-protection-officer/",
            title: 'GDPR Article 37 – Designation of the data protection officer'
          }
        ]
      },
      {
        id: 2,
        title: 'Sua empresa conscientiza os tomadores de decisão sobre as diretrizes da LGPD.',
        role: ['processor', 'controller'],
        description: 'Certifique que as pessoas-chave e os tomadores de decisão têm conhecimento atualizado sobre a LGPD.',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/data-protection-by-design-and-by-default/",
            title: 'GDPR Article 25 – Data protection by design and by default'
          }
        ]
      },
      {
        id: 3,
        title: 'Sua empresa garante que sua segurança técnica está atualizada.',
        role: ['processor', 'controller'],
        description: 'Para empresas de software SaaS, use a lista de verificação de segurança SaaS CTO como ponto de partida abaixo.',
        links: [
          {
            title: "SaaS CTO security checklist",
            href: 'https://cto-security-checklist.sqreen.io/'
          },
          {
            href: "https://advisera.com/eugdpracademy/gdpr/data-protection-by-design-and-by-default/",
            title: 'GDPR Article 25 – Data protection by design and by default'
          }
        ]
      },
      {
        id: 4,
        title: 'Sua empresa treina a equipe para conhecer as boas práticas de proteção de dados.',
        role: ['processor'],
        description: 'Muitas vulnerabilidades de segurança envolvem a cooperação inconsciente de uma pessoa com acesso a sistemas internos. Certifique que seus funcionários estão cientes desses riscos.',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/data-protection-by-design-and-by-default/",
            title: 'GDPR Article 25 – Data protection by design and by default'
          }
        ]
      },
      {
        id: 5,
        title: 'Sua empresa têm uma lista de sub-processadores e sua política de privacidade menciona seu uso destes sub-processadores',
        role: ['processor'],
        description: 'Você deve informar seus clientes sobre o uso de qualquer subprocessador. Eles devem consentir ao aceitar sua política de privacidade.',
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
        title: 'Se sua empresa opera fora do Brasil, você nomeou um representante dentro do Brasil.',
        role: ['processor', 'controller'],
        description: 'Se você tem uma empresa fora do Brasil e coleta dados sobre cidadãos brasileiros, deve designar um representante no país para sua empresa. Essa pessoa deve lidar com todos os problemas relacionados ao processamento. Em particular, uma autoridade local deve poder entrar em contato com essa pessoa.',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/representatives-of-controllers-or-processors-not-established-in-the-union/",
            title: 'GDPR Article 27 – Representatives of controllers or processors not established in the Union'
          }
        ]
      },{
        id: 7,
        title: 'Você denuncia violações de dados envolvendo dados pessoais à autoridade local e às pessoas (titulares dos dados) envolvidas.',
        role: ['processor', 'controller'],
        description: 'As violações de dados pessoais devem ser relatadas dentro de 72 horas à autoridade local. Você deve relatar quais dados foram perdidos, quais são as conseqüências e que contramedidas você tomou. A menos que os dados vazados tenham sido criptografados, você também deve denunciar a violação à pessoa (titular dos dados) cujos dados foram perdidos.',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/notification-of-a-personal-data-breach-to-the-supervisory-authority/",
            title: 'GDPR Article 33 – Notification of a personal data breach to the supervisory authority'
          },
          {
            href: "https://advisera.com/eugdpracademy/gdpr/communication-of-a-personal-data-breach-to-the-data-subject/",
            title: 'GDPR Article 34 – Communication of a personal data breach to the data subject'
          }
        ]
      },{
        id: 8,
        title: 'Existe um contrato com todos os processadores de dados com os quais você compartilha dados.',
        role: [ 'controller'],
        description: 'O contrato deve conter instruções explícitas para o armazenamento ou processamento de dados pelo processador. O contrato deve definir o objeto e a duração do processamento, a natureza e a finalidade do processamento, o tipo de dados pessoais e categorias de titulares de dados e as obrigações e direitos do controlador. Por exemplo, isso pode incluir um contrato com seu provedor de hospedagem. Os mesmos requisitos de contrato se aplicam quando um processador contrata um subprocessador para ajudá-lo a realizar atividades de processamento em nome do controlador.',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/processor/",
            title: 'GDPR Article 28 – Processor'
          },
          {
            href: "https://advisera.com/eugdpracademy/gdpr/processing-under-the-authority-of-the-controller-or-processor/",
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
