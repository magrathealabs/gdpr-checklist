export const steps = [
  {
    id: 'your-data',
    title: 'Seus dados',
    items: [
      {
        id: 1,
        title: 'Sua empresa possui um levantamento de todos os tipos de informações pessoal exigidas, a origem desses dados, com quem isso é compartilhado, o que é feito com isso e por quanto tempo é armazenado.',
        role: ['processor', 'controller'],
        description: 'É um registro com os tipos de dados armazenados (ex: Nome, CPF e endereço). Além disso, esse levantamento deve documentar, no mínimo, a origem dos dados, local de armazenamento, sua finalidade, eventuais compartilhamentos, duração do tratamento e a base legal.',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap6-art-38/',
            // TODO: aguardando atualização do site
            title: 'LGPD Artigo 38'
          }
        ]
      },
      {
        id: 2,
        title: 'Sua empresa documentou a relação de quais sistemas armazenam dados pessoais e como os dados circulam entre eles.',
        role: ['processor', 'controller'],
        description: 'Pode ser uma lista sistemas utilizados, softwares, serviços em nuvem e bancos de dados locais (ex: PostgreSQL), mas também pode incluir arquivos físicos (papel).',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap6-art-38/',
            // TODO: aguardando atualização do site
            title: 'LGPD Artigo 38'
          }
        ]
      },
      {
        id: 3,
        title: 'Sua empresa possui uma política de privacidade acessível ao público que descreve todos os processos relacionados aos dados pessoais.',
        role: ['processor', 'controller'],
        description: 'Você deve incluir informações sobre como, quando e onde você manuseia informações pessoais.',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap6-art-38/',
            // TODO: aguardando atualização do site
            title: 'LGPD Artigo 38'
          }
        ]
      },
      {
        id: 4,
        title: 'Sua política de privacidade deve informar as bases legais que justificam porque a empresa precisa processar informações pessoais.',
        role: ['controller'],
        description: 'Deve conter as razões para o processamento de dados (ex: o cumprimento de um contrato).',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap1-art-6/',
            title: 'LGPD Artigo 6 - Atividades de Tratamentos de Dados'
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
        title: 'Sua empresa elegeu um Encarregado pelo Tratamento de Dados Pessoais / Chefe de Privacidade / DPO.',
        role: ['processor', 'controller'],
        description: 'A LGPD determina que toda empresa que seja controladora de dados nomeie um Encarregado pelo Tratamento de Dados Pessoas',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap6-art-41/',
            // TODO: aguardando atualização do site
            title: 'LGPD Artigo 41'
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
            href: 'https://lgpd.magrathealabs.com/cap7-art-50/',
            // TODO: aguardando atualização do site
            title: 'LGPD Artigo 50'
          }
        ]
      },
      {
        id: 3,
        title: 'Sua empresa garante que sua segurança técnica está atualizada.',
        role: ['processor', 'controller'],
        description: 'A empresa possui controles técnicos e administrativos de prevenção, monitoramento e resposta à ameaças e possíveis incidentes.',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap7-art-46/',
            // TODO: aguardando atualização do site
            title: 'LGPD Artigo 46'
          }
        ]
      },
      {
        id: 4,
        title: 'Sua empresa treina a equipe para conhecer as boas práticas de proteção de dados.',
        role: ['processor'],
        description: 'Muitas vulnerabilidades de segurança envolvem a ação, muitas vezes inconsciente, de uma pessoa com acesso a sistemas internos que levam a vazamentos acidentais ou intencionais. Certifique que seus funcionários estão cientes desses riscos.',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap7-art-50/',
            // TODO: aguardando atualização do site
            title: 'LGPD Artigo 50'
          }
        ]
      },
      {
        id: 5,
        title: 'Sua empresa têm uma lista de operadores e/ou sub-operadores e exige que os mesmos observem sua política de privacidade.',
        role: ['processor'],
        description: 'Você deve informar previamente seus clientes sobre o uso de qualquer operador e/ou sub-operador, os quais devem seguir os controles de segurança da sua empresa.',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap6-art-39/',
            // TODO: aguardando atualização do site
            title: 'LGPD Artigo 39'
          }
        ]
      },
      {
        id: 6,
        title: 'Se sua empresa tem sede fora do Brasil, você nomeou um representante dentro do Brasil.',
        role: ['processor', 'controller'],
        description: 'Se você tem uma empresa fora do Brasil e coleta dados sobre cidadãos brasileiros, deve designar um representante no país para sua empresa. Essa pessoa deve lidar com todos os problemas relacionados ao processamento. Em particular, uma autoridade local deve poder entrar em contato com essa pessoa.',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap5-art-35/',
            // TODO: aguardando atualização do site
            title: 'LGPD Artigo 35'
          }
        ]
      },
      {
        id: 7,
        title: 'Você tem um procedimento para notificar violações envolvendo dados pessoais à autoridade local e às pessoas (titulares dos dados) envolvidas.',
        role: ['processor', 'controller'],
        description: 'As violações de dados pessoais devem ser relatadas dentro de 72 horas à autoridade local. Você deve relatar quais dados foram perdidos, quais são as consequências e que contramedidas você tomou.',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap6-art-41/',
            // TODO: aguardando atualização do site
            title: 'LGPD Artigo 41'
          }
        ]
      },
      {
        id: 8,
        title: 'Existe um contrato com todos os operadores de dados com os quais você compartilha dados.',
        role: ['controller'],
        description: 'O contrato deve conter instruções explícitas para o armazenamento ou processamento de dados pelo operador. O contrato deve definir o objeto e a duração do processamento, a natureza e a finalidade do processamento, o tipo de dados pessoais e categorias de titulares de dados e as obrigações e direitos do controlador. Por exemplo, isso pode incluir um contrato com seu provedor de hospedagem. Os mesmos requisitos de contrato se aplicam quando um operador contrata um sub-operador para ajudá-lo a realizar atividades de processamento em nome do controlador. O contrato também deve tratar questões como: atendimento dos direitos dos titulares, procedimentos de notificação, comunicação de incidentes e violações de dados e responsabilização civil.',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap3-art-18/',
            title: 'LGPD Artigo 18 - Direitos do Titular'
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
        description: 'Instituir um canal de atendimento ou tornar público o contato do Encarregado pelo Tratamento de Dados Pessoais.',
        links: [
            {
              href: 'https://lgpd.magrathealabs.com/cap2-art-9/',
              title: 'LGPD Artigo 9 - Acesso Facilitado'
            },
            {
              href: 'https://lgpd.magrathealabs.com/cap3-art-18/',
              title: 'LGPD Artigo 18 - Direitos do Titular'
            }
        ]
      },
      {
        id: 2,
        title: 'Seus clientes podem atualizar facilmente suas próprias informações pessoais para mantê-las precisas.',
        role: ['processor', 'controller'],
        description: 'A empresa precisa atender o direito do titular à manter seus dados atualizados e precisos (direito de edição e princípio da qualidade de dados).',
        links: [
            {
              href: 'https://lgpd.magrathealabs.com/cap3-art-18/',
              title: 'LGPD Artigo 18 - Direitos do Titular'
            }
        ]
      },
      {
        id: 3,
        title: 'Você possui regras definidas para eliminar os dados que sua empresa não utiliza mais.',
        role: ['processor', 'controller'],
        description: 'A empresa deve possuir um ciclo de vida dos dados bem definido para que possa promover a eliminação assim que a finalidade do tratamento deixar de existir.',
        links: [
            {
              href: 'https://lgpd.magrathealabs.com/cap2-art-16/',
              title: 'LGPD Artigo 16 - Duração dos Dados Pessoais'
            }
        ]
      },
      {
        id: 4,
        title: 'Seus clientes podem facilmente solicitar a exclusão de seus dados pessoais.',
        role: ['processor', 'controller'],
        description: 'A empresa precisa atender solicitações de eliminação de dados, mas deve também observar eventuais obrigações legais de armazenamento ou interesses próprios na manutenção dos dados.',
        links: [
            {
              href: 'https://lgpd.magrathealabs.com/cap3-art-18/',
              title: 'LGPD Artigo 18 - Direitos do Titular'
            }
        ]
      },
      {
        id: 5,
        title: 'Seus clientes podem facilmente solicitar que você pare de processar os dados deles.',
        role: ['processor', 'controller'],
        description: 'A empresa precisa estar preparada para atender o direito de oposição ao tratamento dos dados pessoais.',
        links: [
            {
              href: 'https://lgpd.magrathealabs.com/cap3-art-18/',
              title: 'LGPD Artigo 18 - Direitos do Titular'
            }
        ]
      },
      {
        id: 6,
        title: 'Seus clientes podem facilmente solicitar que seus dados sejam entregues a eles mesmos ou a terceiros.',
        role: ['processor', 'controller'],
        description: 'O titular tem direito de acesso aos dados pessoais que são tratados, bem como à portabilidade desses dados, em formato legível por máquina (ex: Excel, JSON), para terceiros.',
        links: [
            {
              href: 'https://lgpd.magrathealabs.com/cap3-art-18/',
              title: 'LGPD Artigo 18 - Direitos do Titular'
            }
        ]
      },
      {
        id: 7,
        title: 'Seus clientes podem se opor facilmente à criação de perfil ou à tomada de decisão automatizada que poderia impactá-los.',
        role: ['controller'],
        description: 'Isso somente é aplicável se a sua empresa traçar perfis ou qualquer outra tomada de decisão automatizada.',
        links: [
            {
              href: 'https://lgpd.magrathealabs.com/cap3-art-20/',
              title: 'LGPD Artigo 20 - Revisão de Decisões Tomadas'
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
        title: 'Quando o processamento é baseado no consentimento, esse consentimento deve ser fornecido de forma livre, previamente esclarecida e revogável.',
        role: ['controller'],
        description: 'Se sua empresa promover tratamento com base no consentimento de usuários, esse consentimento deve ser obtido antes da coleta. O consentimento requer uma ação afirmativa, portanto, caixas pré-marcadas não são permitidas.',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap2-art-7/',
            title: 'LGPD Artigo 7 - Condições para o Tratamento de Dados'
          }
        ]
      },
      {
        id: 2,
        title: 'Sua política de privacidade (Aviso de Privacidade) deve ser escrita em termos claros e compreensíveis',
        role: ['controller'],
        description: 'Seu aviso de privacidade deve ser escrito em termos claros e simples e não deve ocultar sua intenção de forma alguma. Não fazer isso pode anular completamente o tratamento com base no consentimento ou negligenciar os princípios de proteção de dados. Para tratamento de dados de crianças e menores de 18 anos é preciso buscar uma comunicação ajustada ao público.',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap2-art-7/',
            title: 'LGPD Artigo 7 - Condições para o Tratamento de Dados'
          }
        ]
      },
      {
        id: 3,
        title: 'A empresa permite que a revogação (retirada) do consentimento seja tão fácil quanto o fornecimento.',
        role: ['controller'],
        description: 'O titular de dados consegue retirar o consentimento sem maiores dificuldades, preferencialmente pelo mesmo canal em que forneceu o consentimento.',
        links: [
            {
              href: 'https://lgpd.magrathealabs.com/cap2-art-8/',
              title: 'LGPD Artigo 8 - Manifestação de Vontade do Titular'
            }
        ]
      },
      {
        id: 4,
        title: 'Você pede o consentimento de pais ou responsáveis legais quando trata dados pessoais de crianças.',
        role: ['controller'],
        description: 'O consentimento dos pais é necessário para menores de 12 anos, definidos como criança pelo Estatuto da Criança e do Adolescente.',
        links: [
            {
              href: 'https://lgpd.magrathealabs.com/cap2-art-14/',
              title: 'LGPD Artigo 14 - Crianças e Adolescentes'
            }
        ]
      },
      {
        id: 5,
        title: 'Você comunica seus usuários e clientes a cada atualização da política de privacidade.',
        role: ['controller'],
        description: 'Em atendimento aos princípios da proteção de dados a empresa deve comunicar amplamente seus usuários, clientes e atingidos pelo tratamento quando de qualquer alteração em sua política de privacidade.',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap2-art-8/',
            title: 'LGPD Artigo 8 - Manifestação de Vontade do Titular'
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
        title: 'Você mantém suas políticas e procedimentos constantemente atualizadas para refletir atualizações legais, inovações tecnológicas e melhores práticas de mercado.',
        role: ['controller'],
        description: 'É preciso acompanhar a edição de novas leis, regulamentos e orientações das autoridades dos diversos países e regiões onde a empresa exerce atividades. Também é necessário buscar seguir as mais modernas práticas de segurança e governança de dados.',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap7-art-50/',
            // TODO: aguardando atualização do site
            title: 'LGPD Artigo 50'
          }
        ]
      }
    ]
  },
  {
    id: 'special-cases',
    title: 'Disposições',
    items: [
      {
        id: 1,
        title: 'Sua empresa está preparada para atender solicitação de relatório de impacto à proteção de dados por parte da Autoridade Nacional de Proteção de Dados ou outros órgãos fiscalizadores?',
        role: ['controller'],
        description: 'O relatorio de impacto à proteção de dados (RIPD) é obrigatório para demonstrar avaliação de compreensão de riscos e adoção de medidas de mitigação, sempre que um tratamento de dados envolver dados sensíveis ou for exclusivamente baseado em legítimos interesses.',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap6-art-38/',
            // TODO: aguardando atualização do site
            title: 'LGPD Artigo 38'
          }
        ]
      },
      {
        id: 2,
        title: 'Sua empresa não transfere dados para fora do país ou transfere apenas para países com nível de proteção de dados equivalente ou superior ao brasileiro.',
        role: ['processor', 'controller'],
        description: 'A informação sobre a eventual transferência internacional de dados deve constar de seus avisos de privacidade e ser declarada em instrumentos contratuais.',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap5-art-33/',
            // TODO: aguardando atualização do site
            title: 'LGPD Artigo 33'
          }
        ]
      },
      {
        id: 3,
        title: 'Sua empresa exige conformidade e observância de proteção de dados de seus operadores (processadores) e suboperadores (subprocessadores)',
        role: ['processor', 'controller'],
        description: 'A empresa deve formalizar instrumento contratual para regular toda atividade que envolve compartilhamento ou processamento de dados com ou via terceiros, prestadores de serviços, clientes, parceiros etc., estabelecendo responsabilidades, atribuindo finalidades ao tratamento, estabelecendo nível de segurança, dever de confidencialidade e obrigações de notificação e cooperação em caso de incidentes.',
        links: [
          {
            href: 'https://lgpd.magrathealabs.com/cap5-art-33/',
            // TODO: aguardando atualização do site
            title: 'LGPD Artigo 33'
          }
        ]
      }
    ]
  }
]

export const roles = {
  'controller': 'Controlador',
  'processor': 'Operador',
}
