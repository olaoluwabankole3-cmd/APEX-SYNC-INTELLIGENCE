export type NoteCategory = 'Thinking' | 'Engineering' | 'Product';

export type FieldNote = {
  slug: string;
  no: string;
  category: NoteCategory;
  title: string;
  deck: string;
  reading: string;
  lead: string;
  paragraphs: string[];
  pullquote: string;
};

export const notes: FieldNote[] = [
  {
    slug: 'the-future-is-a-construction-project',
    no: '01',
    category: 'Thinking',
    title: 'The future is a construction project.',
    deck: 'A point of view on what it means to make progress instead of simply predicting it.',
    reading: '4 MIN READ',
    lead: 'Innovation becomes meaningful when an idea leaves the room and changes how something works.',
    paragraphs: [
      'There is a difference between predicting change and producing it. One can be persuasive from a distance. The other demands research, engineering, uncomfortable questions and the willingness to revisit an assumption that felt right yesterday.',
      'New technology is often described through the vocabulary of inevitability. Something is always about to transform everything. That language makes the future sound like a place we will arrive at, rather than something shaped by decisions being made now.',
      'We see it differently. A better system does not appear because someone imagined it. It takes form when somebody understands a real constraint, challenges it and builds an alternative that holds up in practice.',
      'This is the thinking behind QORVEX. Quest is the willingness to keep asking. Vision is the ability to recognize a possibility. Execution is the discipline of making it real. Impact is how we decide whether the work mattered.',
      'The future cannot be reduced to a presentation about the future. At some point, someone has to build.'
    ],
    pullquote: 'A compelling possibility is a starting point. Useful technology is the proof.'
  },
  {
    slug: 'information-is-not-understanding',
    no: '02',
    category: 'Product',
    title: 'More information is not more understanding.',
    deck: 'Why connected context matters more than another isolated dashboard.',
    reading: '5 MIN READ',
    lead: 'An institution can know an extraordinary amount and still struggle to see the whole picture.',
    paragraphs: [
      'Important institutions depend on many systems because different functions have different needs. Financial records, operational events, customer interactions, documents and risk processes often sit in environments built for their own specific jobs.',
      'The information can be accurate within each system while the connections between them remain difficult to see. A report explains one part of an institution. Another report explains another. The whole story may remain fragmented.',
      'The thesis behind CORTEX begins here: understanding requires context. Relationships between entities, decisions, events and historical patterns often matter as much as the individual records themselves.',
      'CORTEX is being designed as an intelligence layer across existing infrastructure, not a replacement for a bank’s core systems or a shortcut around institutional governance. Its intended role is to connect, interpret and help authorized people identify what warrants attention.',
      'The most useful intelligence system should be able to show what supports an observation, where its information came from and where uncertainty remains. Human judgment and approval should stay central to consequential decisions.',
      'We believe better intelligence starts with a better picture of how the institution fits together.'
    ],
    pullquote: 'A clearer decision begins with a clearer understanding of the system.'
  },
  {
    slug: 'craft-is-a-technical-decision',
    no: '03',
    category: 'Engineering',
    title: 'Craft is a technical decision.',
    deck: 'On restraint, reliability and the details that make technology feel considered.',
    reading: '4 MIN READ',
    lead: 'The strongest technology experiences are rarely the loudest ones.',
    paragraphs: [
      'Craft is sometimes mistaken for a final visual treatment: the polish applied after the difficult engineering is complete. In practice, craft is visible in the decisions made much earlier.',
      'It appears in the way a system explains itself. In whether an interaction behaves predictably. In the handling of a slow network, an uncertain result, a keyboard instead of a mouse or a small mobile screen.',
      'A beautifully animated interface that obscures an important decision is not well crafted. A feature that works in a prototype but cannot be trusted with real data is not finished. Excellence requires visual restraint and engineering responsibility to reinforce one another.',
      'For QORVEX, precision is not synonymous with complication. Good systems can be ambitious behind the scenes while remaining calm and understandable to the person using them.',
      'That thinking informs our approach to performance, accessibility, auditability and design. Each is a part of making technology reliable enough to be useful.',
      'The details are not beneath the idea. The details are how the idea becomes real.'
    ],
    pullquote: 'Craft is what remains when the spectacle is gone.'
  },
];

export const pillars = [
  { id:'01', name:'Quest', verb:'Question', headline:'Find the problem worth solving.', text:'We begin with curiosity, rigorous observation and a willingness to challenge the assumptions that keep a limitation in place.', detail:'Observe the system / Challenge assumptions / Frame the problem' },
  { id:'02', name:'Vision', verb:'Imagine', headline:'See what could exist instead.', text:'We develop a view of the possibilities, connect disciplines and look for an answer that could create meaningful change.', detail:'Build understanding / Explore alternatives / Define the direction' },
  { id:'03', name:'Execution', verb:'Engineer', headline:'Give the idea a working form.', text:'We design, implement, test and refine. An idea only becomes valuable when the technology underneath it actually works.', detail:'Design systems / Validate with evidence / Iterate deliberately' },
  { id:'04', name:'Impact', verb:'Improve', headline:'Prove that the work matters.', text:'We assess how a solution changes the experience, process or institution it was built to improve—and learn from what follows.', detail:'Observe outcomes / Measure value / Keep learning' },
];

export const cortexCapabilities = [
  { number:'01', title:'Connected intelligence', description:'See relationships between information sources instead of interpreting each one in isolation.' },
  { number:'02', title:'Contextual intelligence', description:'Interpret findings in the setting of the institution’s operations, relationships and history.' },
  { number:'03', title:'Proactive intelligence', description:'Look for developing risks and overlooked opportunities before they become obvious.' },
  { number:'04', title:'Decision intelligence', description:'Explain why a finding matters and help authorized people decide what deserves attention.' },
];

export const cortexLayers = [
  { name:'Data foundation', short:'CONNECT', title:'A connected institutional view.', body:'The envisioned foundation integrates relevant information from financial, operational and enterprise systems while preserving permissions, provenance and institutional context.', outputs:['System integration','Entity relationships','Institutional memory'] },
  { name:'Intelligence core', short:'UNDERSTAND', title:'Context, not just calculation.', body:'The planned intelligence core explores patterns, risks, opportunities and relationships. Findings should be explainable and grounded in the information available to authorized users.', outputs:['Risk intelligence','Opportunity intelligence','Contextual analysis'] },
  { name:'Experience layer', short:'SUPPORT', title:'Intelligence people can use.', body:'The intended experience presents evidence-grounded findings and supports accountable workflows, with human authorization for consequential institutional actions.', outputs:['Decision support','Approved workflows','Outcome measurement'] }
];
