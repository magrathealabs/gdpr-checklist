export const steps = [
  {
    id: 'your-data',
    title: 'Seus dados',
    items: [
      {
        id: 1,
        title: 'Sua empresa possui uma lista de todos os tipos de informações pessoal exigidas, a origem desses dados, com quem isso é compartilhado, o que é feito com isso e por quanto tempo é armazenado.',
        role: ['processor', 'controller'],
        description: 'É uma lista com os tipos de dados armazenados (ex: Nome, CPF e endereço). Para cada tipo, uma origem deve ser documentada, assim como os terceiros com quem esses dados são compartilhados, seu propósito de armazenamento e a duração na qual a empresa irá mantê-los.',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/records-of-processing-activities/",
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
        title: 'Sua empresa mantém uma documentação de quais sistemas armazenam dados pessoais e como os dados circulam entre eles.',
        role: ['processor', 'controller'],
        description: 'Pode ser uma lista de bancos de dados (ex: PostgreSQL), mas também pode incluir arquivos físicos (papel).',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/records-of-processing-activities/",
            title: 'GDPR Article 30 – Records of processing activities'
          }
        ]
      },
      {
        id: 3,
        title: 'Sua empresa possui uma política de privacidade acessível ao público que descreve todos os processos relacionados aos dados pessoais.',
        role: ['processor', 'controller'],
        description: 'Você deve incluir informações sobre todos os processos relacionados ao manuseio de informações pessoais. Este documento deve incluir (ou ter links para) os tipos de informações pessoais que a empresa mantém e onde elas são mantidas.',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/records-of-processing-activities/",
            title: 'GDPR Article 30 – Records of processing activities'
          }
        ]
      },
      {
        id: 4,
        title: 'Sua política de privacidade deve incluir uma base legal para explicar porque a empresa precisa processar informações pessoais.',
        role: ['controller'],
        description: 'Deve conter uma razão para o processamento de dados (ex: o cumprimento de um contrato).',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/lawfulness-of-processing/",
            title: 'GDPR Article 6 – Lawfulness of processing'
          }
        ]
      }
    ]
  },
  {
    id: 'accountability-management',
    title: 'Prestação de contas & gerenciamento',
    items: [
      {
        id: 1,
        title: 'Sua empresa elegeu um Data Protection Officer (DPO).',
        role: ['processor', 'controller'],
        description: 'Um DPO é necessário apenas em três cenários: (1) o processamento é realizado por uma autoridade ou órgão público, exceto para os tribunais que atuam em sua capacidade judicial; (2) as atividades principais do negócio consistem em operações de processamento que, em virtude de sua natureza, escopo e/ou propósitos, requerem monitoramento regular e sistemático dos titulares de dados em larga escala; ou (3) as atividades principais do negócio consistem no processamento em larga escala de categorias especiais de dados (dados sensíveis) nos termos do artigo 9 e dados pessoais relacionados a condenações ou ofensas criminais nos termos do artigo 10. Se um DPO for necessário, o DPO também deve ter conhecimento das diretrizes da LGPD, assim como conhecimento sobre os processos internos que envolvem informações pessoais.',
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
        description: 'Você deve informar seus clientes sobre o uso de qualquer sub-processador. Eles devem consentir ao aceitar sua política de privacidade.',
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
        description: 'As violações de dados pessoais devem ser relatadas dentro de 72 horas à autoridade local. Você deve relatar quais dados foram perdidos, quais são as consequências e que contramedidas você tomou. A menos que os dados vazados tenham sido criptografados, você também deve denunciar a violação à pessoa (titular dos dados) cujos dados foram perdidos.',
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
        role: ['controller'],
        description: 'O contrato deve conter instruções explícitas para o armazenamento ou processamento de dados pelo processador. O contrato deve definir o objeto e a duração do processamento, a natureza e a finalidade do processamento, o tipo de dados pessoais e categorias de titulares de dados e as obrigações e direitos do controlador. Por exemplo, isso pode incluir um contrato com seu provedor de hospedagem. Os mesmos requisitos de contrato se aplicam quando um processador contrata um sub-processador para ajudá-lo a realizar atividades de processamento em nome do controlador.',
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
    title: 'Novos direitos',
    items: [
      {
        id: 1,
        title: 'Seus clientes podem solicitar acesso aos seus dados pessoais de forma simples.',
        role: ['processor', 'controller'],
        description: 'Se você ainda não possui um processo definido para isso, criamos um fácil formulário on-line abaixo.',
        links: [
            {
              title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
              href: 'https://www.gdprform.io'
            },
            {
              href: "https://advisera.com/eugdpracademy/gdpr/right-of-access-by-the-data-subject/",
              title: 'GDPR Article 15 – Right of access by the data subject'
            }
        ]
      },
      {
        id: 2,
        title: 'Seus clientes podem atualizar facilmente suas próprias informações pessoais para mantê-las precisas.',
        role: ['processor', 'controller'],
        description: 'Se você ainda não possui um processo definido para isso, criamos um fácil formulário on-line abaixo.',
        links: [
            {
              title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
              href: 'https://www.gdprform.io'
            },
            {
              href: "https://advisera.com/eugdpracademy/gdpr/right-to-rectification/",
              title: 'GDPR Article 16 – Right to rectification'
            }
        ]
      },
      {
        id: 3,
        title: 'Você exclui automaticamente os dados que sua empresa não utiliza mais.',
        role: ['processor', 'controller'],
        description: 'Você deve automatizar a exclusão de dados que não precisa mais. Por exemplo, você deve excluir automaticamente os dados de clientes cujos contratos não foram renovados.',
        links: [
            {
              href: "https://advisera.com/eugdpracademy/gdpr/principles-relating-to-processing-of-personal-data/",
              title: 'GDPR Article 5 – Principles relating to processing of personal data'
            }
        ]
      },
      {
        id: 4,
        title: 'Seus clientes podem facilmente solicitar a exclusão de seus dados pessoais.',
        role: ['processor', 'controller'],
        description: 'Se você ainda não possui um processo definido para isso, criamos um fácil formulário on-line abaixo.',
        links: [
            {
              title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
              href: 'https://www.gdprform.io'
            },
            {
              href: "https://advisera.com/eugdpracademy/gdpr/right-to-erasure-right-to-be-forgotten/",
              title: 'GDPR Article 17 – Right to erasure (‘right to be forgotten’)'
            }
        ]
      },
      {
        id: 5,
        title: 'Seus clientes podem facilmente solicitar que você pare de processar os dados deles.',
        role: ['processor', 'controller'],
        description: 'Se você ainda não possui um processo definido para isso, criamos um fácil formulário on-line abaixo.',
        links: [
            {
              title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
              href: 'https://www.gdprform.io'
            },
            {
              href: "https://advisera.com/eugdpracademy/gdpr/right-to-restriction-of-processing/",
              title: 'GDPR Article 18 – Right to restriction of processing'
            }
        ]
      },
      {
        id: 6,
        title: 'Seus clientes podem facilmente solicitar que seus dados sejam entregues a eles mesmos ou a terceiros.',
        role: ['processor', 'controller'],
        description: 'Se você ainda não possui um processo definido para isso, criamos um fácil formulário on-line abaixo.',
        links: [
            {
              title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
              href: 'https://www.gdprform.io'
            },
            {
              href: "https://advisera.com/eugdpracademy/gdpr/right-to-data-portability/",
              title: 'GDPR Article 20 – Right to data portability'
            }
        ]
      },
      {
        id: 7,
        title: 'Seus clientes podem se opor facilmente à criação de perfil ou à tomada de decisão automatizada que poderia impactá-los.',
        role: ['controller'],
        description: 'Isso somente é aplicável se a sua empresa traçar perfis ou qualquer outra tomada de decisão automatizada. Se você ainda não possui um processo definido para isso, criamos um fácil formulário on-line abaixo.',
        links: [
            {
              title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
              href: 'https://www.gdprform.io'
            },
            {
              href: "https://advisera.com/eugdpracademy/gdpr/automated-individual-decision-making-including-profiling/",
              title: 'Article 22 – Automated individual decision-making, including profiling'
            }
        ]
      }
    ]
  },
  {
    id: 'consent',
    title: 'Consentimento',
    items: [
      {
        id: 1,
        title: 'Quando o processamento é baseado no consentimento, esse consentimento deve ser dado de forma livre, específica, informada e revogável.',
        role: ['controller'],
        description: 'Se o seu site coletar informações pessoais de alguma forma, você deverá ter um link facilmente visível para sua política de privacidade e confirmar que o usuário aceita seus termos e condições. O consentimento requer uma ação afirmativa, portanto, caixas pré-marcadas não são permitidas.',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/conditions-for-consent/",
            title: 'GDPR Article 7 – Conditions for consent'
          }
        ]
      },
      {
        id: 2,
        title: 'Sua política de privacidade deve ser escrita em termos claros e compreensíveis.',
        role: ['controller'],
        description: 'Ela deve ser escrita em termos claros e simples e não deve ocultar sua intenção de forma alguma. Não fazer isso pode anular completamente o contrato. Ao prestar serviços a crianças, a política de privacidade deve ser fácil o suficiente para que elas entendam.',
        links: [
          {
            title: "Watchdog service for terms of service: Terms of Service; Didn't Read",
            href: 'https://tosdr.org/'
          },
          {
            href: "https://advisera.com/eugdpracademy/gdpr/conditions-for-consent/",
           title: 'GDPR Article 7.2 – Conditions for consent'
          }
        ]
      },
      {
        id: 3,
        title: 'Deve ser tão fácil para seus clientes retirar o consentimento quanto dar em primeiro lugar.',
        role: ['controller'],
        description: 'Se você ainda não possui um processo definido para isso, criamos um fácil formulário on-line abaixo.',
        links: [
            {
              title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
              href: 'https://www.gdprform.io'
            },
            {
              href: "https://advisera.com/eugdpracademy/gdpr/conditions-for-consent/",
              title: 'GDPR Article 7.3 – Conditions for consent'
            }
        ]
      },
      {
        id: 4,
        title: 'Se você processar os dados pessoais das crianças, verifique a idade delas e peça o consentimento do responsável legal.',
        role: ['controller'],
        description: 'Para crianças menores de 16 anos, é necessário garantir que um responsável legal tenha dado consentimento para o processamento de dados. Se o consentimento for dado através do seu site, você deve tentar garantir que a aprovação foi realmente dada pelo responsável legal (e não pela criança).',
        links: [
            {
              href: "https://advisera.com/eugdpracademy/gdpr/conditions-applicable-to-childs-consent-in-relation-to-information-society-services/",
              title: 'GDPR Article 8 – Conditions applicable to child’s consent in relation to information society services'
            }
        ]
      },
      {
        id: 5,
        title: 'Ao atualizar sua política de privacidade, você informa os clientes existentes.',
        role: ['controller'],
        description: 'Por exemplo, enviando por e-mail as alterações futuras da sua política de privacidade. Sua comunicação deve explicar de maneira simples o que mudou.',
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
    title: 'Acompanhamento',
    items: [
      {
        id: 1,
        title: 'Você analisa regularmente as políticas quanto a alterações, eficácia, alterações no manuseio de dados e alterações no estado de outros países para onde seus dados fluem.',
        role: ['controller'],
        description: 'Você deve acompanhar as melhores práticas e alterações nas políticas em seu ambiente local.',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/data-protection-by-design-and-by-default/",
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
    title: 'Casos especiais',
    items: [
      {
        id: 1,
        title: 'Sua empresa entende quando você deve realizar um DPIA para o processamento de alto risco de dados confidenciais.',
        role: ['controller'],
        description: 'Isso se aplica apenas a empresas que realizam processamento de dados em larga escala, criação de perfil e outras atividades com alto risco para os direitos e liberdades das pessoas. Uma avaliação especial deve ser realizada nesses casos.',
        links: [
          {
            href: 'https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/avg-nieuwe-europese-privacywetgeving/data-protection-impact-assessment-dpia',
           title: 'DPIA according to the Dutch local authority (Dutch)'
          },
          {
            href: "https://advisera.com/eugdpracademy/gdpr/data-protection-impact-assessment/",
           title: 'GDPR Article 35 – Data protection impact assessment'
          }

        ]
      },
      {
        id: 2,
        title: 'Você só deve transferir dados fora do Brasil para países que oferecem um nível de proteção adequado.',
        role: ['processor', 'controller'],
        description: 'Você também deve divulgar esses fluxos de dados internacionais em sua política de privacidade.',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/transfers-on-the-basis-of-an-adequacy-decision/",
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
  'controller': 'Controlador',
  'processor': 'Processador',
}
